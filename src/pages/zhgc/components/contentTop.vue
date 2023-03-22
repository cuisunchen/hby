<template>
	<div class="contentTop animate fadeInDown">
		<div class="facInfo flex">
			<infoCard class="flex1 item" :icon="zhgc_xmztz" title="项目总投资" value="50" unit="亿"></infoCard>
			<infoCard class="flex1 item" :icon="zhgc_tzwcl" title="投资完成率" value="80%"></infoCard>			
		</div>
		<div class="others flex">
			<infoCard class="flex1 item" :icon="zhgc_xmzs" title="项目总数" value="140" ></infoCard>
			<infoCard class="flex1 item" :icon="zhgc_zjxms" title="在建项目数" value="100" ></infoCard>
			<infoCard class="flex1 item" :icon="zhgc_xmjd" title="项目进度正常比" value="50%" ></infoCard>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import infoCard from '@/components/infoCard/infoCard-single.vue'
	import zhgc_xmztz from '@/assets/imgs/zhgc_xmztz.png'
	import zhgc_tzwcl from '@/assets/imgs/zhgc_tzwcl.png'
	import zhgc_xmzs from '@/assets/imgs/zhgc_xmzs.png'
	import zhgc_xmjd from '@/assets/imgs/zhgc_xmjd.png'
	import zhgc_zjxms from '@/assets/imgs/zhgc_zjxms.png'
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