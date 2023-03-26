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
import { onMounted, ref, onUnmounted } from "vue";
import {creatThree} from '@/js_sdk/three'
let threeModel = ref()
let { loading } = creatThree(threeModel)
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
</style>