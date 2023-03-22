<template>
	<barBox class="rtBar flex-column" pos="right">
		<div class="flex4 gcjd flex-column">
			<item-title :icon="zhgc_xmgcjd" title="项目工程进展">
				<template #label>
					<img src="@/assets/imgs/line.png" alt="" srcset="">
				</template>	
			</item-title>
			<rank class="flex1 flex-column flex-between" :showIndex="false" :dataObj="ranks">
				<template #info="{ title,value,index }">
					<div class="info flex flex-between flex align-center">
						<span class="name">{{ranks[index].title}}</span>
						<div class="if flex flex align-center">
							<div class="money flex align-center">
								<span class="label">投资金额</span>
								<span class="val">{{ranks[index].value}}</span>
							</div>
							<div class="percent flex align-center">
								<span class="label">进度</span>
								<span class="val">{{ranks[index].percent * 100 + '%'}}</span>
							</div>
						</div>
					</div>
				</template>
			</rank>
		</div>
		<div class="flex3 zjtz">
			<item-title :icon="zhgc_xmgcjd" title="项目资金投资分析">
				<template #label>
					<legends type="square" size="small" :legends="[						
						{title: '实际投资',color: '#00FDFF',type: 'bar'},
						{title: '计划投资',color: '#00DEFF',type: 'bar'},
						{title: '投资率',color: '#FFDD00',type: 'bar'}						
					]"/>
				</template>	
			</item-title>
			<chart :tooltip="xmzjOpt.tooltip" :grid="xmzjOpt.grid" :xAxis="xmzjOpt.xAxis" :yAxis="xmzjOpt.yAxis" 
					:series="xmzjOpt.series"/>
		</div>		
	</barBox>
</template>

<script lang="ts" setup>
    import barBox from '@/components/barBox/barBox.vue'
	import itemTitle from '@/components/itemTitle/itemTitle.vue'
    import chart from '@/components/chart/chart.vue'
	import rank from '@/components/rank/rankBar.vue'
    import legends from '@/components/legends/legends.vue'
	
	import { xmzjOpt } from '@/js_sdk/zhgc/zhgc_rtBar_options'
	import zhgc_xmgcjd from '@/assets/imgs/zhgc_xmgcjd.png'
	
	const ranks = [
		{title: '白云污水厂二期',value: 460,percent: 0.8},
		{title: '云山污水厂',value: 260,percent: 0.76},
		{title: '宝体污水厂',value: 360,percent: 0.7},
		{title: '山河污水厂',value: 160,percent: 0.6},
		{title: '鲁能污水厂',value: 230,percent: 0.5},
		{title: '鲁能污水厂二期',value: 180,percent: 0.44},
	]
</script>

<style lang="scss" scoped>
	.rtBar{
		.itemTitle{
			margin-bottom: 10px;
		}
		.info{
			margin-bottom: 10px;
			.name{
				color: #00FDFF;
				font-size: 18px;
				font-weight: bold;
			}
			.money,.percent{
				color: #00d9d9;
				.val{
					font-size: 20px;
					font-weight: bold;
					margin-left: 20px;
				}
			}
			.money{
				margin-right: 40px;
			}
		}
		.zjtz{
			margin-top: 40px;
		}
	}
</style>