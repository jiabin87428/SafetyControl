<template>
	<!-- <view class="content">
		<uni-list>
			<uni-list-item title="报警设备类型统计" @click="onClick('device')"></uni-list-item>
			<uni-list-item title="报警事件类型统计" @click="onClick('event')"></uni-list-item>
			<uni-list-item title="阀组压力统计" @click="onClick('valve')"></uni-list-item>
		</uni-list>
	</view> -->
	<view class="part2">
		<view class="titleView_pc">
			<text class="titleText_pc">消防统计</text>
		</view>
		<view class="userinfo">
		  <view class='dangerView' @tap="onClick('device')">
		    <image class="dangerIcon" src="../../static/img/pieDraw.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>报警设备类型</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="onClick('event')">
		    <image class="dangerIcon" src="../../static/img/pieDraw.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>报警事件类型</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="onClick('valve')">
		    <image class="dangerIcon" src="../../static/img/pointLineDraw.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>阀组压力</text>
		    </view>
		  </view>
		</view>
		
		<view class="titleView_pc">
			<text class="titleText_pc">隐患统计</text>
		</view>
		<view class="userinfo">
		  <view class='dangerView' @tap="onClick('device')">
		    <image class="dangerIcon" src="../../static/img/pieDraw.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>隐患分类</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="onClick('event')">
		    <image class="dangerIcon" src="../../static/img/cloumDraw.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>隐患提出</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="onClick('valve')">
		    <image class="dangerIcon" src="../../static/img/pieDraw.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>隐患状态</text>
		    </view>
		  </view>
		</view>
		
		<view class="titleView_pc">
			<text class="titleText_pc">检查统计</text>
		</view>
		<view class="userinfo">
		  <view class='dangerView' @tap="onClick('device')">
		    <image class="dangerIcon" src="../../static/img/pieDraw.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>检查类型</text>
		    </view>
		  </view>
		  <view class='dangerView'>
		  </view>
		  <view class='dangerView'>
		  </view>
		</view>
		
		<view class="titleView_pc">
			<text class="titleText_pc">变更统计</text>
		</view>
		<view class="userinfo">
		  <view class='dangerView' @tap="onClick('device')">
		    <image class="dangerIcon" src="../../static/img/pieDraw.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>变更状态</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="onClick('event')">
		    <image class="dangerIcon" src="../../static/img/cloumDraw.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>变更数量</text>
		    </view>
		  </view>
		  <view class='dangerView'>
		  </view>
		</view>
		<view class="titleView_pc">
			<text class="titleText_pc">安全培训</text>
		</view>
		<view class="userinfo">
		  <view class='dangerView' @tap="onClick('device')">
		    <image class="dangerIcon" src="../../static/img/pieDraw.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>考试分数分布</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="onClick('event')">
		    <image class="dangerIcon" src="../../static/img/pieDraw.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>培训资料分类</text>
		    </view>
		  </view>
		  <view class='dangerView' @tap="onClick('event')">
		    <image class="dangerIcon" src="../../static/img/pointLineDraw.png" mode="widthFix"></image>
		    <view class='subView'>
		      <text class='dangerText'>每周考试次数</text>
		    </view>
		  </view>
		</view>
	</view>
</template>

<script>
	import uniList from '@/components/list/uni-list/uni-list.vue'
	import uniListItem from '@/components/list/uni-list-item/uni-list-item.vue'
	export default {
		components: {uniList,uniListItem},
		methods:{
			onClick(type) {
				if (type == 'device') {// 报警设备类型统计
					uni.navigateTo({
						url: './deviceChart'
					})
				}else if (type == 'event') {// 报警事件类型统计
					uni.navigateTo({
						url: './eventChart'
					})
				}else if (type == 'valve') {// 阀组压力统计
					uni.navigateTo({
						url: './valveChart'
					})
				} else {
					uni.navigateTo({
						url: './mpvue-echarts'
					})
				}
			}
		},
	}
</script>

<style>
	.part2{  
	  display: flex;
	  flex: 1;
	  flex-direction: column;
	  background-color: #F1F1F1;
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
</style>
