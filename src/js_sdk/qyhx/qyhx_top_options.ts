import factories from '@/js_sdk/datas/factories'

let mapScale = 1
const handleData = () => {
	let objArr:any = {
		points:[],
		lineArr:[],
	}
	factories.forEach(item => {
		let obj = {
			value: item.pos,
			itemStyle: {color: item.color},
			params: {
				facName: item.facName,
				txType: item.txType,
				leader: item.leader,
				phone: item.phone,
				addr: item.addr,
				handleWater: item.handleWater,
				outWater: item.outWater,
				outUnit: item.outUnit,
			}
		}
		objArr.points.push(obj)
		let lineObj = {
			coords: [item.pos,[119.4543, 25.9222]],
			lineStyle:{color: item.color}
		}
		objArr.lineArr.push(lineObj)
	})
	return objArr
}

export const option = {
	grid:{
		left: 40,
		top: 10,
		bottom: 60
	},
	geo: {
		map: 'china',
		aspectScale: 0.75, //长宽比
		zoom: mapScale,
		roam: false,
		top: 50,
		bottom: 10,
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
					color: '#274d68'  // 100% 处的颜色
				}],
				globalCoord: true // 缺省为 false
			},  
			shadowColor:'rgb(58,115,192)',
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
			roam: false,
			top: 50,
			bottom: 10,
			label: {
				show: true,
				color: '#1DE9B6',
				emphasis: {
					color: 'rgb(183,185,14)'
				}
			},
			zoom: mapScale,
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
			type: 'effectScatter',
			coordinateSystem: 'geo',
			showEffectOn: 'render',
			zlevel:2,
			rippleEffect: {
				period: 15,
				scale: 6,
				brushType: 'fill'
			},
			hoverAnimation: true,
			label: {
				formatter: '{b}',
				position: 'right',
				offset: [15, 0],
				color: '#1DE9B6',
				show: true
			},
			itemStyle: {
				color:'#1DE9B6',
				shadowBlur: 10,
				shadowColor: '#333'
			},
			symbolSize: 10,              //  设置点的大小
			data: handleData().points
		}, //地图线的动画效果
		{
			type: 'lines',
			zlevel: 1,
			effect: {
				show: true,
				period: 4, //箭头指向速度，值越小速度越快
				trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
				symbol: 'arrow', //箭头图标
				symbolSize: 7, //图标大小
			},
			lineStyle: {
				color:'#1DE9B6',
				width: 1, //线条宽度
				opacity: 0.1, //尾迹线条透明度
				curveness: .3 //尾迹线条曲直度
			},
			data: handleData().lineArr
		}
	]
}