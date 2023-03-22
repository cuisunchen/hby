<template>
	<barBox class="ltBar flex-column">
		<div class="zcfx">
			<item-title :icon="ztts_qycz" title="企业资产分析">
				<template #label>
					<img src="../../../assets/imgs/line.png" alt="" srcset="">
				</template>
			</item-title>
		    <div class="cards">
		        <div class="line flex">
		            <card class="flex1" title="资产总额" val="100" unit="亿" :imgUrl="zhsc_drsssj_ssjsl" style="margin-right: 20px"></card>
		            <card class="flex1" title="负债总额" val="100" unit="亿" :imgUrl="zhsc_drsssj_sscsl"></card>
		        </div>
		        <div class="line flex" style="margin-top: 16px">
		            <card class="flex1" title="资产负债率" val="66%" :imgUrl="zhsc_drsssj_wscll" style="margin-right: 20px"></card>
		            <card class="flex1" title="股东权益比率" val="50%" :imgUrl="zhsc_drsssj_clfhl"></card>
		        </div>
		    </div>
		</div>
		
		<div class="qyys flex1 flex-column">
			<item-title :icon="ztsc_yycb" title="区域营收排名">
				<template #label>
					<span class="itemUnit">单位（万元）</span>
				</template>
			</item-title>
			<div class="rankBox flex1 flex-column">
				<rank class="flex1" :index="index+1" :name="rank.name" :percent="rank.percent" :value="rank.value" :progressColor="rank.progressColor"
						v-for="(rank,index) in ranks" :key="index"></rank>
			</div>
		</div>
	</barBox>
</template>

<script lang="ts" setup>
	import { ref } from 'vue'
    import barBox from '@/components/barBox/barBox.vue'
	import itemTitle from '../../../components/itemTitle/itemTitle.vue'
	import card from '@/components/card/card.vue'
	import rank from '@/components/rank/rank.vue'
	
	import ztts_qycz from '../../../assets/imgs/ztts_qycz.png'
	import ztsc_yycb from '../../../assets/imgs/zhsc_yycb.png'
	
	import zhsc_drsssj_ssjsl from '../../../assets/imgs/zhsc_drsssj_ssjsl.png'
	import zhsc_drsssj_sscsl from '../../../assets/imgs/zhsc_drsssj_sscsl.png'
	import zhsc_drsssj_wscll from '../../../assets/imgs/zhsc_drsssj_wscll.png'
	import zhsc_drsssj_clfhl from '../../../assets/imgs/zhsc_drsssj_clfhl.png'
	
	let ranks = ref([
		{name:'广东大区',value: 300, percent: '1', progressColor: ['#FF9000','#FF6C00']},
		{name:'广西大区',value: 268, percent: '0.89',progressColor: ['#FFE000','#FFBA00']},
		{name:'云南大区',value: 258, percent: '0.86',progressColor: ['#00FDFF', '#00FDFF']},
		{name:'贵州大区',value: 224, percent: '0.75'},
		{name:'山西大区',value: 184, percent: '0.61'},
		{name:'海南大区',value: 175, percent: '0.58'},
		{name:'福建大区',value: 130, percent: '0.43'},
		{name:'湖南大区',value: 95, percent: '0.32'},
	])

</script>

<style lang="scss" scoped>
	.ltBar{
		bottom: 390px;
		.itemTitle{
			margin-bottom: 10px;
			.itemUnit{
				color: #00FDFF;
				font-size: 14px;
			}
		}
		.zcfx{
			:deep(.line){
				.flex1{
					.icon{
						width: 90px;
						height: 85px;
					}
					.info{
						height: 65px;
						.title{
							margin-bottom: 10px;
						}
					}
				}
			}
		}
		.qyys{
			margin-top: 30px;
			.rankBox{
				.rank:nth-child(-n+3){
					:deep(.name){
						font-weight: bold;
					}
				}
			}
		}		
	}
</style>