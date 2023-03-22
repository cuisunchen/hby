<template>
	<barBox class="rtBar flex-column" pos="right">
		<div class="yysrzb flex1 flex-column">
			<item-title :icon="ztsc_yycb" title="各区域营业收入占比">
				<template #label>
					<img src="../../../assets/imgs/line.png" alt="" srcset="">
				</template>
			</item-title>
			<chart class="flex1" :tooltip="options.tooltip" :grid="options.grid" :xAxis="options.xAxis" 
				:yAxis="options.yAxis" :series="options.series"/>
		</div>
		<div class="yysrqs flex1 flex-column">
			<item-title :icon="ztts_bottom_yw" title="集团营业收入趋势图">
				<template #label>
					<span class="unit">单位（万元）</span>
				</template>
			</item-title>
			<chart class="flex1" :tooltip="yysrqsOpt.tooltip" :grid="yysrqsOpt.grid" :xAxis="yysrqsOpt.xAxis" 
				:yAxis="yysrqsOpt.yAxis" :series="yysrqsOpt.series"/>
		</div>
	</barBox>
</template>

<script lang="ts" setup>
import barBox from '@/components/barBox/barBox.vue'
import itemTitle from '@/components/itemTitle/itemTitle.vue'
import chart from '@/components/chart/chart.vue'
import  {yysrOpt,make_yysrqs_options} from '@/js_sdk/zhjy/zhjy_rtBar_options'

import ztsc_yycb from '../../../assets/imgs/zhsc_yycb.png'
import ztts_bottom_yw from '../../../assets/imgs/ztts_bottom_yw.png'
let yysrQuery = {
	color: ['#00FDFF', '#ffc300', '#00e473', '#009DFF'],
	chartData: [
		{ name: "云南大区", value: 8211, unit: '元' },
		{ name: "贵州大区", value: 6111, unit: '元' },
		{ name: "广东大区", value: 5711, unit: '元' },
		{ name: "广西大区", value: 3711, unit: '元' }
	]
}
let options = yysrOpt(yysrQuery)
let yysrqsQuery = {
	xAxisData: ["20:06","20:06","20:06","20:06","20:06","20:06"],
	seriesData: [460,720,530,480,370,560]
}
let yysrqsOpt = make_yysrqs_options(yysrqsQuery)
</script>

<style lang="scss" scoped>
	.rtBar{
		bottom: 390px;
		.itemTitle{
			margin-bottom: 10px;
		}
		.ysfx{
			margin-top: 40px;
		}
		.unit{
			font-size: 14px;
			color: #00FBFF;
		}
	}
</style>