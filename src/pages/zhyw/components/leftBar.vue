<template>
	<barBox class="ltBar flex-column">
		<div class="flex countBox align-center">
		    <div class="alarm flex1" @click="showDialog('alarmDialog')"><img src="@/assets/imgs/zhyw_ycgj.png" alt=""></div>
		    <div class="water flex1"><img src="@/assets/imgs/zhyw_sssz.png" alt=""></div>
		    <div class="video flex1" @click="showDialog('videoDialog')"><img src="@/assets/imgs/zhyw_sssp.png" alt=""></div>
		</div>
		<div class="wrap flex1 flex-column">
			<div class="flex3 ycgj flex-column">
				<item-title :icon="ycgj" title="厂站异常告警">
					<template #label>
						<img src="@/assets/imgs/line.png" alt="" srcset="">
					</template>
				</item-title>
				<tableBox :columns="ycgjOpt.columns" :datasource="ycgjOpt.dataSource" headTextColor="#15FDFF" bodyTextColor="#15FDFF" :isHeadShow="false" rowBgType="odd">
					<template #bodystatus="{ text,record }">
						<span :class="record.status == '待处理' ? 'yellow' : 'green'">{{text}}</span>
					</template>
				</tableBox>
			</div>
			<div class="flex2 flex-shrink gjlb flex-column">
				<item-title :icon="ycgj" title="告警类别分析">
					<template #label>
						<legends type="square" size="small" :legends="[						
							{title: '指标报警',color: '#00FDFF',type: 'bar'},
							{title: '库存报警',color: '#00DEFF',type: 'bar'},
							{title: '断电报警',color: '#FFDD00',type: 'bar'}						
						]"/>
					</template>					
				</item-title>
				<chart class="flex1" :tooltip="lbfxOpt.tooltip" :grid="lbfxOpt.grid" :xAxis="lbfxOpt.xAxis" :yAxis="lbfxOpt.yAxis" :series="lbfxOpt.series"/>
			</div>
		</div>
	</barBox>
</template>

<script lang="ts" setup>
	import barBox from '@/components/barBox/barBox.vue'
	import itemTitle from '@/components/itemTitle/itemTitle.vue'
	import tableBox from '@/components/table/table.vue'
    import chart from '@/components/chart/chart.vue'
	import { ycgjOpt, lbfxOpt } from '@/js_sdk/zhyw/zhyw_ltBar_options'
	
	import ycgj from '@/assets/imgs/ztts/ztts_dygj.png'
	
	const showDialog = (type) => {
		
	}

</script>

<style lang="scss" scoped>
	.ltBar{
		.countBox{
			height: 150px;
			>div{
				margin: 0 10px;
				img{
					width: 100%;
				}
			}
		}
		.wrap{
			margin-top: 20px;
			.ycgj{
				margin-bottom: 40px;
			}
		}
		.itemTitle{
			margin-bottom: 10px;
		}
		.yellow{
			color: #FF8F00;
		}
		.green{
			color: #00FDFF;
		}
	}
</style>