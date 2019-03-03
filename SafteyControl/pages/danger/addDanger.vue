<template>
	<view class="baseView">
		<view class="cellTitleView">
			<text class="cellTitle">隐患信息</text>
		</view>
		<view class="cellInfoView">
			<uni-list>
				<uni-list-item title="隐患级别" :subnote="dangerLevel" show-arrow="true" @click="selectedDangerLevel"></uni-list-item>
				<uni-list-item title="隐患分类" :subnote="dangerType" show-arrow="true" @click="selectedDangerType"></uni-list-item>
				<uni-list-item title="隐患描述" :subnote="dangerDesc" show-arrow="true" @click="selectedDangerDesc"></uni-list-item>
				<uni-list-item title="对应条款" :subnote="dangerClause" show-arrow="true" @click="selectedDangerClause"></uni-list-item>
				<uni-list-item title="整改建议" :subnote="dangerAdvise" show-arrow="true" @click="jumpInput(dangerAdvise, 'dangerAdvise', '请输入整改建议')"></uni-list-item>
				<picker mode="date" :value="checkDate" @change="checkDateChange">
					<uni-list-item title="检查日期" :subnote="checkDate"></uni-list-item>
				</picker>
				<uni-list-item title="检查人" :subnote="checkPeople" show-arrow="true"></uni-list-item>
				<picker mode="date" :value="deadLine" @change="deadLineChange">
					<uni-list-item title="整改期限" :subnote="deadLine"></uni-list-item>
				</picker>
				<!-- <uni-list-item title="隐患位置" show-arrow="true" @click="jumpInput('')"></uni-list-item> -->
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
				// 上传照片相关
				imageViewHeight: 100,
				imageList: [],
				littleImageWidth: 0,
				
				// 页面参数，接口需要的参数
				dangerId: '',		// 隐患id
				dangerLevel: '',	// 隐患级别
				dangerType:	'',		// 隐患分类
				dangerDesc: '',		// 隐患描述
				dangerClause: '',	// 对应条款
				dangerAdvise: '',	// 整改建议
				checkDate: '',		// 检查时间
				checkPeople: '',	// 检查人
				deadLine: '',		// 整改期限
				
				
				// --------数据模板---------
				// 隐患级别
				dangerLevelData: ['一般隐患', '重大隐患'],
				// 隐患分类
				dangerTypeData: ['自行输入分类','从分类库选择'],
				// 隐患描述
				dangerDescData: ['从隐患库选择/检索','自行输入问题', '从常用隐患库选择'],
				// 对应条款
				dangerClauseData: ['从隐患库选择/检索','自行输入问题', '从法规库选择'],
			}
		},
		onLoad() {
			this.littleImageWidth = (uni.getSystemInfoSync().windowWidth -50) / 4;
			this.checkPeople = this.userInfo.fullname;
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
			...mapMutations(['removeInputItem']),
			// 选择隐患级别
			selectedDangerLevel: function(e) {
				var that = this;
				uni.showActionSheet({
					itemList: that.dangerLevelData,
					success: function (res) {
						that.dangerLevel = that.dangerLevelData[res.tapIndex];
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			// 选择隐患分类
			selectedDangerType: function(e) {
				var that = this;
				uni.showActionSheet({
					itemList: that.dangerTypeData,
					success: function (res) {
						if (res.tapIndex == 0) {// 自行输入
							this.needGetInputOnShow = true;
							that.jumpInput(that.dangerType, 'dangerType', '请输入隐患分类')
						}else {// 从分类库选择
							
						}
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			// 选择隐患描述
			selectedDangerDesc: function(e) {
				var that = this;
				uni.showActionSheet({
					itemList: that.dangerDescData,
					success: function (res) {
						if (res.tapIndex == 0) {// 从隐患库选择/检索
							
						}else if(res.tapIndex == 1) {// 自行输入
							this.needGetInputOnShow = true;
							that.jumpInput(that.dangerDesc, 'dangerDesc', '请输入隐患描述')
						}else {// 从常用隐患库选择
							
						}
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			// 选择对应条款
			selectedDangerClause: function(e) {
				var that = this;
				uni.showActionSheet({
					itemList: that.dangerClauseData,
					success: function (res) {
						if (res.tapIndex == 0) {// 从隐患库选择/检索
							
						}else if(res.tapIndex == 1) {// 自行输入
							this.needGetInputOnShow = true;
							that.jumpInput(that.dangerClause, 'dangerClause', '请输入对应条款')
						}else {// 从法规库选择
							
						}
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
			// 保存
			saveClick() {
				var that = this;
				let param = {
					refid: that.dangerId,
					yhjb: that.dangerLevel,
					yhfl: that.dangerType,
					yhms: that.dangerDesc,
					dytk: that.dangerClause,
					zgjy: that.dangerAdvise,
					jcsj: that.checkDate,
					jcr: that.checkPeople,
					zgqx: that.deadLine,
					userid: that.userInfo.userid
				}
				request.requestLoading(config.editDanger, param, '正在加载', 
					function(res){
						uni.showToast({
							icon: 'none',
							title: '保存成功',
							duration: 1000,
						});
						that.dangerId = res.id;
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
		margin-right: 10px;
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
	  border-bottom: 0.5rpx solid #D3D3D3;
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
		font-size: 32upx;
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
