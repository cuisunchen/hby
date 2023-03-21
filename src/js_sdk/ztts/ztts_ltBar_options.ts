/**
 * 厂站区域分布配置及数据处理逻辑
 */
//  dataObj为接口请求的数据  这里为示例    只需用真实数据替换即可
let dataObj = [
	{name: '广东大区', value: 16,normal: 9, abnormal: 7},
	{name: '湖北大区', value: 11,normal: 7, abnormal: 4},
	{name: '广西大区', value: 9,normal: 7, abnormal: 2},
	{name: '湖南大区', value: 5,normal: 4, abnormal: 1},
	{name: '吉林大区', value: 7,normal: 5, abnormal: 2},
	{name: '江苏大区', value: 6,normal: 3, abnormal: 3},
	{name: '黑龙江大区', value: 8,normal: 5, abnormal: 3},
]
//  对接口数据进行类型限制
type DataObjType = {
	name: string,
	normal: number,
	abnormal: number,
	value?: number
}
// 构建配置项所需的数据
const makeDatas = (dataObj: Array<DataObjType>) => {
	//  query为配置项所需的数据集
	let query = {
		xAxisData: [],
		botOvalSeriesData: [],		//  底部椭圆数据集
		centerOvalSeriesData: [],	//  中间椭圆数据集
		topOvalSeriesData: [],		//  顶部椭圆数据集
		normalSeriesData: [],		//  正常厂站数据集
		abnormalSeriesData: [],		//  异常厂站数据集
	}
	for (let item of dataObj) {
		let botOvalObj = {
			name: "底部椭圆",
			value: "1",	//  此处value必须有值，没有值不会渲染椭圆，tooltip显示内容被自定义，不会显示此值
			itemStyle: {
				color: "#00FDFF"
			}
		},
		centerOvalObj = {
			name: "中间椭圆",
			value: item.normal,	//  这里面value的值一定要算对，不然显示会不对
			symbolPosition: "end",				
		}, 
		topOvalObj = { 
			name: "顶部椭圆",
			value: item.abnormal + item.normal,
			symbolPosition: "end"	
		},
		normalSeriesObj = {
			name: "正常厂站",
			value: item.normal
		},
		abnormalSeriesData = {
			name: "异常厂站",
			value: item.abnormal,
		}
		query.xAxisData.push(item.name)
		query.botOvalSeriesData.push(botOvalObj)
		query.centerOvalSeriesData.push(centerOvalObj)
		query.topOvalSeriesData.push(topOvalObj)
		query.normalSeriesData.push(normalSeriesObj)
		query.abnormalSeriesData.push(abnormalSeriesData)
	}
	return query
}		
// 厂站区域分布配置
export const make_czqyfb_options = () => {
	let query = makeDatas(dataObj)
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
			padding: [5,10],
			formatter: (params:any) => {
				let str = params[0].axisValueLabel + '<br>'			
				for (let item of params) {
					if(item.seriesName && !item.seriesName.includes('series')){
						let marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+ item.color.colorStops[0].color +';"></span>'
						str += marker +item.seriesName + ': ' +  item.value + '<br>'
					}
				}
				return str
			}
		},
		grid: {
			left: 40,
			top: 10,
			right: 0,
			bottom: 60
		},
		xAxis: [
			{
				data: query.xAxisData,
				axisTick: {
					show: false
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: "#0FB7B8",
						type: "solid"
					}
				},
				axisLabel: {
					textStyle: {
						color: "#15FDFF"
					},
					margin: 20
				}
			}
		],
		yAxis: [
			{
				splitLine: {
					show: true,
					lineStyle: {
						color: "rgba(180,235,184,.3)",
						type: "dashed"
					}
				},
				axisTick: {
					show: false
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: "#0FB7B8",
						type: "solid"
					}
				},
				axisLabel: {
					textStyle: {
						color: "#15FDFF"
					}
				}
			}
		],
		series: [
			//  底部椭圆配置
			{
				name: "",
				type: "pictorialBar",
				symbolSize: [26, 14],
				symbolOffset: [0, 7],
				z: 12,
				data: query.botOvalSeriesData
			}, 
			//  中间椭圆配置
			{
				name: "",
				type: "pictorialBar",
				symbolSize: [26, 14],
				symbolOffset: [0, -7],
				itemStyle: {
					"color": "#00FDFF"
				},
				z: 12,
				data: query.centerOvalSeriesData
			}, 
			//  顶部椭圆配置
			{
				name: "",
				type: "pictorialBar",
				symbolSize: [26, 14],
				symbolOffset: [0, -7],
				itemStyle: {
					color: "#02a3ac"
				},
				z: 12,
				data: query.topOvalSeriesData
			}, 
			//  蓝色柱配置
			{
				name: "正常",
				type: "bar",
				barWidth: 26,
				barGap: "-100%",
				itemStyle: {
					color: {
						"x": 0,
						"y": 0,
						"x2": 0,
						"y2": 1,
						"type": "linear",
						"global": false,
						"colorStops": [{
							"offset": 0,
							"color": "rgba(55,255,249,1)"
						}, {
							"offset": 1,
							"color": "rgba(0,222,215,0.2)"
						}]
					}
				},
				data: query.normalSeriesData
			}, 
			//  透明柱配置
			{
				type: "bar",
				barWidth: 26,
				barGap: "-100%",
				stack: "广告",
				itemStyle: {
					"color": {
						"x": 0,
						"y": 0,
						"x2": 0,
						"y2": 1,
						"type": "linear",
						"global": false,
						"colorStops": [{
							"offset": 0,
							"color": "rgba(0,253,255,0.7)"
						}, {
							"offset": 1,
							"color": "rgba(0, 222, 255,0.7)"
						}]
					}
				},
				data: query.normalSeriesData
			}, 
			//  透明柱配置
			{
				name: "异常",
				type: "bar",
				barWidth: 50,
				barGap: "-100%",
				stack: "广告",
				itemStyle: {
					"color": {
						"x": 0,
						"y": 0,
						"x2": 0,
						"y2": 1,
						"type": "linear",
						"global": false,
						"colorStops": [{
							"offset": 0,
							"color": "rgba(0, 253, 255,0.38)"
						}, {
							"offset": 1,
							"color": "rgba(0, 222, 255,0.38)"
						}]
					}
				},
				data: query.abnormalSeriesData
			}
		]
	}
}

/**
 * 污水处理趋势分析配置及处理逻辑
 */
export const wsDataObj = {
	xAxisData: ["14:00","15:00","16:00","17:00","18:00","19:00","20:00"],
	seriesData: [4,7,5,4,3,5,8]
}
type WsDataObjType = {
	xAxisData: string[],
	seriesData: number[],
}
// 污水处理趋势分析
export const make_wsclqsfx_options = (wsDataObj: WsDataObjType) => {
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
			formatter: (params) => {
				let marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+ params[0].borderColor +'"></span>'
				return params[0].seriesName + '<br>' + 
						marker + params[0].name + ' 处理: ' + params[0].value
			}
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
			data: wsDataObj.xAxisData

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
				name: '污水处理',
				type: 'line',
				smooth: true,		//  直线是否为圆滑
				showAllSymbol: true,
				symbol: 'circle',
				symbolSize: 10,
				lineStyle: {
					color: "#A582EA",
				},
				label: {
					show: false,
					position: 'top',
					textStyle: {
						color: '#A582EA',
					}
				},
				itemStyle: {
					color: "#fff",	//  节点出白点配置
					borderColor: 'rgb(165, 130, 234)',
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
							{ offset: 0,color: 'rgba(165, 130, 234, .3)' },
							{ offset: 1,color: 'rgba(0,0,0,1)' }
						]
					}
				},
				data: wsDataObj.seriesData
			}
		]
	};
}

/**
 * 当月告警分析图配置及数据逻辑处理
 */
export const gjfxObj = {
	innerCircle: [
		{
			name: '水质报警',
			value: 92,
			label: {
				color: "#333"
			},
			color: '#00FBFF'
		},
		{
			name: '设备报警',
			value: 42,
			label: {
				color: "#333"
			},
			color: '#FFDD00'
		}
	],
	outerCircle: [
		{type: '已处理',value: 32,color: '#00FBFF'},
		{type: '未处理',value: 56,color: 'rgba(0, 251, 255 ,0.6)'},
		{type: '已处理',value: 24,color: '#FFDD00'},
		{type: '未处理',value: 18,color: 'rgba(255, 224, 0,0.6)'},
	]
}
export const make_dygjfx_optionos = (gjfxObj:Object) => {	
	return {
		tooltip: {
			formatter: function(param) {
				if (param.data.type == null) {		
					return param.data.name + ":" + param.value + '个';
				} else {		
					return param.data.type + ":" + param.value + '个';
				}
			}
		},
		series: [
			//  中心圆盘数据
			{
				name: '',
				type: 'pie',
				radius: [0, '40%'],
				label: {
					position: 'inner',		
				},
				itemStyle: {
					borderWidth: 2,
					color: function(params) {
						return params.data.color
					}
				},		
				selectedMode: 'single',
				data: gjfxObj.innerCircle
			},
			//  外部圆环数据
			{
				name: '',
				type: 'pie',
				radius: ['60%', '80%'],		
				itemStyle: {
					color: function(params) {
						return params.data.color
					}
				},
				label: {
					formatter: function(params) {		                		
						if (params.value != 0)
							return params.data.type + ": " + params.value + '个';
						else
							return '';
					},
					show: true,			
				},		
				data: gjfxObj.outerCircle
			}
		]
	};
}