<!-- 弹框组件 -->
<template>
    <border class='myDialog' v-if="show" :style="{left:posLt,top: posTop}">
        <slot></slot>
        <div class="close" @click="close"></div>
    </border>
</template>

<script setup>
	import { computed,watch } from 'vue'
	import border from '../border/border.vue'
	let props = defineProps({
		left:{
			type: [String,Number],
			default: () => ''
		},
		top:{
			type: [String,Number],
			default: () => ''
		},
		show: {
			type: Boolean,
			default: () => false
		},
		showClose: {
			type: Boolean,
			default: () => true
		},
	})
	
	const emits = defineEmits(['close'])
	const posLt = computed(() => typeof props.left == 'string' ? props.left : props.left + 'px')
	const posTop = computed(() => typeof props.top == 'string' ? props.top : props.top + 'px')
	
	const close = () => {
		emits('close')
	}
</script>

<style lang='scss' scoped>
.myDialog{
    position: fixed;    
    z-index: 2021;
    width: 230px;
    padding: 14px;
    border: 1px solid rgba(0, 253, 255, .5);
    background-color: rgba(21, 80, 80, 0.8);
    .close{
        width: 32px;
        height: 32px;
        background: url('../../static/imgs/ztts/tc_close.png') no-repeat;
        background-size: cover;
        position: absolute;
        right: -32px;
        top: 0;        
    }
}
</style>