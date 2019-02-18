<template>
	<view class="baseView" @touchmove.stop.prevent="moveHandle">
		<view class="tabView">
			<view class="tabItemView" v-bind:style="{color: index == tabIndex ? '#2D68AA' : '#898989'}" v-for="(item, index) in tabBars" :key="index" @tap="changeTab(index)">{{item.name}}</view>
		</view>
		<view class="rowLine"></view>
		<scroll-view class="scrollView" scroll-y="true" @scroll="isScrolling">
			<swiper class="tableView" indicator-dots  
				 @change="swiperChange">  
				<swiper-item v-for="(item, index) in newsitems" :key="index">  
					<image src="../../static/img/fgBG.png" class="banner-image" mode="aspectFill" lazy-load></image>  
				</swiper-item>   
			</swiper>
			<swiper class="tableView" indicator-dots  
				 @change="swiperChange">  
				<swiper-item v-for="(item, index) in newsitems" :key="index">  
					<image src="../../static/img/fgBG.png" class="banner-image" mode="aspectFill" lazy-load></image>  
				</swiper-item>   
			</swiper>
			<swiper class="tableView" indicator-dots  
				 @change="swiperChange">  
				<swiper-item v-for="(item, index) in newsitems" :key="index">  
					<image src="../../static/img/fgBG.png" class="banner-image" mode="aspectFill" lazy-load></image>  
				</swiper-item>   
			</swiper>
			<swiper class="tableView" indicator-dots  
				 @change="swiperChange">  
				<swiper-item v-for="(item, index) in newsitems" :key="index">  
					<image src="../../static/img/fgBG.png" class="banner-image" mode="aspectFill" lazy-load></image>  
				</swiper-item>   
			</swiper>
			<swiper class="tableView" indicator-dots  
				 @change="swiperChange">  
				<swiper-item v-for="(item, index) in newsitems" :key="index">  
					<image src="../../static/img/fgBG.png" class="banner-image" mode="aspectFill" lazy-load></image>  
				</swiper-item>   
			</swiper>
			<swiper class="tableView" indicator-dots  
				 @change="swiperChange">  
				<swiper-item v-for="(item, index) in newsitems" :key="index">  
					<image src="../../static/img/fgBG.png" class="banner-image" mode="aspectFill" lazy-load></image>  
				</swiper-item>   
			</swiper>
			<swiper class="tableView" indicator-dots  
				 @change="swiperChange">  
				<swiper-item v-for="(item, index) in newsitems" :key="index">  
					<image src="../../static/img/fgBG.png" class="banner-image" mode="aspectFill" lazy-load></image>  
				</swiper-item>   
			</swiper>
			<swiper class="tableView" indicator-dots  
				 @change="swiperChange">  
				<swiper-item v-for="(item, index) in newsitems" :key="index">  
					<image src="../../static/img/fgBG.png" class="banner-image" mode="aspectFill" lazy-load></image>  
				</swiper-item>   
			</swiper>
			<swiper class="tableView" indicator-dots  
				 @change="swiperChange">  
				<swiper-item v-for="(item, index) in newsitems" :key="index">  
					<image src="../../static/img/fgBG.png" class="banner-image" mode="aspectFill" lazy-load></image>  
				</swiper-item>   
			</swiper>
			<swiper class="tableView" indicator-dots  
				 @change="swiperChange">  
				<swiper-item v-for="(item, index) in newsitems" :key="index">  
					<image src="../../static/img/fgBG.png" class="banner-image" mode="aspectFill" lazy-load></image>  
				</swiper-item>   
			</swiper>
			
			<uni-drawer :visible="showDrawer">
				<view style="padding:30upx;">
					<view class="uni-title">抽屉式导航</view>
				</view>
			</uni-drawer>
		</scroll-view>
	</view>
</template>
 
<script>
	import uniDrawer from "@/components/drawer/uni-drawer.vue"
	import service from '../../service.js';
	import config from '../../util/config.js';
	import request from '../../util/request.js';
		
	export default {
		components: {uniDrawer},
		data() {
			return {
				userid: "",
				pageRows: 15,
				lx: "点位检查", // 类型&导航栏标题
				refreshing: false,
				refreshText: "下拉可以刷新",
				tabIndex: 0,
				tabType: 0,	//0-基础（待整改、已完成、未检查），1-扩展（月中检查、周末检查、当天检查等）
				newsitems: [],
				showDrawer: false,
				tabBars: [{
				    name: '待整改',
				    id: '/mobile/dzglb.do'
				}, {
				    name: '已完成',
				    id: '/mobile/ywclb.do'
				}, {
				    name: '未检查',
				    id: '/mobile/wjclb.do'
				}]
			}
		},
		onLoad(option) {
			console.log('新建pointList')
			var that = this;
			that.lx = option.lx;
			uni.setNavigationBarTitle({
				title: that.lx
			});
			uni.getStorage({
				key: 'userInfo',
				success: function (res) {
					console.log('' + JSON.stringify(res.data.userid));
					that.userid = res.data.userid;
					that.newsitems = that.randomfn();
					// that.onrefresh(that.tabIndex);
					
					uni.getStorage({
						key: that.lx,
						success: function (res) {
							that.tabBars.push(res.data);
						},
						complete() {
							that.getTabCounts();
						}
					});
				}
			});
		},
		onUnload() {
			console.log('销毁pointList')
		},
		onNavigationBarButtonTap() {
			var that = this;
			if (that.showDrawer == true) {
				that.showDrawer = false;
			}else {
				that.showDrawer = true;
			}
		},
		methods: {
			// 正在滚动
			isScrolling: function(e) {
				console.log('正在滚动....');
			},
			// 首先生成3个Tab页对应的空模型
			randomfn: function() {
			    let ary = [];
			    for (let i = 0, length = this.tabBars.length; i < length; i++) {
			        let aryItem = {
			            loadingText: "加载更多...",
			            data: [],
						pageNum: 1
			        };
					ary.push(aryItem);
			    }
			    return ary;
			},
			// 切换Tab页面
			changeTab: function(index) {
				console.log('Tab页切换' + index);
				this.tabIndex = index;
			},
			// 请求Tab页数量
			getTabCounts(){
				var that = this;
				request.requestLoading(config.getTabCounts, {"lx": that.lx, "userid": that.userid}, '正在加载', 
					function(res){
						console.log('Tab页数量：' + JSON.stringify(res));
						for (var i=0; i<that.tabBars.length; i++) {
							var tab = that.tabBars[i];
							if (tab.name == "待整改") {
								tab.name = "待整改(" + res.dzgsl + ")"
							}else if (tab.name == "已完成") {
								tab.name = "已完成(" + res.ywcsl + ")"
							}else if (tab.name == "未检查") {
								tab.name = "未检查(" + res.wjcsl + ")"
							}else if (tab.name == "当月未检查") {
								tab.name = "当月未检查(" + res.dywjcsl + ")"
							}else if (tab.name == "本周未检查") {
								tab.name = "本周未检查(" + res.bzwjcsl + ")"
							}else if (tab.name == "当天未检查") {
								tab.name = "当天未检查(" + res.dtwjcsl + ")"
							}
						}
					},function(){
						uni.showToast({
							icon: 'none',
							title: '请求失败'
						});
					}, function(){
						
					}
				);
			},
			// 内容页滑动变化
			swiperChange: function(e) {
				this.tabIndex = e.detail.current;
			},
			moveHandle: function(e) {
				
			},
		}
	};
</script>
<style>
	.baseView {
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
		background-color: #FFFFFF;
	}
	.tabView {
		position: fixed;
		z-index: 99;
		width: 100%;
		height: 100upx;
		/* background-color: #2D68AA; */
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.tabItemViewSelected {
		width: 100%;
		height: 100%;
		color: #2D68AA;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.tabItemView {
		width: 100%;
		height: 100%;
		color: #898989;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.rowLine {
		position: fixed;
		z-index: 99;
		margin-top: 100upx;
		width: 100%;
		height: 1upx;
		background-color: #E6E6E6;
	}
	.baseTableView {
		width: 100%;
		height: 100%;
	}
	.itemView {
		position: fixed;
		margin-top: 100upx;
		width: 100%;
	}
	.scrollView {
		width: 100%;
		/* height: 100%; */
	}
	.tableView {
		width: 100%;
		/* height: 100%; */
	}
	.loading {
		text-align: center;
		line-height: 80px;
	}
	
	.banner-box{  
		width: 100%;  
		/* height: 100%;  */
	}  
	.banner-image{  
		width: 100%;  
		height: 100%;  
	}  
</style>
