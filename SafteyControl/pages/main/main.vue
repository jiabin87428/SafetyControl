<template>
    <view class="baseView">
        <!-- <view v-if="hasLogin" class="hello">
            <view class="title">
                您好 {{userInfo.username}}，您已成功登录。
            </view>
            <view class="ul">
                <view>这是 uni-app 带登录模板的示例App首页。</view>
                <view>在 “我的” 中点击 “退出” 可以 “注销当前账户”</view>
            </view>
        </view>
        <view v-if="!hasLogin" class="hello">
            <view class="title">
                您好 游客。
            </view>
            <view class="ul">
                <view>这是 uni-app 带登录模板的示例App首页。</view>
                <view>在 “我的” 中点击 “登录” 可以 “登录您的账户”</view>
            </view>
        </view> -->
		<view class="topView" @tap="getCount('正在获取统计数据')" v-if="userType == 1">
			<view class="topItemView">
				<text class="topTextTitle">阀组本周未检</text>
				<text class="topTextNum">{{bzwjcsl}}</text>
			</view>
			<view class="topItemView">
				<text class="topTextTitle">当天火警</text>
				<text class="topTextNum">{{dthjs}}</text>
			</view>
			<view class="topItemView">
				<text class="topTextTitle">已整改</text>
				<text class="topTextNum">{{dywjcsl}}</text>
			</view>
		</view>
		<swiper class="banner-box" indicator-dots autoplay  
			indicator-active-color="#169bd5"  circular  
			:interval="5000" :duration="300" indicator-color="rgba(0,0,0,.3)" v-if="userType != 1">  
			<swiper-item>  
				<image src="../../static/img/fgBG.png" class="banner-image" mode="aspectFill" lazy-load></image>  
			</swiper-item>   
		</swiper>
		<view class="middleView">
			<view class="btnView" @tap="openScan()">
				<image class="btnImage" src="../../static/img/scan.png"></image>
				<text class="btnText">添加检查</text>
			</view>
			<view class="vLine" v-if="userType == 1"></view>
			<view class="btnView" @tap="openCharts()" v-if="userType == 1">
				<image class="btnImage" src="../../static/img/chart.png"></image>
				<text class="btnText">数据统计</text>
			</view>
		</view>
		<view class="hLine"></view>
    </view>
</template>

<script>
	import service from '../../service.js';
	import config from '../../util/config.js';
	import request from '../../util/request.js';
    import {
        mapState,
		mapMutations
    } from 'vuex'

    export default {
        computed: mapState(['forcedLogin', 'hasLogin', 'userType', 'userInfo']),
		data() {
		    return {
				// 阀组本周未检查数量
				bzwjcsl: '正在读取...',
				// 当天火警数
				dthjs: '正在读取...',
				// 当月未检查数量
				dywjcsl: '正在读取...',
			}
		},
		methods: {
		    ...mapMutations(['login']),
			// 扫一扫
			openScan() {
				var that = this;
				// 允许从相机和相册扫码
				uni.scanCode({
					success: function (res) {
// 						console.log('条码类型：' + res.scanType);
// 						console.log('条码内容：' + res.result);

// 						uni.showToast({
// 							icon: 'none',
// 							title: '条码内容：' + res.result
// 						});
						
						let param = {
							userid: that.userInfo.userid,
							dwbh: res.result,
						};
						request.requestLoading(config.scan, param, '正在加载', 
							function(res){
								// console.log('' + JSON.stringify(res));
								uni.navigateTo({
									url: '../pointAdd/pointAdd?obj=' + JSON.stringify(res)
								});
							},function(){
								uni.showToast({
									icon: 'none',
									title: '请求失败'
								});
							},function() {
								
							});
					}
				});
			},
			// 数据图表统计
			openCharts() {
				uni.navigateTo({
					url: '../mpvue-echarts/chartList'
				})
			},
			// 顶部数据统计
			getCount(message = "") {
				var that = this;
				let params = {
					userid: that.userInfo.userid
				};
				request.requestLoading(config.getMainPageCount, params, message, function(res){
					console.log('' + JSON.stringify(res));
					that.bzwjcsl = res.bzwjcsl;
					that.dthjs = res.dthjs;
					that.dywjcsl = res.dywjcsl;
				}, function(){
					that.bzwjcsl = "获取失败，点击重新获取";
					that.dthjs = "获取失败，点击重新获取";
					that.dywjcsl = "获取失败，点击重新获取";
				}, function(){
					
				})
			},
		},
        onShow() {
			this.login(service.getUsers());
            if (!this.hasLogin) {
                uni.showModal({
                    title: '未登录',
                    content: '您未登录，需要登录后才能继续',
                    /**
                     * 如果需要强制登录，不显示取消按钮
                     */
                    showCancel: !this.forcedLogin,
                    success: (res) => {
                        if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
                            if (this.forcedLogin) {
                                uni.reLaunch({
                                    url: '../login/login'
                                });
                            } else {
                                uni.navigateTo({
                                    url: '../login/login'
                                });
                            }
                        }
                    }
                });
            }else {
				if (this.userType == 1) {
					this.getCount();
				}
			}
        }
    }
</script>

<style>
    /* .hello {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .title {
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul {
        font-size: 30upx;
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul>view {
        line-height: 50upx;
    } */
	
	.banner-box{  
		width: 100%; 
	}
	.banner-image{  
		width: 100%;  
		height: 100%;  
	} 
	.baseView{  
	  display: flex;
	  flex: 1;
	  flex-direction: column;
	  align-items: center;
	  background-color: #FFFFFF;
	} 
	.topView {
		width: 100%;
		height: 240upx;
		background-color: #2D68AA;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.topItemView {
		width: 100%;
		height: 300upx;
		background-color: #2D68AA;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.topTextTitle {
		width: 100%;
		text-align: center;
		color: #FFFFFF;
		font-size: 30upx;
	}
	.topTextNum {
		width: 100%;
		text-align: center;
		color: #FFFFFF;
		font-size: 40upx;
	}
	.middleView {
		width: 100%;
		height: 200upx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
	.btnView {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.btnImage {
		width: 100upx;
		height: 100upx;
	}
	.vLine {
		width: 1upx;
		height: 130upx;
		background-color: #B0B0B0;
	}
	.btnText {
		text-align: center;
		color: #6D6D6D;
		font-size: 24upx;
		font-style: normal;
	}
	.hLine {
		width: 95%;
		height: 1upx;
		background-color: #E8E8E8;
	}
</style>
