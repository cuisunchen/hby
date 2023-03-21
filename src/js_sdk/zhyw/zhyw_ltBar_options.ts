export const ycgjOpt = {
	columns: [
		{
			title: '厂站名称',
			dataIndex: 'name',
			key: 'name',
			align: 'left'
		},
		{
			title: '监测时间',
			dataIndex: 'time',
			key: 'time',
			align: 'center'
		},
		{
			title: '异常状态',
			dataIndex: 'status',
			key: 'status',
			align: 'right'
		},
	],
	dataSource: [
		{
			key: '1',
			name: '白云污水厂掉线',
			time: '10-02 09-05',
			status: '待处理',
		},
		{
			key: '2',
			name: '河源污水厂掉线',
			time: '10-02 09-05',
			status: '待处理',
		},
		{
			key: '3',
			name: '白云污水厂掉线',
			time: '10-02 09-05',
			status: '待处理',
		},
		{
			key: '4',
			name: '河源污水厂掉线',
			time: '10-02 09-05',
			status: '待处理',
		},
		{
			key: '5',
			name: '白云污水厂掉线',
			time: '10-02 09-05',
			status: '待处理',
		},
		{
			key: '6',
			name: '河源污水厂掉线',
			time: '10-02 09-05',
			status: '待处理',
		},
		{
			key: '7',
			name: '河源污水厂掉线',
			time: '10-02 09-05',
			status: '待处理',
		},
		{
			key: '8',
			name: '白云污水厂掉线',
			time: '10-02 09-05',
			status: '待处理',
		},
		{
			key: '9',
			name: '河源污水厂掉线',
			time: '10-02 09-05',
			status: '待处理',
		}
	]
}

const lbfxSeries = [
	{
		name: '指标报警',
		stack:'01',
		yAxisIndex: 0,
		type: 'bar',
		itemStyle: {
			color: "rgba(0, 253, 255, 1)",
		},
		barWidth: 30,                            
		data: [1000, 1100, 1200, 1000, 1500, 1500]
	},{
		name: '库存报警',
		stack:'01',
		yAxisIndex: 0,
		type: 'bar',
		itemStyle: {
			color: "rgba(0, 222, 255, 1)"
		},
		barWidth: 30,  
		data: [200, 100, 300, 100, 40, 140]
	},{
		name: '断电报警',
		stack:'01',
		yAxisIndex: 0,
		type: 'bar',
		itemStyle: {
			color: "rgba(255, 221, 0, 1)"
		},
		barWidth: 30,  
		data: [80, 91, 75, 90, 98, 91]
	}
]
export const lbfxOpt = {
	tooltip: {
		trigger: "item",
		textStyle: {"color": "#00FDFF", fontSize: 16, fontWeight: 'bold'},
		backgroundColor: 'rgba(21, 80, 80, 0.8)',
		borderColor: 'rgba(0, 253, 255, .5)',
		formatter: (params:any) => {
			let str = params.name + '<br/>';
			for (var i = 0; i < lbfxSeries.length; i++) {
				let item = lbfxSeries[i]
				let marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + item.itemStyle.color + '"></span>'
				str += '<div style="display: inline-block; width: 80px">' + marker + item.name + '</div>：' 
					+ item.data[params.dataIndex] + (params.seriesName.includes('比') || params.seriesName.includes('率') ? '%' : '万元') + '<br/>';
			}
			return str;
		}
	},
	grid: {
		top: 10,
		bottom: 30,
		left:50,
		right:0
	},
	xAxis: [
		{
			type: 'category',
			axisLabel: {
				color: '#15FDFF'
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#0FB7B8',
					type: 'solid'
				}
			},
			data: ["20-06","20-07","20-08","20-09","20-10","20-11"]
		}
	],
	yAxis: [
		{
			type: 'value',
			name: '',
			max:3000,
			axisTick:{
				show:false
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: 'rgba(180,235,184,.3)',
					type: 'dashed'
				}
			},
			axisLabel: {
				color: '#15FDFF'
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#0FB7B8',
					type: 'solid'
				}
			},
		}
	],
	series: lbfxSeries
}
