export const makeOption = (value:number=0,title:String='出水达标率') => {
	return {
		title: [{
			text: title,
			x: 'center',
			top: '48%',
			textStyle: {
				color: '#fff',
				fontSize: 16,
				lineHeight : 20,
				fontWeight: '100',
			}
		}, {
			text: value + '%',
			x: 'center',
			top: '37%',
			textStyle: {
				fontSize: '20',
				color: '#fff',
				fontFamily: 'Lato',
				foontWeight: '600',
			},
		}],
		tooltip: {
			show: false,
			formatter: "{a} <br/>{b} : {c}%"
		},
		series: [
			{
				name: "内部（环形）进度条",
				type: "gauge",
				// center: ['20%', '50%'],
				radius: '70%',
				splitNumber: 10,
				axisLine: {
					lineStyle: {
						color: [
							[value/100, '#00FBFF'],
							[1, "rgba(0, 251, 255, 0.6)"]
						],
						width: 4
					}
				},
				axisLabel: {
					show: false,
				},
				axisTick: {
					show: false,
				},
				splitLine: {
					show: false,
				},
				pointer: {
					show: false,
				},				
				detail: {
					show: false
				}
			},
			{
				name: '外部刻度',
				type: 'gauge',
				//  center: ['20%', '50%'],
				radius: '90%',
				min: 0, //最小刻度
				max: 100, //最大刻度
				splitNumber: 10, //刻度数量
				startAngle: 225,
				endAngle: -45,
				axisLine: {
					show: false,
					// 仪表盘刻度线
					lineStyle: {
						width: 2,
						color: [
							[1, '#00FBFF']
						]
					}
				},
				//仪表盘文字
				axisLabel: {
					show: true,
					color: '#00FBFF',
					distance: 15,
					fontSize: 10,
					formatter: function(v: string) {
						switch (v + '') {
							case '0':
								return '0';
							case '10':
								return '10';
							case '20':
								return '20';
							case '30':
								return '30';
							case '40':
								return '40';
							case '50':
								return '50';
							case '60':
								return '60';
							case '70':
								return '70';
							case '80':
								return '80';
							case '90':
								return '90';
							case '100':
								return '100';
						}
					}
				}, //刻度标签。
				axisTick: {
					show: true,
					splitNumber: 7,
					lineStyle: {
						color: '#00FBFF', //用颜色渐变函数不起作用
						width: 1,
					},
					length: -8
				}, //刻度样式
				splitLine: {
					show: true,
					length: -10,
					lineStyle: {
						color: '#00FBFF', //用颜色渐变函数不起作用
					}
				}, //分隔线样式
				detail: {
					show: false
				},
				pointer: {
					show: false
				}
			},
			/*内部*/
			{
				type: 'pie',
				radius: ['0', '50%'],
				center: ['50%', '50%'],
				z: 8,
				hoverAnimation: false,
				data: [{
					name: '检查进度',
					value: value,          //  百分比的值设置
					itemStyle: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 0,
							colorStops: [
								{ offset: 0,color: '#00c5c5' },
								{ offset: 1,color: '#00acac' }
							]
						}
					},
					label: {
						formatter: function(params: { value: string; }) {
							return params.value + '%';
						},
						color: '#FFFFFF',
						fontSize: 20,
						fontWeight: "bold",
						position: 'center',
						show: false
					},
					labelLine: {
						show: false
					},
					tooltip:{
						show: true,
						textStyle: {
							color: '#00c5c5'
						},
						formatter: "{b} : {c}%"
					}
				}]
			},
			/*外一层*/
			{
				type: "pie",
				radius: "55%",
				startAngle: 220,
				endAngle: -40,
				hoverAnimation: false,
				center: ["50%", "50%"],
				avoidLabelOverlap: false,
				label: {
					show: false
				},
				labelLine: {
					show: false
				},
				data: [{
					value: 1,
					itemStyle: {
						normal: {
							color: 'rgba(0, 251, 255, 0.5)'
						}
					},
					tooltip:{
						show: false
					}
				}],
			},
			//外二层圈
			{
				type: "pie",
				radius: "60%",
				center: ["50%", "50%"],
				avoidLabelOverlap: false,
				z: 0,
				hoverAnimation: false,
				label: {
					show: false
				},
				labelLine: {
					show: false
				},
				data: [{
					"value": 1,
					itemStyle: {
						normal: {
							color: 'rgba(0, 251, 255, 0.3)'
						}
					},
					tooltip:{
						show: false,
					}
				}]
			}
		]
	}
}
import { ref,markRaw } from 'vue'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
let myChart = ref()
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