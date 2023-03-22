<template>
	<barBox class="rtBar flex-column" pos="right">
		<div class="flex-shrink flex-column">
			<item-title :icon="ztsc_yycb" title="运营成本概括">
				<template #label>
					<img src="../../../assets/imgs/line.png" alt="" srcset="">
				</template>
			</item-title>
			<yycb class="flex1"/>
		</div>
		<div class="ysfx flex1 flex-shrink flex-column">
			<item-title :icon="ztts_qycz" title="区域厂站营收分析">
				<template #label>
					<img src="../../../assets/imgs/line.png" alt="" srcset="">
				</template>
			</item-title>
			<ysfx class="flex1" />
		</div>
	</barBox>
</template>

<script lang="ts" setup>
    import barBox from '@/components/barBox/barBox.vue'
	import itemTitle from '@/components/itemTitle/itemTitle.vue'
	import yycb from './yycb.vue'
	import ysfx from './ysfx.vue'
	
	import ztsc_yycb from '../../../assets/imgs/zhsc_yycb.png'
	import ztts_qycz from '../../../assets/imgs/ztts_qycz.png'
</script>

<style lang="scss" scoped>
	.rtBar{
		.itemTitle{
			margin-bottom: 10px;
		}
		.ysfx{
			margin-top: 40px;
		}
	}
</style>