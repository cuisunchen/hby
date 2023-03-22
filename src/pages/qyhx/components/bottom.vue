<template>
	<div class="bottomBox flex">
		<div class="qyjy flex1 flex-column">
			<item-title :icon="ztsc_yycb" title="企业经营">				
				<template #label>
					<legends  :legends="[
						{title: '总资产',color: '#00FDFF',type: 'bar'},
						{title: '增长率',color: '#fdff5c',type: 'line'},
					]"/>
				</template>
			</item-title>
			<chart class="flex1"  :tooltip="wspfOpt.tooltip" :grid="wspfOpt.grid" :xAxis="wspfOpt.xAxis" :yAxis="wspfOpt.yAxis" :series="wspfOpt.series"/>
		</div>
		<div class="qyys flex1 flex-column">
			<item-title :icon="ztsc_yycb" title="企业营收分布" />
			<chart class="flex1"  :title="qyhxOptions.title" :tooltip="qyhxOptions.tooltip" :graphic="qyhxOptions.graphic" :series="qyhxOptions.series"/>
		</div>
		<div class="qydt flex1 flex-column">
			<item-title :icon="ztsc_yycb" title="企业动态" />
			<tableBox class="flex1" :columns="qydtOpt.columns" :datasource="qydtOpt.dataSource" headTextColor="#15FDFF" bodyTextColor="#15FDFF" :isHeadShow="false" rowBgType="odd">
				<template #bodystatus="{ text,record }">
					<span :class="record.status == '待处理' ? 'yellow' : 'green'">{{text}}</span>
				</template>
			</tableBox>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import itemTitle from '@/components/itemTitle/itemTitle.vue'
    import chart from '@/components/chart/chart.vue'
    import legends from '@/components/legends/legends.vue'
	import tableBox from '@/components/table/table.vue'
	import ztsc_yycb from '../../../assets/imgs/zhsc_yycb.png'
	
	import { make_wspf_options } from '@/js_sdk/zhsc/zhsc_ltBar_options'
	import { makeOpt,qydtOpt } from '@/js_sdk/qyhx/qyhx_bot_options'
	
	let qyhxOptions = makeOpt()
	
	let query = {
		xAxisData: ['2017','2018','2019','2020','2021','2022','2023'],
		seriesData: [
			{
				yAxisIndex: 0,
				name: "总资产",
				type: "bar",
				barWidth: 24,
				itemStyle: {
					color: {
						"x": 0,
						"y": 0,
						"x2": 0,
						"y2": 1,
						"type": "linear",
						"global": false,
						"colorStops": [{
							"offset": 0,
							"color": "rgba(55,255,249,1)"
						}, {
							"offset": 1,
							"color": "rgba(0, 222, 255,0.7)"
						}]
					},
					barBorderRadius: 12
				},
				data: ["93.30", "121.17", "114.08","98.02",'96.55',"86.04",'72.66']
			},	
			{
				yAxisIndex: 1,
				name: "增长率",
				type: "line",
				symbolSize: 8,
				symbol: 'circle',
				smooth: true,
				itemStyle: {
					color: "#fdff5c"
				},
				data: ['27.38','9.05','8.42','6.09','5.77','5.64','5.61']
			},
		]
	}
	let wspfOpt = make_wspf_options(query)
	
</script>

<style lang="scss" scoped>
	.bottomBox{
        margin: 75px 20px 20px;
		.itemTitle{
			margin-bottom: 10px;
		}
		.qyys{
			margin: 0 40px;
		}
	}
</style>