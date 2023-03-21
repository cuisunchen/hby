<template>
  	<div class="contain" v-contain="[1920,1080]">
        <pageHead />
		<router-view />
	</div>
</template>

<script setup lang="ts">
import pageHead from '@/components/pageHead/pageHead.vue'

</script>
<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
    .contain{
        height: 100%;
        background-color: #050F19;
		background-image: url(./assets/imgs/ztts_bg_zt.png);
        background-repeat: no-repeat;
		background-size: cover;
    }
    .pageBox{
		color: #fff;
		width: 100%;
		height: 100%;
        padding-top: 100px;
	}
}
</style>
