<template>
	<div class="contentBot flex animate fadeInTop">
		<div class="ykfx flex1 flex-column">
			<item-title :icon="ztts_rwqs" title="区域厂站盈亏分析">
				<template #label>
					<legends :legends="[
						{title: '盈利',color: '#00FDFF',type:'bar'},
						{title: '亏损',color: 'rgba(0, 253, 255, 0.6)',type:'bar'}
					]"/>
				</template>
			</item-title>
			<div class="echarts flex1 flex align-center">
				<chart class="flex1" :tooltip="qyczysOptions.tooltip" :grid="qyczysOptions.grid"
							:xAxis="qyczysOptions.xAxis" :yAxis="qyczysOptions.yAxis" :series="qyczysOptions.series"></chart>				
			</div>
		</div>
		<div class="jymb flex1 flex-column">
			<item-title :icon="ztts_rwqs" title="经营目标达成率" />
			<div class="echarts flex1 flex align-center">
				<chart class="flex1" :title="jymbOpt1.title" :series="jymbOpt1.series"></chart>
				<chart class="flex1" :title="jymbOpt2.title" :series="jymbOpt2.series"></chart>
				<chart class="flex1" :title="jymbOpt3.title" :series="jymbOpt3.series"></chart>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import itemTitle from '@/components/itemTitle/itemTitle.vue'
	import chart from '@/components/chart/chart.vue'
	import ztts_rwqs from '../../../assets/imgs/ztts/ztts_rwqs.png'
	
	import { make_qyczys_options } from '@/js_sdk/ztts/ztts_rtBar_options'
	import { makeOption } from '@/js_sdk/zhjy/zhjy_content_options'
	
	let jymbOpt1 = makeOption(40,'营业成本\n达标率')
	let jymbOpt2 = makeOption(60,'利润总额\n达标率')
	let jymbOpt3 = makeOption(80,'净利润\n达标率')
	
	const qyczObj = {
		xAxisData: ['广东大区','广西大区','云南大区','贵州大区','福建大区','山西大区','海南大区'],
		seriesDataObj: {
			profitArr: [ 2856, 1217, 1855, 2110, 1719, 1433, 1544, 3285, 5208, 3372, 2484, 4078 ],
			lossArr: [ 548, 476, 407, 1200, 800, 482, 204, 1390, 1001, 951, 381, 220 ]
		}
	}
	let qyczysOptions = make_qyczys_options(qyczObj)
	
</script>

<style lang="scss" scoped>
	.contentBot{
		position: fixed;
		bottom: 20px;
		left: 20px;
		right: 20px;
		z-index: 9;
		height: 360px;
		.echarts{
			margin-top: 20px;
		}
		.ykfx{
			margin-right: 80px;
		}
	}
</style>