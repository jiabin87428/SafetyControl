<template>
	<view class="baseView">
		<view class="cellTitleView">
			<text class="cellTitle">{{item.jcbz}}</text>
		</view>
		<view class="cellInfoView">
			<!-- <uni-list>
				<picker :value="index" :range="typeArray" @change="bindTypeChange">
					<uni-list-item title="检查结论" :note="item.jcjl"></uni-list-item>
				</picker>
				<uni-list-item title="问题描述" :note="item.jcwtms" @click="jumpInput(item.jcwtms)"></uni-list-item>
				<picker v-if="item.jcjl == '异常'" :value="index" :range="rectifyTypes" @change="bindRectifyChange">
					<uni-list-item title="整改方式" :note="item.zgfs"></uni-list-item>
				</picker>
			</uni-list> -->
			
			<picker :value="index" :range="typeArray" @change="bindTypeChange">
				<view class="cellView">
					<view class="cellSubView">
						<text class="leftText">检查结论</text>
						<view class="rightText">{{item.jcjl}}</view>
					</view>
					<image class="arrow" src="../../static/img/rightArrow.png"></image>
				</view>
			</picker>
			<view class="line"></view>
			<view class="cellView" @click="jumpInput(item.jcwtms)">
				<view class="cellSubView">
					<text class="leftText">问题描述</text>
					<view class="rightText">{{item.jcwtms}}</view>
				</view>
				<image class="arrow" src="../../static/img/rightArrow.png"></image>
			</view>
			<view class="line"></view>
			<picker v-if="item.jcjl == '异常'" :value="index" :range="rectifyTypes" @change="bindRectifyChange">
				<view class="cellView">
					<view class="cellSubView">
						<text class="leftText">整改方式</text>
						<view class="rightText">{{item.zgfs}}</view>
					</view>
					<image class="arrow" src="../../static/img/rightArrow.png"></image>
				</view>
			</picker>
			<view class="line"></view>
		</view>
		<view class="btn-row">
		    <button type="primary" class="primary" @tap="saveItem">确定</button>
		</view>
	</view>
</template>

<script>
	import uniList from '@/components/list/uni-list/uni-list.vue'
	import uniListItem from '@/components/list/uni-list-item/uni-list-item.vue'
	import {
	    mapState,
		mapMutations
	} from 'vuex'
	export default {
		computed: mapState(['inputPageText', 'key']),
		components: {uniList,uniListItem},
		data() {
		    return {
				// 当页面OnShow的时候是否需要从state里去拿输入的内容
				needGetInputOnShow: false,
				
				typeArray: ['正常', '未检', '异常'],
				rectifyTypes: ['发起整改', '查看整改'],
		        item: '',
				itemIndex: 0,
		    }
		},
		onLoad(option) {
			this.item = JSON.parse(option.item);
			this.itemIndex = JSON.parse(option.index);
		},
		onShow() {
			if (this.needGetInputOnShow == true) {
				this.item[this.key] = this.inputPageText;
				this.needGetInputOnShow = false;
			}
		},
		methods:{
			...mapMutations(['setSublistItem']),
			bindTypeChange(e) {
				this.item.jcjl = this.typeArray[e.detail.value];
				if (this.item.jcjl == "正常") {
					this.item.zgfs = "";
				}
			},
			bindRectifyChange(e) {
				this.item.zgfs = this.rectifyTypes[e.detail.value];
			},
			jumpInput(text) {
				this.needGetInputOnShow = true;
				uni.navigateTo({
					url: '../common/inputPage?text=' + text + '&key=jcwtms&placeholder=请输入问题描述',
				})
			},
			saveItem() {
				let obj = {
					item: this.item,
					index: this.itemIndex
				}
				this.setSublistItem(obj);
				uni.navigateBack({
					delta: 1
				})
			},
		}
	}
</script>

<style>
	.baseView{  
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #FFFFFF;
	}
	.cellTitleView {
		width: 100%;
		height: 60upx;
		background-color: #F3F3F3;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.cellTitle {
		/* width: 300upx; */
		margin-left: 20upx;
		color: #BBBBBB;
		font-size: 30upx;
	}
	.cellInfoView {
		width: 100%;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
	}
	.cellView {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.cellSubView {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.arrow {
		width: 15upx;
		height: 25upx;
		margin-right: 18upx;
	}
	.leftText {
		margin-top: 20upx;
		margin-left: 20upx;
		font-size: 34upx;
	}
	.rightText {
		margin-left: 20upx;
		margin-bottom: 20upx;
		font-size: 28upx;
		text-overflow: ellipsis;
		white-space: normal;
		color: inherit;
		line-height: 1.5;
		overflow: hidden;
		color: #BBBBBB;
	}
	.line {
		width: 100%;
		height: 1upx;
		background-color: #E8E8E8;
	}
</style>
