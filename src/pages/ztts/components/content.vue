<template>
	<div class="content"
        v-loading="loading"
        element-loading-text="模型加载中..."
        element-loading-custom-class="loading"        
        element-loading-background="transparent">
		<div class="threeModel" ref="threeModel"></div>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	
	import {createThree} from '@/js_sdk/threeFun.js'
	let threeModel = ref()
	const { loading } = createThree(threeModel)

</script>

<style lang="scss" scoped>
	.content{
		width: 100%;
		height: 100%;
        position: relative;
		
		.threeModel{
			width: 100%;
			height: 100%;
		}
	}
	.threeModel{
		width: 100%;
		height: 100%;
	}
</style>