<template>
	<view class="baseView">
		<view class="cellTitleView">
			<text class="cellTitle">{{item.jcbz}}</text>
		</view>
		<view class="cellInfoView">
			<uni-list>
				<picker :value="index" :range="typeArray" @change="bindTypeChange">
					<uni-list-item title="检查结论" :note="item.jcjl"></uni-list-item>
				</picker>
				<uni-list-item title="问题描述" :note="item.jcwtms" @click="jumpInput(item.jcwtms)"></uni-list-item>
				<picker :value="index" :range="rectifyTypes" @change="bindRectifyChange">
					<uni-list-item title="整改方式" :note="item.zgfs"></uni-list-item>
				</picker>
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
				typeArray: ['正常', '未检', '异常'],
				rectifyTypes: ['立即整改', '整改通知', '整改中'],
		        item: '',
		    }
		},
		onLoad(option) {
			this.item = JSON.parse(option.item);
		},
		methods:{
			bindTypeChange(e) {
				this.item.jcjl = this.typeArray[e.detail.value];
			},
			bindRectifyChange(e) {
				this.item.zgfs = this.rectifyTypes[e.detail.value];
			},
			jumpInput(text) {
				uni.navigateTo({
					url: '../common/inputPage?text=' + text,
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
