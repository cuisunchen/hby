<template>
	<div class="contentBot flex-column animate fadeInTop">
		<item-title :icon="ztts_rwqs" title="厂站异常告警" />
	    <div class="echarts flex1 flex align-center">
	        <chart class="flex1" :title="options1.title" :series="options1.series"></chart>
	        <chart class="flex1" :title="options2.title" :series="options2.series"></chart>
	        <chart class="flex1" :title="options3.title" :series="options3.series"></chart>
	    </div>
	</div>
	<div class="mapInfo flex-column">
		<div class="item1 flex1 flex align-center">
			<img src="@/assets/imgs/ztts/map_txyc.png" alt="">
			通讯异常
		</div>
		<div class="item2 flex1 flex align-center">
			<img src="@/assets/imgs/ztts/map_txzc.png" alt="">
			通讯正常
		</div>
	</div>
</template>

<script lang="ts" setup>
	import itemTitle from '@/components/itemTitle/itemTitle.vue'
	import chart from '@/components/chart/chart.vue'
	import ztts_rwqs from '../../../assets/imgs/ztts/ztts_rwqs.png'
	import { make_zcyc_options } from'@/js_sdk/zhsc/zhsc_content_options'
	
	let options1 = make_zcyc_options(40,'出水达标率')
	let options2 = make_zcyc_options(60,'污水处理\n负荷比')
	let options3 = make_zcyc_options(98,'设备完好率')
</script>

<style lang="scss" scoped>
	.contentBot{
		position: fixed;
		bottom: 20px;
		left: 550px;
		right: 550px;
		z-index: 9;
		height: 320px;
		.echarts{
			margin-top: 20px;
		}
	}
	.mapInfo{
		width: 120px;
		height: 80px;
		padding: 4px 10px;
		background-color: #005252 ;
		position: fixed;
		bottom: 360px;
		left: 550px;
		z-index: 9;
		.flex1{
			line-height: 1;
			.legend{
				margin-right: 10px;
			}
		}
		.item1{
			.legend{
				width: 20px;
				height: 20px;
				border-radius: 50%;
				font-size: 10px;
				background: radial-gradient(rgba(206,178,52, 0.5)30%,#D8BC37 100%);
			}			
		}
		.item2{
			.legend{
				width: 20px;
				height: 20px;
				&::after{
					content: ' ';
					display: inline-block;
					width: 6px;
					height: 6px;
					background-color: #00FDFF;
					border-radius: 50%;
				}
				
			}
		}
	}
</style>