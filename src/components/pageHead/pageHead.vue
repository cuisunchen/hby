<template>
	<div class="pageHead flex animate fadeInDown">
		<div class="lt flex align-center">
			<div class="logo"></div>
			<div class="name">智慧环保大数据可视化平台</div>
		</div>
		<div class="rt flex1 flex align-center flex-between flex-end">
			<div class="navs flex flex1" ref="navBox">
				<div class="nav flex1 flex all-center" v-for="(nav,index) in navs" :key="index" :ref="'nav'+ index" 
					:class="{active: index == currentIndex}" @click="goPage(nav.pageUrl,index)">{{nav.title}}</div>
				<div class="slider" :style="{transform: 'translateX(' + slideWidth * currentIndex + 'px)',width: slideWidth+'px'}"></div>
			</div>
			<div class="logout" @click="fullScreenToggle"></div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref,onMounted,nextTick, watch } from 'vue'
	import { useRouter } from 'vue-router'
	
	const router = useRouter()
	const navs = [
		{ title: '总体态势',pageUrl: '/' },
		{ title: '智慧运维',pageUrl: '/zhyw' },
		{ title: '智慧生产',pageUrl: '/zhsc' },
		{ title: '智慧经营',pageUrl: '/zhjy' },
		{ title: '智慧工程',pageUrl: '/zhgc' },
		{ title: '企业画像',pageUrl: '/qyhx' },
	]
	let currentIndex = ref(0)
	let slideWidth = ref(0)
	const navBox = ref()
	
	const goPage = (url: string,index: number) =>{
		currentIndex.value = index
		let currentRoute = router.currentRoute.value.fullPath
		slideWidth.value = navBox.value.children[index].clientWidth     
		if(currentRoute == url){return}
        router.push(url)
	}
	
	const confirmActive = () => {
		let currentRoute = router.currentRoute.value.fullPath
		let index = navs.findIndex((item:any) => item.pageUrl == currentRoute)
		switch (currentRoute){
			case '/':
				currentIndex.value = index
				break;
			case '/zhyw':
				currentIndex.value = index
				break;
			case '/zhsc':
				currentIndex.value = index
				break;
			case '/zhjy':
				currentIndex.value = index
				break;
			case '/zhgc':
				currentIndex.value = index
				break;
			case '/qyhx':
				currentIndex.value = index
				break;
		}
	}
	confirmActive()
	window.addEventListener('resize',() => {
		slideWidth.value = navBox.value.$el.children[currentIndex.value].clientWidth  
	})
	const fullScreenToggle = () => {
		const fullScreenEl = document.documentElement
		const isFullScreen = document.fullscreenElement
		if(isFullScreen){
			if(document.exitFullscreen){
				document.exitFullscreen()
			}else if(document.msExitFullscreen){
				document.msExitFullscreen()
			}else if(document.mozCancelFullScreen){
				document.mozCancelFullScreen()
			}else if(document.webkitCancelFullScreen){
				document.webkitCancelFullScreen()
			}
		}else{
			if(fullScreenEl.requestFullscreen){
				fullScreenEl.requestFullscreen()
			}else if(fullScreenEl.mozRequestFullScreen){
				fullScreenEl.mozRequestFullScreen()
			}else if(fullScreenEl.webkitRequestFullscreen){
				fullScreenEl.webkitRequestFullscreen()
			}else if(fullScreenEl.msRequestFullscreen){
				fullScreenEl.msRequestFullscreen()
			}
		}
		
	}
	onMounted(()=>{	
		setTimeout(() =>{
            slideWidth.value = navBox.value.children[0].clientWidth  
        },0)
	})
</script>

<style lang="scss" scoped>
.pageHead{
    height: 60px;
    position: fixed;
    top: 10px;
    left: 0;
    right: 0;
    z-index: 999;
	.lt{
		padding: 0 24px;
		background-image: linear-gradient(to left,rgba(180,255,255,.3) ,rgba(255,255,255,0));
		.logo{
			width: 60px;
			height: 60px;	
			margin-right: 20px;
			background: url(../../assets/imgs/homeLogo.png) no-repeat;
			background-size: cover;
		}
		.name{     
			font-size: 38px;
			font-weight: bold;
			text-shadow: 0px 0px 10px rgba(5, 15, 25, 0.4);
			background: linear-gradient(0deg, #00FDFF 0%, #00CCFF 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
	.rt{
		padding-right: 24px;
		background-image: linear-gradient(to left,rgba(180,255,255,.3) ,rgba(255,255,255,0));
		.navs{
			font-size: 16px;
			height: 60px;
			margin: 0 40px;
			position: relative;
			.nav{
				cursor: pointer;
				color: #00FDFF;
				opacity: 0.6;
				font-size: 20px;
				text-shadow: 0px 0px 10px rgba(5, 15, 25, 0.4);
				padding: 0 20px;
				&.active{
					color: #00FDFF;
					opacity: 1;
					text-shadow: 0px 0px 10px rgba(5, 15, 25, 0.4);
				}
			}
			.slider{
				position: absolute;   
				left: 0;             
				bottom: 0;
				// width: 152px;
				height: 12px;
				background: url(../../assets/imgs/light.png) no-repeat;
				background-size: 90% 120%;
				transition: all .3s ease-in-out;
			}
		}
		.logout{
			width: 43px;
			height: 40px;
			background: url(../../assets/imgs/top_tc.png) no-repeat;
			background-size: cover;
		}
	}
}
</style>