<template>
	<div class="topBox flex">
		<infos class="flex1"/>
		<div class="mapBox flex1 flex flex-between">
			<div class="map flex1">
				<mapChart :option="option" />
			</div>
			<div class="desc flex-column flex-between">
				<div class="infoCards">
					<infoCard class="flex1 item" :icon="ztits_wsc" title="污水处理厂" value="38" unit="座"></infoCard>
					<infoCard class="flex1 item" :icon="ztits_dnclsl" title="处理规模" value="4.6" unit="万吨/日"></infoCard>
				</div>
				
				<div class="bot">
				    <div class="title">大型环保集团</div>
				    <div class="con">企业库包含<span style="color:rgba(255, 224, 0, 1);font-weight: bold">92</span>家企业</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import infos from './infos.vue'
	import infoCard from '@/components/infoCard/infoCard.vue'
	import mapChart from '@/components/maps/mapChart.vue'
	import { makeOpt1 } from '@/js_sdk/qyhx/qyhx_options'
	
	import ztits_wsc from '@/assets/imgs/ztts/ztits_wsc.png'
	import ztits_dnclsl from '@/assets/imgs/ztts/ztits_dnclsl.png'
	
	let option = makeOpt1()
	
</script>

<style lang="scss" scoped>	
.topBox{
	padding: 0 20px;
	.mapBox{
		.desc{
			width: 200px;
			margin-top: 10px;
			.bot{
				padding: 20px;
				margin-bottom: 20px;
				background: rgba(0,253,255,0.2);
				.title{
					color: #00FDFF;
					font-size: 16px;
					font-weight: bold;
					margin-bottom: 6px;
				}
				.con{
					color: #00FDFF;
					font-size: 14px;
				}
			}
		}
	}
}	
</style>