<template>
	<div class="rank">
		<rankItem :index="index" :value="item.percent" :bgColor="item.bgColor" :progressColor="item.progressColor" :title="item.title" 
			v-for="(item,index) in dataObj" :key="index"></rankItem>
	</div>
</template>

<script lang="ts" setup>
	import rankItem from './rankItem.vue'
	
	defineProps({
		dataObj: {
			type: Array,
			default: () => ([
				{title: '云南大区',value: 460,percent: 0.8,progressColor: ['#FF6C00', '#FF9000'],bgColor: '#361b00'	},
				{title: '广东大区',value: 260,percent: 0.76,progressColor: ['#FFBA00', '#FFE000'],bgColor: '#746400'},
				{title: '广西大区',value: 360,percent: 0.7,progressColor: ['#00FDFF', '#00FDFF'],bgColor: '#007676'},
				{title: '湖北大区',value: 160,percent: 0.6},
				{title: '湖南大区',value: 230,percent: 0.5},
				{title: '海南大区',value: 180,percent: 0.44},
				{title: '四川大区',value: 270,percent: 0.4},
				{title: '贵州大区',value: 270,percent: 0.38},
			])
		},
	})
</script>

<style lang="scss" scoped>
	.rank{
		
	}
</style>