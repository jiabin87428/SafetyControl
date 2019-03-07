<template>
	<view class="container">
		<view class="canvasView">
			<view class="canvas-bar">
				<view class="title">{{title}}</view>
			</view>
			<mpvue-echarts :echarts="echarts" :onInit="pieInit" canvasId="pie" ref="pieChart" />
		</view>
		
		<hj-dragabledrawer :options="options">
            <view class="fliterView">
				<text class="fliterText">开始日期</text>
				<view class="pickerView">
					<picker mode="date" :value="beginDate" @change="beginDateChange">
						<view class="pickerItem">{{beginDate == '' ? '请选择开始日期' : beginDate}}</view>
					</picker>
				</view>
				<text class="fliterText">结束日期</text>
				<view class="pickerView">
					<picker mode="date" :value="endDate" @change="endDateChange">
						<view class="pickerItem">{{endDate == '' ? '请选择结束日期' : endDate}}</view>
					</picker>
				</view>
				
				<view class="btnView" @tap="searchClick">确定</view>
			</view>
        </hj-dragabledrawer>
	</view>
</template>

<script>
	import * as echarts from '@/components/echarts/echarts.simple.min.js';
	import mpvueEcharts from '@/components/mpvue-echarts/src/echarts.vue';
	import hjDragabledrawer from '@/components/drawer/hj-dragabledrawer.vue'
	
	import service from '../../service.js';
	import config from '../../util/config.js';
	import request from '../../util/request.js';
	import {
	    mapState
	} from 'vuex'

	let pieOption = {
		animation: false,
		backgroundColor: '#FFFFFF',
		color: ['#37A2DA', '#32C5E9', '#67E0E3', '#91F2DE', '#FFDB5C', '#FF9F7F'],
		series: [{
			label: {
				normal: {
					fontSize: 14
				}
			},
			type: 'pie',
			center: ['50%', '50%'],
			radius: [0, '60%'],
			data: [],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 2, 2, 0.3)'
				}
			}
		}]
	};

	export default {
		components: {mpvueEcharts, hjDragabledrawer},
		computed: mapState(['userInfo']),
		data() {
			return {
				echarts: echarts,
				
				// 抽屉是否显示
				options: {
                    visible: false,
                    rightMode: true
                },
				// 开始日期
				beginDate: '',
				// 结束日期
				endDate: '',
				// 标题
				title: '',
				// 设备数据列表
				deviceList: [],
			}
		},
		onLoad() {
			// 加载数据统计
			this.getCountDate()
		},
		onNavigationBarButtonTap() {
			if (this.options.visible == true) {
				this.options.visible = false
			}else {
				this.options.visible = true
			}
		},
		methods: {
			pieInit(canvas, width, height) {
				let pieChart = echarts.init(canvas, null, {
					width: width,
					height: height
				})
				canvas.setChart(pieChart)

				pieChart.setOption(pieOption)
				return pieChart
			},
			// 获取统计数据
			getCountDate() {
				var that = this;
				let param = {
					ksrq: that.beginDate,
					jsrq: that.endDate,
					userid: that.userInfo.userid
				}
				request.requestLoading(config.alertEventCount, param, "正在查询统计数据", function(res){
					that.title = res.title;
					that.beginDate = res.ksrq;
					that.endDate = res.jsrq;
					pieOption.series[0].data = res.list.slice(0);
					that.$refs.pieChart.init();
					that.options.visible = false
					
					if (res.list.length == 0) {
						uni.showToast({
							icon: 'none',
							title: '暂无数据'
						})
					}
				},function(){
					uni.showToast({
						icon: 'none',
						title: '查询失败'
					})
				},function(){
					
				})
			},
			// 选择开始日期
			beginDateChange: function(e) {
				this.beginDate = e.target.value
			},
			// 选择结束日期
			endDateChange: function(e) {
				this.endDate = e.target.value
			},
			// 筛选按钮
			searchClick: function(e) {
				// 加载数据统计
				this.getCountDate()
			},
		},
	}
</script>

<style>
	page,
	view {
		display: flex;
	    font-size: 28upx;
	}
	
	page {
		min-height: 100%;
	}
	
	.page-section-title {
		padding: 0 30upx;
	}
	
	.title {
	    line-height: 1.5;
		font-size: 32upx;
		color: #606266;
		text-align: center;
	}
	
	.container {
		padding-bottom: 30upx;
		box-sizing: border-box;
	}
	
	.container,
	.canvasView {
		flex: 1;
		flex-direction: column;
	}
	
	.navigate {
		color: #007AFF;
	}
	
	.canvas-bar {
		margin-top: 30upx;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
	/*筛选栏样式*/
	.fliterView {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.fliterText {
		width: 100%;
		margin-left: 30upx;
		margin-top: 30upx;
		font-size: 32upx;
		color: #555555;
	}
	.pickerView {
		margin-top: 30upx;
		width: 90%;
		height: 80upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #C0C4CC;
	}
	.pickerItem {
		width: 350upx;
		height: 80upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.btnView {
		margin-top: 100upx;
		width: 100%;
		height: 80upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
		font-size: 32upx;
		background-color: #2D68AA;
	}
</style>
