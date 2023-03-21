<template>
	<div class="chartBox" ref="echartBox"></div>
</template>

<script lang="ts" setup>	
	import { ref, onMounted, onUnmounted,markRaw,defineComponent } from 'vue'
	import { initEchart,unInstall,drawImg,options } from '@/js_sdk/chart'
	import * as echarts from 'echarts'
	
	const props = defineProps(options)
	
	const echartBox = ref()
	let myChart = ref()
	
	onMounted(() => {
		myChart.value = initEchart(echartBox.value)
		drawImg(myChart.value,props)
	})
	
	onUnmounted(() => {		
		unInstall(myChart.value)		
	})
</script>

<style lang="scss" scoped>
	.chartBox{
		height: 100%;		
	}
</style>