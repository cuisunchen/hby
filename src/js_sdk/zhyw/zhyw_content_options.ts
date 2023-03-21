import { ref } from 'vue'

const geoCoordMap = {
	'台湾': [121.5135, 25.0308],
	'黑龙江': [127.9688, 45.368],
	'内蒙古': [110.3467, 41.4899],
	"吉林": [125.8154, 44.2584],
	'北京市': [116.4551, 40.2539],
	"辽宁": [123.1238, 42.1216],
	"河北": [114.4995, 38.1006],
	"天津": [117.4219, 39.4189],
	"山西": [112.3352, 37.9413],
	"陕西": [109.1162, 34.2004],
	"甘肃": [103.5901, 36.3043],
	"宁夏": [106.3586, 38.1775],
	"青海": [101.4038, 36.8207],
	"新疆": [87.9236, 43.5883],
	"西藏": [91.11, 29.97],
	"四川": [103.9526, 30.7617],
	"重庆": [108.384366, 30.439702],
	"山东": [117.1582, 36.8701],
	"河南": [113.4668, 34.6234],
	"江苏": [118.8062, 31.9208],
	"安徽": [117.29, 32.0581],
	"湖北": [114.3896, 30.6628],
	"浙江": [119.5313, 29.8773],
	"福建": [119.4543, 25.9222],
	"江西": [116.0046, 28.6633],
	"湖南": [113.0823, 28.2568],
	"贵州": [106.6992, 26.7682],
	"云南": [102.9199, 25.4663],
	"广东": [113.12244, 23.009505],
	"广西": [108.479, 23.1152],
	"海南": [110.3893, 19.8516],
	'上海': [121.4648, 31.2891],
}
const facGeoCoordMap = {
	"广东": [115.46244, 23.029505],
	"广西": [110.499, 25.1752],
}
const facArr = [
	{name:"广东",value:83},
	{name:"广西",value:89},
]
const dots = [
	{
		name: "北京",
		value: 199
	},
	{
		name: "天津",
		value: 42
	},
	{
		name: "河北",
		value: 102
	},
	{
		name: "山西",
		value: 81
	},
	{
		name: "内蒙古",
		value: 47
	},
	{
		name: "辽宁",
		value: 67
	},
	{
		name: "吉林",
		value: 82
	},
	{
		name: "黑龙江",
		value: 123
	},
	{
		name: "上海",
		value: 24
	},
	{
		name: "江苏",
		value: 92
	},
	{
		name: "浙江",
		value: 114
	},
	{
		name: "安徽",
		value: 109
	},
	{
		name: "福建",
		value: 116
	},
	{
		name: "江西",
		value: 91
	},
	{
		name: "山东",
		value: 119
	},
	{
		name: "河南",
		value: 137
	},
	{
		name: "湖北",
		value: 116
	},
	{
		name: "湖南",
		value: 114
	},
	{
		name: "重庆",
		value: 91
	},
	{
		name: "四川",
		value: 125
	},
	{
		name: "贵州",
		value: 62
	},
	{
		name: "云南",
		value: 83
	},
	{
		name: "西藏",
		value: 9
	},
	{
		name: "陕西",
		value: 80
	},
	{
		name: "甘肃",
		value: 56
	},
	{
		name: "青海",
		value: 10
	},
	{
		name: "宁夏",
		value: 18
	},
	{
		name: "新疆",
		value: 180
	},
	{
		name: "广东",
		value: 123
	},
	{
		name: "广西",
		value: 59
	},
	{
		name: "海南",
		value: 14
	},
]

const convertData = (data) => {
	var res = [];
	for (var i = 0; i < data.length; i++) {
		var geoCoord = geoCoordMap[data[i].name];
		if (geoCoord) {
			res.push({
				name: data[i].name,
				value: geoCoord.concat(data[i].value)
			});
		}
	}
	return res;
}
const converFac = (data) => {
	var res = [];
	for (var i = 0; i < data.length; i++) {
		var geoCoord = facGeoCoordMap[data[i].name];
		if (geoCoord) {
			res.push({
				name: data[i].name,
				value: geoCoord.concat(data[i].value)
			});
		}
	}
	return res;
}

export const option = ref({
	grid: {
		left: 40,
		top: 10,
		bottom: 260
	},
	geo: {
		map: 'china',
		aspectScale: 0.75, //长宽比
		zoom: 0.8, // 是指地图比例
		roam: true,
		top: 50, //  地图距离顶部的位置
		bottom: 260,
		itemStyle: {
			areaColor: {
				type: 'radial',
				x: 0.5,
				y: 0.5,
				r: 0.8,
				colorStops: [{
					offset: 0,
					color: '#09132c' // 0% 处的颜色
				}, {
					offset: 1,
					color: '#274d68' // 100% 处的颜色
				}],
				globalCoord: true // 缺省为 false
			},
			shadowColor: 'rgb(58,115,192)',
			shadowBlur: 5,
			shadowOffsetX: 4,
			shadowOffsetY: 8,
			emphasis: {
				areaColor: '#2AB8FF',
				borderWidth: 0,
				color: 'green',
				label: {
					show: false
				}
			}
		},
		regions: [{
			name: '南海诸岛',
			itemStyle: {
				areaColor: 'rgba(0, 10, 52, 1)',
				borderColor: 'rgba(0, 10, 52, 1)',
				opacity: 0,
				label: {
					show: false,
					color: "#009cc9",
				}
			},
		}],
	},
	series: [
		{
			type: 'map',
			roam: true,
			top:100,
			bottom: 260,
			label: {
				show: true,
				color: '#1DE9B6',
				emphasis: {
					color: 'rgb(183,185,14)'
				}
			},
			zoom: 0.8,
			itemStyle: {
				borderColor: 'rgba(147, 235, 248,.5)',
				borderWidth: 1,
				areaColor: {
					type: 'radial',
					x: 0.5,
					y: 0.5,
					r: 0.8,
					colorStops: [{
						offset: 0,
						color: '#09132c' // 0% 处的颜色
					}, {
						offset: 1,
						color: '#274d68'  // 100% 处的颜色
					}],
					globalCoord: true // 缺省为 false
				},
				emphasis: {
					areaColor: 'rgb(46,229,206)',
					borderWidth: 0.1
				}
			},
			map: 'china' //使用
		},
		{
			name: '当日告警数',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			symbolSize: (val) => {
				let value = val[2]
				if (value > 99) {
					return 24
				} else
				if (value > 9) {
					return 20
				}
				return 14
			},
			label: {
				show: true,
				textStyle: {
					color: '#fff',
					fontSize: 10,
				},
				formatter(value) {
					return value.data.value[2]
				}
			},
			itemStyle: {
				//  标志颜色
				color: {
					type: 'radial',
					x: 0.5,
					y: 0.5,
					r: 0.5,
					colorStops: [{
						offset: 0.5,
						color: 'rgba(206,178,52, 0.5)' // 0% 处的颜色
					}, {
						offset: 1,
						color: '#D8BC37' // 100% 处的颜色
					}],
					global: false // 缺省为 false
				},
			},
			showEffectOn: 'render',
			rippleEffect: {
				brushType: 'stroke'
			},
			hoverAnimation: true,
			zlevel: 1,
			data: convertData(dots),
		},
		//  区域名字显示
		{                        
			symbolSize: 10,
			label: {
				formatter: '{b}',
				position: 'right',
				show: false,
				emphasis: {
					show: true
				}
			},
			itemStyle: {
				color: '#00FDFF', 
			},                            
			name: 'light',
			type: 'scatter',
			coordinateSystem: 'geo',
			data: converFac(facArr),                            
		}, 
	]
})
	
export const ssszOpt = {
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
			title: '监测指标',
			dataIndex: 'item',
			key: 'item',
			align: 'center'
		},
		{
			title: '进水值',
			dataIndex: 'inWater',
			key: 'inWater',
			align: 'center'
		},
		{
			title: '出水值',
			dataIndex: 'outWater',
			key: 'outWater',
			align: 'center'
		},
	],
	dataSource: [
		{
			key: '1',
			name: '白云污水厂',
			time: '10-02 09-05',
			item: 'PH',
			inWater: '6.9',
			outWater: '6.8'
		},
		{
			key: '2',
			name: '河源污水厂',
			time: '10-02 09-05',
			item: 'PH',
			inWater: '6.9',
			outWater: '6.8'
		},
		{
			key: '3',
			name: '白云污水厂',
			time: '10-02 09-05',
			item: 'PH',
			inWater: '6.9',
			outWater: '6.8'
		},
		{
			key: '4',
			name: '河源污水厂',
			time: '10-02 09-05',
			item: 'PH',
			inWater: '6.9',
			outWater: '6.8'
		},
		{
			key: '5',
			name: '白云污水厂',
			time: '10-02 09-05',
			item: 'PH',
			inWater: '6.9',
			outWater: '6.8'
		}
	]
}