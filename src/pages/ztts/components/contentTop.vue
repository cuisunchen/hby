<template>
	<div class="contentTop animate fadeInDown">
		<div class="flex">
			<infoCard class="flex1 item" :icon="ztits_wsc" title="污水厂/站" value="100" unit="座"></infoCard>
			<infoCard class="flex1 item" :icon="ztits_fwmj" title="服务面积" value="800" unit="平方公里"></infoCard>
			<infoCard class="flex1 item" :icon="ztits_fwrk" title="服务人口" value="1000" unit="万人"></infoCard>
		</div>
		<div class="flex">
			<infoCard class="flex1 item" :icon="ztits_dnclsl" title="当年处理水量" value="30" unit="亿吨"></infoCard>
			<infoCard class="flex1 item" :icon="ztits_drsssl" title="当日实时水量" value="800" unit="万吨"></infoCard>
			<infoCard class="flex1 item" :icon="ztits_drfhl" title="当日符合率" value="80%"></infoCard>
			<infoCard class="flex1 item" :icon="ztits_drgj" title="当日告警数" value="100" unit="条"></infoCard>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import infoCard from '@/components/infoCard/infoCard.vue'
	import ztits_wsc from '../../../assets/imgs/ztts/ztits_wsc.png'
	import ztits_fwmj from '../../../assets/imgs/ztts/ztits_fwmj.png'
	import ztits_fwrk from '../../../assets/imgs/ztts/ztits_fwrk.png'
	import ztits_dnclsl from '../../../assets/imgs/ztts/ztits_dnclsl.png'	
	import ztits_drsssl from '../../../assets/imgs/ztts/ztits_drsssl.png'
	import ztits_drfhl from '../../../assets/imgs/ztts/ztits_drfhl.png'
	import ztits_drgj from '../../../assets/imgs/ztts/ztits_drgj.png'
	
	
	
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