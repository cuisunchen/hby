<template>
	<div class="content">
		<mapChart :option="option" />
	</div>
</template>

<script lang="ts" setup>
	import mapChart from '@/components/maps/mapChart.vue'
	import { option } from '@/js_sdk/zhsc/zhsc_rtBar_options'

</script>

<style lang="scss" scoped>
	.content{
		width: 100%;
		height: 100%;		
	}
</style>