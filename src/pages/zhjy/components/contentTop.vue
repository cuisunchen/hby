<template>
	<div class="contentTop flex animate fadeInDown">
		<infoCard class="flex1 item" :icon="ztts_bottom_yw" title="营业收入" value="200,000" unit="万元"></infoCard>
		<infoCard class="flex1 item" :icon="ztts_bottom_jy" title="营业成本" value="180,000" unit="万元"></infoCard>
		<infoCard class="flex1 item" :icon="zhgc_xmztz" title="利润总额" value="30,000" unit="万元"></infoCard>
		<infoCard class="flex1 item" :icon="zhgc_xmztz" title="净利润" value="20,000" unit="万元"></infoCard>
	</div>
</template>

<script lang="ts" setup>
	import infoCard from '@/components/infoCard/infoCard.vue'
	
	import ztts_bottom_yw from '../../../assets/imgs/ztts_bottom_yw.png'
	import ztts_bottom_jy from '../../../assets/imgs/ztts/ztts_bottom_jy.png'
	import zhgc_xmztz from '../../../assets/imgs/zhgc_xmztz.png'
	
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