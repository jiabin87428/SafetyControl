<template>
	<view class="baseView">
		<view class="title">{{title}}</view>
		<view class="canvasView">
			<mpvue-echarts :echarts="echarts" :onInit="lineInit" canvasId="line" ref="lineChart" />
		</view>
		<view class="cellInfoView">
			<uni-list>
				<uni-list-item  v-for="(name,index) in xLine" :key="index" :title="name" :subnote="lineData[index]" show-arrow="false"></uni-list-item>
			</uni-list>
		</view>
		
		<hj-dragabledrawer :options="options">
            <view class="fliterView">
				<text class="fliterText">检查内容</text>
				<view class="pickerView">
					<picker @change="checkChange" :value="lx" :range="checkDatas">
						<view class="pickerItem">{{lx == '' ? '请选择检查内容' : lx}}</view>
					</picker>
				</view>
				<text class="fliterText">楼层</text>
				<view class="pickerView">
					<picker @change="floorChange" :value="lc" :range="floorDatas">
						<view class="pickerItem">{{lc == '' ? '请选择楼层' : lc}}</view>
					</picker>
				</view>
				<text class="fliterText">阀组编号</text>
				<view class="pickerView">
					<picker @change="valveChange" :value="fz" :range="valveNumDatas">
						<view class="pickerItem">{{fz == '' ? '请选择阀组编号' : fz}}</view>
					</picker>
				</view>
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
	import uniList from '@/components/list/uni-list/uni-list.vue'
	import uniIcon from '@/components/list/uni-icon/uni-icon.vue'
	import uniListItem from '@/components/list/uni-list-item/uni-list-item.vue'
	
	import service from '../../service.js';
	import config from '../../util/config.js';
	import request from '../../util/request.js';
	import {
	    mapState
	} from 'vuex'

	var lineOption = {
		animation: false,
		color: ['#37A2DA', '#9FE6B8'],
		grid: {
			x: 35,
			x2: 10,
			y: 30,
			y2: 25
		},
		calculable: true,
		xAxis: [{
			type: 'category',
			data: []
			// data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
			// data: ["2018-12-03", "2018-12-03", "2018-12-03", "2018-12-03", "2018-12-03", "2018-12-03", "2018-12-03", "2018-12-03", "2018-12-03", "2018-12-03", "2018-12-03", "2018-12-03"]
		}],
		yAxis: [{
			type: 'value',
			splitArea: {
				show: true
			}
		}],
		series: [{
			name: '供水压力',
			type: 'line',
			data: [],
			// 显示数值
			itemStyle : { normal: {label : {show: true}}}
		}]
	};

	export default {
		components: {mpvueEcharts, hjDragabledrawer, uniList, uniListItem, uniIcon},
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
				// 检查内容
				lx: '',
				// 楼层
				lc: '',
				// 阀组
				fz: '',
				// 标题
				title: '',
				
				// X轴数据
				xLine: [],
				// 表中的数据
				lineData: [],
				
				// 楼层数据源
				floorDatas: ['1号楼', '1号楼1层', '1号楼2层', '1号楼2夹层', '1号楼3层', '1号楼4层', '1号楼地下室', '1号楼屋面', '2号楼', '2号楼1层', '1号楼2夹层', '2号楼2层', '2号楼3层', '2号楼4层', '2号楼地下室', '2号楼屋面', '3号楼', '3号楼1层', '3号楼2层', '3号楼3层', '3号楼4夹层', '3号楼4层', '4号楼', '5号楼', '5号楼1层', '5号楼2层', '5号楼屋面', '6号楼', '6号楼1层', '6号楼2层', '7号楼', '8号楼', '9号楼', '10号楼', '11号楼', '12号楼', '12号楼1层', '12号楼2层', '12号楼屋面', '14号楼', '15号楼'],
				// 检查内容数据源
				checkDatas: ['供水压力', '管网压力', '膜片腔压力'],
				// 阀组编号数据源
				valveNumDatas: [],
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
			lineInit(canvas, width, height) {
				let lineChart = echarts.init(canvas, null, {
					width: width,
					height: 200
				})
				canvas.setChart(lineChart)
			
				lineChart.setOption(lineOption)
				return lineChart
			},
			// 获取统计数据
			getCountDate() {
				var that = this;
				let param = {
					ksrq: that.beginDate,
					jsrq: that.endDate,
					userid: that.userInfo.userid,
					lx: that.lx,
					fz: that.fz,
					// lc: that.lc,
				}
				request.requestLoading(config.alertValveCount, param, "正在查询统计数据", function(res){
					that.title = res.title;
					that.beginDate = res.ksrq;
					that.endDate = res.jsrq;
					that.lx = res.lx;
					// that.lc = res.lc;
					that.fz = res.fz;
					lineOption.xAxis.data = res.xLine.slice(0);
					lineOption.series[0].data = res.data.slice(0);
					
					that.xLine = res.xLine.slice(0);
					that.lineData = res.data.slice(0);
					
					// console.log('X轴：' + JSON.stringify(lineOption.xAxis.data));
					that.$refs.lineChart.init();
					that.options.visible = false;
					
					if (res.xLine.length == 0) {
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
			// 选择检查内容
			checkChange: function(e) {
				this.lx = this.checkDatas[e.target.value];
			},
			// 选择楼层
			floorChange: function(e) {
				// 获取阀组内容
				var that = this;
				that.lc = that.floorDatas[e.target.value];
				let param = {
					lc: that.lc,
					userid: that.userInfo.userid
				}
				request.requestLoading(config.getValveDataByFloor, param, "正在查询阀组信息", function(res){
					var valves = [];
					for(var i = 0 ; i < res.data.length; i++) {
						let item = res.data[i];
						valves.push(item.id);
					}
					that.valveNumDatas = valves;
					if (valves.length == 0) {
						uni.showToast({
							icon: 'none',
							title: '该楼层无阀组数据'
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
			// 选择阀组编号
			valveChange: function(e) {
				this.fz = this.valveNumDatas[e.target.value];
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
	
	.baseView{  
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #FFFFFF;
	} 
	
	.page-section-title {
		padding: 0 30upx;
	}
	
	.title {
	    line-height: 1.5;
		font-size: 26upx;
		color: #606266;
		text-align: center;
	}
	.canvasView {
		height: 450upx;
		display: flex;
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
	
	.cellInfoView {
		width: 100%;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
	}
</style>
