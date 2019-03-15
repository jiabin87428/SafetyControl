<template>
	<view class="baseView">
<!-- 		<view class="cellTitleView">
			<text class="cellTitle">隐患信息</text>
		</view> -->
		<view class="cellInfoView">
			<uni-list-item title="发现人" :subnote="fqr" show-arrow="false"></uni-list-item>
			<uni-list-item title="责任部门" :subnote="zrbm" show-arrow="false"></uni-list-item>
			<uni-list>
				<uni-list-item title="隐患描述" :subnote="bhgys" show-arrow="true" @click="jumpInput(bhgys, 'bhgys', '请输入隐患描述')"></uni-list-item>
				<uni-list-item title="隐患级别" :subnote="yhdj" show-arrow="true" @click="selectedyhdj"></uni-list-item>
				<uni-list-item title="隐患分类" :subnote="yhhg" show-arrow="true" @click="selectedyhhg"></uni-list-item>
				<uni-list-item title="对应条款" :subnote="wfflfgjtk" show-arrow="true" @click="jumpInput(wfflfgjtk, 'wfflfgjtk', '请输入对应条款')"></uni-list-item>
				<uni-list-item title="整改建议" :subnote="gsyqjjy" show-arrow="true" @click="jumpInput(gsyqjjy, 'gsyqjjy', '请输入整改要求及建议')"></uni-list-item>
			</uni-list>
			<view class='imageBaseView'> 
				<view class='cellSubViewRow'> 
				  <text class='leftTextRow'>隐患照片</text>
				  <text class='rightTextRow'>{{imageList.length}}</text>
				</view>
				<view id='imageView' class='imageView'>
				  <block v-for="(imgObj,idx) in imageList" :key="idx">
					<view class="littleImageView" v-bind:style="{width:littleImageWidth + 'px', height:littleImageWidth + 'px'}">
					  <image class="littleImage" @click="viewPhoto" :id="idx" :src="imgObj.src" mode="aspectFit"></image>
					  <image class='littleImageDelete' src='../../static/img/delete.png' @click="deleteImage(imgObj,idx)" :id='idx' mode="aspectFit"></image>
					</view>
				  </block>
				  <view class="littleImageView" @click='addPhoto' v-bind:style="{width:littleImageWidth + 'px', height: littleImageWidth + 'px'}">
					<image class="littleImage" src="../../static/img/addImage.png"></image>
				  </view>
				</view>
			</view>
		</view>
		<view class="btnView">
		    <button class="saveBtn" @tap="saveClick">保存</button>
		</view>
	</view>
</template>

<script>
	import uniList from '@/components/list/uni-list/uni-list.vue'
	import uniIcon from '@/components/list/uni-icon/uni-icon.vue'
	import uniListItem from '@/components/list/uni-list-item/uni-list-item.vue'
	import config from '../../util/config.js';
	import request from '../../util/request.js';
	import service from '../../service.js';
	import {
	    mapState,
		mapMutations
	} from 'vuex'
	export default {
		computed: mapState(['sublistItem', 'sublistIndex', 'userInfo', 'inputPageText', 'key']),
		components: {uniList,uniListItem,uniIcon},
		data() {
		    return {
				// 当页面OnShow的时候是否需要从state里去拿输入的内容
				needGetInputOnShow: false,
		        item: '',		// subList中的对象
				itemIndex: 0,	// subList中的第几个数据，用于确定后替换原数据
				// 上传照片相关
				imageViewHeight: 100,
				imageList: [],
				littleImageWidth: 0,
				
				// 页面参数，接口需要的参数
				id: '',		// 隐患id
				yhdj: '',	// 隐患级别
				yhhg:	'',		// 隐患分类（隐患后果）
				bhgys: '',		// 隐患描述
				wfflfgjtk: '',	// 对应条款
				gsyqjjy: '',	// 整改建议
				zrbm:'',		//隐患责任部门
				fqr:'', //发起人
				fj: '',	// 附件
				// --------数据模板---------
				// 隐患级别
				yhdjData: ['一般隐患', '重大隐患'],
				// 隐患分类
				//yhhgData: ['自行输入分类','从分类库选择'],
				//隐患后果
				yhhgData: ['人员伤害','财产损失','其他'],
				//隐患责任部门
				zrbmData: ['从隐患库选择/检索','自行输入问题', '从部门库选择'],
			}
		},
		onLoad() {
			var that = this;
			that.littleImageWidth = (uni.getSystemInfoSync().windowWidth -50) / 4;
			that.fqr = that.userInfo.fullname;
			//根据用户id查询当前用户所在部门
			request.requestLoadingNew(config.getUserDeptName, {userid:that.userInfo.userid}, '正在加载', 
				function(res){
					//console.log(JSON.stringify(that.userInfo));
					that.zrbm = res.dept;
				},function(){
				},function() {
			});
		},
		onNavigationBarButtonTap() {
			
		},
		onShow() {
			if (this.needGetInputOnShow == true) {
				this.$data[this.key] = this.inputPageText;
				this.needGetInputOnShow = false;
				this.removeInputItem();
			}
		},
		methods:{
			...mapMutations(['removeInputItem','setSublistItem']),
			// 选择隐患级别
			selectedyhdj: function(e) {
				var that = this;
				uni.showActionSheet({
					itemList: that.yhdjData,
					success: function (res) {
						that.yhdj = that.yhdjData[res.tapIndex];
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			// 选择隐患分类
			selectedyhhg: function(e) {
				var that = this;
				uni.showActionSheet({
					itemList: that.yhhgData,
					success: function (res) {
						that.yhhg = that.yhhgData[res.tapIndex];
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			// 选择检查日期
			checkDateChange: function(e) {
				this.checkDate = e.target.value;
			},
			// 选择整改期限
			deadLineChange: function(e) {
				this.deadLine = e.target.value;
			},
			saveItem:function(e) {
				var that = this;
				// 上传照片，需要分两种情况，如是从后台加载的，不需要调用上传接口，如果是本地读取还未上传的，需要调上传接口
				let url = config.uploadImage + '?from=flowyh&yyid=' + that.id + '&fjlx=fj1&userid=' + that.userInfo.userid;
				var imgList = []
				for (var i=0 ; i<that.imageList.length; i++) {
					let item = that.imageList[i]
					if (item.type == 1 && !item.src.startsWith('http:')) {
						imgList.push(item.src);
					}
				}
				
				if(imgList.length == 0) {
					that.saveLocalItem();
					uni.navigateBack({
						delta: 1
					})
					return;
				}
				uni.showLoading({
					title: '正在上传图片'
				})
				request.uploadImage(url, imgList, 0, 0, 0, imgList.length, function (res) {
					let data = JSON.parse(res.data);
					let fj = data.fj;
					that.fj = fj;
					//console.log('Item:',JSON.stringify(that.item));
				}, function(result){
					uni.hideLoading();
					if (result == '200') {
						that.saveLocalItem();
						uni.showToast({
						  title: '上传成功',
						  complete: setTimeout(function () {
							uni.navigateBack({
								delta: 1
							})
						  }, 1500)
						})
					}
				});
			},
			
			// 缓存Item，给上一个页面获取
			saveLocalItem() {
				let obj = {
					item: this.item,
					index: this.itemIndex
				}
				this.setSublistItem(obj);
			},
			// 保存
			saveClick() {
				var that = this;
				let param = {
					refid: that.id,
					yhdj: that.yhdj,
					yhhg: that.yhhg,
					bhgys: that.bhgys,
					wfflfgjtk: that.wfflfgjtk,
					gsyqjjy: that.gsyqjjy,
					zrbm:that.zrbm,
					fqr:that.fqr,
					userid: that.userInfo.userid
				};
				request.requestLoadingNew(config.addYhzgToFlow, param, '正在加载', 
					function(res){
						uni.showToast({
							icon: 'none',
							title: '保存成功',
							duration: 1000,
						});
						console.log('' + JSON.stringify(res));
						that.id = res.id;
						console.log(that.id);
						that.saveItem();//保存图片
					},function(){
						uni.showToast({
							icon: 'none',
							title: '保存失败'
						});
					},function() {
						
				});
			},
			jumpInput(text, key, placeholder = '请输入描述') {
				this.needGetInputOnShow = true;
				uni.navigateTo({
					url: '../common/inputPage?text=' + text + '&key=' + key + '&placeholder=' + placeholder + '',
				})
			},
			// 上传照片功能-添加照片
			addPhoto() {
				var that = this;
				uni.chooseImage({
					count: 9, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function (res) {
						console.log(JSON.stringify(res.tempFilePaths));
						for (var i=0;i<res.tempFilePaths.length;i++) {
							var imgObj = {//	type：1为新增需要上传，2为加载的，不需要上传
								fileid: '',
								src: res.tempFilePaths[i],
								type: 1
							}
							that.imageList.push(imgObj);
						}
					}
				});
			},
			// 删除照片，需要分两种情况，如是从后台加载的，那需要调用删除接口，如果是直接本地读取还未上传的，不需要调删除接口
			deleteImage(imgObj, index) {
				var that = this;
				if (imgObj.src.startsWith('http:')) {// 网络图片
					let obj = {
						item: that.item,
						index: that.itemIndex
					}
					that.setSublistItem(obj);
					
					let param = {
						from: 'jc',
						yyid: that.item.id,
						fileid: imgObj.fileid,
						userid: that.userInfo.userid
					};
					request.requestLoading(config.deleteImage, param, '正在删除图片', 
						function(res){
							console.log('删除成功：' + JSON.stringify(res));
							that.item.fj = res.fj
							that.imageList.splice(index,1);
						},function(){
							uni.showToast({
								icon: 'none',
								title: '删除失败'
							});
						}, function(){
							
						}
					);
				}else {// 刚选择好，还未上传，非网络图片
					that.imageList.splice(index,1);
				}
			},
			// 浏览照片
			viewPhoto() {
				var that = this;
				var imgList = []
				for (var i=0 ; i<that.imageList.length; i++) {
					let item = that.imageList[i]
					imgList.push(item.src);
				}
				// 预览图片
				uni.previewImage({
					urls: imgList
				});
			},
		}
	}
</script>

<style>
	.baseView{  
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #FFFFFF;
	} 
	.cellTitleView {
		width: 100%;
		height: 60upx;
		background-color: #F3F3F3;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.cellTitle {
		/* width: 300upx; */
		margin-left: 20upx;
		color: #BBBBBB;
		font-size: 30upx;
	}
	.cellInfoView {
		width: 100%;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
	}
	.btnView {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
	}
	.saveBtn {
		display: flex;
		align-items: center;
		justify-content: center;
		border-width: 1;
		border-bottom-color: #F1F1F1;
		border-top-color: #F1F1F1;
		border-left-width: 0px;
		border-right-width: 0px;
		width: 100%;
		height: 90px;
		text-align: center;
		margin-top: 20px;
		margin-left: 20px;
		margin-bottom: 20px;
		margin-right: 20px;
	}
	.closeBtn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 90px;
		background-color: #2D68AA;
		color: #FFFFFF;
		text-align: center;
		margin-top: 20px;
		margin-left: 10px;
		margin-bottom: 20px;
		margin-right: 20px;
	}
	
	/*添加照片的css样式*/
	.imageBaseView {
	  display:flex;
	  flex-direction:column;
	  width: 100%;
	  background-color: white;
	  /* margin-bottom: 10px; */
	  border-bottom: 0.5rpx solid #E2E2E2;
	  align-items:center;/*垂直居中*/
	}
	.cellSubViewRow {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		/* justify-content: center; */
	}
	.leftTextRow {
		width: 100%;
		margin-left: 30upx;
		font-size: 28upx;
		color: #333333;
	}
	.rightTextRow {
		margin-top: 20upx;
		margin-bottom: 20upx;
		margin-right: 50upx;
		text-align: right;
		font-size: 28upx;
		text-overflow: ellipsis;
		white-space: normal;
		color: inherit;
		line-height: 1.5;
		overflow: hidden;
		color: #BBBBBB;
	}
	.imageView {
	  display:flex;
	  flex-direction:row;
	  width: 100%;
	  /* height: 100px; */
	  background-color: white;
	  align-items: flex-start;/*垂直居中*/
	  /* justify-content: space-between; */
	  flex-wrap: wrap;
	  margin-bottom: 10upx;
	}
	
	.littleImageView {
	  display:flex;
	  flex-direction:row;
	  margin: 20px 5px 5px 20px;
	}
	
	.littleImageDelete {
	  /* position: absolute; */
	  position: relative;
	  margin-left: -50upx;
	  margin-top: -15upx;
	  width: 60upx;
	  height: 60upx;
	}
	
	.littleImage {
	  width: 100%;
	  height: 100%; 
	}
</style>
