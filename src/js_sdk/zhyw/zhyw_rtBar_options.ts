// 数据集示例
export const query= {
	xAxisData: ["2020-06-21","2020-06-22","2020-06-23","2020-06-24","2020-06-25","2020-06-26","2020-06-27"],
	seriesData: [		
		{name: '保养任务',data:[4,7,5,4,3,5,8],lineColor: '#A582EA',areaColor: [{ offset: 0,color: 'rgba(165, 130, 234, .7)' },{ offset: 1,color: 'rgba(154, 103, 255, 0)' }]},
		{name: '巡检任务',data:[3,5,4,2,1,7,6],lineColor: '#2CABE3',areaColor: [{ offset: 0,color: 'rgba(44, 171, 227, .7)' },{ offset: 1,color: 'rgba(81,150,164,0)' }]},
		{name: '维修任务',data:[13,9,3,7,4,7,9],lineColor: '#FFDD00',areaColor: [{ offset: 0,color: 'rgba(255, 221, 0, .5)' },{ offset: 1,color: 'rgba(255, 244, 169, 0)' }]}
	]
}
type RwqsQueryType = {
	xAxisData: string[],
	seriesData: any[],
}
export const make_rwqs_options = (query:RwqsQueryType) => {
	let series = []
	for (let item of query.seriesData) {
		let obj = {
		    name: item.name,
		    type: 'line',
		    showAllSymbol: true,
		    symbol: 'circle',
		    symbolSize: 10,
		    lineStyle: {
		        color: item.lineColor,
		    },
		    label: {
		        show: false,
		        position: 'top',
		        color: '#A582EA',
		    },
		    itemStyle: {
		        color: "#fff",	//  此处是设置节点中点的颜色 如需修改可自行定义
		        borderColor: item.lineColor,
		        borderWidth: 2,
		    },
		    areaStyle: {
		        color: {
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: item.areaColor
				}
		    },
		    data: item.data
		}
		series.push(obj)
	}
	return {
		tooltip: {
			trigger: 'axis',
			textStyle: {"color": "#00FDFF", fontSize: 16, fontWeight: 'bold'},
			backgroundColor: 'rgba(21, 80, 80, 0.8)',
			formatter: (params:any) => {
				let str = params[0].name + '<br/>';
				for (var i = 0; i < params.length; i++) {
					let item = params[i]
					let marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + item.borderColor + '"></span>'
					str += '<div style="display: inline-block; width: 80px">' + marker + item.seriesName + '</div>：' 
						+ item.value + '<br>'
				}
				return str;
			}
		},
		grid: {
			top: 10,
			left: 50,
			right: 10,
			bottom: 60,
		},
		xAxis: [{
			type: 'category',
			axisLine: {
				show: true,
				lineStyle: {
					color: '#0FB7B8'
				}
			},
			axisLabel: {
				color: '#15FDFF',
				width:100,
				rotate: 45
			},
			splitLine: {
				show: false
			},
			boundaryGap: false,
			data: query.xAxisData,
		
		}],
		yAxis: [{
			type: 'value',
			scale: true,
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
				color: "#15FDFF"
			},
		}],
		series
	}
}
