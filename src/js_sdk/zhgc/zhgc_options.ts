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


