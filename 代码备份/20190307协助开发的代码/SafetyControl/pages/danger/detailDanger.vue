<template>
	<view class="baseView">
		<view class="cellTitleView">
			<text class="cellTitle">基础信息</text>
		</view>
		<view class="cellInfoView">
			<!-- <view class='imageBaseView'> 
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
			</view> -->
			<uni-list>
				<uni-list-item title="责任部门" :subnote="dangerDept" show-arrow="false"></uni-list-item>
				<uni-list-item title="隐患级别" :subnote="dangerLevel" show-arrow="false"></uni-list-item>
				<uni-list-item title="隐患后果" :subnote="dangerType" show-arrow="false"></uni-list-item>
				<uni-list-item title="不合格因素" :subnote="dangerDesc" show-arrow="false"></uni-list-item>
				<uni-list-item title="对应条款" :subnote="dangerClause" show-arrow="false"></uni-list-item>
				<uni-list-item title="整改要求及建议" :subnote="dangerAdvise" show-arrow="false"></uni-list-item>
			</uni-list>
		</view>
		<view class="cellTitleView">
			<text class="cellTitle">审批信息</text>
		</view>
		<view class="cellInfoView">
			<uni-list>
				<picker mode="date" :value="checkDate" @change="bindDateChange">
					<uni-list-item title="检查日期" :subnote="checkDate" :showSwitch="styleFlag.checkDate"></uni-list-item>
				</picker>
				<uni-list-item title="整改意见" :subnote="zgyj" show-arrow="false" :showSwitch="styleFlag.zgyj"></uni-list-item>
				<picker mode="date" :value="zgqx" @change="bindDateChange">
					<uni-list-item title="整改期限" :subnote="zgqx" :showSwitch="styleFlag.zgqx"></uni-list-item>
				</picker>
				<uni-list-item title="整改情况" :subnote="zgqk" show-arrow="false" :showSwitch="styleFlag.zgqk"></uni-list-item>
				<picker mode="date" :value="zgwcrq" @change="bindDateChange" :showSwitch="styleFlag.zgwcrq">
					<uni-list-item title="整改完成日期" :subnote="zgwcrq" :showSwitch="styleFlag.zgwcrq"></uni-list-item>
				</picker>
				<uni-list-item title="治理资金" :subnote="zlzj" show-arrow="false" :showSwitch="styleFlag.zlzj"></uni-list-item>
				<uni-list-item title="原因分析" :subnote="yyfx" show-arrow="false" :showSwitch="styleFlag.yyfx"></uni-list-item>
				<uni-list-item title="验证情况" :subnote="yzqk" show-arrow="false" :showSwitch="styleFlag.yzqk"></uni-list-item>
			</uni-list>
		</view>
		
		<view class="btnView">
		    <button class="saveBtn" @tap="saveClick">同意</button>
		    <button class="saveBtn" @tap="historyClick">审批历史</button>
		    <button class="saveBtn" @tap="flowPicClick">流程图</button>
		    <button class="saveBtn" @tap="backFlowClick">驳回</button>
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
				
				// 页面参数
				dangerId: '',		// 隐患id
				dangerLevel: '',	// 隐患级别
				dangerType:	'',		// 隐患分类（隐患后果）
				dangerDesc: '',		// 隐患描述
				dangerClause: '',	// 对应条款
				dangerAdvise: '',	// 整改建议
				dangerDept:'',		//隐患责任部门
				//接口需要的参数
				checkDate:'',       //检查日期
				// --------数据模板---------
				// 隐患级别
				dangerLevelData: ['一般隐患', '重大隐患'],
				// 隐患分类
				//dangerTypeData: ['自行输入分类','从分类库选择'],
				//隐患后果
				dangerTypeData: ['人员伤害','财产损失','其他'],
				// 隐患描述
				dangerDescData: ['从隐患库选择/检索','自行输入问题', '从常用隐患库选择'],
				// 对应条款
				dangerClauseData: ['从隐患库选择/检索','自行输入问题', '从法规库选择'],
				//隐患责任部门
				dangerDeptData: ['从隐患库选择/检索','自行输入问题', '从部门库选择'],
				taskDefKey:'',//节点id
				instId:'',
				nodeName:'',//节点名称
				obj:null,
				styleFlag:{
					checkDate:false,
				}
			}
		},
		onLoad(option) {
			console.log('加载页面...');
			var that = this;
			that.taskDefKey = JSON.parse(option.params).taskDefKey;//节点id
			that.instId = JSON.parse(option.params).instId;
			that.nodeName = JSON.parse(option.params).name;
			request.requestLoadingNew(config.getYhzgDetail, JSON.parse(option.params), "正在加载详情", function(res){
				console.log('' + JSON.stringify(res));
				var yhzgObj = res.data;
				console.log(yhzgObj)
				//基础赋值				
				that.dangerId = yhzgObj.id;
				that.dangerLevel = yhzgObj.yhdj;
				that.dangerType = yhzgObj.yhhg;
				that.dangerDesc = yhzgObj.zgyj;
				that.dangerClause = yhzgObj.wfflfgjtk;
				that.dangerAdvise = yhzgObj.gsyqjjy;
				that.dangerDept = yhzgObj.zrbm;
				//that.imageList = yhzgObj.fj?yhzgObj.fj:yhzgObj.fj2?yhzgObj.fj2:yhzgObj.fj3;
				//节点判断
				console.log("当前节点："+that.taskDefKey + "   节点名称："+that.nodeName);
				
				//显示隐藏
				
				//提交控制
			
				
			}, function(){
				uni.showToast({
					icon: 'none',
					title: '请求失败'
				});
			},function(){
				
			});
			
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
			// 选择整改期限
			deadLineChange: function(e) {
				this.deadLine = e.target.value;
			},
			bindDateChange: function(e) {
				this.checkDate = e.target.value
			},
			//审批历史
			historyClick: function() {
				uni.showToast({
					icon: 'none',
					title: '敬请期待！',
					duration: 1000,
				});
			},
			//查看流程图
			flowPicClick: function() {
				uni.showToast({
					icon: 'none',
					title: '敬请期待！',
					duration: 1000,
				});
			},
			//驳回
			backFlowClick: function() {
				uni.showToast({
					icon: 'none',
					title: '敬请期待！',
					duration: 1000,
				});
			},
			// 保存
			saveClick() {
				var that = this;
				let param = {
						refid: that.dangerId,
						id: that.dangerId,
						userid: that.userInfo.userid,
						taskDefKey:that.taskDefKey
					};
				//判断节点
				console.log(that.taskDefKey);
				var nodeId = that.taskDefKey;
				if(nodeId==="sid-A0CE4647-CCC3-4A9A-81BF-09FCAB7CDCA4"||nodeId==="sid-3785D27C-9B73-4C6D-9C1C-6A4ECA6B8FFE"){
					//发起隐患 发起人关闭
				}else if(nodeId==="sid-41BC6E14-5C85-42A1-8E1B-3246FDEA682C"){//整改人整改
					param.yhjb = that.dangerLevel;
					param.yhfl = that.dangerType;
					param.yhms = that.dangerDesc;
					param.dytk = that.dangerClause;
					param.zgjy = that.dangerAdvise;
					param.zgwcsj = that.checkDate;//整改完成时间
					param.jcr = that.checkPeople;
					param.zgqx = that.deadLine;
					param.zgqx = that.deadLine;
					
					/* yhzg.setZgwcrq(yhzgTemp.getZgwcrq());
					yhzg.setZlzj(yhzgTemp.getZlzj());
					yhzg.setZgr(yhzgTemp.getZgr());
					yhzg.setZgrName(yhzgTemp.getZgrName());
					yhzg.setTbrq(yhzgTemp.getTbrq());
					yhzg.setZgqk(yhzgTemp.getZgqk());
					yhzg.setFj2(yhzgTemp.getFj2()); */
				}else if(nodeId==="sid-F7A5E243-31D1-42DE-9D74-0C7323EFFAF8"){//复核人复核
					/* yhzg.setYyfx2(yhzgTemp.getYyfx2());
					yhzg.setYzqk(yhzgTemp.getYzqk());
					yhzg.setFj3(yhzgTemp.getFj3());
					yhzg.setTbrq2(yhzgTemp.getTbrq2());
					yhzg.setYzr(yhzgTemp.getYzr());
					yhzg.setYzrName(yhzgTemp.getYzrName()); */
				}else if(nodeId==="sid-987522D1-34D6-45A4-8D16-CE1F2ACA0205" || nodeId==="sid-29BBC59F-F04B-47BF-9DE1-7C3299318DB8"){//一级审批 二级审批
					/* yhzg.setZgqx(yhzgTemp.getZgqx());
					yhzg.setTbr(yhzgTemp.getTbr());
					yhzg.setTxrq(yhzgTemp.getTxrq());
					yhzg.setZgyj(yhzgTemp.getZgyj()); */
				}
				request.requestLoadingNew(config.updateYhzgFlow, param, '正在加载', 
					function(res){
						uni.showToast({
							icon: 'none',
							title: '保存成功',
							duration: 1000,
						});
						that.dangerId = res.id;
						uni.navigateTo({
							url:'../danger/detailList'
						});
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
		width: 25%;
		height: 90px;
		font-size: 26upx;
		text-align: center;
		margin-top: 20px;
		margin-left: 5px;
		margin-bottom: 20px;
		margin-right: 5px;
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
