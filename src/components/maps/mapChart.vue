<template>
	<div class="mapEchart" ref="chinaMap"></div>
	<myDialog :showDialog="showDialog" :info="info" :top="dialogPos.top" :left="dialogPos.left" @close="close"></myDialog>
</template>

<script   setup>
	import { ref, onMounted, onUnmounted, markRaw } from 'vue'
	import myDialog from './mapDialog.vue'
	import * as echarts from 'echarts'
    import aixos from 'axios'
	
	const props = defineProps({
		option: {
			type: Object,
			default: () => {}
		},
        isClick: {
            type: Boolean,
            default: () => true
        }
	})
	let showDialog = ref(false)
	let info = ref()
	let dialogPos = ref({})
	const chinaMap = ref()
	let myChart = ref()
	
	let getMapData = () => {
        aixos.get('/mapData/china.json').then(res => {
            echarts.registerMap('china', res.data);		
            drawImg()
        })
	}
	const drawImg = () => {		
		myChart.value.on('georoam', (params)=> {
			var option = myChart.value.getOption(); //获得option对象
			if (params.zoom != null && params.zoom != undefined) { //捕捉到缩放时
				showDialog.value = false
				option.geo[0].zoom = option.series[0].zoom; //下层geo的缩放等级跟着上层的geo一起改变
				option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
			} else { //捕捉到拖曳时
				showDialog.value = false
				option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
			}
			myChart.value.setOption(option); //设置option
		});
		myChart.value.on('click', (params)=> {
			if(params.componentSubType == 'effectScatter' && params.data != undefined){
                if(props.isClick){
                    showDialog.value = true
                }
				
				info.value = params.data.params
				dialogPos.value.left = params.event.offsetX + 10
				dialogPos.value.top = params.event.offsetY + 10
			}else{
				showDialog.value = false
			}
		})
		myChart.value.setOption(props.option,true);	
	}
	
	const chartResize = () => {
		myChart.value.resize
	}

    const close = () => {
        showDialog.value = false
    }

	onMounted(()=>{
		myChart.value = markRaw(echarts.init(chinaMap.value))
        let dom = document.querySelector('#app').firstChild
		window.onresize = myChart.value.resize;
		window.addEventListener('resize', chartResize)
		getMapData()
	})
	onUnmounted(() => {
		window.onresize = null;
		if(myChart.value){
			window.removeEventListener('resize', chartResize)
			myChart.value.dispose()
			myChart.value = null
		}
	})
</script>

<style lang="scss" scoped>
	.mapEchart{
	    height: 100%;
	    color: rgb(9, 19, 44);   
	}
	.modal {
	  position: fixed;
	  z-index: 999;
	  top: 20%;
	  left: 50%;
	  width: 300px;
	  margin-left: -150px;
	  color: #fff;
	}
</style>