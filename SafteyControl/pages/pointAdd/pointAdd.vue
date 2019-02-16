<template>
	<view class="baseView">
		<view class="cellTitleView">
			<text class="cellTitle">基础信息</text>
		</view>
		<view class="cellInfoView">
			<uni-list>
				<uni-list-item title="点位编号" :note="obj.dwbh" show-arrow="false"></uni-list-item>
				<uni-list-item title="检查人" :note="obj.zrrmc" show-arrow="false"></uni-list-item>
				<picker mode="date" :value="obj.jcrq" @change="bindDateChange">
					<uni-list-item title="检查日期" :note="obj.jcrq"></uni-list-item>
				</picker>
				<uni-list-item title="责任部门" :note="obj.zrbm" show-arrow="false"></uni-list-item>
				<uni-list-item title="楼层" :note="obj.lc" show-arrow="false"></uni-list-item>
				<uni-list-item title="位置" :note="obj.wz" show-arrow="false"></uni-list-item>
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
				<uni-list-item  v-for="(item,index) in obj.sublist" :key="index" :title="item.jcbz" show-extra-icon="true" :extra-icon="getIcon(item)" @click="jumpEdit(item, index)"></uni-list-item>
			</uni-list>
		</view>
		<view class="btn-row">
		    <button type="primary" class="primary" @tap="submit">提交</button>
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
		},
		onNavigationBarButtonTap() {
			var that = this;
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
			if (this.needGetItemOnShow == true) {
				this.obj.sublist[this.sublistIndex] = this.sublistItem;
				this.needGetItemOnShow = false;
			}
		},
		methods:{
			bindDateChange: function(e) {
				this.obj.jcrq = e.target.value
			},
			jumpEdit: function(item, index) {
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
			submit() {
				var that = this;
				var param = service.copyObj(that.obj);
				param['userid'] = that.userInfo.userid;
				param['sublist'] = JSON.stringify(param['sublist']);
				request.requestLoading(config.createCheckPoint, param, '正在加载', 
					function(res){
						uni.showToast({
							icon: 'none',
							title: '新建检查成功',
							duration: 1000,
							complete() {
								uni.navigateBack({
									delta: 1
								})
							}
						});
					},function(){
						uni.showToast({
							icon: 'none',
							title: '新建检查失败'
						});
					},function() {
						
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
		flex-direction: row;
	}
</style>
