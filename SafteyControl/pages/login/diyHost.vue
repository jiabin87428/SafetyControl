<template>
    <view class="content">
        <view class="input-group">
            <view class="input-row border">
                <text class="title">域名：</text>
                <m-input type="text" focus clearable v-model="host" placeholder="请输入域名"></m-input>
            </view>
        </view>
        <view class="btn-row">
            <button type="primary" class="primary" @tap="testConnect">测试连接</button>
        </view>
    </view>
</template>

<script>
    import service from '../../service.js';
    import mInput from '../../components/m-input.vue';
	import config from '../../util/config.js';
	import request from '../../util/request.js';

    export default {
        components: {
            mInput
        },
        data() {
            return {
                host: '',
            }
        },
		onLoad() {
			this.host = config.host;
		},
        methods: {
            testConnect() {
				var that = this;
                request.requestLoading(that.host, {}, "正在测试连接", function(res){
					config.host = that.host;
					uni.showToast({
					    title: '连接成功',
						duration: 1000,
						complete() {
							uni.navigateBack({
							    delta: 1
							});
						}
					});
				}, function(){
					uni.showToast({
						icon: 'none',
					    title: '连接失败'
					});
				}, function(){
					uni.showToast({
						icon: 'none',
					    title: '连接失败'
					});
				});
            }
        }
    }
</script>

<style>

</style>
