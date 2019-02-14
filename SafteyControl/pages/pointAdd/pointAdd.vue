<template>
	<div>点位编号:{{code}}</div>
</template>

<script>
	export default {
		data() {
		    return {
		        code: '',
		    }
		},
		onLoad(option) {
			this.code = option.code;
		}
	}
</script>

<style>
</style>
