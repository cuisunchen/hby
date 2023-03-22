<template>
	<div class="contentTop flex animate fadeInDown">
		<infoCard class="flex1 item" :icon="ztits_wsc" title="污水厂" value="30" unit="亿吨"></infoCard>
		<infoCard class="flex1 item" :icon="zhyw_wsz" title="污水站" value="800" unit="平方公里"></infoCard>
		<infoCard class="flex1 item" :icon="ztits_drsssl" title="污水设计能力" value="1000" unit="万人"></infoCard>
		<infoCard class="flex1 item" :icon="ztits_dnclsl" title="月累计处理水量" value="1000" unit="万人"></infoCard>
	</div>
</template>

<script lang="ts" setup>
	import infoCard from '@/components/infoCard/infoCard.vue'
	import ztits_wsc from '../../../assets/imgs/ztts/ztits_wsc.png'
	import zhyw_wsz from '../../../assets/imgs/ztts/zhyw_wsz.png'
	import ztits_drsssl from '../../../assets/imgs/ztts/ztits_drsssl.png'
	import ztits_dnclsl from '../../../assets/imgs/ztts/ztits_dnclsl.png'
	
</script>

<style lang="scss" scoped>
	.contentTop{
		position: fixed;
		top: 100px;
		left: 550px;
		right: 550px;
		z-index: 9;
		height: 80px;
		.infoCard{
			margin: 0 10px;			
		}
	}
</style>