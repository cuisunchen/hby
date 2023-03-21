<!-- 企业画像右边的信息卡 -->
<template>
    <border class="infoCard flex shadowBox" style="margin-bottom: 20px">
        <div class="iconBox flex all-center">
            <img :src="icon" alt="">
        </div>
        <div class="infoWrap flex1 flex-column justify-center">
            <div class="title">{{title}}</div>
            <div class="values flex align-center flex-between">
                <div class="num">{{value}}</div>
                <div class="unit">{{unit}}</div>
            </div>
        </div>
    </border>
</template>

<script lang="ts" setup>
import border from '@/components/border/border.vue'
	const props = defineProps({
		icon:{
		    type: String,
		    default: () => ''
		},
		title:{
		    type: String,
		    default: () => ''
		},
		value:{
		    type: [String, Number],
		    default: () => ''
		},
		unit:{
		    type: String,
		    default: () => ''
		}
	})

</script>
<style lang='scss' scoped>
.border{
	padding: 6px 10px;
    .iconBox{
        img{
            height: 40px;
        }
    }
    .infoWrap{
        color: #00FDFF;
        .title{
            font-size: 16px;
            font-family: PangMenZhengDao;
            font-weight: 400;
            margin-bottom: 4px;
        }
        .values{
            font-size: 14px;
            margin-left: 6px;
            .num{
                font-family: Impact;
                font-size: 20px;
            }
            .unit{
                margin-bottom: 2px;
            }
        }
    }
}
</style>