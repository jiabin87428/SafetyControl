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
		<view class="topView">
			<text class="topTextTitle">检查总数</text>
			<text class="topTextNum">1000条</text>
		</view>
		<view class="middleView">
			<view class="btnView" @tap="openScan()">
				<image class="btnImage" src="../../static/img/scan.png"></image>
				<text class="btnText">添加检查</text>
			</view>
			<view class="vLine"></view>
			<view class="btnView" @tap="openCharts()">
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
        computed: mapState(['forcedLogin', 'hasLogin', 'userInfo']),
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
						uni.showLoading({
							title: "正在加载...",
							mask: true
						})
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
								uni.hideLoading();
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
	
	.baseView{  
	  display: flex;
	  flex: 1;
	  flex-direction: column;
	  align-items: center;
	  background-color: #FFFFFF;
	} 
	.topView {
		width: 100%;
		height: 300upx;
		background-color: #2D68AA;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.topTextTitle {
		width: 300upx;
		text-align: center;
		color: #FFFFFF;
		font-size: 30upx;
	}
	.topTextNum {
		width: 300upx;
		text-align: center;
		color: #FFFFFF;
		font-size: 60upx;
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
