<template>
	<div class="barBox" :class="[pos,'animate', pos == 'left' ? 'fadeInLeft' : 'fadeInRight']">
		<slot></slot>
	</div>
</template>

<script setup  >
	import { ref,computed } from 'vue';
	const props = defineProps({
		pos: {
			type: String,
			default: () => 'left'
		},
		left: {
			type: String,
			default: () => '20px'
		},
		right: {
			type: String,
			default: () => '20px'
		},
	})
	
	const leftPos = computed(()=>{
		if(typeof props.left == 'number' || typeof props.left == 'string'){
			if(typeof props.left == 'string'){
				if(!props.left.includes('px')){
					console.error("left参数需为或者其他尺寸单位")
					return
				}else{
					return props.left
				}
			}
			return props.left + 'px'
		}else{
			console.error("left参数需为数字类型或者字符串类型")
		}
	})
	const rightPos = computed(()=>{
		if(typeof props.right == 'number' || typeof props.right == 'string'){
			if(typeof props.right == 'string'){
				if(!props.right.includes('px')){
					console.error("right参数需为或者其他尺寸单位")
					return
				}else{
					return props.right
				}
			}
			return props.right + 'px'
		}else{
			console.error("right参数需为数字类型或者字符串类型")
		}
	})
</script>

<style lang="scss" scoped>
.barBox{
	position: fixed;	
	top: 110px;
	bottom: 20px;
	width: 500px;
	z-index: 9;
	&.left{
		left: v-bind(leftPos);
	}
	&.right{
		right: v-bind(rightPos);
	}
	
}
</style>