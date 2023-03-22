import dashedPic from '../../assets/imgs/dashed.png'
// let color = ['#00FDFF', '#ffc300', '#00e473', '#009DFF'];
// let chartData = [
// 	{ name: "云南大区", value: 8211, unit: '元' },
//     { name: "贵州大区", value: 6111, unit: '元' },
//     { name: "广东大区", value: 5711, unit: '元' },
//     { name: "广西大区", value: 3711, unit: '元' }
// ];


// 数据处理
const handleData = (query) => {
	let sum = 0;
	let pieSeries = [],
	    lineYAxis = [],
		richs = {
			line: {
				width: 80,
				height: 10,
				backgroundColor: {image: dashedPic}
			},
			bd: {
				color: '#ccc',
				padding: [0, 5],
				fontSize: 14,
			},
		};
	query.chartData.forEach((v, i) => {
		sum = sum + v.value;	//  计算所有指标值得和  用于计算百分比
	})
	
	// 图表option整理
	query.chartData.forEach((v, i) => {	
	    pieSeries.push({
			name: '营业收入占比',
			type: 'pie',
			clockWise: false,
			hoverAnimation: false,
			radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
			center: ["30%", "50%"],
			label: {
				show: false
			},
			data: [{
				value: v.value,
				name: v.name,
				itemStyle: {
					color: query.color[i]
				}
			}, {
				value: sum - v.value,
				name: '',
				itemStyle: {
					color: "rgba(0,0,0,0)"
				}
			}]
		});
		pieSeries.push({
			name: '',
			type: 'pie',
			silent: true,
			z: 1,
			clockWise: false, //顺时加载
			hoverAnimation: false, //鼠标移入变大
			radius: [65 - i * 15 + '%',57 - i * 15 + '%'],
			center: ["30%", "50%"],
			label: {
				show: false
			},
			data: [{
				value: 7.5,
				itemStyle: {
					color: "rgba(15, 183, 184, .1)"  //  大半圆的背景色
				}
			}, {
				value: 2.5,
				name: '',
				itemStyle: {
					color: "rgba(255,255,255,0)"    //  直角区域的扇形背景色
				}
			}]
		});
		v.percent = [(v.value / sum * 100).toFixed(1) + "%"];
		lineYAxis.push({
			value: i,
			textStyle: {
				rich: {
					circle: {
						color: query.color[i],
						padding: [0, 5]
					}
				}
			}
		});	
		Object.assign(richs,
		{
			['name' + i] : {
				width: 90,
				color: query.color[i],
				fontSize: 14,
			},
			['percent' + i] : {
				width: 90,
				color: query.color[i],
				fontSize: 14,
			},
			['value' + i] : {
				width: 90,
				color: query.color[i],
				fontSize: 14,
			},
			['unit' + i] : {
				width: 90,
				color: query.color[i],
				fontSize: 14,
			},
		})
	})
	return {
		pieSeries,lineYAxis,richs
	}
}

//  区营业收入
export const yysrOpt = (query) => {
	// 每次调用清空数组
	// lineYAxis = []
	let params:any = {}	
	params = handleData(query)	
	
	return {
		color: query.color,
		tooltip: {
			show: true,
			showContent: true,
			trigger: 'item',
			backgroundColor: 'rgba(21, 80, 80, 0.8)',
			borderColor:"rgba(0, 253, 255, .5)",                        //边框颜色
			borderWidth: 1,                              //边框线宽
			textStyle: {
				color: '#00FDFF', 
				fontSize: 15,				
			},
			padding: [5,10],
			formatter: (param:any) => {
				if(!param.name)return
				let str = param.seriesName + '<br>'			
				let marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+ param.color +';"></span>'
				str += marker +param.name + ': ' +  param.percent + '%<br>'
				return str
			}
		},
		grid: {
			top: '15%',
			bottom: '54%',
			left: "30%",
			containLabel: false
		},
		yAxis: [{
			type: 'category',
			inverse: true,
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				formatter: function(params) {
					let item = query.chartData[params];
					return '{line|}{circle|●}{name' + params + '|'+ item.name+ params +'}{bd|}{percent' + params + '|' + item.percent +
							'}{value' + params + '|'+ item.value+'}{unit' + params + '|元}'
				},
				interval: 0,
				inside: true,
				textStyle: {
					color: "#fff",
					fontSize: 14,
					rich: params.richs
				},
				show: true
			},
			data: params.lineYAxis
		}],
		xAxis: [{
			show: false
		}],
		series: params.pieSeries
	};
} 

//  集团营业收入
type QueryType = {
	xAxisData: Array<string>,
	seriesData: Array<number>
}
export const make_yysrqs_options = (data:QueryType) => {
	return {
		tooltip: {
			show: true,
			showContent: true,
			trigger: 'axis',
			backgroundColor: 'rgba(21, 80, 80, 0.8)',
			borderColor:"rgba(0, 253, 255, .5)",                        //边框颜色
			borderWidth: 1,                              //边框线宽
			textStyle: {
				color: '#00FDFF', 
				fontSize: 15,			
			},
		},
		grid: {
			top: 10,
			left: 30,
			right: 20,
			bottom: 20,
		},
		xAxis: [{
			type: 'category',
			name: '',
			axisLine: {
				show: true,
				lineStyle: {
					color: '#0FB7B8'
				}
			},
		
			axisLabel: {
				color: '#15FDFF',
				width:100
			},
			splitLine: {
				show: false
			},
			boundaryGap: false,
			data: data.xAxisData,

		}],
		yAxis: [{
			type: 'value',
			name: '浓度（mgl）',
			nameTextStyle:{                        
				padding: [0, 0, 0, 14]
			},
			min: 0,
			// max: 140,
			splitNumber: 4,
			splitLine: {
				show: true,
				lineStyle: {
					color: 'rgba(180,235,184,.3)',
					type: 'dashed'
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#0FB7B8',
					type: 'solid'
				}
			},
			axisLabel: {
				textStyle: {
					color: "#15FDFF"
				}
			},
			axisTick: {
				show: true,
			},
		}],
		series: [
			{
				name: '营业收入',
				type: 'line',
				smooth: true,		//  直线是否为圆滑
				showAllSymbol: true,
				symbol: 'circle',
				symbolSize: 10,
				lineStyle: {
					color: "rgba(0,222,215,0.6)",
				},
				label: {
					show: false,
					position: 'top',
					textStyle: {
						color: '#A582EA',
					}
				},
				itemStyle: {
					color: "#00FDFF",
					borderColor: '#fff',
					borderWidth: 2,
				},
				areaStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{ offset: 0,color: 'rgba(0,222,215,0.3)' },
							{ offset: 1,color: 'rgba(0,0,0,1)' }
						]
					}
				},
				data: data.seriesData,
			}
		]
	};
}
