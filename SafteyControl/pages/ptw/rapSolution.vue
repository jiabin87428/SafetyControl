<template>
	<view class="baseView">
		<view class="cellInfoView">
			<block v-for="(item,idx) in solutions" :key="idx">
				<view class="cellView">
					<view class="infoView">
						<view class="cellSubView">
							<view class="cellText">{{item.ckcsnr}}</view>
						</view>
						<view v-if="item.selected" v-bind:id="item.ckcsrecordid" class="addedText">已添加</view>
						<view v-if="!item.selected" v-bind:id="item.ckcsrecordid" class="notAddText" @click="addSolution">添加</view>
					</view>
					<view class="line"></view>
				</view>
			</block>
		</view>
		<view class="btn-row">
		    <button type="primary" class="primary" @tap="gobackToSelected">确定</button>
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
				whid: '',
				recordid: '',
				solutions: [],
				selectedSolutions: [],
		    }
		},
		onLoad(option) {
			this.whid = option.id;
			this.recordid = option.recordid;
			this.getSolutions();
		},
		onShow() {
			
		},
		methods:{
			...mapMutations(['setSublistItem']),
			addSolution: function(e) {
				var that = this;
				var view = e.currentTarget
				let param = {
					ckcsid: view.id,
					recordid: that.recordid
				};
				//添加参考措施
				request.requestLoadingNew(config.addSolution, param, '正在添加...', 
					function(res){
						if (res.success == 'true') {
							that.getSelectedSolutions();
						}
					},function(){
						
					},function() {
						
				});
			},
			getSolutions: function () {
				var that = this;
				let param = {
					whid: that.whid
				};
				//根据图标id获取考虑因素
				request.requestLoadingNew(config.getSolutionsByHarmId, param, '正在加载...', 
					function(res){
						if (res.success == 'true') {
							that.solutions = res.data.rapCkcs;
							that.getSelectedSolutions();
						}
					},function(){
						
					},function() {
						
				});
			},
			getSelectedSolutions: function(e) {
				var that = this;
				let param = {
					recordid: that.recordid
				};
				request.requestLoadingNew(config.getSelectedSolutionById, param, '正在加载...', 
					function(res){
						if (res.success == 'true') {
							that.selectedSolutions = res.data.aqcs;
							that.checkSelected();
						}
					},function(){
						
					},function() {
						
				});
			},
			checkSelected: function() {
				for(var i in this.selectedSolutions){
					let selectedItem = this.selectedSolutions[i];
					for (var j in this.solutions) {
						var item = this.solutions[j];
						if (item.ckcsrecordid == selectedItem.yckcsid) {
							item.selected = true;
							console.log('' + JSON.stringify(this.solutions));
						}
					}
				}
			},
			gobackToSelected: function(e) {
				uni.navigateBack({
					delta: 4
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
	.notAddText {
		width: 100upx;
		height: 40upx;
		border-color: #2D68AA;
		border-radius: 5upx;
		border-width: 1upx;
		border-style: solid;
		color: #2D68AA;
		font-size: 24upx;
		text-align: center;
		vertical-align: middle;
		margin-left: 20upx;
		margin-right: 20upx;
	}
	.addedText {
		width: 100upx;
		height: 40upx;
		border-color: #C8C7CC;
		border-radius: 5upx;
		border-width: 1upx;
		border-style: solid;
		color: #C8C7CC;
		font-size: 24upx;
		text-align: center;
		vertical-align: middle;
		margin-left: 20upx;
		margin-right: 20upx;
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
