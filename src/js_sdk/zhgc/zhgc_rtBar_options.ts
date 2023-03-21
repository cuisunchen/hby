let series = [
	{
		yAxisIndex: 0,
		name: '实际投资',
		type: 'bar',
		barWidth: 10,
		xAxisIndex: 0,
		barGap: '-100%',
		data: [206.5,178,125,114,117.8,97,103,99,100,92,79.72,93],
		itemStyle: {
			color: '#00FDFF',
			barBorderRadius: 30
		},
	},
	{
		yAxisIndex: 0,
		name: "计划投资",
		type: "bar",
		showSymbol: false,
		barWidth: 10,
		itemStyle: {
			"color": '#00DEFF',
			barBorderRadius: 5
		},
		label: {
			show: false,
			position: 'top',
			fontWeight: 'bold',
			fontSize: 16, color: '#fff'
		},
		data: ["93.30", "121.17", "114.08","98.02",'96.55',"86.04",'72.66','92.12',"89.52",'74.48',"64.68",'83.81']
	},
	{
		yAxisIndex: 1,
		name: "投资率",
		type: "line",
		symbolSize: 8,
		symbol: 'circle',
		smooth: true,
		itemStyle: {
			"lineStyle": {"width": 3}, "color": "#fdff5c"
		},
		data: ['27.38','9.05','8.42','6.09','5.77','5.64','5.61','5.56','4.43','4.43','4.00','3.92']
	},
]
export const xmzjOpt = {
	tooltip: {
		trigger: "item",
		textStyle: {"color": "#00FDFF", fontSize: 16, fontWeight: 'bold'},
		backgroundColor: 'rgba(21, 80, 80, 0.8)',
		borderColor: 'rgba(0, 253, 255, .5)',
		formatter: (params:any) => {
			let str = params.name + '<br/>';			
			for (var i = 0; i < series.length; i++) {
				let item = series[i]
				let marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + item.itemStyle.color + '"></span>'
				str += '<div style="display: inline-block; width: 80px">' + marker + item.name + '</div>：' 
					+ item.data[params.dataIndex] + (params.seriesName.includes('比') || params.seriesName.includes('率') ? '%' : '万元') + '<br/>';
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
			data: ['20-01','20-02','20-03','20-04','20-05','20-06','20-07','20-08','20-09','20-10','20-11'],
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
	series
}