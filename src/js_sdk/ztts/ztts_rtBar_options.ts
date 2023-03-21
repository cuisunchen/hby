/* 
	总体态势 右边栏数据配置
 */
// 任务趋势变化配置
export const rwqsObj = {
	xAxisData: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
	seriesData: [4,7,5,4,3,5,8,4,7,5,4,3]
}
type RwqsDataObjType = {
	xAxisData: string[],
	seriesData: number[],
}
export const make_rwqs_options = (rwqsObj:RwqsDataObjType) => {
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
			right: 30,
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
			data: rwqsObj.xAxisData,

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
				smooth: false,		//  直线是否为圆滑
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
							{ offset: 0,color: "rgba(0,222,215,0.3)" },
							{ offset: 1,color: "rgba(0,0,0,1)" }
						]
					}
				},
				data: rwqsObj.seriesData,
			}
		]
	};
}

//  区域厂站营收
export const qyczObj = {
	xAxisData: ['广东大区','广西大区','云南大区','贵州大区','福建大区','山西大区','海南大区'],
	seriesDataObj: {
		profitArr: [ 709, 1917, 2455, 2610, 1719, 1433, 1544, 3285, 5208, 3372, 2484, 4078 ],
		lossArr: [ 327, 1776, 507, 1200, 800, 482, 204, 1390, 1001, 951, 381, 220 ]
	}
}
type QyczqsDataObjType = {
	xAxisData: string[],
	seriesDataObj: any,
}
export const make_qyczys_options = (qyczObj: QyczqsDataObjType) => {	
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
			formatter: (params:any) => {
				console.log(params)
				let str = params[0].axisValueLabel + '<br>'			
				for (let item of params) {
					if(item.seriesName && !item.seriesName.includes('series')){
						let marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+ item.color +';"></span>'
						str += marker +item.seriesName + ': ' +  item.value + '<br>'
					}
				}
				return str
			}
		},
		grid: {
			top: 10,
			left: 40,
			right: 30,
			bottom: 20,
		},
		xAxis: [{
			type: "category",
			axisLine: {
				lineStyle: {
					color: '#0FB7B8'
				}
			},
			splitLine: {
				"show": false
			},
			axisTick: {
				"show": false
			},
			splitArea: {
				"show": false
			},
			axisLabel: {
				"interval": 0,

			},
			data: qyczObj.xAxisData
		}],
		yAxis: [{
			type: "value",
			splitLine: {
				"show": true,
				"lineStyle": {
					"color": "rgba(180,235,184,.3)",
					"type": "dashed"
				}
			},
			axisLine: {
				lineStyle: {
					color: '#0FB7B8'
				}
			},
			axisTick: {
				"show": false
			},
			axisLabel: {
				"interval": 0,

			},
			splitArea: {
				"show": false
			},

		}],
		series: [
			{
				"name": "盈利",
				"type": "bar",
				"stack": "总量",
				"barMaxWidth": 35,
				"barGap": "10%",
				"itemStyle": {
					"color": "#00FDFF",
					"label": {
						"show": true,
						"textStyle": {
							"color": "#fff"
						},
						"position": "inside",
						formatter: function(p) {
							return p.value > 0 ? (p.value) : '';
						}
					}
				},
				"data": qyczObj.seriesDataObj.profitArr,
			},
			{
				"name": "亏损",
				"type": "bar",
				"stack": "总量",
				"itemStyle": {
					"color": "rgba(0,222,215,0.4)",
					"barBorderRadius": 0,
					"label": {
						"show": true,
						"position": "inside",
						formatter: function(p) {
							return p.value > 0 ? (p.value) : '';
						}
					}
				},
				"data": qyczObj.seriesDataObj.lossArr,
			}
		]
	}
}