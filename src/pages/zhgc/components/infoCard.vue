<template>
	<border class="infoCard flex shadowBox flex-between align-center" style="margin-bottom: 20px">
	    <div class="iconBox flex all-center">
	        <img :src="icon" alt="">
			<span class="name">{{title}}</span>
	    </div>
	    <div class="infoWrap flex align-center">
	        <span class="val">{{value}}</span>
			<span class="unit" v-if="unit">{{unit}}</span>
	    </div>
	</border>
</template>

<script lang="ts" setup>
    import border from '@/components/border/border.vue'
	defineProps({
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

<style lang="scss" scoped>
	.infoCard{
		line-height: 1;
		padding: 0 20px 0 10px;
		color: #00FDFF;
		.name{
			font-size: 16px;
		}
		.infoWrap{			
			.val{
				font-size: 20px;
			}
			.unit{
				font-size: 12px;
				margin-left: 10px;
			}
		}
	}
</style>