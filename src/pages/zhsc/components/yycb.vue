<template>
	<div class="wrap flex1 flex-column">
	    <div class="analysis flex align-center" style="margin-bottom: 14px">
	        <costAnalysis class="flex1" style="margin-right:20px"></costAnalysis>
	        <costAnalysis class="flex1"></costAnalysis>
	    </div>
	    <div class="analysis handleCost flex1 flex-column align-center">
	        <div class="title flex all-center">运营成本</div>
	        <border class="info flex flex-between align-center">
	            <div class="cardLt flex align-center">
	                <div class="label">大型环保集团</div>
	                <div class="value flex align-center">
	                    <div class="val">0.42</div>
	                    <div class="unit">元/吨</div>
	                </div>
	            </div>
	            <div class="cardRt flex align-center">
	                <div class="label">排水行业</div>
	                <div class="value flex align-center">
	                    <div class="val">0.5</div>
	                    <div class="unit">元/吨</div>
	                </div>
	            </div>
	        </border>
	    </div>
	</div>
</template>

<script  lang="ts" setup>
	import costAnalysis from './costAnalysis.vue'
    import border from '@/components/border/border.vue'
	defineProps({
		dataObj: {
			type: Object,
			default: () => ({
				
			})
		}
	})
</script>

<style lang="scss" scoped>
	.analysis{
	    .costAnalysis {
	        height: 100%;
	    }
	    &.handleCost{
	        .title{
	            width: 60%;
	            height: 60px;
	            color: #00FBFF;
	            font-size: 16px;                    
	            margin: 0 auto -30px;
	            background: url('../../../assets/imgs/zhsc_yycb_btbg02.png') no-repeat;
	            background-size: 100% 100%;
	        }
	        .info{
				width: 100%;
				height: 80px;
	            color: #00FDFF;
	            font-size: 14px;
	            background: url('../../../assets/imgs/yycb_bigtextbg.png') no-repeat;
	            background-size: 100% 100%;
	            .cardLt, .cardRt{
	                margin: 0 34px;
	                &:last-child{
	                    margin: 0;
	                }
	                .val{
	                    font-size: 18px;
	                    font-family: Impact;
	                    color: #00FDFF;
	                    margin: 0 4px 0 10px;
	                }
	            }
	        }
	    }
	}
</style>