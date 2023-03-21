<template>
	<div class="mapInfo flex-column">
		<div class="item1 flex1 flex align-center">
			<img src="@/static/imgs/ztts/map_txyc.png" alt="">
			通讯异常
		</div>
		<div class="item2 flex1 flex align-center">
			<img src="@/static/imgs/ztts/map_txzc.png" alt="">
			通讯正常
		</div>
	</div>
</template>

<script lang="ts" setup>
	
</script>

<style lang="scss" scoped>
	.mapInfo{
		width: 120px;
		height: 80px;
		padding: 4px 10px;
		background-color: #005252 ;
		position: fixed;
		bottom: 100px;
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