<template>
	<view class="baseView">
		<view class="cellTitleView">
			<text class="cellTitle">{{item.jcbz}}</text>
		</view>
		<view class="cellInfoView">
			<!-- <uni-list>
				<picker :value="index" :range="typeArray" @change="bindTypeChange">
					<uni-list-item title="检查结论" :note="item.jcjl"></uni-list-item>
				</picker>
				<uni-list-item title="问题描述" :note="item.jcwtms" @click="jumpInput(item.jcwtms)"></uni-list-item>
				<picker v-if="item.jcjl == '异常'" :value="index" :range="rectifyTypes" @change="bindRectifyChange">
					<uni-list-item title="整改方式" :note="item.zgfs"></uni-list-item>
				</picker>
			</uni-list> -->
			
			<picker :value="index" :range="typeArray" @change="bindTypeChange">
				<view class="cellView">
					<view class="cellSubView">
						<text class="leftText">检查结论</text>
						<view class="rightText">{{item.jcjl}}</view>
					</view>
					<image class="arrow" src="../../static/img/rightArrow.png"></image>
				</view>
			</picker>
			<view class="line"></view>
			<view class="cellView" @click="jumpInput(item.jcwtms)">
				<view class="cellSubView">
					<text class="leftText">问题描述</text>
					<view class="rightText">{{item.jcwtms}}</view>
				</view>
				<image class="arrow" src="../../static/img/rightArrow.png"></image>
			</view>
			<view class="line"></view>
			<picker v-if="item.jcjl == '异常'" :value="index" :range="rectifyTypes" @change="bindRectifyChange">
				<view class="cellView">
					<view class="cellSubView">
						<text class="leftText">整改方式</text>
						<view class="rightText">{{item.zgfs}}</view>
					</view>
					<image class="arrow" src="../../static/img/rightArrow.png"></image>
				</view>
			</picker>
			<view class="line"></view>
			<view class='imageBaseView' v-if="item.id != ''"> 
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
		<view class="btn-row">
		    <button type="primary" class="primary" @tap="saveItem">确定</button>
		</view>
	</view>
</template>

<script>
	import uniList from '@/components/list/uni-list/uni-list.vue'
	import uniListItem from '@/components/list/uni-list-item/uni-list-item.vue'
	import config from '../../util/config.js';
	import request from '../../util/request.js';
	import {
	    mapState,
		mapMutations
	} from 'vuex'
	export default {
		computed: mapState(['inputPageText', 'key', 'userInfo']),
		components: {uniList,uniListItem},
		data() {
		    return {
				// 当页面OnShow的时候是否需要从state里去拿输入的内容
				needGetInputOnShow: false,
				
				typeArray: ['正常', '未检', '异常'],
				rectifyTypes: ['发起隐患整改单'],
		        item: '',		// subList中的对象
				itemIndex: 0,	// subList中的第几个数据，用于确定后替换原数据
				
				// 上传照片相关
				imageViewHeight: 100,
				imageList: [],
				littleImageWidth: 0,
		    }
		},
		onLoad(option) {
			console.log('测试：' + option.item)
			this.item = JSON.parse(option.item);
			this.itemIndex = JSON.parse(option.index);
			this.littleImageWidth = (uni.getSystemInfoSync().windowWidth -50) / 4;
			if(this.item.fj == null) {
				return;
			}
			if (this.item.fj != "") {
				console.log('FJ:' + this.item.fj);
				let imgList = JSON.parse(this.item.fj);
				for(var i=0; i<imgList.length; i++) {
					let imgObj = imgList[i];
					let imgUrl = config.host + config.loadImage + imgObj.fileId + "&userid=" + this.userInfo.userid;
					let imgItem = {
						fileid: imgObj.fileId,
						src: imgUrl,
						type: 2
					}
					this.imageList.push(imgItem);
				}
			}
		},
		onShow() {
			if (this.needGetInputOnShow == true) {
				this.item[this.key] = this.inputPageText;
				this.needGetInputOnShow = false;
			}
		},
		methods:{
			...mapMutations(['setSublistItem']),
			bindTypeChange(e) {
				this.item.jcjl = this.typeArray[e.detail.value];
				if (this.item.jcjl == "正常") {
					this.item.zgfs = "";
				}
			},
			bindRectifyChange(e) {
				this.item.zgfs = this.rectifyTypes[e.detail.value];
			},
			jumpInput(text) {
				this.needGetInputOnShow = true;
				uni.navigateTo({
					url: '../common/inputPage?text=' + text + '&key=jcwtms&placeholder=请输入问题描述',
				})
			},
			saveItem() {
				var that = this;
				
				// 上传照片，需要分两种情况，如是从后台加载的，不需要调用上传接口，如果是本地读取还未上传的，需要调上传接口
				
				let url = config.uploadImage + '?from=jc&yyid=' + that.item.id + '&userid=' + that.userInfo.userid
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
					that.item.fj = fj;
					console.log('Item:',JSON.stringify(that.item));
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
		flex-direction: column;
		justify-content: center;
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
	.cellView {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.cellSubView {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
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
		margin-left: 20upx;
		font-size: 34upx;
	}
	.rightTextRow {
		margin-top: 20upx;
		margin-bottom: 20upx;
		margin-right: 20upx;
		text-align: right;
		font-size: 28upx;
		text-overflow: ellipsis;
		white-space: normal;
		color: inherit;
		line-height: 1.5;
		overflow: hidden;
		color: #BBBBBB;
	}
	.arrow {
		width: 15upx;
		height: 25upx;
		margin-right: 18upx;
	}
	.leftText {
		margin-top: 20upx;
		margin-left: 20upx;
		font-size: 34upx;
	}
	.rightText {
		margin-left: 20upx;
		margin-bottom: 20upx;
		font-size: 28upx;
		text-overflow: ellipsis;
		white-space: normal;
		color: inherit;
		line-height: 1.5;
		overflow: hidden;
		color: #BBBBBB;
	}
	.line {
		width: 100%;
		height: 1upx;
		background-color: #E8E8E8;
	}
	
	/*添加照片的css样式*/
	.imageBaseView {
	  display:flex;
	  flex-direction:column;
	  width: 100%;
	  background-color: white;
	  /* margin-bottom: 10px; */
	  border-bottom: 1rpx solid #D3D3D3;
	  align-items:center;/*垂直居中*/
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
