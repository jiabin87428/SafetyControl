<template>
	<!-- 轮播图 -->  
	<view class="part2">  
		<!-- <swiper class="banner-box" indicator-dots autoplay  
			indicator-active-color="#169bd5"  circular  
			:interval="5000" :duration="300" indicator-color="rgba(0,0,0,.3)">  
			<swiper-item>  
				<image src="../../static/img/fgBG.png" class="banner-image" mode="aspectFill" lazy-load></image>  
			</swiper-item>  
			<swiper-item>  
				<image src="../../static/img/fgBG.png" class="banner-image" mode="aspectFill" lazy-load></image>  
			</swiper-item>  
			<swiper-item>  
				<image src="../../static/img/fgBG.png" class="banner-image" mode="aspectFill" lazy-load></image>  
			</swiper-item>  
			<swiper-item>  
				<image src="../../static/img/fgBG.png" class="banner-image" mode="aspectFill" lazy-load></image>  
			</swiper-item>  
		</swiper> --> 
		<view class="titleView_pc">
			<text class="titleText_pc">数据统计</text>
			<text class="titleSubText_pc">查看更多</text>
		</view>
		<view class="topView_pc" @tap="getCount('正在获取统计数据')">
			<view class="topItemView">
				<text class="topTextTitle">隐患总数</text>
				<text class="topTextNum">1005</text>
			</view>
			<view class="topItemView">
				<text class="topTextTitle">事故总数</text>
				<text class="topTextNum">600</text>
			</view>
			<view class="topItemView">
				<text class="topTextTitle">检查次数</text>
				<text class="topTextNum">2000</text>
			</view>
		</view>
		<view class="titleView_pc">
			<text class="titleText_pc">检查管理</text>
		</view>
		<view class="userinfo">
		  <view class='dangerView' @tap="jumpListPage('所有记录')">
		    <image class="dangerIcon" src="../../static/img/point_all.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>所有记录</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="jumpListPage('消火栓')">
		    <image class="dangerIcon" src="../../static/img/point_xhs.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>消火栓</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="jumpListPage('阀组')">
		    <image class="dangerIcon" src="../../static/img/point_fz.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>阀组</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="jumpListPage('高位水箱')">
		    <image class="dangerIcon" src="../../static/img/point_sx.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>高位水箱</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="jumpListPage('消防泵')">
		    <image class="dangerIcon" src="../../static/img/point_xfb.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>消防泵</text>
		    </view>
		  </view>
		  <view class='dangerView'>
		  </view>
		</view>
		
		<view class="titleView_pc">
			<text class="titleText_pc">隐患排查</text>
		</view>
		<view class="userinfo">
		  <view class='dangerView' @tap="jumpPage('../danger/addDanger')">
		    <image class="dangerIcon" src="../../static/img/yhsb.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>隐患上报</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="jumpPage('../danger/dangerList')">
		    <image class="dangerIcon" src="../../static/img/yhsp.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>隐患审批</text>
		    </view>
		  </view>
		  <view class='dangerView'>
		  </view>
		  <!-- <view class='dangerView' @tap="jumpListPage('已整改隐患')">
		    <image class="dangerIcon" src="../../static/img/ygyh.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>已整改隐患</text>
		    </view>
		  </view> -->
		</view>
		
		<view class="titleView_pc">
			<text class="titleText_pc">事故管理</text>
		</view>
		<view class="userinfo">
		  <view class='dangerView' @tap="jumpListPage('事故快报')">
		    <image class="dangerIcon" src="../../static/img/sgkb.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>事故快报</text>
		    </view>
		  </view>
		  <view class='dangerView'>
		  </view>
		  <view class='dangerView'>
		  </view>
		</view>
		
		<view class="titleView_pc">
			<text class="titleText_pc">作业管理</text>
		</view>
		<view class="userinfo">
		  <view class='dangerView' @tap="jumpListPage('作业风险评估')">
		    <image class="dangerIcon" src="../../static/img/zyfxpg.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>作业风险评估</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="jumpListPage('作业审批')">
		    <image class="dangerIcon" src="../../static/img/zysp.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>作业审批</text>
		    </view>
		  </view>
		  <view class='dangerView'>
		  </view>
		</view>
		
		<view class="titleView_pc">
			<text class="titleText_pc">安全培训</text>
		</view>
		<view class="userinfo">
		  <view class='dangerView' @tap="jumpListPage('培训资料')">
		    <image class="dangerIcon" src="../../static/img/pxzl.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>培训资料</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="jumpListPage('在线考试')">
		    <image class="dangerIcon" src="../../static/img/zxks.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>在线考试</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="jumpListPage('培训计划')">
		    <image class="dangerIcon" src="../../static/img/pxjh.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>培训计划</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="jumpListPage('培训课程')">
		    <image class="dangerIcon" src="../../static/img/pxkc.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>培训课程</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="jumpListPage('自我测试')">
		    <image class="dangerIcon" src="../../static/img/zwcs.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>自我测试</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="jumpListPage('统一考试')">
		    <image class="dangerIcon" src="../../static/img/tyks.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>统一考试</text>
		    </view>
		  </view>
		</view>
		
		<view class="titleView_pc">
			<text class="titleText_pc">法律法规</text>
		</view>
		<view class="userinfo">
		  <view class='dangerView' @tap="jumpListPage('法规清单')">
		    <image class="dangerIcon" src="../../static/img/fgqd.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>法规清单</text>
		    </view>
		  </view>
		  <view class='dangerView'>
		  </view>
		  <view class='dangerView'>
		  </view>
		</view>
		
		<view class="titleView_pc">
			<text class="titleText_pc">环保管理</text>
		</view>
		<view class="userinfo">
		  <view class='dangerView' @tap="jumpListPage('三废排放')">
		    <image class="dangerIcon" src="../../static/img/sfpf.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>三废排放</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="jumpListPage('监测记录')">
		    <image class="dangerIcon" src="../../static/img/jcjl.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>监测记录</text>
		    </view>
		  </view>
		  <view class='dangerView'>
		  </view>
		</view>
	</view>
</template>

<script>
	import uniDrawer from "@/components/drawer/uni-drawer.vue"
	export default {
		components: {uniDrawer},
		data() {
			return {
				showDrawer: false,
			}
		},
		onLoad() {
			let hydrantTab = {
				name: '当月未检查',
				id: '/mobile/xhsdywjclb.do'
			}
			this.saveTabInfo('消火栓', hydrantTab);
			
			let valveTab = {
				name: '本周未检查',
				id: '/mobile/fzzwjclb.do'
			}
			this.saveTabInfo('阀组', valveTab);
			
			let waterTab = {
				name: '当天未检查',
				id: '/mobile/jtwjclb.do'
			}
			this.saveTabInfo('高位水箱', waterTab);
			this.saveTabInfo('消防泵', waterTab);
			
		},
		onNavigationBarButtonTap() {
			var that = this;
			if (that.showDrawer == true) {
				that.showDrawer = false;
			}else {
				that.showDrawer = true;
			}
		},
		methods:{
			jumpListPage(lx) {
				this.saveTabInfo('currentLx', lx);// 保存当前类型名称
// 				uni.navigateTo({
// 					url: '../pointList/pointList?lx=' + lx,
// 				});
				uni.navigateTo({
					url: '../pointList/uni-tabs'
				});
			},
			jumpPage(url) {
				uni.navigateTo({
					url: url
				});
			},
			saveTabInfo(key, data){
				uni.setStorage({
						key: key,
						data: data,
						success: function () {
								console.log('保存成功');
						}
				});
			}
		},
	}
</script>

<style>
	/* 轮播图 */  
	.part2{  
	  display: flex;
	  flex: 1;
	  flex-direction: column;
	  background-color: #F1F1F1;
	}   
	.banner-box{  
		width: 100%;  
		/* height: 100%;  */
	}  
	.banner-image{  
		width: 100%;  
		height: 100%;  
	}  
	/* 菜单按钮 */
	.userinfo {
	  width: 100%;
	  background-color: #FFFFFF;
	  display: flex;
	  flex-wrap: wrap;
	  flex-direction: row;
	  justify-content: space-around;
	}
	.dangerView {
	  display:flex;
	  flex-direction:column;
	  width: 30%;
	  margin-top: 50px;
	  align-items:center;/*垂直居中*/
	}
	.dangerIcon {
	  width: 80upx;
	  height: 80upx;
	}

	.subView {
	  display:flex;
	  flex-direction:column;
	  width: 100%;
	  margin-top: 10px;
	  align-items:center;/*垂直居中*/
	}
	.dangerText {
		width: 100%;
		font-size: 16;
		color: #898989;
		text-align: center;
	}
	
	.titleView_pc {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 20upx;
		width: 100%;
		height: 80upx;
		background-color: #FFFFFF;
		border-bottom-width: 1px;
		border-bottom-style: solid;
		border-bottom-color: #F1F1F1;
	}
	.titleText_pc {
		margin-left: 30upx;
		color: #666666;
		width: 100%;
		text-align: left;
		font-size: 32upx;
	}
	.titleSubText_pc {
		width: 200upx;
		margin-right: 10upx;
		color: #999999;
		text-align: right;
		font-size: 28upx;
	}
	/*顶部统计*/
	.moreCount {
		position: absolute;
		top: 10upx;
		right: 10upx;
		color: #FFFFFF;
		font-size: 16;
	}
	.topView_pc {
/* 		width: 100%;
		height: 240upx;
		margin-top: 0upx;
		background-color: #2D68AA;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between; */
		
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-around;
		background-color: #2D68AA;
	}
	.topItemView {
		width: 30%;
		height: 240upx;
		/* background-color: #2D68AA; */
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
	
</style>
