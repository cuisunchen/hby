<!-- 智慧工厂   下方轮播组件 -->
<template>
    <div class='contain flex'>
        <div class="arrowLt flex all-center" :class="{notAllow: swiperIndex == 1}" @click="prevPage">
            <div class="arrowWrap flex align-center">《 </div>
        </div>
        <div class="swiperBox flex1" ref="swiperBox">
            <div class="list flex" :style="{transform: 'translateX('+ -moveDis * swiperIndex + 'px)'}">
                <swiperItem title="白云水库水利工程" :img="swiperImg"/>
                <swiperItem title="宝体水利工程" :img="swiperImg"/>
                <swiperItem title="清湖水库水利工程" :img="swiperImg"/>
            </div>
        </div>
        <div class="arrowRt flex all-center" :class="{notAllow: swiperIndex == 0}" @click="nextPage">
            <div class="arrowWrap flex align-center flex-end">》</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
	import { ref, onMounted, onUnmounted } from 'vue'
	import swiperItem from './swiperItem.vue'
	import swiperImg from '@/assets/imgs/slgc.jpg'
	
	let moveDis = ref('')
	let swiperIndex = ref(0)
	let swiperBox = ref()	
	
	let pageResize = () => {
		moveDis.value = swiperBox.value.clientWidth
	}
	let prevPage = () => {
		if(swiperIndex.value == 1){return}
		swiperIndex.value ++
	}
    let nextPage = () => {
		if(swiperIndex.value == 0){return}
		swiperIndex.value -- 
	}
	
	onMounted(()=>{
		moveDis.value = swiperBox.value.clientWidth
		window.addEventListener('resize',pageResize,true)
	})
	onUnmounted(() => {
		window.removeEventListener('resize', pageResize)
	})

</script>
<style lang='scss' scoped>
.contain{
	height: 100%;
    .arrowLt,.arrowRt{
        font-size: 20px;
        background-image: linear-gradient(0deg, #00FDFF, #00CCFF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        &.notAllow{
            background-image: linear-gradient(0deg, rgba(0, 253, 255, .4), rgba(0, 253, 255, .4) 100%);
            color: rgba(0, 253, 255, .4);
            .arrowWrap{
                cursor: not-allowed;
            }
        }
        .arrowWrap{
            cursor: pointer;
            width: 30px;
            height: 50px;
        }
    }
    .swiperBox{
        color: #000;
        overflow: hidden;
        .list{
            height: 100%;
            transition:  all 0.3s ease-in-out;
            white-space: nowrap;         
        }
    }
}
</style>