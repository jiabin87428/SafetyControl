<template>
	<view class="baseView">
		<view class="cellTitleView">
			<text class="cellTitle">基础信息</text>
		</view>
		<view class="cellInfoView">
			<uni-list>
				<uni-list-item title="点位编号" :subnote="obj.dwbh" show-arrow="false" show-badge="true"></uni-list-item>
				<uni-list-item title="检查人" :subnote="obj.zrrmc" show-arrow="false"></uni-list-item>
				<picker mode="date" :value="obj.jcrq" @change="bindDateChange">
					<uni-list-item title="检查日期" :subnote="obj.jcrq"></uni-list-item>
				</picker>
				<uni-list-item title="责任部门" :subnote="obj.zrbm" show-arrow="false"></uni-list-item>
				<uni-list-item title="楼层" :subnote="obj.lc" show-arrow="false"></uni-list-item>
				<uni-list-item title="位置" :subnote="obj.wz" show-arrow="false"></uni-list-item>
				<!--<uni-list-item title="禁用状态" disabled="true" show-badge="true" badge-text="12"></uni-list-item>
				 <uni-list-item title="检查日期" show-badge="true" badge-text="12"></uni-list-item>
				<uni-list-item title="禁用状态" disabled="true" show-badge="true" badge-text="12"></uni-list-item> -->
			</uni-list>
		</view>
		<view class="cellTitleView">
			<text class="cellTitle">检查信息 </text>
			<text class="cellTitle">正常-</text>
			<uni-icon type="checkbox-filled" size="22" color="#24BE41"></uni-icon>
			<text class="cellTitle">未检-</text>
			<uni-icon type="info-filled" size="22" color="#FFDE52"></uni-icon>
			<text class="cellTitle">异常-</text>
			<uni-icon type="clear" size="22" color="#C11E1E"></uni-icon>
		</view>
		<view class="cellInfoView">
			<uni-list>
				<uni-list-item  v-for="(item,index) in obj.sublist" :key="index" :title="item.jcbz" :note="item.jcwtms" show-extra-icon="true" :show-arrow="editable" :extra-icon="getIcon(item)" @click="jumpEdit(item, index)"></uni-list-item>
			</uni-list>
		</view>
		<view class="btnView">
		    <button class="saveBtn" v-if="showSave" @tap="saveClick">保存</button>
				<button class="closeBtn" v-if="showClose" @tap="closeClick">关单</button>
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
		computed: mapState(['sublistItem', 'sublistIndex', 'userInfo']),
		components: {uniList,uniListItem,uniIcon},
		data() {
		    return {
				// 当页面OnShow的时候是否需要从state里去拿Item对象 - 用于页面反传参数
				needGetItemOnShow: false,
				// 是否显示关单按钮-扫码后是没id的，所以只能显示一个保存按钮,只有有id并且status=1的情况下，才显示保存和关单按钮
				showClose: false,
				showSave: false,
				// 是否可编辑
				editable: false,
				// 页面返回标志 true是不能返回，false是可以返回，很奇怪
				backPressFlag: true,
				
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
			this.obj = JSON.parse(option.obj);
			this.checkShowClose();
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
		onBackPress() {
			var that = this;
			if (that.backPressFlag == true) {
				uni.showModal({
					title: '请确认是否有修改需要保存',
					content: '如果直接返回，所有修改将不作保存。',
					confirmText: '保存一下',
					cancelText: '直接返回',
					success: function (res) {
						if (res.confirm) {
							that.saveClick();
						} else if (res.cancel) {
							that.backPressFlag = false;
							console.log('backPressFlag2: ' + that.backPressFlag);
							uni.navigateBack({
								delta: 1
							})
						}
					}
				});
				console.log('backPressFlag1: ' + that.backPressFlag);
				return that.backPressFlag;
			}
		},
		onShow() {
			if (this.needGetItemOnShow == true && this.sublistIndex != null && this.sublistItem != null) {
				console.log('' + JSON.stringify(this.sublistItem));
				this.obj.sublist[this.sublistIndex] = this.sublistItem;
				this.removeSublistItem();
				console.log('1111111')
			}
			this.needGetItemOnShow = false;
		},
		methods:{
			...mapMutations(['removeSublistItem']),
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
				var that = this;
				var param = service.copyObj(that.obj);
				param['userid'] = that.userInfo.userid;
				param['sublist'] = JSON.stringify(param['sublist']);
				request.requestLoading(config.UpdatePoint, param, '正在加载', 
					function(res){
						uni.showToast({
							icon: 'none',
							title: '保存成功',
							duration: 1000,
						});
						// that.obj.status = res.status;
						that.obj.id = res.id;
						that.checkShowClose();
					},function(){
						uni.showToast({
							icon: 'none',
							title: '保存失败'
						});
					},function() {
						
					});
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
