<template>
	<barBox class="ltBar flex-column">
		<div class="realData">
			<item-title :icon="ztts_qycz" title="当日实时数据">
				<template #label>
					<img src="../../../assets/imgs/line.png" alt="" srcset="">
				</template>
			</item-title>
	        <div class="cards">
	            <div class="line flex">
	                <realTimeCard class="flex1" title="瞬时进水流量" val="1000" unit="m³/h" :imgUrl="zhsc_drsssj_ssjsl" style="margin-right: 20px"></realTimeCard>
	                <realTimeCard class="flex1" title="瞬时出水流量" val="800" unit="m³/h" :imgUrl="zhsc_drsssj_sscsl"></realTimeCard>
	            </div>
	            <div class="line flex" style="margin-top: 16px">
	                <realTimeCard class="flex1" title="当日污水处理量" val="1000" unit="万吨" :imgUrl="zhsc_drsssj_wscll" style="margin-right: 20px"></realTimeCard>
	                <realTimeCard class="flex1" title="当日处理负荷率" val="80%" :imgUrl="zhsc_drsssj_clfhl"></realTimeCard>
	            </div>
	        </div>
		</div>
		<div class="flex3 flex-column" style="margin:40px 0">
			<item-title :icon="zhyw_czsz" title="污水排放分析">
				<template #label>
					<legends  :legends="[
						{title: '实际排放',color: '#00FDFF',type: 'bar'},
						{title: '计划排放',color: 'rgba(0, 167, 167, 1.0)',type: 'bar'},
						{title: '负荷率',color: '#fdff5c',type: 'line'},
					]"/>
				</template>
			</item-title>
			<chart :tooltip="wspfOpt.tooltip" :grid="wspfOpt.grid" :xAxis="wspfOpt.xAxis" :yAxis="wspfOpt.yAxis" :series="wspfOpt.series"/>
		</div>
		<div class="flex3 flex-column">
			<item-title :icon="zhsc_shzr" title="社会责任">
				<template #label>
					<legends  :legends="[
						{title: 'COD消减',color: '#A582EA',type: 'bar'},
						{title: '氨氮消减',color: '#2CABE3',type: 'bar'},
						{title: 'BOD消减',color: '#FF8F00',type: 'bar'}	
					]"/>
				</template>
			</item-title>
		    <chart :tooltip="shzrOpt.tooltip" :grid="shzrOpt.grid" :xAxis="shzrOpt.xAxis" :yAxis="shzrOpt.yAxis" :series="shzrOpt.series"/>
		</div>
	</barBox>
</template>

<script lang="ts" setup>
    import barBox from '@/components/barBox/barBox.vue'
	import itemTitle from '@/components/itemTitle/itemTitle.vue'
	import realTimeCard from '@/components/card/card.vue'
	import chart from '@/components/chart/chart.vue'
    import legends from '@/components/legends/legends.vue'
	
	import ztts_qycz from '../../../assets/imgs/ztts_qycz.png'
	import zhyw_czsz from '../../../assets/imgs/zhyw_czsz.png'
	import zhsc_shzr from '../../../assets/imgs/zhsc_shzr.png'
	
	import zhsc_drsssj_ssjsl from '../../../assets/imgs/zhsc_drsssj_ssjsl.png'
	import zhsc_drsssj_sscsl from '../../../assets/imgs/zhsc_drsssj_sscsl.png'
	import zhsc_drsssj_wscll from '../../../assets/imgs/zhsc_drsssj_wscll.png'
	import zhsc_drsssj_clfhl from '../../../assets/imgs/zhsc_drsssj_clfhl.png'
	
	import { make_wspf_options,make_shzr_options,shzrQuery } from '@/js_sdk/zhsc/zhsc_ltBar_options'
	let shzrOpt = make_shzr_options(shzrQuery)

	let query = {
		xAxisData: ['华润永定厂','华润金江厂','华润合浦厂','华润湛江厂','华润漳平厂','华润罗定厂','百色固体废物治理厂','华润吕梁方山厂','华润安顺厂','华润龙岩雁石厂','华润田阳厂','华润福龙厂'],
		seriesData: [
			{
				yAxisIndex: 0,
				name: "实际排放",
				type: "bar",
				barWidth: 10,
				itemStyle: {
					color: '#00FDFF',
					barBorderRadius: 5
				},
				data: ["93.30", "121.17", "114.08","98.02",'96.55',"86.04",'72.66','92.12',"89.52",'74.48',"64.68",'83.81']
			},
			{
				yAxisIndex: 0,
				name: '计划排放',
				type: 'bar',
				barWidth: 10,
				xAxisIndex: 0,
				barGap: '-100%',
				data: [206.5,178,125,114,117.8,97,103,99,100,92,79.72,93],
				itemStyle: {
					color: 'rgba(15, 183, 184, .3)',
					barBorderRadius: 30
				},
			},	
			{
				yAxisIndex: 1,
				name: "负荷率",
				type: "line",
				symbolSize: 8,
				symbol: 'circle',
				smooth: true,
				itemStyle: {
					color: "#fdff5c"
				},
				data: ['27.38','9.05','8.42','6.09','5.77','5.64','5.61','5.56','4.43','4.43','4.00','3.92']
			},
		]
	}
	let wspfOpt = make_wspf_options(query)
</script>

<style lang="scss" scoped>
	.ltBar{
		.itemTitle{
			margin-bottom: 10px;
		}
	}
</style>