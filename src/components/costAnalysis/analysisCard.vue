<!-- 分析卡   分析数据盈亏 -->
<template>
    <border class='analysisCard flex align-center  borderShadow'>
        <div class="lt flex all-center">
            <img src="../../assets/imgs/zhgc_xmztz.png" alt="">
        </div>
        <div class="rt flex1 flex-column justify-center">
            <div class="title">{{dataObj.title}}</div>
            <div class="info flex1 flex-column justify-center">
                <div class="values flex flex-between">
                    <div class="val1">{{dataObj.value1}}</div>
                    <div class="val2" :class="{rise: dataObj.type == 'rise'}">{{dataObj.value2}}</div>
                </div>
                <div class="unit flex flex-between">
                    <div class="un1">{{dataObj.unit1}}</div>
                    <div class="un2 flex align-center" :class="{rise: dataObj.type == 'rise'}">
                        <span>{{dataObj.unit2}}</span>
                        <i class="el-icon-bottom" v-if="dataObj.type == 'drop'"></i>
                        <i class="el-icon-top" style="margin-top:2px" v-if="dataObj.type == 'rise'"></i>
                    </div>
                </div>
            </div>
        </div>
    </border>
</template>

<script   setup>
import border from '../border/border.vue'
defineProps({
    dataObj:{
        type: Object,
        default(){
            return {
                // title: '营业收入',
                // value1: 200,
                // value2: '12.14%',
                // unit1: '万元',
                // unit2: '同比',
                // type: 'rise'     //  控制上下箭头 rise：升 drop：降
            }
        }
    },
})

</script>
<style lang='scss' scoped>
.analysisCard{
    ::v-deep .topLt{
            left: -2px;
            top: -2px;
        }
    ::v-deep .topRt{
            right: -2px;
            top: -2px;
        }
    ::v-deep .botLt{
            left: -2px;
            bottom: -2px;
        }
    ::v-deep .botRt{
            right: -2px;
            bottom: -2px;
        }
    .lt{
        width: 48px;
        height: 28px;
        img{
            height: 100%;
        }
    }
    .rt{
        // height: 100%;
        padding-right: 20px;
        .title{
            font-size: 16px;
            font-family: PangMenZhengDao;
            color: #00FDFF;
        }
        .info{
            margin-top: 8px;
            .values{
                font-size: 16px;
                font-family: Impact;
                color: #00FDFF;
            }
            .val2{
                color: #00FFD0;
            }
            .unit{
                margin-top: 2px;
                font-size: 12px;
                font-family: Source Han Sans CN;
                color: #00FDFF;
                .un2{
                    color: #00FFD0
                }
            }
            .rise{
                color: #FF8F00;
            }
        }
        
    }
}
</style>