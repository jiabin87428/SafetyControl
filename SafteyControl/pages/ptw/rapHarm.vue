<template>
	<view class="baseView">
		<view class="cellInfoView">
			<block v-for="(item,idx) in harms" :key="idx">
				<view class="cellView" @click="jumpSolution(item.whrecordid)">
					<view class="infoView">
						<view class="cellSubView">
							<view class="cellText">{{item.whnr}}</view>
						</view>
						<image class="arrow" src="../../static/img/rightArrow.png"></image>
					</view>
					<view class="line"></view>
				</view>
			</block>
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
				klysid: '',
				harms: [],
		    }
		},
		onLoad(option) {
			this.klysid = option.id;
			this.getHarms();
		},
		onShow() {
			
		},
		methods:{
			...mapMutations(['setSublistItem']),
			jumpSolution(hramId) {
				uni.navigateTo({
					url: 'rapSolution?id=' + hramId
				});
			},
			getHarms: function () {
				var that = this;
				let param = {
					klysid: that.klysid
				};
				//根据图标id获取考虑因素
				request.requestLoadingNew(config.getHarmByConsi, param, '正在加载考虑因素...', 
					function(res){
						if (res.success == 'true') {
							that.harms = JSON.parse(res.data).rapWh;
						}
					},function(){
						
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
