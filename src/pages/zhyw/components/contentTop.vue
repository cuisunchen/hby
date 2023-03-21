<template>
	<div class="contentTop animate fadeInDown flex-column">
		<div class="facInfo flex flex1">
			<infoCard class="flex1 item" :icon="ztits_wsc" title="污水厂" value="38" unit="座"></infoCard>
			<infoCard class="flex1 item" :icon="zhyw_wsz" title="污水站" value="74" unit="座"></infoCard>
			
		</div>
		<div class="others flex flex1">
			<infoCard class="flex1 item" :icon="zhyw_spls" title="视频路数" value="300" ></infoCard>
			<infoCard class="flex1 item" :icon="ztits_drgj" title="当日告警" value="256" ></infoCard>
			<infoCard class="flex1 item" :icon="zhyw_drrw" title="当日任务" value="312" ></infoCard>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import infoCard from '@/components/infoCard/infoCard-single.vue'
	import ztits_wsc from '@/assets/imgs/ztits_wsc.png'
	import zhyw_wsz from '@/assets/imgs/zhyw_wsz.png'
	import zhyw_spls from '@/assets/imgs/zhyw_spls.png'
	import zhyw_drrw from '@/assets/imgs/zhyw_drrw.png'
	import ztits_drgj from '@/assets/imgs/ztits_drgj.png'
</script>

<style lang="scss" scoped>
	.contentTop{
		position: fixed;
		top: 100px;
		left: 550px;
		right: 550px;
		z-index: 9;
		height: 160px;
		.infoCard{
			margin: 0 10px;
			
		}
	}
</style>