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
		  <view class='dangerView' @tap="jumpListPage">
		    <image class="dangerIcon" src="../../assets/add.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>所有记录</text>
		      <text class='subText'>所有记录</text>
		    </view>
		  </view>
		  <view class='dangerView'>
		    <image class="dangerIcon" src="../../assets/list.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>消火栓</text>
		      <text class='subText'>消火栓</text>
		    </view>
		  </view>
		  <view class='dangerView'>
		    <image class="dangerIcon" src="../../assets/list.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>阀组</text>
		      <text class='subText'>阀组</text>
		    </view>
		  </view>
		  <view class='dangerView'>
		    <image class="dangerIcon" src="../../assets/list.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>高位水箱</text>
		      <text class='subText'>高位水箱</text>
		    </view>
		  </view>
		  <view class='dangerView'>
		    <image class="dangerIcon" src="../../assets/list.png" mode="widthFix"></image>
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
		methods:{
			jumpListPage() {
				uni.navigateTo({
					url: '../pointList/uni-tabs',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
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
	  width: 45px;
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
	  margin-left: 20px;
	  margin-top: 5px;
	}
</style>
