<!-- 省地图 -->
<template>
    <div class='provinceMap' ref="provinceMap"></div>
</template>

<script>
import axios from 'axios'
import {mapGetters } from 'vuex'
export default {
    components: {},
    data() {
        return {

        };
    },
    watch:{
        getProvinceObj:{
            handler(val){
                console.log(val)
                this.drawImg(val.adcode)
            },
            deep: true
        }
    },
    computed: {
        ...mapGetters([
            'getProvinceObj',
        ])
    },
    mounted() {
        this.myChart = this.$echarts.init(this.$refs.provinceMap);
        window.onresize = this.myChart.resize;
        this.myChart.showLoading({
            textColor: '#fff',
            maskColor: 'rgba(0, 0, 0, 0.1)',
        });
        setTimeout(()=> {
            this.drawImg(this.getProvinceObj.adcode) 
        }, 4000);
        
    },
    methods: {
        drawImg(adcode){
            axios.get('/mapData/' + adcode + '.json').then(geoJson =>{
                console.log(geoJson)
                this.$echarts.registerMap('map', geoJson.data);
                this.myChart.hideLoading();
                let mapData = geoJson.data.features.map(item => {
                    return {
                        name: item.properties.name,
                        value: item.properties.cp
                    }
                })
                let option = {
                    baseOption: {
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            },
                        },                        
                        geo: {
                            map: 'map',
                            zoom: 1.1,
                            roam: true,
                            tooltip: {
                                trigger: 'item',
                                formatter: (p) => {
                                    let val = p.value[2];
                                    if (window.isNaN(val)) {
                                        val = 0;
                                    }
                                    let txtCon =
                                        "<div style='text-align:left'>" + p.name + ":<br />销售额：" + val.toFixed(2) + '万</div>';
                                    return txtCon;
                                }
                            },
                            label: {
                                normal: {
                                    show: true,
                                    color: "rgb(249, 249, 249)", //省份标签字体颜色
                                },
                                emphasis: {
                                    show: true,
                                    color: '#f75a00',
                                }
                            },
                            itemStyle: {
                                normal: {
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
                                    borderColor: 'rgba(147, 235, 248,.5)',
                                    borderWidth: 1.3,
                                    shadowBlur: 5,
                                    shadowColor:'rgb(58,115,192)',
                                    shadowOffsetX: 7,
                                    shadowOffsetY: 6,
                                },
                                emphasis: {
                                    areaColor: '#8dd7fc',
                                    borderWidth: 1.6,
                                    shadowBlur: 25,
                                }

                            },
                        },
                        series: [{
                                name: '年销售额度',
                                type: 'map',
                                geoIndex: 0,
                                map: 'map',
                                roam: true,
                                zoom: 1.3,
                                tooltip: {
                                    trigger: "item",
                                    formatter: p => {
                                        let val = p.value;
                                        if (p.name == '南海诸岛') return
                                        if (window.isNaN(val)) {
                                            val = 0;
                                        }
                                        let txtCon =
                                            "<div style='text-align:left'>" + p.name + ":<br />销售额：" + val.toFixed(2) + '万</div>';
                                        return txtCon;
                                    }
                                },
                                label: {
                                    normal: {
                                        show: false,
                                    },
                                    emphasis: {
                                        show: false,
                                    }
                                },
                                itemStyle: {
                                    normal: {
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
                                    },
                                    emphasis: {
                                        areaColor: 'rgb(46,229,206)',
                                        borderWidth: 0.1
                                    }
                                },
                                data: mapData,
                            },
                            {
                                name: '散点',
                                type: 'effectScatter',
                                coordinateSystem: 'geo',
                                rippleEffect: {
                                    brushType: 'fill'
                                },
                                itemStyle: {
                                    normal: {
                                        color: '#F4E925',
                                        shadowBlur: 10,
                                        shadowColor: '#333'
                                    }
                                },
                                // data: pointData,
                                symbolSize: function(val) {
                                    let value = val[2]
                                    if (value == max) {
                                        return 27
                                    }
                                    return 10
                                },
                                showEffectOn: 'render', //加载完毕显示特效
                            },
                        ]
                    },
                };
                this.myChart.setOption(option, true);
            })
        },
    },
    beforeDestroy() {
        if (!this.myChart) {
            return
        }
        this.myChart.dispose()
        this.myChart = null
    },
}
</script>
<style lang='scss' scoped>
.provinceMap{
    // width: 500px;
    height: 100%;
    // background: yellow;
}
</style>