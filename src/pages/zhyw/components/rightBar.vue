<template>
	<barBox class="rtBar flex-column" pos="right">
		<div class="flex3 flex-column">
			<item-title :icon="rwqs" title="任务趋势变化">
				<template #label>
					<legends type="square" size="small" :legends="[						
						{title: '保养任务',color: '#00FDFF',type: 'line'},
						{title: '巡检任务',color: '#00DEFF',type: 'line'},
						{title: '维修任务',color: '#FFDD00',type: 'line'}						
					]"/>
				</template>	
			</item-title>
			<chart class="flex1" :tooltip="options.tooltip" :grid="options.grid" :xAxis="options.xAxis" :yAxis="options.yAxis" 
						:series="options.series"/>
		</div>
		<div class="flex4 rwqy flex-column">
			<item-title :icon="rwqs" title="任务区域排名"></item-title>
			<rank class="flex1 flex-column flex-between" :dataObj='ranks'></rank>
		</div>
	</barBox>
</template>

<script lang="ts" setup>
    import barBox from '@/components/barBox/barBox.vue'
	import itemTitle from '@/components/itemTitle/itemTitle.vue'
	import rank from '@/components/rank/rankBar.vue'
    import chart from '@/components/chart/chart.vue'
	import rwqs from '../../../assets/imgs/ztts_rwqs.png'
	import { query,make_rwqs_options } from '@/js_sdk/zhyw/zhyw_rtBar_options'
	
	let options = make_rwqs_options(query)
	
	let ranks = [
		{title: '云南大区',value: 460,percent: 0.8,progressColor: ['#FF6C00', '#FF9000'],bgColor: '#361b00'	},
		{title: '广东大区',value: 260,percent: 0.76,progressColor: ['#FFBA00', '#FFE000'],bgColor: '#746400'},
		{title: '广西大区',value: 360,percent: 0.7,progressColor: ['#00FDFF', '#00FDFF'],bgColor: '#007676'},
		{title: '湖北大区',value: 160,percent: 0.6},
		{title: '湖南大区',value: 230,percent: 0.5},
		{title: '海南大区',value: 180,percent: 0.44},
		{title: '四川大区',value: 270,percent: 0.4},
		{title: '贵州大区',value: 270,percent: 0.38},
	]
</script>

<style lang="scss" scoped>
	.rtBar{
		.itemTitle{
			margin-bottom: 10px;
		}
		.rwqy{
			margin-top: 40px;
		}
	}
</style>