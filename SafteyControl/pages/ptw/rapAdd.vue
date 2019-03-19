<template>
	<view class="part2">  
		<block>
			<view class="titleView_pc">
				<text class="titleText_pc">工况</text>
			</view>
			<view class="menuBlockView">
			  <view id="8" class='dangerView' @tap="jumpConsider">
			    <image class="dangerIcon" src="../../static/img/rap/8.jpg" mode="widthFix"></image>
			    <view class='subView'>
			      <text class='dangerText'>屋顶作业</text>
			    </view>
			  </view>
			  <view id="9" class='dangerView' @tap="jumpConsider">
			    <image class="dangerIcon" src="../../static/img/rap/9.jpg" mode="widthFix"></image>
			    <view class='subView'>
			      <text class='dangerText'>地下作业</text>
			    </view>
			  </view>
			  <view id="11" class='dangerView' @tap="jumpConsider">
			    <image class="dangerIcon" src="../../static/img/rap/11.jpg" mode="widthFix"></image>
			    <view class='subView'>
			      <text class='dangerText'>非常规进入</text>
			    </view>
			  </view>
			  <view id="35" class='dangerView' @tap="jumpConsider">
			    <image class="dangerIcon" src="../../static/img/rap/35.jpg" mode="widthFix"></image>
			    <view class='subView'>
			      <text class='dangerText'>登高作业</text>
			    </view>
			  </view>
			  <view id="54" class='dangerView' @tap="jumpConsider">
			    <image class="dangerIcon" src="../../static/img/rap/54.jpg" mode="widthFix"></image>
			    <view class='subView'>
			      <text class='dangerText'>路边作业</text>
			    </view>
			  </view>
			  <view id="60" class='dangerView' @tap="jumpConsider">
			    <image class="dangerIcon" src="../../static/img/rap/60.jpg" mode="widthFix"></image>
			    <view class='subView'>
			      <text class='dangerText'>临时作业棚</text>
			    </view>
			  </view>
			  <view id="61" class='dangerView' @tap="jumpConsider">
			    <image class="dangerIcon" src="../../static/img/rap/61.jpg" mode="widthFix"></image>
			    <view class='subView'>
			      <text class='dangerText'>封路</text>
			    </view>
			  </view>
				<view id="81" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/81.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>设备拆离</text>
				  </view>
				</view>
				<view id="87" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/87.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>石棉/陶瓷</text>
				  </view>
				</view>
				<view id="88" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/88.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>水上作业</text>
				  </view>
				</view>
				<view id="88-1" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/88-1.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>潜水/水下作业</text>
				  </view>
				</view>
				<view id="92-1" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/92-1.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>装置区</text>
				  </view>
				</view>
				<view id="92-2" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/92-2.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>罐区</text>
				  </view>
				</view>
				<view id="92-3" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/92-3.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>热的区域和表面</text>
				  </view>
				</view>
				<view id="92-4" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/92-4.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>危险物料</text>
				  </view>
				</view>
				<view id="92-5" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/92-5.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>在火炬区域工作</text>
				  </view>
				</view>
				<view id="92-6" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/92-6.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>运行设备上作业</text>
				  </view>
				</view>
				<view id="92-7" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/92-7.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>加玻璃/聚四氟乙烯衬里的装置</text>
				  </view>
				</view>
				<view id="92-8" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/92-8.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>冷却塔</text>
				  </view>
				</view>
				<view id="92-9" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/92-9.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>非装置区</text>
				  </view>
				</view>
				<view id="99" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/99.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>受限空间</text>
				  </view>
				</view>
				<view id="99" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/99.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>受限空间</text>
				  </view>
				</view>
				<view id="99-2" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/99-2.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>受限空间-脏的</text>
				  </view>
				</view>
				<view id="99-3" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/99-3.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>受限空间-惰性气体</text>
				  </view>
				</view>
				<view id="117" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/117.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>固定消防设备</text>
				  </view>
				</view>
				<view id="396" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/396.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>格栅板</text>
				  </view>
				</view>
				<view id="399" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/399.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>作业危害分析</text>
				  </view>
				</view>
			  <view class='dangerView'>
			  </view>
				<view class='dangerView'>
				</view>
				<view class='dangerView'>
				</view>
			</view>
			
			<view class="titleView_pc">
				<text class="titleText_pc">操作</text>
			</view>
			<view class="menuBlockView">
			  <view id="6" class='dangerView' @tap="jumpConsider">
			    <image class="dangerIcon" src="../../static/img/rap/6.jpg" mode="widthFix"></image>
			    <view class='subView'>
			      <text class='dangerText'>搭建/拆除脚手架</text>
			    </view>
			  </view>
				<view id="26" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/26.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>清理</text>
				  </view>
				</view>
				<view id="32" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/32.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>土建</text>
				  </view>
				</view>
				<view id="36" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/36.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>挖掘</text>
				  </view>
				</view>
				<view id="43" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/43.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>涂漆</text>
				  </view>
				</view>
				<view id="44" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/44.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>现场冲洗</text>
				  </view>
				</view>
				<view id="64" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/64.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>电压等级（110/220/380V）</text>
				  </view>
				</view>
				<view id="64-2" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/64-2.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>临时照明</text>
				  </view>
				</view>
				<view id="64-3" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/64-3.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>电压等级（6KV-10KV）</text>
				  </view>
				</view>
				<view id="64-4" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/64-4.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>电压等级（35KV）</text>
				  </view>
				</view>
				<view id="64-5" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/64-5.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>电压等级（220KV）</text>
				  </view>
				</view>
				<view id="64-6" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/64-6.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>在带电体上或附近作业</text>
				  </view>
				</view>
				<view id="72-1" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/72-1.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>简易的机械作业</text>
				  </view>
				</view>
				<view id="72-2" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/72-2.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>在线钻孔</text>
				  </view>
				</view>
				<view id="72-3" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/72-3.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>机械密封/堵塞</text>
				  </view>
				</view>
				<view id="72-4" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/72-4.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>在火炬系统作业</text>
				  </view>
				</view>
				<view id="72-5" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/72-5.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>带压堵漏</text>
				  </view>
				</view>
				<view id="72-6" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/72-6.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>在线设备螺栓更换</text>
				  </view>
				</view>
				<view id="72-7" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/72-7.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>密封堵漏</text>
				  </view>
				</view>
				<view id="72-8" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/72-8.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>安全阀测试（在线）</text>
				  </view>
				</view>
				<view id="75-1" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/75-1.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>管道和设备防护</text>
				  </view>
				</view>
				<view id="75-2" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/75-2.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>其他防护层</text>
				  </view>
				</view>
				<view id="79-1" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/79-1.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>三级吊装</text>
				  </view>
				</view>
				<view id="79-2" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/79-2.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>二级吊装</text>
				  </view>
				</view>
				<view id="79-3" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/79-3.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>一级吊装</text>
				  </view>
				</view>
				<view id="82-1" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/82-1.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>常规仪表作业</text>
				  </view>
				</view>
				<view id="82-2" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/82-2.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>联镇报警仪器</text>
				  </view>
				</view>
				<view id="82-3" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/82-3.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>应用支持(AST) – 二级</text>
				  </view>
				</view>
				<view id="82-4" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/82-4.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>应用支持(AST) – 一级</text>
				  </view>
				</view>
				<view id="84-1" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/84-1.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>断开管路 - 烃类</text>
				  </view>
				</view>
				<view id="84-2" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/84-2.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>断开管路 - 腐蚀剂</text>
				  </view>
				</view>
				<view id="84-3" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/84-3.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>断开管路 - 有毒物质</text>
				  </view>
				</view>
				<view id="84-4" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/84-4.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>断开管路 - 蒸汽</text>
				  </view>
				</view>
				<view id="84-5" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/84-5.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>断开管路 - 水和空气</text>
				  </view>
				</view>
				<view id="84-6" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/84-6.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>断开管路 - 惰性气体</text>
				  </view>
				</view>
				<view id="84-7" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/84-7.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>断开管路 - 固体</text>
				  </view>
				</view>
				<view id="90-1" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/90-1.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>清洗设备</text>
				  </view>
				</view>
				<view id="90-2" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/90-2.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>重新调试</text>
				  </view>
				</view>
				<view id="90-3" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/90-3.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>解除隔离/重新装填</text>
				  </view>
				</view>
				<view id="90-4" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/90-4.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>停车</text>
				  </view>
				</view>
				<view id="96-1" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/96-1.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>非射线的检查</text>
				  </view>
				</view>
				<view id="96-2" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/96-2.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>射线探伤</text>
				  </view>
				</view>
				<view id="100-1" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/100-1.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>气密测试</text>
				  </view>
				</view>
				<view id="100-2" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/100-2.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>水压测试</text>
				  </view>
				</view>
				<view id="100-3" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/100-3.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>特殊气密测试</text>
				  </view>
				</view>
				<view id="100-4" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/100-4.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>测压测试</text>
				  </view>
				</view>
			  <view class='dangerView'>
			  </view>
				<view class='dangerView'>
				</view>
				<view class='dangerView'>
				</view>
				<view class='dangerView'>
				</view>
			</view>
			
			<view class="titleView_pc">
				<text class="titleText_pc">工具</text>
			</view>
			<view class="menuBlockView">
			  <view id="5" class='dangerView' @tap="jumpConsider">
			    <image class="dangerIcon" src="../../static/img/rap/5.jpg" mode="widthFix"></image>
			    <view class='subView'>
			      <text class='dangerText'>喷砂作业</text>
			    </view>
			  </view>
				<view id="7" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/7.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>移动式梯子</text>
				  </view>
				</view>
				<view id="13-1" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/13-1.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>钻孔机和锯子</text>
				  </view>
				</view>
				<view id="13-2" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/13-2.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>手工工具</text>
				  </view>
				</view>
				<view id="18" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/18.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>高压水枪</text>
				  </view>
				</view>
				<view id="21" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/21.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>机动车进入生产区</text>
				  </view>
				</view>
				<view id="46" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/46.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>照相机</text>
				  </view>
				</view>
				<view id="47" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/47.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>沥青熔化炉</text>
				  </view>
				</view>
				<view id="48" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/48.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>一级动火</text>
				  </view>
				</view>
				<view id="62" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/62.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>软管</text>
				  </view>
				</view>
				<view id="73-1" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/73-1.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>便移式压缩机/鼓风机</text>
				  </view>
				</view>
				<view id="73-2" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/73-2.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>发电机</text>
				  </view>
				</view>
				<view id="73-3" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/73-3.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>移动泵</text>
				  </view>
				</view>
				<view id="73-4" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/73-4.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>推土机</text>
				  </view>
				</view>
				<view id="73-5" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/73-5.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>吸污设备</text>
				  </view>
				</view>
				<view id="73-6" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/73-6.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>吊车</text>
				  </view>
				</view>
				<view id="73-7" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/73-7.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>升降机</text>
				  </view>
				</view>
				<view id="73-8" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/73-8.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>搅拌机</text>
				  </view>
				</view>
				<view id="73-9" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/73-9.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>气动电动卷扬机</text>
				  </view>
				</view>
				<view id="73-10" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/73-10.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>手动葫芦</text>
				  </view>
				</view>
				<view id="73-11" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/73-11.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>牵引机</text>
				  </view>
				</view>
				<view id="73-12" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/73-12.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>铲车</text>
				  </view>
				</view>
				<view id="73-13" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/73-13.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>液压升降台</text>
				  </view>
				</view>
				<view id="73-14" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/73-14.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>挖土机</text>
				  </view>
				</view>
				<view id="73-15" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/73-15.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>垃圾车</text>
				  </view>
				</view>
				<view id="74-1" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/74-1.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>切割、打磨机</text>
				  </view>
				</view>
				<view id="74-2" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/74-2.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>射钉枪</text>
				  </view>
				</view>
				<view id="74-3" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/74-3.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>气动工具</text>
				  </view>
				</view>
				<view id="74-4" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/74-4.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>电动工具</text>
				  </view>
				</view>
				<view id="74-5" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/74-5.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>内燃机驱动设备</text>
				  </view>
				</view>
				<view id="74-6" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/74-6.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>电池工具</text>
				  </view>
				</view>
				<view id="132" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/132.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>临时用电</text>
				  </view>
				</view>
				<view id="360" class='dangerView' @tap="jumpConsider">
				  <image class="dangerIcon" src="../../static/img/rap/360.jpg" mode="widthFix"></image>
				  <view class='subView'>
				    <text class='dangerText'>特殊动火</text>
				  </view>
				</view>
				<view class='dangerView'>
				</view>
				<view class='dangerView'>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import uniDrawer from "@/components/drawer/uni-drawer.vue"
	import config from '../../util/config.js';
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
			jumpConsider: function(e){
				uni.navigateTo({
					url: 'rapConsider?id=' + e.currentTarget.id
				});
			},
			jumpPage: function (url) {
				if (url == '') {
					uni.showToast({
						icon: 'none',
						title: '敬请期待～',
					})
					return;
				}else {
					uni.navigateTo({
						url: url
					});
				}
			},
			jumpPageForYCYJ(){
				plus.runtime.openWeb(config.host+config.getYjzsStatics)
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
	  width: 20%;
	  margin-top: 30px;
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
		font-size: 20upx;
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
