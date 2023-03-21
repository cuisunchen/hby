const label = {
	show: true,
	position: 'inside',
	formatter: 0,
	textStyle: {
		color: '#fff',
		fontSize: 16
	}
}
let max = 200
let spNum = 5
const formatInt = (num, prec = 1, ceil = true) => {
	// num：数值；prec：向上取整多少位，默认为2位；ceil：true-向上，false-向下；
	const len = String(num).length;
	if (len <= prec) { return num }
	const mult = Math.pow(10, prec);
	return ceil ? Math.ceil(num / mult) * mult : Math.floor(num / mult) * mult;
}
export const make_xmqy_options = (query) =>{
	let legendArr = [],seriesData= [],maxCounts = [],maxNum= 0
	for (let item of query.dataArr) {
		let val = item.value.reduce((pre,curr) => pre + curr)
		maxCounts.push(val)
		
		let legendObj = {
			name: item.name,
			textStyle: {
				color: (params)=>{}
			}
		},
		seriesObj = {
			type: 'bar',
			name: item.name,
			stack: '2',
			label: label,
			legendHoverLink: false,
			barWidth: 24,
			itemStyle: {
				color: {
					"x": 0,
					"y": 0,
					"x2": 1,
					"y2": 0,
					"type": "linear",
					"colorStops": item.colorStops
				},
				emphasis: {
					color: '#7E47FF'
				}
			},
			data: item.value
		}
		legendArr.push(legendObj)
		seriesData.push(seriesObj)
	}
	
	maxNum = Math.max(...maxCounts)	
	max = formatInt(maxNum)
	console.log(max)
	return {
		grid: {
			containLabel: true,
			top: 60,
			left: 16,
			right: 10,
			bottom: 10
		},
		legend:{
			show: true,
			data: legendArr
		},
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
			padding: [5,10],
			formatter: (p)=> {
				let nums = p.map(item =>item.value)
				let total = nums.reduce((pre,curr) => pre + curr)
				let str = p[0].axisValue + '<br>'
				for (let item of p) {
					let marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+ item.color.colorStops[1].color +';"></span>'
					str += '<div style="display:inline-block;width:120px">'+  marker +item.seriesName + ': ' +  item.value + '</div>' + ' 占比：' + (item.value / total * 100).toFixed(0) + '%' + '<br>'
				}
				return str
			},
			extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)'
		},
		xAxis: [
			{
				splitNumber: spNum,
				interval: max / spNum,
				max: max,
				axisLabel: {
					show: true
				},
				axisLine: {
					show: false,
					lineStyle: {
						color: '#0FB7B8',
						type: 'solid'
					}
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: 'rgba(180,235,184,.3)',
						type: 'dashed'
					}
				},
			}
		],
		yAxis: [{
			data: query.y_data,
			axisLabel: {
				fontSize: 14,
				color: '#0FB7B8'

			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#0FB7B8',
					type: 'solid'
				}
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			}
		}],
		series: seriesData
	};
}
// export const xmqyOpt = {
// 	grid: {
// 		containLabel: true,
// 		top: 60,
// 		left: 16,
// 		right: 10,
// 		bottom: 10
// 	},
// 	legend:{
// 		show: true,
// 		data: [
// 			{
// 				name: '正常完成',
// 				textStyle: {
// 					color: (params)=>{}
// 				}
// 			},
// 			{
// 				name: '正常进行',
// 				textStyle: {
// 					color: (params)=>{}
// 				}
// 			},
// 			{
// 				name: '未开始',
// 				textStyle: {
// 					color: (params)=>{}
// 				}
// 			},
// 			{
// 				name: '逾期完成',
// 				textStyle: {
// 					color: (params)=>{}
// 				}
// 			},
// 			{
// 				name: '逾期进行',
// 				textStyle: {
// 					color: (params)=>{}
// 				}
// 			}
// 		]
// 	},
// 	tooltip: {
// 		show: true,
// 		showContent: true,
// 		trigger: 'axis',
// 		backgroundColor: 'rgba(21, 80, 80, 0.8)',
// 		borderColor:"rgba(0, 253, 255, .5)",                        //边框颜色
// 		borderWidth: 1,                              //边框线宽
// 		textStyle: {
// 			color: '#00FDFF', 
// 			fontSize: 15,				
// 		},
// 		padding: [5,10],
// 		formatter: (p)=> {
// 			let nums = p.map(item =>item.value)
// 			let total = nums.reduce((pre,curr) => pre + curr)
// 			let str = p[0].axisValue + '<br>'
// 			for (let item of p) {
// 				let marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+ item.color.colorStops[1].color +';"></span>'
// 				str += '<div style="display:inline-block;width:120px">'+  marker +item.seriesName + ': ' +  item.value + '</div>' + ' 占比：' + (item.value / total * 100).toFixed(0) + '%' + '<br>'
// 			}
// 			return str
// 		},
// 		extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)'
// 	},
// 	xAxis: [
// 		{
// 			splitNumber: spNum,
// 			interval: max / spNum,
// 			max: max,
// 			axisLabel: {
// 				show: true
// 			},
// 			axisLine: {
// 				show: false,
// 				lineStyle: {
// 					color: '#0FB7B8',
// 					type: 'solid'
// 				}
// 			},
// 			axisTick: {
// 				show: false
// 			},
// 			splitLine: {
// 				show: true,
// 				lineStyle: {
// 					color: 'rgba(180,235,184,.3)',
// 					type: 'dashed'
// 				}
// 			},
// 		}
// 	],
// 	yAxis: [{
// 		data: xmqyParams.y_data,
// 		axisLabel: {
// 			fontSize: 14,
// 			color: '#0FB7B8'

// 		},
// 		axisLine: {
// 			show: true,
// 			lineStyle: {
// 				color: '#0FB7B8',
// 				type: 'solid'
// 			}
// 		},
// 		axisTick: {
// 			show: false
// 		},
// 		splitLine: {
// 			show: false
// 		}
// 	}],
// 	series: [{
// 		type: 'bar',
// 		name: '正常完成',
// 		stack: '2',
// 		label: label,
// 		legendHoverLink: false,
// 		barWidth: 24,
// 		itemStyle: {
// 			color: {
// 				"x": 0,
// 				"y": 0,
// 				"x2": 1,
// 				"y2": 0,
// 				"type": "linear",
// 				"global": false,
// 				"colorStops": [{//第一节下面
// 					"offset": 0,
// 					"color": "rgba(187, 254, 255, 1)"
// 				}, {
// 					"offset": 1,
// 					"color": "rgba(0, 253, 255, 1)"
// 				}]
// 			},
// 			emphasis: {
// 				color: '#7E47FF'
// 			}
// 		},
// 		data: xmqyParams.data1
// 	}, {
// 		type: 'bar',
// 		name: '正常进行',
// 		stack: '2',
// 		legendHoverLink: false,
// 		barWidth: 24,
// 		label: label,
// 		itemStyle: {
// 			color: {
// 				"x": 0,
// 				"y": 0,
// 				"x2": 1,
// 				"y2": 0,
// 				"type": "linear",
// 				"global": false,
// 				"colorStops": [{//第一节下面
// 					"offset": 0,
// 					"color": "rgba(119, 228, 255, 1)"
// 				}, {
// 					"offset": 1,
// 					"color": "rgba(0, 205, 255, 1)"
// 				}]
// 			},
// 			emphasis: {
// 				color: '#FD5916'
// 			}
// 		},
// 		data: xmqyParams.data2
// 	}, {
// 		type: 'bar',
// 		stack: '2',
// 		name: '未开始',
// 		legendHoverLink: false,
// 		barWidth: 24,
// 		label: label,
// 		itemStyle: {
// 			color: {
// 				"x": 0,
// 				"y": 0,
// 				"x2": 1,
// 				"y2": 0,
// 				"type": "linear",
// 				"global": false,
// 				"colorStops": [{//第一节下面
// 					"offset": 0,
// 					"color": "rgba(153, 255, 236, 1)"
// 				}, {
// 					"offset": 1,
// 					"color": "rgba(0, 255, 208, 1)"
// 				}]
// 			},
// 			emphasis: {
// 				color: '#01A4F7'
// 			}
// 		},
// 		data: xmqyParams.data3
// 	}, {
// 		type: 'bar',
// 		stack: '2',
// 		name: '逾期完成',
// 		legendHoverLink: false,
// 		barWidth: 24,
// 		label: label,
// 		itemStyle: {
// 			color: {
// 				"x": 0,
// 				"y": 0,
// 				"x2": 1,
// 				"y2": 0,
// 				"type": "linear",
// 				"global": false,
// 				"colorStops": [{//第一节下面
// 					"offset": 0,
// 					"color": "rgba(255, 245, 168, 1)"
// 				}, {
// 					"offset": 1,
// 					"color": "rgba(254, 224, 1, 1)"
// 				}]
// 			},
// 			emphasis: {
// 				color: '#2EDDCD'
// 			}
// 		},
// 		data: xmqyParams.data4
// 	}, {
// 		type: 'bar',
// 		stack: '2',
// 		name: '逾期进行',
// 		legendHoverLink: false,
// 		barWidth: 24,
// 		label: label,
// 		itemStyle: {
// 			color: {
// 				"x": 0,
// 				"y": 0,
// 				"x2": 1,
// 				"y2": 0,
// 				"type": "linear",
// 				"global": false,
// 				"colorStops": [{//第一节下面
// 					"offset": 0,
// 					"color": "rgba(255, 197, 122, 1)"
// 				}, {
// 					"offset": 1,
// 					"color": "rgba(255, 143, 0, 1)"
// 				}]
// 			},
// 			emphasis: {
// 				color: '#2EDDCD'
// 			}
// 		},
// 		data: xmqyParams.data5
// 	}]
// };



