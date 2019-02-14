<template>
	<!-- 轮播图 -->  
	<view class="part2">  
		<swiper class="banner-box" indicator-dots autoplay  
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
		</swiper>  
		<view class="userinfo">
		  <view class='dangerView' @tap="jumpListPage('所有记录')">
		    <image class="dangerIcon" src="../../static/img/point_all.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>所有记录</text>
		      <text class='subText'>所有记录</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="jumpListPage('消火栓')">
		    <image class="dangerIcon" src="../../static/img/point_xhs.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>消火栓</text>
		      <text class='subText'>消火栓</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="jumpListPage('阀组')">
		    <image class="dangerIcon" src="../../static/img/point_fz.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>阀组</text>
		      <text class='subText'>阀组</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="jumpListPage('高位水箱')">
		    <image class="dangerIcon" src="../../static/img/point_sx.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>高位水箱</text>
		      <text class='subText'>高位水箱</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="jumpListPage('消防泵')">
		    <image class="dangerIcon" src="../../static/img/point_xfb.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>消防泵</text>
		      <text class='subText'>消防泵</text>
		    </view>
		  </view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			let hydrantTab = {
				name: '当月检查',
				id: '/mobile/xhsdywjclb.do'
			}
			this.saveTabInfo('消火栓', hydrantTab);
			
			let valveTab = {
				name: '周末检查',
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
		methods:{
			jumpListPage(lx) {
				this.saveTabInfo('currentLx', lx);// 保存当前类型名称
				uni.navigateTo({
					url: '../pointList/uni-tabs',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			saveTabInfo(key, data){
				uni.setStorage({
						key: key,
						data: data,
						success: function () {
								console.log('success');
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
	  background-color: #efeff4;
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
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	}
	.dangerView {
	  display:flex;
	  flex-direction:row;
	  width: 90%;
	  height: 150px;
	  background-color: white;
	  margin-top: 10px;
	  border-color: #D9E5F0;
	  border-width: 1px;
	  border-radius: 10px;
	  border-style: solid;
	  align-items:center;/*垂直居中*/
	}
	.dangerIcon {
	  width: 90px;
	  margin-left: 10px;
	}

	.subView {
	  display:flex;
	  flex-direction:column;
	  height: 80%;
	  justify-content: center;/*水平居中*/
	}
	.dangerText {
	  font-size: 16;
	  color: #256FBD;
	  margin-left: 15px;
	}

	.subText {
	  font-size: 14;
	  color: #767676;
	  margin-left: 15px;
	  margin-top: 5px;
	}
</style>
