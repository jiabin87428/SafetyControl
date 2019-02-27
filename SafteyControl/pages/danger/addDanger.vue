<template>
	<view class="baseView">
		<view class="cellTitleView">
			<text class="cellTitle">隐患信息</text>
		</view>
		<view class="cellInfoView">
			<uni-list>
				<uni-list-item title="隐患描述" show-arrow="true" @click="jumpInput('')"></uni-list-item>
				<uni-list-item title="整改要求" show-arrow="true" @click="jumpInput('')"></uni-list-item>
				<uni-list-item title="临时预防措施" show-arrow="true" @click="jumpInput('')"></uni-list-item>
				<uni-list-item title="隐患等级" show-arrow="true" @click="jumpInput('')"></uni-list-item>
				<uni-list-item title="隐患类型" show-arrow="true" @click="jumpInput('')"></uni-list-item>
				<uni-list-item title="整改负责人" show-arrow="true" @click="jumpInput('')"></uni-list-item>
				<uni-list-item title="整改期限" show-arrow="true" @click="jumpInput('')"></uni-list-item>
				<uni-list-item title="隐患发现人" show-arrow="true" @click="jumpInput('')"></uni-list-item>
				<uni-list-item title="隐患发现部门" show-arrow="true" @click="jumpInput('')"></uni-list-item>
				<uni-list-item title="隐患发现日" show-arrow="true" @click="jumpInput('')"></uni-list-item>
				<uni-list-item title="责任部门" show-arrow="true" @click="jumpInput('')"></uni-list-item>
			</uni-list>
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
	    mapState
	} from 'vuex'
	export default {
		computed: mapState(['sublistItem', 'sublistIndex', 'userInfo']),
		components: {uniList,uniListItem,uniIcon},
		data() {
		    return {
				// 当页面OnShow的时候是否需要从state里去拿Item对象 - 用于页面反传参数
				needGetItemOnShow: false,
				// 当页面OnShow的时候是否需要从state里去拿输入的内容
				needGetInputOnShow: false,
				// 是否显示关单按钮-扫码后是没id的，所以只能显示一个保存按钮,只有有id并且status=1的情况下，才显示保存和关单按钮
				showClose: false,
				showSave: false,
				// 是否可编辑
				editable: false,
				
		    obj: '',
				normal: {// 正常图标
					color: '#24BE41',
					size: '22',
					type: 'checkbox-filled'
				},
				undetected: {// 未检图标
					color: '#FFDE52',
					size: '22',
					type: 'info-filled'
				},
				abnormal: {// 异常图标
					color: '#C11E1E',
					size: '22',
					type: 'clear'
				},
		    }
		},
		onLoad(option) {
// 			this.obj = JSON.parse(option.obj);
// 			this.checkShowClose();
		},
		onNavigationBarButtonTap() {
			var that = this;
			if (that.editable == false) {
				uni.showToast({
					icon: 'none',
					title: '已关单 无法编辑',
					duration: 1000,
				})
				return;
			}
			uni.showModal({
				title: '提示',
				content: '确认要设置所有的检查点都正常吗？',
				success: function (res) {
					if (res.confirm) {
						// console.log('用户点击确定');
						for (var i = 0; i < that.obj.sublist.length; i++) {
							var item = that.obj.sublist[i];
							item["jcjl"] = "正常";
							item["jcwtms"] = "";
							item["zgfs"] = "";
						}
					} else if (res.cancel) {
						// console.log('用户点击取消');
					}
				}
			});
		},
		onShow() {
			if (this.needGetItemOnShow == true && this.sublistIndex != null && this.sublistItem != null) {
				console.log('' + JSON.stringify(this.sublistItem));
				this.obj.sublist[this.sublistIndex] = this.sublistItem;
			}
			this.needGetItemOnShow = false;
		},
		methods:{
			bindDateChange: function(e) {
				this.obj.jcrq = e.target.value
			},
			jumpEdit: function(item, index) {
				if (this.editable == false) {
					return;
				}
				this.needGetItemOnShow = true;
				uni.navigateTo({
					url: './pointCheckInfo?item=' + JSON.stringify(item) + '&index=' + index
				});
			},
			getIcon(item) {
				if (item.jcjl == '正常') {
					return this.normal;
				}else if (item.jcjl == '异常') {
					return this.abnormal;
				}else {
					return this.undetected;
				}
			},
			// 保存
			saveClick() {
// 				var that = this;
// 				var param = service.copyObj(that.obj);
// 				param['userid'] = that.userInfo.userid;
// 				param['sublist'] = JSON.stringify(param['sublist']);
// 				request.requestLoading(config.UpdatePoint, param, '正在加载', 
// 					function(res){
// 						uni.showToast({
// 							icon: 'none',
// 							title: '保存成功',
// 							duration: 1000,
// 						});
// 						// that.obj.status = res.status;
// 						that.obj.id = res.id;
// 						that.checkShowClose();
// 					},function(){
// 						uni.showToast({
// 							icon: 'none',
// 							title: '保存失败'
// 						});
// 					},function() {
// 						
// 					});
			},
			// 关单
			closeClick(){
				var that = this;
				var param = service.copyObj(that.obj);
				param['userid'] = that.userInfo.userid;
				param['sublist'] = JSON.stringify(param['sublist']);
				param['status'] = '2';
				request.requestLoading(config.UpdatePoint, param, '正在加载', 
					function(res){
						uni.showToast({
							icon: 'none',
							title: '关单成功',
							duration: 1000,
						});
						that.obj.status = res.status;
						that.obj.id = res.id;
						that.checkShowClose();
					},function(){
						uni.showToast({
							icon: 'none',
							title: '关单失败'
						});
					},function() {
						
					});
			},
			// 判断是否显示关单按钮
			checkShowClose() {
				if (this.obj.status == '1' && this.obj.id != null && this.obj.id != '') {
					this.showClose = true;
				}else {
					this.showClose = false;
				}
				
				// status为2，已关单，不能编辑
				if (this.obj.status == '2') {
					this.showSave = false;
					this.editable = false;
				}else {
					this.showSave = true;
					this.editable = true;
				}
			},
			jumpInput(text) {
				this.needGetInputOnShow = true;
				uni.navigateTo({
					url: '../common/inputPage?text=' + text + '&key=jcwtms&placeholder=请输入问题描述',
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
		flex-direction: row;
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
</style>
