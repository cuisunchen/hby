<template>
	<div class="rankItem flex align-center">
		<div class="index" v-if="showIndex">
			{{index + 1}}
		</div>
		<div class="flex1 flex-column">			
			<slot name="info" :title="title" :value="value" :index="index">
				<div class="info flex flex-between">
					<span class="name">{{title}}</span>
					<span class="val">{{value}}</span>
				</div>
			</slot>
			<hbyProgress :value="value" :showValue="false" :progressColor="progressColor" :bgColor="bgColor"></hbyProgress>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import {computed,onMounted,ref} from 'vue'
	import hbyProgress from '@/components/progress/progress.vue'
	
	const props = defineProps({
		showIndex: {
			type: Boolean,
			default: () => true
		},
		index: {
			type: [String,Number],
			default: () => ''
		},
		value: {
			type: [String,Number],
			default: () => '0.8'
		},
		title: {
			type: String,
			default: () => '标题'
		},
		/**
		 * 百分比文字颜色
		 * */
		valColor:{
			type: String,
			default: () => '#fff'
		},
		progressColor: {
			type: Array,
			default: () => (['#00CCFF', '#00fdff'])
		},
		bgColor: {
			type: String,
			default: () => 'rgba(0, 253, 255, .4)'
		},
	})
	const color = computed(() => {
		return props.progressColor[0]
	})
</script>

<style lang="scss" scoped>
	.rankItem{
		.index{
			width: 30px;
			font-size: 30px;
			margin-right: 10px;
			font-family: Impact;
			font-style: italic;
			color: v-bind(color);
		}
		.info{
			color: v-bind(color);
			font-size: 16px;
			font-family: Source Han Sans CN;
			font-weight: 800;
			line-height: 30px;
			margin-bottom: 6px;
			text-shadow: 0px 0px 10px rgba(5, 15, 25, 0.4);
			.val{
				font-family: Impact;
			}
		}
	}
</style>