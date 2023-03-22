<template>
	<div class="content">
		<mapChart :option="mapOption" />
	</div>
</template>

<script lang="ts" setup>
	import mapChart from '@/components/maps/mapChart.vue'
	import { mapOption } from '@/js_sdk/zhjy/zhjy_content_options'

</script>

<style lang="scss" scoped>
	.content{
		width: 100%;
		height: 100%;		
	}
</style>