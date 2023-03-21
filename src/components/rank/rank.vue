<template>
	<div class="rank flex align-center">
		<span class="index">{{index}}.</span>
		<span class="name">{{name}}</span>
		<div class="progressBox flex1 flex align-center">
			<div class="progress"></div>
			<span class="value">{{value}}</span>
		</div>		
	</div>
</template>

<script lang="ts" setup>
	import {computed,onMounted,ref} from 'vue'
	const props = defineProps({
		value: {
			type: [String,Number],
			default: () => '300'
		},
		name: {
			type: String,
			default: () => '广东大区'
		},
		index: {
			type: Number,
			default: () => 1
		},
		percent: {
			type: String,
			default: () => '0.9'
		},
		progressColor: {
			type: Array,
			default: () => (['#00CCFF', '#00a8d2'])
		},
	})
	const proWidth = computed(() => {
		if(!parseFloat(props.percent)){
			throw new Error('参数value类型错误，请传入小数或整数')
		}else{
			return parseFloat(props.percent) >= 1 ? '100%' : parseFloat(props.percent) * 100 + '%'
		}
	})
	const proColor = computed(() => {
		return `linear-gradient(90deg, ${props.progressColor[0]}, ${props.progressColor[1]} )`
	})
	const color = computed(() => {
		return props.progressColor[0]
	})
</script>

<style lang="scss" scoped>
.rank{
	.index{
		font-size: 20px;
		color: v-bind(color);
		font-family: Impact;
		font-style: italic;
	}
	.name{
		font-size: 16px;
		color: v-bind(color);
		margin: 0 10px;
	}
	.progressBox{
		.progress{
			width: v-bind(proWidth);
			height: 10px;
			font-size: 10px;
			border-radius: 5px;
			background: v-bind(proColor);
		}
		.value{
			color: v-bind(color);
			margin-left: 10px;
			font-family: Impact;
		}
	}
}
</style>