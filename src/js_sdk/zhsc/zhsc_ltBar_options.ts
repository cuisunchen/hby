/**
 * 智慧生产 左边栏图标配置
 */
//  污水排放配置
// 参数示例
let query = {
	xAxisData: ['华润永定厂','华润金江厂','华润合浦厂','华润湛江厂','华润漳平厂','华润罗定厂','百色固体废物治理厂','华润吕梁方山厂','华润安顺厂','华润龙岩雁石厂','华润田阳厂','华润福龙厂'],
	seriesData: [
		{
			yAxisIndex: 0,
			name: "实际排放",
			type: "bar",
			barWidth: 10,
			itemStyle: {
				color: '#00FDFF',
				barBorderRadius: 5
			},
			data: ["93.30", "121.17", "114.08","98.02",'96.55',"86.04",'72.66','92.12',"89.52",'74.48',"64.68",'83.81']
		},
		{
			yAxisIndex: 0,
			name: '计划排放',
			type: 'bar',
			barWidth: 10,
			xAxisIndex: 0,
			barGap: '-100%',
			data: [206.5,178,125,114,117.8,97,103,99,100,92,79.72,93],
			itemStyle: {
				color: 'rgba(15, 183, 184, .3)',
				barBorderRadius: 30
			},
		},	
		{
			yAxisIndex: 1,
			name: "负荷率",
			type: "line",
			symbolSize: 8,
			symbol: 'circle',
			smooth: true,
			itemStyle: {
				color: "#fdff5c"
			},
			data: ['27.38','9.05','8.42','6.09','5.77','5.64','5.61','5.56','4.43','4.43','4.00','3.92']
		},
	]
}
export const make_wspf_options = (query) => {	
	return {
		tooltip: {
			trigger: "item",
			textStyle: {"color": "#00FDFF", fontSize: 16, fontWeight: 'bold'},
			backgroundColor: 'rgba(21, 80, 80, 0.8)',
			borderColor: 'rgba(0, 253, 255, .5)',
			formatter: (params:any) => {
				let str = params.name + '<br/>';			
				for (var i = 0; i < query.seriesData.length; i++) {
					let item = query.seriesData[i]
					let marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + item.itemStyle.color + '"></span>'
					str += '<div style="display: inline-block; width: 80px">' + marker + item.name + '</div>：' 
						+ item.data[params.dataIndex] + (item.name.includes('比') || item.name.includes('率') ? '%' : '万吨') + '<br/>';
				}
				return str;
			}
		},
		grid: {
			top: 40,
			left: 30,
			right: 40,
			bottom: 20,
		},
		xAxis: [
			{
				name: '',
				nameTextStyle: {
					color: '#fff',
					fontSize: 16,
					fontWeight: 'bold'
				},
				type: "category",
				splitLine: {"show": false},
				data: query.xAxisData,
				axisTick: {"show": false},
				axisLine: {"lineStyle": {"type": "solid", "color": "#0FB7B8", "opacity": "0.7", "width": "2"}},
				axisLabel: {"fontSize": 14, "color": "#15FDFF"}
			}
		],
		yAxis: [
			{
				"name": '万吨',
				"nameTextStyle": {"color": "#15FDFF", "fontSize": 12},
				"type": "value",
				"splitNumber": 6,
				"splitLine": {"show": false},
				"axisTick": {"show": false},
				"axisLine": {"lineStyle": {"type": "solid", "color": "#0FB7B8", "opacity": "0.7", "width": "1"}},
				"axisLabel": {
					"formatter": '{value}',
					"fontSize": 12, 
					"color": "#15FDFF"
				}
			},
			{
				"name": '负荷率',
				"nameTextStyle": {"color": "#15FDFF", "fontSize": 12},
				"type": "value",
				"splitNumber": 4,
				"splitLine": {"show": false},
				"axisTick": {"show": false},
				"axisLine": {"lineStyle": {"type": "solid", "color": "#0FB7B8", "opacity": "0.7", "width": "1"}},
				"axisLabel": {
					"formatter": '{value}%',
					"fontSize": 12, 
					"color": "15FDFF"
				}
			}
		],
		series: query.seriesData
	}
}

//  社会责任配置
// 数据集示例
export const shzrQuery= {
	xAxisData: ["14:00","15:00","16:00","17:00","18:00","19:00","20:00"],
	seriesData: [
		{name: 'COD消减',data:[7,6,4,3,4,2,7],lineColor: '#A582EA',areaColor: [{ offset: 0,color: 'rgba(165, 130, 234, .3)' },{ offset: 1,color: 'rgba(0,0,0,1)' }]},
		{name: '氨氮消减量',data:[3,5,4,2,1,7,6],lineColor: '#2CABE3',areaColor: [{ offset: 0,color: 'rgba(44, 171, 227, .7)' },{ offset: 1,color: 'rgba(81,150,164,0)' }]},
		{name: 'BOD消减量',data:[4,7,5,4,3,5,8],lineColor: '#FF8F00',areaColor: [{ offset: 0,color: 'rgba(255, 143, 0, .7)' },{ offset: 1,color: 'rgba(255, 143, 0, 0)' }]},
	]
}
type ShzrQueryType = {
	xAxisData: string[],
	seriesData: any[],
}
export const make_shzr_options = (query: ShzrQueryType) => {
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
					str += '<div style="display: inline-block; width: 100px">' + marker + item.seriesName + '</div>：' 
						+ item.value + '<br>'
				}
				return str;
			}
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
				width: 100
			},
			splitLine: {
				show: false
			},
			boundaryGap: false,
			data: query.xAxisData,
				
		}],
		yAxis: [{
			type: 'value',
			name: '',
			nameTextStyle:{                        
				padding: [0, 0, 0, 14]
			},
			min: 0,
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
			axisTick: {
				show: true,
			},
		}],
		series
	}
}