<template>
	<barBox class="ltBar flex-column">
		<div class="flex2 xmzt align-center">
		    <item-title :icon="zhgc_xmjd" title="项目状态占比">
		    	<template #label>
		    		<img src="@/assets/imgs/line.png" alt="" srcset="">
		    	</template>
		    </item-title>
		    <chart class="flex1" :tooltip="yysrOptions.tooltip" :grid="yysrOptions.grid" :xAxis="yysrOptions.xAxis" 
		    	:yAxis="yysrOptions.yAxis" :series="yysrOptions.series"/>
		</div>
		<div class="xmqy flex3 flex-column">
			<item-title :icon="qyczPng" title="项目区域分布"></item-title>
			<chart class="flex1" :tooltip="xmqyOpt.tooltip" :legend="xmqyOpt.legend" :grid="xmqyOpt.grid" :xAxis="xmqyOpt.xAxis" 
				:yAxis="xmqyOpt.yAxis" :series="xmqyOpt.series"/>
		</div>
	</barBox>
</template>

<script lang="ts" setup>
	import barBox from '@/components/barBox/barBox.vue'
	import itemTitle from '@/components/itemTitle/itemTitle.vue'
    import chart from '@/components/chart/chart.vue'
	import  {make_xmqy_options} from '@/js_sdk/zhgc/zhgc_ltBar_options'
	import  {yysrOpt} from '@/js_sdk/zhjy/zhjy_rtBar_options'
	
	import qyczPng from '@/assets/imgs/ztts_qycz.png'	
	import zhgc_xmjd from '@/assets/imgs/zhgc_xmjd.png'
	
	let yysrQuery = {
		color: ['#00FDFF', '#00e473', '#ffc300', '#009DFF', '#b9b7ff'],
		chartData: [
			{ name: "正常完成", value: 6211, unit: '元' },
			{ name: "正常进行中", value: 5111, unit: '元' },
			{ name: "未开始", value: 4711, unit: '元' },
			{ name: "逾期完成", value: 3711, unit: '元' },
			{ name: "逾期进行中", value: 6011, unit: '元' }
		]
	}
	let yysrOptions = yysrOpt(yysrQuery)
	
	const xmqyParams = {
		y_data: ["广东\n大区","广西\n大区","云南\n大区","贵州\n大区","福建\n大区","山西\n大区","海南\n大区"],
		dataArr: [
			{name: '正常完成',value: [30,45,50,43,25,31,30],colorStops: [{"offset": 0,"color": "rgba(187, 254, 255, 1)"}, {"offset": 1,"color": "rgba(0, 253, 255, 1)"}]},
			{name: '正常进行',value: [19,65,20,33,45,51,13],colorStops: [{"offset": 0,"color": "rgba(119, 228, 255, 1)"}, {"offset": 1,"color": "rgba(0, 205, 255, 1)"}]},
			{name: '未开始',value: [21,25,40,33,35,31,33],colorStops: [{"offset": 0,"color": "rgba(153, 255, 236, 1)"}, {"offset": 1,"color": "rgba(0, 255, 208, 1)"}]},
			{name: '逾期完成',value: [31,25,40,23,45,21,45],colorStops: [{"offset": 0,"color": "rgba(255, 245, 168, 1)"}, {"offset": 1,"color": "rgba(254, 224, 1, 1)"}]},
			{name: '逾期进行',value: [41,25,40,43,45,31,52],colorStops: [{"offset": 0,"color": "rgba(255, 197, 122, 1)"}, {"offset": 1,"color": "rgba(255, 143, 0, 1)"}]},
		]
	}
	let xmqyOpt = make_xmqy_options(xmqyParams)
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