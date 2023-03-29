<script setup>
import pageHead from '@/components/pageHead/pageHead.vue'
</script>

<template>
    <div class="contain flex-column" v-contain="[1920,1080]">
        <pageHead />
		<router-view class="flex1"/>
	</div>
</template>

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
        padding-top: 100px;
	}
    .el-loading-spinner{
        .path {
            -webkit-animation: loading-dash 1.5s ease-in-out infinite;
            animation: loading-dash 1.5s ease-in-out infinite;
            stroke-dasharray: 90, 150;
            stroke-dashoffset: 0;
            stroke-width: 6;
            stroke-linecap: round;
            stroke: #00FDFF !important;
        }
        .el-loading-text{
            color: #15FDFF !important;
            font-size: 20px !important;
            margin-top: 10px;
        }
    }
}
</style>
