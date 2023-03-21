<template>
	<div class="legends flex align-center">
		<template v-for="item in legends" :key="item.title">
			<squareLegend :label="item.title" :color="item.color" v-if="item.type == 'bar'"/>
			<lineLegend :label="item.title" :color="item.color" v-else/>
		</template>		
	</div>
</template>

<script lang="ts" setup>
	import squareLegend from './squareLegend.vue'
	import lineLegend from './lineLegend.vue'
	defineProps({
		legends: {
			type: <any>Array,
			default: () => ([
				{title: '正常',color: '#00FDFF',type:'bar'},
				{title: '异常',color: 'rgba(0, 253, 255, 0.6)',type:'bar'}
			])
		}
	})
</script>