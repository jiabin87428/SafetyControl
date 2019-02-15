<template>
	<view class="content">
		<uni-list>
			<uni-list-item title="报警设备类型统计" @click="onClick('device')"></uni-list-item>
			<uni-list-item title="报警事件类型统计" @click="onClick('event')"></uni-list-item>
			<uni-list-item title="阀组压力统计" @click="onClick('valve')"></uni-list-item>
		</uni-list>
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
				}
			}
		},
	}
</script>

<style>
</style>
