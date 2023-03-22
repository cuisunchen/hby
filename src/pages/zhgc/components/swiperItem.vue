<template>
	<div class="swiperItem flex-column">
	    <div class="title">{{title}}</div>
	    <div class="videoBox flex1">
	        <img :src="img" alt="">
	    </div>
	</div>
</template>

<script lang="ts" setup>	
	defineProps({
		title: {
			type: String,
			default: () => '白云水库水利工程'
		},
		img: {
			type: String,
			default: () => ''
		}
	})
	
</script>

<style lang="scss" scoped>
	.swiperItem{
	    flex: 0 0  calc(50% - 5px);
	    height: 100%;
	    background: url('../../../assets/imgs/zhyw_sssp_spbg.png') no-repeat;
	    background-size: 100% 100%;
	    &:nth-child(odd){
	        margin-right: 10px;
	    }
	    .title{
	        color: #00FDFF;
	        font-size: 14px;
	        padding: 10px 10px 2px;
	        padding-left: 20px;
	    }
	    .videoBox{
	        padding: 4px 12px 10px;
	        img{
	            width: 100%;
	            height: 100%;
	        }
	    }
	}
</style>