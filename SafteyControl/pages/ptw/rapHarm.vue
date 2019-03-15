<template>
	<view class="baseView">
		<view class="cellInfoView">
			<view class="cellView" @click="jumpPage('rapSolution')">
				<view class="infoView">
					<view class="cellSubView">
						<view class="cellText">物料掉落</view>
					</view>
					<image class="arrow" src="../../static/img/rightArrow.png"></image>
				</view>
				<view class="line"></view>
			</view>
			<view class="cellView" @click="jumpPage('')">
				<view class="infoView">
					<view class="cellSubView">
						<view class="cellText">工具掉落</view>
					</view>
					<image class="arrow" src="../../static/img/rightArrow.png"></image>
				</view>
				<view class="line"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import config from '../../util/config.js';
	import request from '../../util/request.js';
	import {
	    mapState,
		mapMutations
	} from 'vuex'
	export default {
		computed: mapState(['inputPageText', 'key', 'userInfo']),
		data() {
		    return {
				
		    }
		},
		onLoad(option) {
			
		},
		onShow() {
			
		},
		methods:{
			...mapMutations(['setSublistItem']),
			jumpPage(url) {
				if (url == '') {
					uni.showToast({
						icon: 'none',
						title: '敬请期待～',
					})
					return;
				}else {
					uni.navigateTo({
						url: url
					});
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
		/* justify-content: center; */
	}
	.cellTitle {
		/* width: 300upx; */
		margin-left: 20upx;
		color: #BBBBBB;
		font-size: 30upx;
	}
	.cellTitle2 {
		margin-left: 5upx;
		color: #BBBBBB;
		font-size: 30upx;
	}
	.titleRect {
		margin-left: 20upx; 
		width: 20upx; 
		height: 20upx;
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
		flex-direction: column;
		align-items: center;
	}
	.infoView {
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
	.arrow {
		width: 15upx;
		height: 25upx;
		margin-right: 18upx;
	}
	.cellText {
		margin-top: 35upx;
		margin-left: 20upx;
		margin-bottom: 35upx;
		font-size: 30upx;
		text-overflow: ellipsis;
		white-space: normal;
		color: inherit;
		line-height: 1.5;
		overflow: hidden;
		color: #666666;
	}
	.line {
		width: 100%;
		height: 1upx;
		background-color: #E8E8E8;
	}
</style>
