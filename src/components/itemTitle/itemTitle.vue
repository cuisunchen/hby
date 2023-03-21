<template>
	<div class="itemTitle flex align-center">
		<div class="lt flex1 flex align-center">
			<div class="icon" :style="{'background': 'url(' + icon + ') no-repeat','background-size': 'cover'}"></div>
			<text class="titText">{{title}}</text>
			<slot name="desc"></slot>
		</div>
		<div class="rt">
			<slot name="label"></slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps({
	icon: {
		type: String,
		default: () => '../../static/imgs/tc_dz.png'
	},
	title: {
		type: String,
		default: () => '这是标题'
	}
})
</script>

<style lang="scss" scoped>
.itemTitle{
	.lt{
		.icon{
			width: 30px;
			height: 32px;
		}
		.titText{
			color: #00FDFF;
			font-size: 16px;  
			font-weight: bold;
			text-shadow: 0px 0px 10px rgba(5, 15, 25, 0.4);
		}
	}
}
</style>