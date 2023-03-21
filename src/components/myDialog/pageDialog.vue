<!-- 页面弹框 -->
<template>
    <div class='pageDialog flex all-center' v-if="closeDialog" @click.self="close">
        <div class="wrap flex">
            <div class="lt">
                <div class="wrap borderShadow">
                    <slot name="ltCon"></slot>
                </div>
            </div>
            <div class="content">
                <div class="center">
                    <slot name="con"></slot>
                </div>                
            </div>
            <div class="close" @click="close"></div>
        </div>
    </div>
</template>

<script>
import border from '../border/border'
import itemTitle from '../itemTitle/itemTitle'
import tableComponent from '../tableComponent/tableComponent'
export default {
    components: {border,tableComponent,itemTitle},
    data() {
        return {
            closeDialog: false,
            tableData:{
                showIndex: true,
                isShowCorner: false,
                type: 'odd',
                body:[
                    {index:'序号',title: '告警标题',name:'厂站名称',desc:'描述',time:'监测时间',status: '状态',video: '视频'},
                    {index:1,title: '白云污水厂掉线',name:'白云污水厂',desc:'出水COD小于90.0',time:'10-02 09:05',status: '待处理',video: '视频'},
                    {index:2,title: '东深污水厂掉线',name:'白云污水厂',desc:'出水COD小于90.0',time:'10-02 09:05',status: '待处理',video:'视频'},
                    {index:3,title: '河源污水厂掉线',name:'白云污水厂',desc:'出水COD小于90.0',time:'10-02 09:05',status: '待处理',video:'视频'},
                    {index:4,title: '长安污水厂掉线',name:'白云污水厂',desc:'出水COD小于90.0',time:'10-02 09:05',status: '待处理',video:'视频'},
                    {index:5,title: '凯乐污水厂掉线',name:'白云污水厂',desc:'出水COD小于90.0',time:'10-02 09:05',status: '待处理',video:'视频'},
                    {index:6,title: '西洪污水厂掉线',name:'厂站名称',desc:'出水COD小于90.0',time:'10-02 09:05',status: '待处理',video:'视频'},
                    {index:7,title: '启华污水厂掉线',name:'白云污水厂',desc:'出水COD小于90.0',time:'10-02 09:05',status: '待处理',video:'视频'},
                    {index:8,title: '同悦污水厂掉线',name:'白云污水厂',desc:'出水COD小于90.0',time:'10-02 09:05',status: '待处理',video:'视频'},
                    {index:9,title: '巫奇污水厂掉线',name:'白云污水厂',desc:'出水COD小于90.0',time:'10-02 09:05',status: '待处理',video:'视频'},
                    {index:10,title: '圪洞污水厂掉线',name:'白云污水厂',desc:'出水COD小于90.0',time:'10-02 09:05',status: '待处理',video:'视频'},
                ],
                align: 'center', 
            },
            formObj:{
                title:'',
                facName:'',
                time:''
            },
            itemTitleIcon:{
                "background": "url(" + require('../../assets/imgs/ztts/ztts_dygj.png') + ") no-repeat",
                "background-size": 'cover'
            },
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        close(){
            this.closeDialog = false
        },
        show(){
            this.closeDialog = true
        }
    },
    beforeDestroy() {}, //生命周期 - 销毁之前
}
</script>
<style lang='scss' scoped>
.pageDialog{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2022;
    background-color: rgba(0,0,0,.8);
    .lt{
        .wrap{
            margin-top: 40px;
            padding: 18px 24px;
        }
    }
    .content{        
        .center{
            min-width: 600px;
            min-height: 486px;
        }
    }
    .wrap{
        position: relative;
    }
    ::v-deep .border{
        .topLt{
            left: -2px;
            top: -2px;
        }
        .topRt{
            right: -2px;
            top: -2px;
        }
        .botLt{
            left: -2px;
            bottom: -2px;
        }
        .botRt{
            right: -2px;
            bottom: -2px;
        }
        .paginationBox{
            margin: 10px 4px;
        }
    }
    .close{
        width: 32px;
        height: 32px;
        background: url('../../assets/imgs/ztts/tc_close.png') no-repeat;
        background-size: cover;
        position: absolute;
        right: -32px;
        top: 40px;        
    }
    ::v-deep .el-pagination.is-background .el-pager li{
        color: #00FDFF;
        background: rgba(0, 104, 105, 0.5);
        box-shadow: 0px 10px 10px 0px rgba(15, 43, 55, 0.5);
    }
    ::v-deep .el-pagination.is-background .el-pager li.active{
        background: rgba(0, 104, 105, 0.9);
        box-shadow: 0px 10px 10px 0px rgba(15, 43, 55, 0.9);
    }
    ::v-deep .el-pagination.is-background button{
        color: #00FDFF;
        background: rgba(0, 104, 105, 0.5);
        shadow: 0px 10px 10px 0px rgba(15, 43, 55, 0.5);
    }
    ::v-deep .el-pagination.is-background button:disabled{
        color: rgba(0, 253, 255, .4);
        background: rgba(0, 104, 105, 0.9);
        shadow: 0px 10px 10px 0px rgba(15, 43, 55, 0.9);
    }
}
</style>
<style>
.el-picker-panel{
    z-index: 9999!important;
}
</style>