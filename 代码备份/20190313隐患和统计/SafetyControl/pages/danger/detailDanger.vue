<template>
	<view class="baseView">
		<view class="cellTitleView">
			<text class="cellTitle">基础信息</text>
		</view>
		<view class="cellInfoView">
			<uni-list>
				<uni-list-item title="发现人" :subnote="fqr" show-arrow="false"></uni-list-item>
				<uni-list-item title="责任部门" :subnote="zrbm" show-arrow="false"></uni-list-item>
				<uni-list-item title="隐患级别" :subnote="yhdj" show-arrow="false"></uni-list-item>
				<uni-list-item title="隐患后果" :subnote="yhhg" show-arrow="false"></uni-list-item>
				<uni-list-item title="不合格因素" :subnote="bhgys" show-arrow="false"></uni-list-item>
				<uni-list-item title="对应条款" :subnote="wfflfgjtk" show-arrow="false"></uni-list-item>
				<uni-list-item title="整改要求及建议" :subnote="gsyqjjy" show-arrow="false"></uni-list-item>
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
		
		<view class="cellTitleView" :hidden="spReadFlag">
			<text class="cellTitle">审批信息</text>
		</view>
		<!-- 审批 -->
		<view class="cellInfoView" :hidden="spReadFlag">
			<uni-list>
				<uni-list-item title="填报人" :subnote="tbr" show-arrow="false"></uni-list-item>
				<picker mode="date" :value="zgqx" @change="bindDateZgqx">
					<uni-list-item title="整改期限" :subnote="zgqx" :show-arrow="spFlag"></uni-list-item>
				</picker>
				<picker mode="date" :value="txrq" @change="bindDateTxrq">
					<uni-list-item title="填写日期" :subnote="txrq" :show-arrow="spFlag"></uni-list-item>
				</picker>
				<uni-list-item title="整改意见" :subnote="zgyj" :show-arrow="spFlag" @click="selectedzgyj"></uni-list-item>
			</uni-list>
		</view>
		<!-- 整改 -->
		<view class="cellTitleView" :hidden="zgReadFlag">
			<text class="cellTitle">整改信息</text>
		</view>
		<view class="cellInfoView" :hidden="zgReadFlag">
			<uni-list>
				<uni-list-item title="整改人" :subnote="zgr" show-arrow="false"></uni-list-item>
				<picker mode="date" :value="zgwcrq" @change="bindDateZgwcrq">
					<uni-list-item title="整改完成日期" :subnote="zgwcrq" :show-arrow="zgFlag"></uni-list-item>
				</picker>
				<picker mode="date" :value="tbrq" @change="bindDateTbrq">
					<uni-list-item title="填报日期" :subnote="tbrq" :show-arrow="zgFlag"></uni-list-item>
				</picker>
				<uni-list-item title="治理资金" :subnote="zlzj" :show-arrow="zgFlag" @click="selectedzlzj"></uni-list-item>
				<uni-list-item title="整改情况" :subnote="zgqk"  :show-arrow="zgFlag" @click="selectedzgqk"></uni-list-item>
			</uni-list>
			<view class='imageBaseView'> 
				<view class='cellSubViewRow'> 
				  <text class='leftTextRow'>隐患整改附件</text>
				  <text class='rightTextRow'>{{imageList2.length}}</text>
				</view>
				<view id='imageView' class='imageView'>
				  <block v-for="(imgObj,idx) in imageList2" :key="idx">
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
		<!-- 复核 -->
		<view class="cellTitleView" :hidden="yzReadFlag">
			<text class="cellTitle">复核信息</text>
		</view>
		<view class="cellInfoView" :hidden="yzReadFlag">
			<uni-list>
				<uni-list-item title="验证人" :subnote="yzr" show-arrow="false"></uni-list-item>
				<picker mode="date" :value="tbrq2" @change="bindDateTbrq2">
					<uni-list-item title="填报日期" :subnote="tbrq2" :show-arrow="yzFlag"></uni-list-item>
				</picker>
				<uni-list-item title="原因分析" :subnote="yyfx" :show-arrow="yzFlag" @click="selectedyyfx"></uni-list-item>
				<uni-list-item title="验证情况" :subnote="yzqk" :show-arrow="yzFlag" @click="selectedyzqk"></uni-list-item>
			</uni-list>
			<view class='imageBaseView'> 
				<view class='cellSubViewRow'> 
				  <text class='leftTextRow'>复核附件</text>
				  <text class='rightTextRow'>{{imageList3.length}}</text>
				</view>
				<view id='imageView' class='imageView'>
				  <block v-for="(imgObj,idx) in imageList3" :key="idx">
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
		<view class="cellInfoView" :hidden="nodeFlag">
			<uni-list>
				<uni-list-item title="请选择即将跳转节点" :subnote="destNode" show-arrow="true" @click="selecteddestNode"></uni-list-item>
			</uni-list>
		</view>
		<view class="btnView">
		    <button class="saveBtn" @tap="agreeFlowClick" :hidden="showFlow">同意</button>
		    <button class="saveBtn" @tap="historyClick" :hidden="commonFlow">审批历史</button>
		    <button class="saveBtn" @tap="flowPicClick" :hidden="commonFlow">流程图</button>
		    <button class="saveBtn"  @tap="backFlowClick" :hidden="showFlow">驳回</button>
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
				imageList2: [],
				imageList3: [],
				littleImageWidth: 0,
				fjflag:'',//附件编号 fj1 fj2 fj3
				// 页面参数
				id: '',		// 隐患id
				yhdj: '',	// 隐患等级
				yhhg:	'',		// 隐患分类（隐患后果）
				bhgys: '',		// 隐患描述
				wfflfgjtk: '',	// 对应条款
				gsyqjjy: '',		// 改善要求及建议
				zrbm:'',		//隐患责任部门
				fqr:'', //发起人
				//接口需要的参数
				zgwcrq:'',//整改完成日期
				zlzj:'',//治理资金
				zgr:'',//整改人
				tbrq:'',//填报日期
				zgqk:'',//整改情况
				tbr:'',//填报人
				
				zgyj:'',//整改意见
				zgqx:'',//整改期限
				txrq:'',//填写日期
				
				yyfx:'',//原因分析
				yzqk:'',//验证情况
				yzr:'',//验证人
				tbrq2:'',//填报日期
				
				taskDefKey:'',//节点id
				instId:'',
				nodeName:'',//节点名称 
				actDefId:'',//用来预览流程图
				obj:null,
				taskId:'',
				//只读权限 false 只读
				zgFlag:false,
				spFlag:false,
				yzFlag:false,
				//显示权限
				zgReadFlag:true,
				spReadFlag:true,
				yzReadFlag:true,
				commonFlow:true,
				owner:'',//默认操作人
				showFlow:'',
				//即将流转相关
				destNodeData:[], //展示集合
				destNodeParam:[],//传参集合
				nodeParam:'',//传参
				destNode:'',//展示
				// 整改情况
				zgqkData: ['点击输入整改情况'],
				zlzjData: ['点击输入治理资金'],
				yzqkData: ['点击输入验证情况'],
				yyfxData:['人','物','环','管'],
				zgyjData: ['点击输入整改意见'],
				
				nodeFlag:true
			}
		},
		onLoad(option) {
			console.log('加载页面...');
			var that = this;
			var objParams = JSON.parse(option.params);
			that.taskDefKey = objParams.taskDefKey;//节点id
			that.instId = objParams.instId;
			that.nodeName = objParams.name;
			that.actDefId = objParams.actDefId;
			that.taskId = objParams.taskId;
			that.owner = objParams.owner;
			that.showFlow = objParams.showFlow;
			that.commonFlow = objParams.commonFlow;
			request.requestLoadingNew(config.getYhzgDetail, objParams, "正在加载详情", function(res){
				var yhzgObj = res.data;
				that.nodeFlag = res.lx?false:true;
				//初始化即将流向节点选择
				//console.log(JSON.stringify(res.destNodeUserList));
				var nodeList = res.destNodeUserList;
				var resultList = [];
				var destNodeParam = [];
				var destNodeUser;
				var taskNodeUser;
				for(var i in nodeList){
					destNodeUser = nodeList[i];
					taskNodeUser = destNodeUser.taskNodeUser;
					destNodeParam.push(taskNodeUser.userIds+':'+taskNodeUser.userFullnames+'@'+destNodeUser.nodeId+':'+destNodeUser.nodeText);
					resultList.push(destNodeUser.nodeText+(taskNodeUser.userFullnames?('【' + taskNodeUser.userFullnames+'】'):''));
				}
				that.destNodeParam = destNodeParam;
				that.destNodeData = resultList;
				var nodeId = that.taskDefKey;
				//初始化数据			
				that.id = yhzgObj.id;
				that.yhdj = yhzgObj.yhdj;
				that.yhhg = yhzgObj.yhhg;
				that.bhgys = yhzgObj.bhgys;
				that.wfflfgjtk = yhzgObj.wfflfgjtk;
				that.gsyqjjy = yhzgObj.gsyqjjy;
				that.zrbm = yhzgObj.zrbm;
				that.fqr = yhzgObj.fqr;
				
				//节点判断
				//console.log("当前节点："+that.taskDefKey + "   节点名称："+that.nodeName);
				//console.log('附件地址：：：'+yhzgObj.fj);
				if (yhzgObj.fj) {
					//console.log('FJ:' + yhzgObj.fj);
					let imgList = JSON.parse(yhzgObj.fj);
					for(var i=0; i<imgList.length; i++) {
						let imgObj = imgList[i];
						let imgUrl = config.host + config.loadImage + imgObj.fileId + "&userid=" + that.userInfo.userid;
						let imgItem = {
							fileid: imgObj.fileId,
							src: imgUrl,
							type: 2
						}
						that.imageList.push(imgItem);
					}
				}
				//判断节点初始化内容及控制元素的展示权限
				if(nodeId==="sid-A0CE4647-CCC3-4A9A-81BF-09FCAB7CDCA4"){//发起隐患(不用填写，只需展示)
					
				}else if(nodeId==="sid-3785D27C-9B73-4C6D-9C1C-6A4ECA6B8FFE"){//发起人关闭
					//显示
					that.zgReadFlag=false;
					that.spReadFlag=false;
					that.yzReadFlag=false;
					//展示所有内容
					//初始化值(审批数据)
					that.zgqx = yhzgObj.zgqx;//整改期限
					that.tbr=yhzgObj.tbr;//填报人
					that.txrq=yhzgObj.txrq;//填写日期
					that.zgyj=yhzgObj.zgyj;//整改意见
					//整改数据
					that.zgwcrq = yhzgObj.zgwcrq;//整改完成日期
					that.zlzj = yhzgObj.zlzj;//治理资金
					that.zgr = yhzgObj.zgr;//整改人
					that.tbrq = yhzgObj.tbrq;//填报日期
					that.zgqk = yhzgObj.zgqk;//整改情况
					if (yhzgObj.fj2) {
						console.log('FJ2:' + yhzgObj.fj2);
						let imgList2 = JSON.parse(yhzgObj.fj2);
						for(var i=0; i<imgList2.length; i++) {
							let imgObj = imgList2[i];
							let imgUrl = config.host + config.loadImage + imgObj.fileId + "&userid=" + that.userInfo.userid;
							let imgItem = {
								fileid: imgObj.fileId,
								src: imgUrl,
								type: 2
							}
							that.imageList2.push(imgItem);
						}
					}
					//复核数据
					that.yyfx = yhzgObj.yyfx;//原因分析
					that.yzqk = yhzgObj.yzqk;//验证情况
					that.yzr = yhzgObj.yzr;//验证人
					that.tbrq2 = yhzgObj.tbrq2;//填报日期
					if (yhzgObj.fj3) {
						console.log('FJ3:' + yhzgObj.fj3);
						let imgList3 = JSON.parse(yhzgObj.fj3);
						for(var i=0; i<imgList3.length; i++) {
							let imgObj = imgList3[i];
							let imgUrl = config.host + config.loadImage + imgObj.fileId + "&userid=" + that.userInfo.userid;
							let imgItem = {
								fileid: imgObj.fileId,
								src: imgUrl,
								type: 2
							}
							that.imageList3.push(imgItem);
						}
					}
				}else if(nodeId==="sid-41BC6E14-5C85-42A1-8E1B-3246FDEA682C"){//整改人整改(填写整改内容,可以查看反馈内容)
					that.zgr = that.userInfo.fullname;
					
					//权限
					that.zgFlag = true;
					that.zgReadFlag=false;
					that.spReadFlag=false;
					//初始化值(审批数据)
					that.zgqx = yhzgObj.zgqx;//整改期限
					that.tbr=yhzgObj.tbr;//填报人
					that.txrq=yhzgObj.txrq;//填写日期
					that.zgyj=yhzgObj.zgyj;//整改意见
					that.fjflag='fj2';
					
				}else if(nodeId==="sid-F7A5E243-31D1-42DE-9D74-0C7323EFFAF8"){//复核人复核
					that.yzr = that.userInfo.fullname;
					
					that.yzFlag = true;
					that.zgReadFlag=false;
					that.spReadFlag=false;
					that.yzReadFlag=false;
					that.fjflag='fj3';
					//初始化值(审批数据)
					that.zgqx = yhzgObj.zgqx;//整改期限
					that.tbr=yhzgObj.tbr;//填报人
					that.txrq=yhzgObj.txrq;//填写日期
					that.zgyj=yhzgObj.zgyj;//整改意见
					//整改数据
					that.zgwcrq = yhzgObj.zgwcrq;//整改完成日期
					that.zlzj = yhzgObj.zlzj;//治理资金
					that.zgr = yhzgObj.zgr;//整改人
					that.tbrq = yhzgObj.tbrq;//填报日期
					that.zgqk = yhzgObj.zgqk;//整改情况
					if (yhzgObj.fj2) {
						console.log('FJ2:' + yhzgObj.fj2);
						let imgList2 = JSON.parse(yhzgObj.fj2);
						for(var i=0; i<imgList2.length; i++) {
							let imgObj = imgList2[i];
							let imgUrl = config.host + config.loadImage + imgObj.fileId + "&userid=" + that.userInfo.userid;
							let imgItem = {
								fileid: imgObj.fileId,
								src: imgUrl,
								type: 2
							}
							that.imageList2.push(imgItem);
						}
					}
				}else if(nodeId==="sid-987522D1-34D6-45A4-8D16-CE1F2ACA0205" || nodeId==="sid-29BBC59F-F04B-47BF-9DE1-7C3299318DB8"){//一级审批 二级审批
					that.tbr = that.userInfo.fullname;
					that.spFlag = true;
					that.zgReadFlag=false;
					that.spReadFlag=false;
				}
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
			...mapMutations(['removeInputItem','setSublistItem']),
			// 选择整改期限
			deadLineChange: function(e) {
				this.deadLine = e.target.value;
			},
			bindDateZgwcrq: function(e) {
				this.zgwcrq = e.target.value
			},
			bindDateTbrq: function(e) {
				this.tbrq = e.target.value
			},
			bindDateZgqx: function(e) {
				this.zgqx = e.target.value
			},
			bindDateTxrq: function(e) {
				this.txrq = e.target.value
			},
			bindDateTbrq2: function(e) {
				this.tbrq2 = e.target.value
			},
			// 即将流向
			selecteddestNode: function(e) {
				var that = this;
				uni.showActionSheet({
					itemList: that.destNodeData,
					success: function (res) {
						that.nodeParam = that.destNodeParam[res.tapIndex];
						that.destNode = that.destNodeData[res.tapIndex];
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			// 治理资金
			selectedzlzj: function(e) {
				var that = this;
				uni.showActionSheet({
					itemList: that.zlzjData,
					success: function (res) {
						if (res.tapIndex == 0) {
							this.needGetInputOnShow = true;
							that.jumpInput(that.zlzj, 'zlzj', '请输入治理资金')
						}
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			// 整改意见
			selectedzgyj: function(e) {
				var that = this;
				uni.showActionSheet({
					itemList: that.zgyjData,
					success: function (res) {
						if (res.tapIndex == 0) {
							this.needGetInputOnShow = true;
							that.jumpInput(that.zgyj, 'zgyj', '请输入整改意见')
						}
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			// 整改情况
			selectedzgqk: function(e) {
				var that = this;
				uni.showActionSheet({
					itemList: that.zgqkData,
					success: function (res) {
						if (res.tapIndex == 0) {
							this.needGetInputOnShow = true;
							that.jumpInput(that.zgqk, 'zgqk', '请输入整改情况')
						}
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			// 原因分析
			selectedyyfx: function(e) {
				var that = this;
				uni.showActionSheet({
					itemList: that.yyfxData,
					success: function (res) {
						that.yyfx = that.yyfxData[res.tapIndex];
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			// 验证情况
			selectedyzqk: function(e) {
				var that = this;
				uni.showActionSheet({
					itemList: that.yzqkData,
					success: function (res) {
						if (res.tapIndex == 0) {
							this.needGetInputOnShow = true;
							that.jumpInput(that.yzqk, 'yzqk', '请输入验证情况')
						}
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			//审批历史
			historyClick: function() {
				var that = this;
				//跳转到审批阅读历史列表页面
				let params = {
					instId: that.instId,
					actDefId:that.actDefId
				};
				uni.setStorageSync('params',JSON.stringify(params));
				uni.navigateTo({
					url:'../danger/readHistory'
				});
			},
			//查看流程图
			flowPicClick: function() { 
				var that = this; 
				plus.runtime.openWeb(config.host+config.showFlowPic+'?actInstId='+that.instId+'&host='+config.host);
				/*
				var param={actDefId:that.actDefId};
				 request.requestLoading(config.showFlowPic, param, '正在加载', 
					function(res){
						console.log('到开流程图');
						console.log('' + JSON.stringify(res));
						var imageFlow = []; 
						imageFlow.push(config.host+res.path);
						uni.previewImage({
							urls: imageFlow
						});
					},function(){
						uni.showToast({
							icon: 'none', 
							title: '请求失败'
						});
					}, function(){
					}
				); */
			},
			//驳回（BACK 驳回(上一节点)，BACK_TO_STARTOR 驳回(发起人)）
			backFlowClick: function() {
				this.jumpType = 'BACK';
				this.saveClick();
			},
			//同意
			agreeFlowClick: function() {
				this.jumpType = 'AGREE';
				if(!this.nodeParam){
					uni.showToast({
						icon: 'none',
						title: '请选择操作节点'
					});
					return;
				}
				this.saveClick();
			},
			saveItem:function(e) {
				var that = this;
				var flag = that.fjflag;
				console.log('flag:::'+flag);
				if(flag){
					// 上传照片，需要分两种情况，如是从后台加载的，不需要调用上传接口，如果是本地读取还未上传的，需要调上传接口
					let url = config.uploadImage + '?from=flowyh&yyid=' + that.id + '&fjlx='+flag+'&userid=' + that.userInfo.userid;
					var imageList =flag==='fj2'?that.imageList2:flag==='fj3'?that.imageList3:[];
					
					var imgList = []
					for (var i=0 ; i<imageList.length; i++) {
						let item = imageList[i]
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
				}else{
					that.saveLocalItem();
				}
			},
			
			// 缓存Item，给上一个页面获取
			saveLocalItem() {
				let obj = {
					item: 0,
					index: 0
				}
				this.setSublistItem(obj);
			},
			// 保存
			saveClick() {
				var that = this; 
				let param = {
						refid: that.id,
						id: that.id,
						userid: that.userInfo.userid,
						owner:that.owner,
						destNode:that.nodeParam,
						
						taskDefKey:that.taskDefKey,
						jumpType:that.jumpType,
						actDefId:that.actDefId,
						taskId:that.taskId
					};
				//判断节点
				console.log(JSON.stringify(param));
				var nodeId = that.taskDefKey;
				if(nodeId==="sid-A0CE4647-CCC3-4A9A-81BF-09FCAB7CDCA4"||nodeId==="sid-3785D27C-9B73-4C6D-9C1C-6A4ECA6B8FFE"){
					//发起隐患 发起人关闭
				}else if(nodeId==="sid-41BC6E14-5C85-42A1-8E1B-3246FDEA682C"){//整改人整改
					param.zgwcrq = that.zgwcrq;//整改完成日期
					param.zlzj = that.zlzj;//治理资金
					param.zgr = that.zgr;//整改人
					param.tbrq = that.tbrq;//填报日期
					param.zgqk = that.zgqk;//整改情况
				}else if(nodeId==="sid-F7A5E243-31D1-42DE-9D74-0C7323EFFAF8"){//复核人复核
					param.yyfx = that.yyfx;//原因分析
					param.yzqk = that.yzqk;//验证情况
					param.yzr = that.yzr;//验证人
					param.tbrq2 = that.tbrq2;//填报日期
				}else if(nodeId==="sid-987522D1-34D6-45A4-8D16-CE1F2ACA0205" || nodeId==="sid-29BBC59F-F04B-47BF-9DE1-7C3299318DB8"){//一级审批 二级审批
					param.zgqx = that.zgqx;//整改期限
					param.tbr = that.tbr;//填报人
					param.txrq = that.txrq;//填写日期
					param.zgyj = that.zgyj;//整改意见
				}
				//console.log(JSON.stringify(param));
				request.requestLoadingNew(config.updateAndSendFlowForMobile, param, '正在加载', 
					function(res){
						uni.showToast({
							icon: 'none', 
							title: '操作成功！',
							duration: 1000,
						});
						that.saveItem();
					},function(){
						uni.showToast({
							icon: 'none',
							title: '保存失败'
						});
					},function() { 
						setTimeout(function () {
							uni.navigateBack({
								delta: 1
							})
						}, 1500)
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
						var flag = that.fjflag;
						if(flag){
							var imageList =flag==='fj2'?that.imageList2:flag==='fj3'?that.imageList3:[];
							for (var i=0;i<res.tempFilePaths.length;i++) {
								var imgObj = {//	type：1为新增需要上传，2为加载的，不需要上传
									fileid: '',
									src: res.tempFilePaths[i],
									type: 1
								}
								imageList.push(imgObj);
							}
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
							var flag = that.fjflag;
							if(flag){
								var imageList =flag==='fj2'?that.imageList2:flag==='fj3'?that.imageList3:[];
								console.log('删除成功：' + JSON.stringify(res));
								that.item.fj = res.fj
								imageList.splice(index,1);
							}
						},function(){
							uni.showToast({
								icon: 'none',
								title: '删除失败'
							});
						}, function(){
							
						}
					);
				}else {// 刚选择好，还未上传，非网络图片
					var flag = that.fjflag;
					if(flag){
						var imageList =flag==='fj2'?that.imageList2:flag==='fj3'?that.imageList3:[];
						imageList.splice(index,1);
					}
				}
			},
			// 浏览照片
			viewPhoto() {
				var that = this;
				var imgList = [];
				var imageList =that.imageList.length>0?that.imageList:that.imageList2.length>0?that.imageList2:that.imageList3;
				console.log(JSON.stringify(imageList))
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
