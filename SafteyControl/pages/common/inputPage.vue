<template>
	<view class="baseView">
		<textarea class="myText" :placeholder="placeholder" :value="text"/>
		<view class="btn-row">
		    <button type="primary" class="primary" @tap="saveText">确定</button>
		</view>
	</view>
</template>

<script>
	export default {
    data() {
        return {
			placeholder: '请输入内容',
			text: '',
		}
    },
	onLoad(option) {
		this.placeholder = option.placeholder;
		this.text = option.text;
	},
    methods: {
        saveText() {
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
		background-color: #C11E1E;
	}
	/* .textView {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #C11E1E;
	} */
	.myText{
		width: 100%;
		height: 500upx;
		font-size: 30upx;
		background-color: #FFFFFF;
	}
</style>
