<template>
	<div class="contentBot">
		<hbySwipter></hbySwipter>
	</div>
</template>

<script lang="ts" setup>
	import hbySwipter from './swiper.vue'
</script>

<style lang="scss" scoped>
	.contentBot{
		position: fixed;
		bottom: 20px;
		left: 550px;
		right: 550px;
		z-index: 9;
		height: 250px;
		.flex1{
			margin-top: 20px;
		}
	}
	.mapInfo{
		width: 120px;
		height: 80px;
		padding: 4px 10px;
		background-color: #005252 ;
		position: fixed;
		bottom: 400px;
		left: 550px;
		z-index: 9;
		.flex1{
			line-height: 1;
			.legend{
				margin-right: 10px;
			}
		}
		.item1{
			.legend{
				width: 20px;
				height: 20px;
				border-radius: 50%;
				font-size: 10px;
				background: radial-gradient(rgba(206,178,52, 0.5)30%,#D8BC37 100%);
			}			
		}
		.item2{
			.legend{
				width: 20px;
				height: 20px;
				&::after{
					content: ' ';
					display: inline-block;
					width: 6px;
					height: 6px;
					background-color: #00FDFF;
					border-radius: 50%;
				}
				
			}
		}
	}
</style>