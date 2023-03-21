<template>
	<div class="legend flex align-center">
		<div class="shape" :class="[type,size]">
			<img v-if="type == 'circular'" :src="img" mode="" />
		</div>
		<text class="legendLabel">{{label}}</text>
	</div>
</template>

<script lang="ts" setup>
	defineProps({
		type: {
			type: String,
			default: () => 'oblong'   // oblong 长方形  square 正方形  circular 圆柱形
		},
		size: {
			type: String,
			default: () => 'default'   // small default large
		},
		label: {
			type: String,
			default: () => '图例'
		},
		color: {
			type: String,
			default: () => '#00FDFF'
		},
		img: {		//  type == circular  为图片形式
			type: String,
			default: () => ''
		}
	})
</script>

<style lang="scss" scoped>
.legend{
	padding: 0 6px;
	.shape{
		margin-right: 6px;
	}
	.oblong{
		background-color: v-bind(color);
		&.small{
			width: 16px;
			height: 12px;
		}
		&.default{
			width: 20px;
			height: 16px;
		}
		&.large{
			width: 24px;
			height: 20px;
		}
	}
	.square{
		&.small{
			width: 16px;
			height: 16px;
		}&.default{
			width: 20px;
			height: 20px;
		}&.large{
			width: 24px;
			height: 24px;
		}
	}
	.circular{
		
		&.small{
			width: 16px;
			height: 16px;
		}&.default{
			width: 20px;
			height: 20px;
		}&.large{
			width: 24px;
			height: 24px;
		}
	}
	.legendLabel{
		color: #00FDFF;		
		font-size: 14px;
		line-height: 12px;
	}
}
</style>