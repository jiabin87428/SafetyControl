<template>
	<view class="baseView">
		<view class="cellTitleView">
			<text class="cellTitle">基础信息</text>
		</view>
		<view class="cellInfoView">
			<uni-list-item title="动火证类型" :subnote="dhzlx" show-arrow="true" @click="selecteddhzlx"></uni-list-item>
			<uni-list-item title="作业单位" :subnote="zydw" show-arrow="true" @click="jumpInput(zydw, 'zydw', '请输入作业单位')"></uni-list-item>
			<uni-list-item title="动火负责人" :subnote="dhfzr" show-arrow="true" @click="jumpInput(dhfzr, 'dhfzr', '请输入动火负责人')"></uni-list-item>
			<uni-list-item title="动火方式" :subnote="dhfs" show-arrow="true" @click="jumpInput(dhfs, 'dhfs', '请输入动火方式')"></uni-list-item>
			<uni-list-item title="动火地点" :subnote="dhdd" show-arrow="true" @click="jumpInput(dhdd, 'dhdd', '请输入动火地点')"></uni-list-item>
			<uni-list-item title="施工项目" :subnote="sgxm" show-arrow="true" @click="jumpInput(sgxm, 'sgxm', '请输入施工项目')"></uni-list-item>
			<uni-list-item title="动火内容" :subnote="dhnr" show-arrow="true" @click="jumpInput(dhnr, 'dhnr', '请输入动火内容')"></uni-list-item>
			<uni-list-item title="组织监火人" :subnote="zzjhr" show-arrow="true" @click="jumpInput(zzjhr, 'zzjhr', '请输入组织监火人')"></uni-list-item>
			<uni-list-item title="组织监火人岗位" :subnote="zzjhrgw" show-arrow="true" @click="jumpInput(zzjhrgw, 'zzjhrgw', '请输入组织监火人岗位')"></uni-list-item>
			<uni-list-item title="地点监火人" :subnote="ddjhr" show-arrow="true" @click="jumpInput(ddjhr, 'ddjhr', '请输入地点监火人')"></uni-list-item>
			<uni-list-item title="地点监火人岗位" :subnote="ddjhrgw" show-arrow="true" @click="jumpInput(ddjhrgw, 'ddjhrgw', '请输入地点监火人岗位')"></uni-list-item>
			<uni-list-item title="危害辨识" :subnote="whbs" show-arrow="true" @click="jumpInput(whbs, 'whbs', '请输入危害辨识')"></uni-list-item>
			<uni-list-item title="安全措施" :subnote="aqcs" show-arrow="true" @click="jumpInput(aqcs, 'aqcs', '请输入安全措施')"></uni-list-item>
			<uni-list-item title="实施情况" :subnote="ssqk" show-arrow="true" @click="jumpInput(ssqk, 'ssqk', '请输入实施情况')"></uni-list-item>
			
			<uni-list-item title="是否进行风险分析" :subnote="sfjxfxfx" show-arrow="true" @click="selectedsfjxfxfx"></uni-list-item>
			<uni-list-item title="是否已实施" :subnote="sfyss" show-arrow="true" @click="selectedsfyss"></uni-list-item>
			<view class='imageBaseView'> 
				<view class='cellSubViewRow'> 
				  <text class='leftTextRow'>附件</text>
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
		<view class="cellTitleView">
			<text class="cellTitle">动火期限</text>
		</view>
		<view class="cellInfoView">
			<picker mode="date" :value="dhqx" @change="bindDateDhqx">
				<uni-list-item title="动火期限起" :subnote="dhqx" show-arrow="true"></uni-list-item>
			</picker>
			<picker mode="date" :value="dhqx2" @change="bindDateDhqx2">
				<uni-list-item title="动火期限起" :subnote="dhqx2" show-arrow="true"></uni-list-item>
			</picker>
		</view>
		<view class="cellTitleView">
			<text class="cellTitle">安全措施选择器</text>
		</view>
		<view class="cellInfoView">
			<uni-list-item title="安全措施选择器" show-arrow="false" @click="choiceICON"></uni-list-item>
		</view>
		<view class="btnView">
		    <button class="saveBtn" @tap="savePTW">保存</button>
		    <button class="saveBtn" @tap="savePTWFlow">发送工作流</button>
		    <button class="saveBtn" @tap="saveAndClose">保存并关闭</button>
		    <button class="saveBtn" @tap="closeBtn">关闭</button>
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
				// 上传照片相关
				imageViewHeight: 100,
				imageList: [],
				littleImageWidth: 0,
		        item: '',		// subList中的对象
				itemIndex: 0,	// subList中的第几个数据，用于确定后替换原数据
				// 页面参数，接口需要的参数
				id:'',//主键id
				dhzlx:'',//动火证类型
				zydw:'',//作业单位
				dhfzr:'',//动火负责人
				dhfs:'',//动火方式
				dhdd:'',//动火地点
				sgxm:'',//施工项目
				dhnr:'',//动火内容
				zzjhr:'',//组织监火人
				zzjhrgw:'',//组织监火人岗位
				ddjhr:'',//地点监火人
				ddjhrgw:'',//地点监火人岗位
				whbs:'',//危害辨识
				dhqx:'',//动火期限1
				dhqx2:'',//动火期限2
				sfjxfxfx:'',//是否进行风险分析
				sfyss:'',//是否已实施
				fj:'',//附件
				aqcs:'',//安全措施
				ssqk:'',//实施情况
				// --------数据模板---------
				// 动火证类型
				sfData: ['是', '否'],
				dhzlxData: ['特殊危险动火', '一级动火','二级动火'],
			}
		},
		onLoad() {
			this.littleImageWidth = (uni.getSystemInfoSync().windowWidth -50) / 4;
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
			// 选择动火证类型
			selecteddhzlx: function(e) {
				var that = this;
				uni.showActionSheet({
					itemList: that.dhzlxData,
					success: function (res) {
						that.dhzlx = that.dhzlxData[res.tapIndex];
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			selectedsfjxfxfx: function(e) {
				var that = this;
				uni.showActionSheet({
					itemList: that.sfData,
					success: function (res) {
						that.sfjxfxfx = that.sfData[res.tapIndex];
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			selectedsfyss: function(e) {
				var that = this;
				uni.showActionSheet({
					itemList: that.sfData,
					success: function (res) {
						that.sfyss = that.sfData[res.tapIndex];
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			}, 
			// 选择动火期限起
			bindDateDhqx: function(e) {
				this.dhqx = e.target.value;
			},
			// 选择动火期限止
			bindDateDhqx2: function(e) {
				this.dhqx2 = e.target.value;
			},
			saveItem:function(e) {
				var that = this;
				// 上传照片，需要分两种情况，如是从后台加载的，不需要调用上传接口，如果是本地读取还未上传的，需要调上传接口
				let url = config.uploadImage + '?from=ptw&yyid=' + that.id + '&userid=' + that.userInfo.userid;
				var imgList = []
				for (var i=0 ; i<that.imageList.length; i++) {
					let item = that.imageList[i]
					if (item.type == 1 && !item.src.startsWith('http:')) {
						imgList.push(item.src);
					}
				}
				
				if(imgList.length == 0) {
					that.saveLocalItem();
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
			//安全措施选择器
			choiceICON(){
				uni.navigateTo({
					url: 'rapSelected'
				})
				
// 				var that = this;
// 				var recordid = that.id;
// 				if(!recordid){
// 					uni.showToast({
// 						icon: 'none',
// 						title: '请先保存作业'
// 					});
// 					return;
// 				}else{
// 					plus.runtime.openWeb(config.host+config.choiceICON+'?recordid='+recordid+'&host='+config.host);
// 				}
			},
			savePTW(){
				this.saveClick(config.savePTW);
			},
			savePTWFlow(){
				this.saveClick(config.savePTWFlow);
			},
			saveAndClose(){
				var that = this;
				that.saveClick(config.savePTW);
				that.saveLocalItem();
				uni.showToast({
				  title: '保存成功，即将关闭',
				  complete: setTimeout(function () {
					uni.navigateBack({
						delta: 1
					})
				  }, 1500)
				})
			},
			closeBtn(){
				var that = this;
				that.saveLocalItem();
				uni.showToast({
				  title: '即将关闭',
				  complete: setTimeout(function () {
					uni.navigateBack({
						delta: 1
					})
				  }, 1500)
				})
			},
			// 保存
			saveClick(interfaceUrl) {
				var that = this;
				let param = {
					userid: that.userInfo.userid,
					dhzlx:that.dhzlx,
					zydw:that.zydw,
					dhfzr:that.dhfzr,
					dhfs:that.dhfs,
					dhdd:that.dhdd,
					sgxm:that.sgxm,
					dhnr:that.dhnr,
					zzjhr:that.zzjhr,
					zzjhrgw:that.zzjhrgw,
					ddjhr:that.ddjhr,
					ddjhrgw:that.ddjhrgw,
					whbs:that.whbs,
					dhqx:that.dhqx,
					dhqx2:that.dhqx2,
					sfjxfxfx:that.sfjxfxfx,
					sfyss:that.sfyss,
					aqcs:that.aqcs,
					ssqk:that.ssqk
				};
				var checkList = [{val:that.zydw,msg:'作业单位'},{val:that.dhfzr,msg:'动火负责人'},{val:that.dhfs,msg:'动火方式'},
					{val:that.dhdd,msg:'动火地点'},{val:that.sgxm,msg:'施工项目'},{val:that.dhnr,msg:'动火内容'},
					{val:that.zzjhr,msg:'组织监火人'},{val:that.zzjhrgw,msg:'组织监火人岗位'},{val:that.ddjhr,msg:'地点监火人'},
					{val:that.ddjhrgw,msg:'地点监火人岗位'},{val:that.whbs,msg:'危害辨识'},{val:that.aqcs,msg:'安全措施'},{val:that.ssqk,msg:'实施情况'}];
				if(!that.checkVal(checkList)){
					return;
				}
				//console.log(JSON.stringify(param));
				request.requestLoadingNew(interfaceUrl, param, '正在加载', 
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
						var imageList =that.imageList;
						for (var i=0;i<res.tempFilePaths.length;i++) {
							var imgObj = {//	type：1为新增需要上传，2为加载的，不需要上传
								fileid: '',
								src: res.tempFilePaths[i],
								type: 1
							}
							imageList.push(imgObj);
						}
					}
				});
			},
			checkVal(list){
				//list 为要检查的值的集合
				for(var i in list){
					if(!list[i].val){
						uni.showToast({
							icon: 'none',
							title: list[i].msg+'不能为空！'
						});
						return false;
					}
				}
				return true;
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
							var imageList =that.imageList;
							that.item.fj = res.fj
							imageList.splice(index,1);
						},function(){
							uni.showToast({
								icon: 'none',
								title: '删除失败'
							});
						}, function(){
							
						}
					);
				}else {// 刚选择好，还未上传，非网络图片
					imageList.splice(index,1);
				}
			},
			// 浏览照片
			viewPhoto() {
				var that = this;
				var imgList = [];
				var imageList =that.imageList;
				for (var i=0 ; i<imageList.length; i++) {
					let item = imageList[i]
					imgList.push(item.src);
				}
				// 预览图片
				uni.previewImage({
					urls: imgList
				});
			}
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
		margin-left: 10px;
		margin-bottom: 20px;
		margin-right: 10px;
		font-size: 22upx;
		color: #333333;
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
	
	.flow{
		height: 20px;
		width: 100%;
	}
</style>
