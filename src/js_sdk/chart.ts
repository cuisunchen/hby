import { ref,markRaw } from 'vue'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
let myChart = ref(null)
const listen = () => {
	myChart.value.resize
}
export const initEchart = (el: HTMLElement) => {	
	myChart.value = markRaw(echarts.init(el))
	window.onresize = myChart.value.resize;
	window.addEventListener('resize',listen)
	myChart.value.showLoading({
		text: '加载中。。。',
		textColor: '#fff',
		maskColor: 'rgba(0, 0, 0, 0.1)',
	});
	return myChart
}

export const unInstall = (myChart: any) => {
	window.onresize = null;
	window.removeEventListener('resize',listen)
	if (myChart.value) {
		myChart.value.dispose()
		myChart.value = null
	}
}

export const drawImg = (myChart: any,props: EChartsOption) => {
	myChart.value.hideLoading();
	let option = {
		calculable: true,
		title: props.title,
		graphic: props.graphic,
		tooltip: props.tooltip,
		legend: props.legend,
		grid: props.grid,
		xAxis: props.xAxis,
		yAxis: props.yAxis,
		series: props.series,
	};
	myChart.value.setOption(option, true);
}

//  配置示例
export let options = {
	title: {},
	graphic: {},
	tooltip: {
		type: Object,
		default: () => ({
			show: true,
			trigger: 'item',
			borderColor: '#333', // 提示框浮层的边框颜色。				
			extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);', // 额外附加到浮层的 css 样式
		})
	},
	legend: {
		show: false,
	},
	xAxis: {
		type: Array,
		default: () => []
	},
	yAxis: {
		type: Array,
		default: () => []
	},
	series: {
		type: Array,
		default: () => []
	},		
	grid: {
		type: Object,
		default: () => {
			return {
				top: 10,
				left: 30,
				right: 30,
				bottom: 20,
			}
		}
	},
}