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
			<text class="cellTitle">检查信息</text>
		</view>
		<view class="cellInfoView">
			<uni-list>
				<uni-list-item  v-for="(item,index) in obj.sublist" :key="index" :title="item.jcbz" show-extra-icon="true" :extra-icon="undetected" @click="jumpEdit(item)"></uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script>
	import uniList from '@/components/list/uni-list/uni-list.vue'
	import uniListItem from '@/components/list/uni-list-item/uni-list-item.vue'
	export default {
		components: {uniList,uniListItem},
		data() {
		    return {
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
		onUnload() {
		},
		methods:{
			bindDateChange: function(e) {
				this.obj.jcrq = e.target.value
			},
			jumpEdit: function(item) {
				uni.navigateTo({
					url: './pointCheckInfo?item=' + JSON.stringify(item) + '&placeholder=请输入问题描述'
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
		flex-direction: row;
	}
</style>
