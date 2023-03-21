<template>
	<div class="progressBox" ref="progressBox">
		<div class="progress flex all-center">
			<span class="val" v-if="showValue">{{proWidth}}</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import {computed,onMounted,ref} from 'vue'
	const props = defineProps({
		value: {
			type: [String,Number],
			default: () => '0.8'
		},
		progressColor: {
			type: Array,
			default: () => (['#00fdff', '#00fdff'])
		},
		bgColor: {
			type: String,
			default: () => 'rgba(0, 253, 255, .4)'
		},
		valColor:{
			type: String,
			default: () => '#fff'
		},
		showValue: {
			type: Boolean,
			default: () => true
		},
	})
	const proWidth = computed(() => {
		if(!parseFloat(props.value)){
			throw new Error('参数value类型错误，请传入小数或整数')
		}else{
			return parseFloat(props.value) >= 1 ? '100%' : parseFloat(props.value) * 100 + '%'
		}
	})
	const proColor = computed(() => {
		return `linear-gradient(90deg, ${props.progressColor[0]}, ${props.progressColor[1]} )`
	})
	
	const progressBox = ref()
	let borderRadius = ref()
	onMounted(() =>{
		borderRadius.value = progressBox.value.clientHeight / 2 + 'px'
	})
</script>

<style lang="scss" scoped>
.progressBox{
	height: 14px;
	border-radius: 7px;
	background-color: v-bind(bgColor);
	box-shadow: 0px 0px 10px 0px v-bind(bgColor);
	position: relative;
	.progress{
		width: v-bind(proWidth);
		height: 100%;
		font-size: 10px;
		border-radius: v-bind(borderRadius);
		background: v-bind(proColor);
		box-shadow: 0px 0px 10px 0px v-bind(bgColor);
		.val{
			color: v-bind(valColor);
		}
	}
}
</style>