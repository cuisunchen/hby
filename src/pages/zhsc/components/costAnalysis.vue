<!-- 成本分析卡 -->
<template>
    <div class='costAnalysis flex-column'>
        <div class="title flex all-center">运营成本</div>
        <div class="info flex-column justify-center">
            <div class="value flex flex-between">
                <div class="money">20071.93</div>
                <div class="compare">12.14%</div>
            </div>
            <div class="unit flex flex-between align-center">
                <div class="money">万元</div>
                <div class="compare flex align-center">
                    <span>同比</span>
                    <i class="el-icon-bottom" v-if="true"></i>
                    <i class="el-icon-top" style="margin-top:2px" v-if="false"></i>
                </div>
            </div>
			<div class="botLt corner"></div>
			<div class="botRt corner"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>
<style lang='scss' scoped>
.costAnalysis{
    .title{
        color: #00FBFF;
        font-size: 16px;
        height: 60px;
		margin-bottom: -10px;
        background: url('../../../assets/imgs/yycb_bigtitlebg.png') no-repeat;
        background-size: 100% 100%;      
    }
    .info{
		height: 60px;
        padding: 30px 14px 0;
        margin-top: -20px;
        background: url('../../../assets/imgs/yycb_titlebg.png') no-repeat;
        background-size: 100% 100%;
		position: relative;
        .value{
            .money{
                font-size: 16px;
                font-family: Impact;
                color: #00FDFF;
            }
            .compare{
                font-size: 16px;
                font-family: Impact;
                color: #FF8F00;
            }
        }
        .unit{
            margin-top: 4px;
            .money{
                font-size: 12px;
                font-family: Source Han Sans CN;
                color: #00FDFF;
            }
            .compare{
                font-size: 12px;
                font-family: Source Han Sans CN;
                color: #FF8F00;
            }
        }
		.corner{
		    position: absolute;
		    width: 10px;
		    height: 10px;
		}
		.botLt{
		    left: -1px;
		    bottom: -1px;        
		    background: url('../../../assets/imgs/bottomleft.png') no-repeat;
		    background-size: cover;
		}
		.botRt{
		    right: -1px;
		    bottom: -1px;        
		    background: url('../../../assets/imgs/bottomright.png') no-repeat;
		    background-size: cover;
		}
	}
}
</style>