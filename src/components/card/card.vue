/**
 * 智慧生产实时数据卡片、智慧经营产业分析卡片
 */
<template>
	<div class='realTimeCard flex align-center'>
	    <div class="icon">
	        <img :src="imgUrl" alt="">
	    </div>
	    <div class="info flex1 flex-column justify-center">
	        <p class="title">{{title}}</p>
	        <div class="value flex align-center flex-between">
	            <div class="num">{{val}}</div>
	            <div class="unit">{{unit}}</div>
	        </div>
	    </div>
	</div>
</template>

<script lang="ts" setup>
	import defaultIcon from '../../assets/imgs/zhsc_drsssj_sscsl.png'
	const props = defineProps({
		imgUrl: {
			type: String,
			default: () => defaultIcon
		},
		title: {
			type: String,
			default: () => "瞬时进水流量",
		},
		val: {
			type: String,
			default: () => "800",
		},
		unit: {
			type: String,
			default: () => "",
			
		}
	})
</script>

<style lang="scss" scoped>
	.realTimeCard{
	    .icon{
	        width: 70px;
	        height: 64px;
	        img{
	            width: 100%;
	            height: 100%;
	        }
	    }
	    .info{
	        height: 45px;
	        margin-left: -10px;
	        padding: 10px 20px 10px 20px;
	        background: url('../../assets/imgs/fgs001.png') no-repeat;
	        background-size: 100% 100%;
	        .title{
	            font-size: 14px;
	            margin-bottom: 2px;
	            font-family: Source Han Sans CN;
	            color: #00FDFF;
	        }
	        .num{
	            font-size: 18px;
	            font-family: Impact;
	            color: #00FDFF;
	        }
	        .unit{
	            font-size: 12px;
	            font-family: Source Han Sans CN;
	            color: #00FDFF;
	        }
	    }
	}
</style>