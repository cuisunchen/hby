<template>
	<div class="industryWrap flex1 flex-column">
	    <div class="item flex1 flex">
	        <border class="title flex-shrink flex-column justify-center">
	            <p class="flex justify-center">符合率情况</p>
	            <p class="flex justify-center">年处理量</p>                             
	        </border>
	        <div class="info flex1 flex">
				 <chart class="flex1" :tooltip="options1.tooltip" :grid="options1.grid" :xAxis="options1.xAxis" 
						:yAxis="options1.yAxis" :series="options1.series"/>
	        </div>
	    </div>
	    <div class="item flex1 flex" style="margin: 20px 0">
	        <border class="title flex-shrink flex-column justify-center">
	            <p class="flex justify-center">电耗情况</p>
	            <p class="flex justify-center">吨水</p>                             
	        </border>
	        <div class="info flex1 flex">
				 <chart class="flex1" :tooltip="options2.tooltip" :grid="options2.grid" :xAxis="options2.xAxis" 
						:yAxis="options2.yAxis" :series="options2.series"/>
	        </div>
	    </div>
	    <div class="item flex1 flex">
	        <border class="title flex-shrink flex-column justify-center">
	            <p class="flex justify-center">干泥量情况</p>
	            <p class="flex justify-center">万吨水生产</p>                             
	        </border>
	        <div class="info flex1 flex">
	            <chart class="flex1" :tooltip="options3.tooltip" :grid="options3.grid" :xAxis="options3.xAxis" 
						:yAxis="options3.yAxis" :series="options3.series"/>
	        </div>
	    </div>
	</div>
</template>

<script lang="ts" setup>
	import chart from '@/components/chart/chart.vue'
	import { make_ysfx_options,ysfxDatas1,ysfxDatas2,ysfxDatas3 } from '@/js_sdk/zhsc/zhsc_rtBar_options'
	let options1 = make_ysfx_options(ysfxDatas1)
	let options2 = make_ysfx_options(ysfxDatas2)
	let options3 = make_ysfx_options(ysfxDatas3)
</script>

<style lang="scss" scoped>
	.industryWrap{
	    .title{
	        width: 65px;
	        writing-mode: vertical-rl;
	        box-shadow: 0 0 4px rgba(0, 253, 255, .6) inset;
	        p{
	            font-size: 16px;
	            font-family: PangMenZhengDao;
	            color: #00FBFF;
	        }
	    }
	    .info{
	        background: url('../../../assets/imgs/fgs002.png') no-repeat;
	        background-size: 100% 100%;
	    }
	}
</style>