<template>
	<barBox class="ltBar flex-column">
		<div class="chartBox flex1 flex-shrink flex-column">
			<item-title :icon="facPng" title="厂站区域分布">
				<template #label>
					<legends :legends="[
						{title: '正常',color: '#00FDFF',type:'bar'},
						{title: '异常',color: 'rgba(0, 253, 255, 0.6)',type:'bar'}
					]"/>
				</template>
			</item-title>
			<chart class="flex1" :tooltip="czqyfbOpt.tooltip" :grid="czqyfbOpt.grid" :xAxis="czqyfbOpt.xAxis" 
					:yAxis="czqyfbOpt.yAxis" :series="czqyfbOpt.series"/>
		</div>
		<div class="chartBox flex1 flex-shrink flex-column" style="margin: 10px 0">
			<item-title :icon="wsPng" title="污水处理趋势分析">
				<template #label>
					<span class="unit">（单位: 万吨）</span>
				</template>
			</item-title>
			<chart class="flex1" :tooltip="wsclqsfxOpt.tooltip" :xAxis="wsclqsfxOpt.xAxis" :yAxis="wsclqsfxOpt.yAxis" :series="wsclqsfxOpt.series"/>
		</div>
		<div class="chartBox flex1 flex-shrink flex-column">
			<item-title :icon="warnPng" title="当月告警分析">
				<template #label>
					<img src="../../../assets/imgs/line.png" alt="" srcset="">
				</template>
			</item-title>
			<chart class="flex1" :tooltip="gjfxOpt.tooltip" :series="gjfxOpt.series"/>
		</div>
	</barBox>
</template>

<script lang="ts" setup>
	import barBox from '@/components/barBox/barBox.vue'
	import itemTitle from '@/components/itemTitle/itemTitle.vue'
    import chart from '@/components/chart/chart.vue'
	import legends from '@/components/legends/legends.vue'	
	
	import facPng from '../../../assets/imgs/tc_dz.png'
	import wsPng from '../../../assets/imgs/ztts_wscl.png'
	import warnPng from '../../../assets/imgs/ztts_dygj.png'
	
	import { make_czqyfb_options,wsDataObj,make_wsclqsfx_options,gjfxObj,make_dygjfx_optionos } from '@/js_sdk/ztts/ztts_ltBar_options'
	let czqyfbOpt = make_czqyfb_options()
	let wsclqsfxOpt = make_wsclqsfx_options(wsDataObj)
	let gjfxOpt = make_dygjfx_optionos(gjfxObj)
</script>

<style lang="scss" scoped>
	.ltBar{
		.itemTitle{
			margin-bottom: 10px;
		}
		.unit{
			color: #00FDFF;
			font-size: 14px;
		}
	}
</style>