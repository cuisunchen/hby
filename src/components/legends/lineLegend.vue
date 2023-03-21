<template>
	<div class="legend flex align-center">
		<div class="shape flex all-center" :class="size">
			<div class="lg"></div>
		</div>
		<text class="legendLabel">{{label}}</text>
	</div>
</template>

<script lang="ts" setup>
	defineProps({
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
	})
</script>

<style lang="scss" scoped>
	.legend{
		padding: 0 6px;
		.shape{
			margin-right: 6px;
			&.small{
				width: 16px;
				height: 12px;
				.lg{
					width: 5px;
					height: 5px;
					&::after{
						left: 50%;
						top: 50%;
						margin-left: -6px;
						width: 12px;
						height: 1px;
					}
				}
			}
			&.default{
				width: 20px;
				height: 16px;
				.lg{
					width: 7px;
					height: 7px;
					&::after{
						left: 50%;
						top: 50%;
						margin-left: -8px;
						width: 16px;
						height: 1px;
					}
				}
			}
			&.large{
				width: 24px;
				height: 20px;
				.lg{
					width: 9px;
					height: 9px;
					&::after{
						left: 50%;
						top: 50%;
						margin-left: -10px;
						width: 20px;
						height: 1px;
					}
				}
			}
			.lg{
				border-radius: 50%;
				background-color: v-bind(color);
				position: relative;
				&::after{
					content: ' ';
					position: absolute;
					background-color: v-bind(color);
				}
			}
			
		}
		.legendLabel{
			color: v-bind(color);
		}
	}
</style>