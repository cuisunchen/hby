<template>
	<div class="contentBot flex-column animate fadeInTop">
		<item-title :icon="zhyw_czsz" title="厂站实时水质" />
		<tableBox class="flex1" :columns="ssszOpt.columns" :datasource="ssszOpt.dataSource" 
			headTextColor="#15FDFF" bodyTextColor="#15FDFF" rowBgType="odd" />
	</div>
	<div class="mapInfo flex-column">
		<div class="item1 flex1 flex align-center">
			<div class="legend flex all-center">12</div>
			当日告警数
		</div>
		<div class="item2 flex1 flex align-center">
			<div class="legend flex all-center"></div>
			厂站分布
		</div>
	</div>
</template>

<script lang="ts" setup>
	import itemTitle from '@/components/itemTitle/itemTitle.vue'
	import tableBox from '@/components/table/table.vue'
	import {ssszOpt} from '@/js_sdk/zhyw/zhyw_content_options'
	
	import zhyw_czsz from '@/assets/imgs/zhyw_czsz.png'
</script>

<style lang="scss" scoped>
	.contentBot{
		position: fixed;
		bottom: 20px;
		left: 550px;
		right: 550px;
		z-index: 9;
		height: 350px;
		.flex1{
			margin-top: 20px;
		}
	}
	.mapInfo{
		width: 120px;
		height: 80px;
		padding: 4px 10px;
		background-color: #005252 ;
		position: fixed;
		bottom: 400px;
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