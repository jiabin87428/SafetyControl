<template>
	<!-- 轮播图 -->  
	<view class="part2">  
		<swiper class="banner-box" indicator-dots autoplay  
			indicator-active-color="#169bd5"  circular  
			:interval="5000" :duration="300" indicator-color="rgba(0,0,0,.3)" v-if="userType != 1">  
			<swiper-item>  
				<image src="../../static/img/fgBG.png" class="banner-image" mode="aspectFill" lazy-load></image>  
			</swiper-item>   
		</swiper> 
<!-- 		<view class="titleView_pc" v-if="userType == 1">
			<text class="titleText_pc">数据统计</text>
			<text class="titleSubText_pc">查看更多</text>
		</view> -->
		<view class="topView_pc" @tap="jumpPage('')"  v-if="userType == 1">
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
			<image class="arrow" src="../../static/img/rightArrow_white.png" mode="aspectFit"></image>
		</view>
		
		<!-- 默认主题 -->
		<block v-if="currentTemplate == 0">
			<view class="titleView_pc">
				<text class="titleText_pc">检查管理</text>
			</view>
			<view class="menuBlockView">
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
			  <view class='dangerView' @tap="jumpListPage('阀组')" v-if="userType == 1">
			    <image class="dangerIcon" src="../../static/img/point_fz.png" mode="widthFix"></image>
			    <view class='subView'>
			      <text class='dangerText'>阀组</text>
			    </view>
			  </view>
			  <view class='dangerView' @tap="jumpListPage('高位水箱')" v-if="userType == 1">
			    <image class="dangerIcon" src="../../static/img/point_sx.png" mode="widthFix"></image>
			    <view class='subView'>
			      <text class='dangerText'>高位水箱</text>
			    </view>
			  </view>
			  <view class='dangerView' @tap="jumpListPage('消防泵')" v-if="userType == 1">
			    <image class="dangerIcon" src="../../static/img/point_xfb.png" mode="widthFix"></image>
			    <view class='subView'>
			      <text class='dangerText'>消防泵</text>
			    </view>
			  </view>
			  <view class='dangerView'>
			  </view>
			</view>
			
			<block v-if="userType == 1">
				<view class="titleView_pc">
					<text class="titleText_pc">隐患排查</text>
				</view>
				<view class="menuBlockView">
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
				<view class="menuBlockView">
				  <view class='dangerView' @tap="jumpPage('../danger/addDanger')">
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
				<view class="menuBlockView">
				  <view class='dangerView' @tap="jumpPage('../danger/addDanger')">
				    <image class="dangerIcon" src="../../static/img/zyfxpg.png" mode="widthFix"></image>
				    <view class='subView'>
				      <text class='dangerText'>作业风险评估</text>
				    </view>
				  </view>
				  <view class='dangerView' @tap="jumpPage('../danger/addDanger')">
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
				<view class="menuBlockView">
				  <view class='dangerView' @tap="jumpPage('../danger/addDanger')">
				    <image class="dangerIcon" src="../../static/img/pxzl.png" mode="widthFix"></image>
				    <view class='subView'>
				      <text class='dangerText'>培训资料</text>
				    </view>
				  </view>
				  <view class='dangerView' @tap="jumpPage('../danger/addDanger')">
				    <image class="dangerIcon" src="../../static/img/zxks.png" mode="widthFix"></image>
				    <view class='subView'>
				      <text class='dangerText'>在线考试</text>
				    </view>
				  </view>
				  <view class='dangerView' @tap="jumpPage('../danger/addDanger')">
				    <image class="dangerIcon" src="../../static/img/pxjh.png" mode="widthFix"></image>
				    <view class='subView'>
				      <text class='dangerText'>培训计划</text>
				    </view>
				  </view>
				  <view class='dangerView' @tap="jumpPage('../danger/addDanger')">
				    <image class="dangerIcon" src="../../static/img/pxkc.png" mode="widthFix"></image>
				    <view class='subView'>
				      <text class='dangerText'>培训课程</text>
				    </view>
				  </view>
				  <view class='dangerView' @tap="jumpPage('../danger/addDanger')">
				    <image class="dangerIcon" src="../../static/img/zwcs.png" mode="widthFix"></image>
				    <view class='subView'>
				      <text class='dangerText'>自我测试</text>
				    </view>
				  </view>
				  <view class='dangerView' @tap="jumpPage('../danger/addDanger')">
				    <image class="dangerIcon" src="../../static/img/tyks.png" mode="widthFix"></image>
				    <view class='subView'>
				      <text class='dangerText'>统一考试</text>
				    </view>
				  </view>
				</view>
				
				<view class="titleView_pc">
					<text class="titleText_pc">法律法规</text>
				</view>
				<view class="menuBlockView">
				  <view class='dangerView' @tap="jumpPage('../danger/addDanger')">
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
				<view class="menuBlockView">
				  <view class='dangerView' @tap="jumpPage('../danger/addDanger')">
				    <image class="dangerIcon" src="../../static/img/sfpf.png" mode="widthFix"></image>
				    <view class='subView'>
				      <text class='dangerText'>三废排放</text>
				    </view>
				  </view>
				  <view class='dangerView' @tap="jumpPage('../danger/addDanger')">
				    <image class="dangerIcon" src="../../static/img/jcjl.png" mode="widthFix"></image>
				    <view class='subView'>
				      <text class='dangerText'>监测记录</text>
				    </view>
				  </view>
				  <view class='dangerView'>
				  </view>
				</view>
			</block>
		</block>
		
		<!-- 安全标准化主题 -->
		<block v-if="currentTemplate == 1">
			<view class="titleView_pc">
				<text class="titleText_pc">目标指责</text>
			</view>
			<view class="menuBlockView">
			  <view class='dangerView' @tap="jumpPage('')">
			    <image class="dangerIcon" src="../../static/img/mb.png" mode="widthFix"></image>
			    <view class='subView'>
			      <text class='dangerText'>目标</text>
			    </view>
			  </view>
			  <view class='dangerView' @tap="jumpPage('')">
			    <image class="dangerIcon" src="../../static/img/jghzz.png" mode="widthFix"></image>
			    <view class='subView'>
			      <text class='dangerText'>机构和职责</text>
			    </view>
			  </view>
			  <view class='dangerView' @tap="jumpPage('')">
			    <image class="dangerIcon" src="../../static/img/qycy.png" mode="widthFix"></image>
			    <view class='subView'>
			      <text class='dangerText'>全员参与</text>
			    </view>
			  </view>
			  <view class='dangerView' @tap="jumpPage('')">
			    <image class="dangerIcon" src="../../static/img/aqtr.png" mode="widthFix"></image>
			    <view class='subView'>
			      <text class='dangerText'>安全投入</text>
			    </view>
			  </view>
			  <view class='dangerView' @tap="jumpPage('')">
			    <image class="dangerIcon" src="../../static/img/aqwh.png" mode="widthFix"></image>
			    <view class='subView'>
			      <text class='dangerText'>安全文化</text>
			    </view>
			  </view>
			  <view class='dangerView'>
			  </view>
			</view>
			  
		  <view class="titleView_pc">
			<text class="titleText_pc">制度化管理</text>
		  </view>
		  <view class="menuBlockView">
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/fgqd.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>法律法规</text>
			      </view>
			    </view>
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/gzzd.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>规章制度</text>
			      </view>
			    </view>
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/czlc.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>操作流程</text>
			      </view>
			    </view>
			</view>
			
			<view class="titleView_pc">
			  	<text class="titleText_pc">教育培训</text>
			  </view>
			  <view class="menuBlockView">
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/jypx.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>教育培训</text>
			      </view>
			    </view>
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/rypx.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>人员培训</text>
			      </view>
			    </view>
			    <view class='dangerView'>
			    </view>
			</view>
			
			<view class="titleView_pc">
			  	<text class="titleText_pc">现场管理</text>
			  </view>
			  <view class="menuBlockView">
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/point_all.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>设备设施</text>
			      </view>
			    </view>
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/zyaq.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>作业安全</text>
			      </view>
			    </view>
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/zyjk.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>职业健康</text>
			      </view>
			    </view>
			</view>
			
			<view class="titleView_pc">
			  	<text class="titleText_pc">安全风险管理</text>
			  </view>
			  <view class="menuBlockView">
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/aqfxgl.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>安全风险管理</text>
			      </view>
			    </view>
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/zdwxy.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>重大危险源</text>
			      </view>
			    </view>
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/yhpc.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>隐患排查</text>
			      </view>
			    </view>
				<view class='dangerView' @tap="jumpPage('')">
				  <image class="dangerIcon" src="../../static/img/ycyj.png" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>预测预警</text>
				  </view>
				</view>
				<view class='dangerView'>
				</view>
				<view class='dangerView'>
				</view>
			</view>
			
			<view class="titleView_pc">
			  	<text class="titleText_pc">应急管理</text>
			  </view>
			  <view class="menuBlockView">
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/yjzb.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>应急准备</text>
			      </view>
			    </view>
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/yjcz.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>应急处置</text>
			      </view>
			    </view>
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/yjpg.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>应急评估</text>
			      </view>
			    </view>
			</view>
			
			<view class="titleView_pc">
			  	<text class="titleText_pc">事故查处</text>
			  </view>
			  <view class="menuBlockView">
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/sgkb.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>报告</text>
			      </view>
			    </view>
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/zxks.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>调查和处理</text>
			      </view>
			    </view>
			    <view class='dangerView'>
			    </view>
			</view>
			
			<view class="titleView_pc">
			  	<text class="titleText_pc">持续改进</text>
			  </view>
			  <view class="menuBlockView">
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/jxpd.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>绩效评定</text>
			      </view>
			    </view>
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/jcjl.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>持续改进</text>
			      </view>
			    </view>
			    <view class='dangerView'>
			    </view>
			</view>
		</block>
		
		<!-- ISO45001主题 -->
		<block v-if="currentTemplate == 2">
			<view class="titleView_pc">
			  	<text class="titleText_pc">组织环境</text>
			  </view>
			  <view class="menuBlockView">
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/txgl.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>体系管理</text>
			      </view>
			    </view>
			    <view class='dangerView'>
			    </view>
			    <view class='dangerView'>
			    </view>
			</view>
			
			<view class="titleView_pc">
			  	<text class="titleText_pc">领导作用与工作人员参与</text>
			  </view>
			  <view class="menuBlockView">
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/cn.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>承诺</text>
			      </view>
			    </view>
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/jghzz.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>组织职责</text>
			      </view>
			    </view>
			    <view class='dangerView'>
			    </view>
			</view>
			
			<view class="titleView_pc">
			  	<text class="titleText_pc">策划</text>
			  </view>
			  <view class="menuBlockView">
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/wxy.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>危险源</text>
			      </view>
			    </view>
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/flfg.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>法律法规</text>
			      </view>
			    </view>
			    <view class='dangerView'>
			    </view>
			</view>
			
			<view class="titleView_pc">
			  	<text class="titleText_pc">支持</text>
			  </view>
			  <view class="menuBlockView">
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/nl.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>能力</text>
			      </view>
			    </view>
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/ys.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>意识</text>
			      </view>
			    </view>
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/gt.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>沟通</text>
			      </view>
			    </view>
			</view>
			
			<view class="titleView_pc">
			  	<text class="titleText_pc">运行</text>
			  </view>
			  <view class="menuBlockView">
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/wxy.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>危险源</text>
			      </view>
			    </view>
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/bg.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>变更</text>
			      </view>
			    </view>
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/cg.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>采购</text>
			      </view>
			    </view>
				<view class='dangerView' @tap="jumpPage('')">
				  <image class="dangerIcon" src="../../static/img/ycyj.png" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>应急响应</text>
				  </view>
				</view>
				<view class='dangerView'>
				</view>
				<view class='dangerView'>
				</view>
			</view>
			
			<view class="titleView_pc">
			  	<text class="titleText_pc">绩效评定</text>
			  </view>
			  <view class="menuBlockView">
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/jxpd.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>绩效评价</text>
			      </view>
			    </view>
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/yjcz.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>内部审核</text>
			      </view>
			    </view>
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/ygyh.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>管理评审</text>
			      </view>
			    </view>
			</view>
			
			<view class="titleView_pc">
			  	<text class="titleText_pc">改进</text>
			  </view>
			  <view class="menuBlockView">
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/pxzl.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>总则</text>
			      </view>
			    </view>
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/zysp.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>纠正措施</text>
			      </view>
			    </view>
			    <view class='dangerView' @tap="jumpPage('')">
			      <image class="dangerIcon" src="../../static/img/cxgj.png" mode="widthFix"></image>
			      <view class='subView'>
			        <text class='dangerText'>持续改进</text>
			      </view>
			    </view>
			</view>
		</block>
	</view>
</template>

<script>
	import uniDrawer from "@/components/drawer/uni-drawer.vue"
	import {
	    mapState,
	    mapMutations
	} from 'vuex'
	export default {
		computed: {
		    ...mapState(['hasLogin', 'forcedLogin', 'userType', 'userInfo'])
		},
		components: {uniDrawer},
		data() {
			return {
				// 右上角的按钮菜单
				navBtnMuen: [],
				// 当前主题: 0、默认主题 1、安全标准化主题 2、ISO45001主题
				currentTemplate: 0,
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
			
			this.setCurrentTemp();
		},
		onNavigationBarButtonTap() {
			var that = this;
			uni.showActionSheet({
				itemList: that.navBtnMuen,
				success: function (res) {
					console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
					uni.showLoading({
						title: '正在切换主题...',
					});
					setTimeout(function () {
						uni.hideLoading();
						that.currentTemplate = res.tapIndex;
						that.setCurrentTemp();
					}, 1000);
				},
				fail: function (res) {
					console.log(res.errMsg);
				}
			});
		},
		methods:{
			// 设定当前选择的主题
			setCurrentTemp() {
				this.navBtnMuen = ['默认主题', '安全标准化主题', 'ISO45001主题'];
				this.navBtnMuen[this.currentTemplate] += '[当前]';
			},
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
				uni.showToast({
					icon: 'none',
					title: '敬请期待～',
				})
				return;
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
	.menuBlockView {
	  width: 100%;
	  background-color: #FFFFFF;
	  display: flex;
	  flex-wrap: wrap;
	  flex-direction: row;
	  justify-content: space-around;
	  padding-bottom: 30upx;
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
	.arrow {
		width: 15upx;
		height: 240upx;
		margin-right: 10upx;
	}
	
</style>
