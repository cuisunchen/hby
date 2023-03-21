import factories from '@/js_sdk/datas/factories'

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

//  地图配置
export const option = {
	grid:{
		left: 40,
		top: 10,
		bottom: 60
	},
	geo: {
		map: 'china',
		aspectScale: 0.75, //长宽比
		zoom: 0.8,
		roam: true,
		top: 100,
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

//  厂站异常告警配置
export const make_zcyc_options = (value:number=0,title:String='出水达标率') => {
	return {
		title: [{
			text: title,
			x: 'center',
			top: '48%',
			textStyle: {
				color: '#fff',
				fontSize: 16,
				lineHeight : 20,
				fontWeight: '100',
			}
		}, {
			text: value + '%',
			x: 'center',
			top: '37%',
			textStyle: {
				fontSize: '20',
				color: '#fff',
				fontFamily: 'Lato',
				foontWeight: '600',
			},
		}],
		tooltip: {
			show: false,
			formatter: "{a} <br/>{b} : {c}%"
		},
		series: [
			{
				name: "内部（环形）进度条",
				type: "gauge",
				// center: ['20%', '50%'],
				radius: '70%',
				splitNumber: 10,
				axisLine: {
					lineStyle: {
						color: [
							[value/100, '#00FBFF'],
							[1, "rgba(0, 251, 255, 0.6)"]
						],
						width: 4
					}
				},
				axisLabel: {
					show: false,
				},
				axisTick: {
					show: false,
				},
				splitLine: {
					show: false,
				},
				pointer: {
					show: false,
				},				
				detail: {
					show: false
				}
			},
			{
				name: '外部刻度',
				type: 'gauge',
				//  center: ['20%', '50%'],
				radius: '90%',
				min: 0, //最小刻度
				max: 100, //最大刻度
				splitNumber: 10, //刻度数量
				startAngle: 225,
				endAngle: -45,
				axisLine: {
					show: false,
					// 仪表盘刻度线
					lineStyle: {
						width: 2,
						color: [
							[1, '#00FBFF']
						]
					}
				},
				//仪表盘文字
				axisLabel: {
					show: true,
					color: '#00FBFF',
					distance: 15,
					fontSize: 10,
					formatter: function(v) {
						switch (v + '') {
							case '0':
								return '0';
							case '10':
								return '10';
							case '20':
								return '20';
							case '30':
								return '30';
							case '40':
								return '40';
							case '50':
								return '50';
							case '60':
								return '60';
							case '70':
								return '70';
							case '80':
								return '80';
							case '90':
								return '90';
							case '100':
								return '100';
						}
					}
				}, //刻度标签。
				axisTick: {
					show: true,
					splitNumber: 7,
					lineStyle: {
						color: '#00FBFF', //用颜色渐变函数不起作用
						width: 1,
					},
					length: -8
				}, //刻度样式
				splitLine: {
					show: true,
					length: -10,
					lineStyle: {
						color: '#00FBFF', //用颜色渐变函数不起作用
					}
				}, //分隔线样式
				detail: {
					show: false
				},
				pointer: {
					show: false
				}
			},
			/*内部*/
			{
				type: 'pie',
				radius: ['0', '50%'],
				center: ['50%', '50%'],
				z: 8,
				hoverAnimation: false,
				data: [{
					name: '检查进度',
					value: value,          //  百分比的值设置
					itemStyle: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 0,
							colorStops: [
								{ offset: 0,color: '#00c5c5' },
								{ offset: 1,color: '#00acac' }
							]
						}
					},
					label: {
						formatter: function(params) {
							return params.value + '%';
						},
						color: '#FFFFFF',
						fontSize: 20,
						fontWeight: "bold",
						position: 'center',
						show: false
					},
					labelLine: {
						show: false
					},
					tooltip:{
						show: true,
						textStyle: {
							color: '#00c5c5'
						},
						formatter: "{b} : {c}%"
					}
				}]
			},
			/*外一层*/
			{
				type: "pie",
				radius: "55%",
				startAngle: 220,
				endAngle: -40,
				hoverAnimation: false,
				center: ["50%", "50%"],
				avoidLabelOverlap: false,
				label: {
					show: false
				},
				labelLine: {
					show: false
				},
				data: [{
					value: 1,
					itemStyle: {
						normal: {
							color: 'rgba(0, 251, 255, 0.5)'
						}
					},
					tooltip:{
						show: false
					}
				}],
			},
			//外二层圈
			{
				type: "pie",
				radius: "60%",
				center: ["50%", "50%"],
				avoidLabelOverlap: false,
				z: 0,
				hoverAnimation: false,
				label: {
					show: false
				},
				labelLine: {
					show: false
				},
				data: [{
					"value": 1,
					itemStyle: {
						normal: {
							color: 'rgba(0, 251, 255, 0.3)'
						}
					},
					tooltip:{
						show: false,
					}
				}]
			}
		]
	}
}