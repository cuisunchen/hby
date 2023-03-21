export let ysfxDatas1 = [
	{name: "关井数",value: 60,labelColor: '#00FBFF',ovalColors: ["#00fff5","#43bafe"],innerCircle: "#00FBFF",outerCircle: "#00FBFF",unit: '%'},
	{name: "开井数",value: 80,labelColor: '#ff7800',ovalColors: ["#ffcc00","#ff7800"],innerCircle: "#ff7800",outerCircle: "#ff7800",unit: '%'},
	{name: "不在线",value: 70,labelColor: '#e9a5ff',ovalColors: ["#b9b7ff","#e9a5ff"],innerCircle: "#e9a5ff",outerCircle: "#e9a5ff",unit: '%'}
]
export let ysfxDatas2 = [
	{name: "关井数",value: 583,labelColor: '#00FBFF',ovalColors: ["#00fff5","#43bafe"],innerCircle: "#00FBFF",outerCircle: "#00FBFF",unit: '度'},
	{name: "开井数",value: 764,labelColor: '#ff7800',ovalColors: ["#ffcc00","#ff7800"],innerCircle: "#ff7800",outerCircle: "#ff7800",unit: '度'},
	{name: "不在线",value: 872,labelColor: '#e9a5ff',ovalColors: ["#b9b7ff","#e9a5ff"],innerCircle: "#e9a5ff",outerCircle: "#e9a5ff",unit: '度'}
]
export let ysfxDatas3 = [
	{name: "关井数",value: 674,labelColor: '#00FBFF',ovalColors: ["#00fff5","#43bafe"],innerCircle: "#00FBFF",outerCircle: "#00FBFF",unit: '吨'},
	{name: "开井数",value: 590,labelColor: '#ff7800',ovalColors: ["#ffcc00","#ff7800"],innerCircle: "#ff7800",outerCircle: "#ff7800",unit: '吨'},
	{name: "不在线",value: 326,labelColor: '#e9a5ff',ovalColors: ["#b9b7ff","#e9a5ff"],innerCircle: "#e9a5ff",outerCircle: "#e9a5ff",unit: '吨'}
]
//  对接口数据进行类型限制
type YsfxDataType = {
	name: string,
	labelColor: string,
	innerCircle: string,
	outerCircle: string,
	ovalColors: object,
	value: number,
	unit?: string
}
export const make_ysfx_options = (datas: Array<YsfxDataType>) =>{
	let query = {
		xAxisData: datas.map(item => item.name),
		botOvalSeriesData: [],
		topOvalSeriesData: [],
		innerCircleData: [],
		outerCircleData: [],
		columnData: []
	}
	for (let item of datas) {
		// 顶部椭圆对象
		let topOvalSeriesObj = {
			name: '顶部椭圆',
			value: item.value,	
			symbolPosition: "end",
			itemStyle: {
				color: item.ovalColors[0]  //圆柱顶部颜色   
			}
		},
		// 底部椭圆对象
		botOvalSeriesObj = {
			name: '底部椭圆',
			value: item.value,	
			itemStyle: {
				color: item.ovalColors[1]  //圆柱顶部颜色   
			}
		},
		//  底部内圆圈对象
		innerCircleObj = {
			name: "底部内圆圈",
			value: item.value,
			itemStyle: {
				color: "transparent",
				borderColor: item.innerCircle, //底部内圆圈颜色
				borderWidth: 1            //  底部外圆环的宽度
			}
		},
		//  底部外圆圈对象
		outerCircleObj = {
			name: "底部外圆圈",
			value: item.value,
			itemStyle: {
				color: "transparent",
				borderColor: item.outerCircle, //底部内圆圈颜色
				borderWidth: 1            //  底部外圆环的宽度
			}
		},
		//  柱子对象
		columnObj = {
			name: item.name,
			value: item.value,
			label: {
				show: true,
				position: "top",
				distance: 10,
				color: item.labelColor, //柱子对应数值颜色
				fontSize: 16
			},
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
						"color": item.ovalColors[0]
					}, {
						"offset": 1,
						"color": item.ovalColors[1] //底部渐变颜色
					}]
				}
			}
		} 
		query.topOvalSeriesData.push(topOvalSeriesObj)
		query.botOvalSeriesData.push(botOvalSeriesObj)
		query.innerCircleData.push(innerCircleObj)
		query.outerCircleData.push(outerCircleObj)
		query.columnData.push(columnObj)
	}
	return {
		grid: {
		    "top": 50,
		    "left": 0,
		    "right": 0,
		    "bottom": 40
		},
		tooltip: {
			trigger: 'axis',
			textStyle: {"color": "#00FDFF", fontSize: 16, fontWeight: 'bold'},
			backgroundColor: 'rgba(21, 80, 80, 0.8)',
			formatter: (params:any) => {
				let str = params[0].name + '<br/>';
				let unit = ''
				for (var i = 0; i < params.length; i++) {
					let item = params[i]
					let marker = ''
					if(item.seriesType == 'bar'){
						unit = '%'
						marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + item.data.label.color + '"></span>'
						str += '<div style="display: inline-block; width: 70px">' + marker + item.name + '</div>: ' 
							+ item.value + datas[item.dataIndex].unit +'<br>'
					}
				}
				return str;
			}
		},
		xAxis: [
			{
			    "data": query.xAxisData,
			    "axisTick": {
			        "show": false
			    },
			    "axisLine": {
			        "show": false
			    },
			    "axisLabel": {
			        interval:0,
			        // color:  '#00FDFF',
			        color: (params) => {
						return datas.filter(item => item.name == params)[0].labelColor
					},
			        fontSize:12,
			        margin: 24, //刻度标签与轴线之间的距离。
			    }
			}
		],
		yAxis: [
			{
			    "splitLine": {
			        "show": false
			    },
			    "axisTick": {
			        "show": false
			    },
			    "axisLine": {
			        "show": false
			    },
			    "axisLabel": {
			        "show": false
			    }
			}
		],
		series: [
			//  圆柱顶部圆盘相关配置
			{
				"name": "顶部圆盘",
				"type": "pictorialBar",			
				"symbolSize": [30, 14],
				"symbolOffset": [0, -7],//  顶部圆盘的位置调节
				"z": 12,
				"data": query.topOvalSeriesData
			}, 
			//  圆柱底部圆盘相关配置
			{
				"name": "底部圆盘",
				"type": "pictorialBar",
				"symbolSize": [30, 14],
				"symbolOffset": [0, 7],      //  底部圆盘的位置调节
				"z": 12,
				"data": query.botOvalSeriesData
			}, 
			// 底部内圆圈相关配置
			{
				"name": "底部内圆圈",
				"type": "pictorialBar",
				"symbolSize": [60, 20],
				"symbolOffset": [0, 16],
				"z": 11,
				"data": query.innerCircleData
			}, 
			//  底部外圆圈相关配置
			{
				"name": "底部外圆圈",
				"type": "pictorialBar",
				"symbolSize": [40, 10.5],
				"symbolOffset": [0, 10],
				"z": 10,
				"data": query.outerCircleData
			}, 
			//  柱子相关配置
			{	    
				"type": "bar",
				"silent": true,
				"barWidth": 30,
				"barGap": "-100%",                    
				"data": query.columnData
			}
		]
	}
}