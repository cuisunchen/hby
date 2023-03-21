<template>
	<barBox class="rtBar flex-column" pos="right">
		<div class="chartBox flex1 flex-shrink flex-column">
			<item-title :icon="taskPng" title="任务趋势变化">
				<template #label>
					<span class="unit">（任务数）</span>
				</template>
			</item-title>
			<chart class="flex1" :tooltip="rwqsOptions.tooltip" :grid="rwqsOptions.grid" :xAxis="rwqsOptions.xAxis" :yAxis="rwqsOptions.yAxis"
							:series="rwqsOptions.series"/>
		</div>
		<div class="chartBox flex1 flex-shrink flex-column" style="margin: 10px 0">
			<item-title :icon="qyysPng" title="区域营收排名">
				<template #label>
					<span class="unit">（单位: 万吨）</span>
				</template>	
			</item-title>
			<rank class="flex1" :index="index+1" :name="rank.name" :percent="rank.percent" :value="rank.value" :progressColor="rank.progressColor"
					v-for="(rank,index) in ranks" :key="index"></rank>
		</div>
		<div class="chartBox flex1 flex-shrink flex-column">
			<item-title :icon="qyczPng" title="区域厂站营收分析">
				<template #label>
					<legends :legends="[
						{title: '盈利',color: '#00FDFF',type:'bar'},
						{title: '亏损',color: 'rgba(0, 253, 255, 0.6)',type:'bar'}
					]"/>
				</template>
			</item-title>
			<chart class="flex1" :tooltip="qyczysOptions.tooltip" :grid="qyczysOptions.grid" :xAxis="qyczysOptions.xAxis" 
					:yAxis="qyczysOptions.yAxis" :series="qyczysOptions.series"/>
		</div>
	</barBox>
</template>

<script lang="ts" setup>
	import { ref } from 'vue'
	import barBox from '@/components/barBox/barBox.vue'
	import itemTitle from '@/components/itemTitle/itemTitle.vue'
    import chart from '@/components/chart/chart.vue'
	import rank from '@/components/rank/rank.vue'
	import legends from '@/components/legends/legends.vue'	
	import taskPng from '../../../assets/imgs/ztts_rwqs.png'
	import qyysPng from '../../../assets/imgs/ztts_qyys.png'
	import qyczPng from '../../../assets/imgs/ztts_qycz.png'
	
	import { make_rwqs_options,rwqsObj,make_qyczys_options,qyczObj } from '@/js_sdk/ztts/ztts_rtBar_options'
	let rwqsOptions = make_rwqs_options(rwqsObj)
	let qyczysOptions = make_qyczys_options(qyczObj)
	
	let ranks = ref([
		{name:'广东大区',value: 300, percent: '1', progressColor: ['#FF9000','#FF6C00']},
		{name:'广西大区',value: 268, percent: '0.89',progressColor: ['#FFE000','#FFBA00']},
		{name:'云南大区',value: 258, percent: '0.86',progressColor: ['#00FDFF', '#00FDFF']},
		{name:'贵州大区',value: 224, percent: '0.75'},
		{name:'山西大区',value: 184, percent: '0.61'},
		{name:'海南大区',value: 175, percent: '0.58'},
		{name:'福建大区',value: 130, percent: '0.43'},
		{name:'湖南大区',value: 95, percent: '0.32'},
	])
</script>

<style lang="scss" scoped>
	.rtBar{
		.unit{
			color: #00FDFF;
			font-size: 14px;
		}
		.itemTitle{
			margin-bottom: 10px;
		}
	}
</style>