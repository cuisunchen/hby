<template>
	<Teleport to="#app">
		<myDialog class="dialog" :show="visible" :left="left" :top="top" @close="close">
			<div class="dialogTop">
			    <div class="title flex align-center">
			        <div class="icon"></div>
			        <div class="tit">{{info.facName}}</div>
			        <div class="type">[{{info.txType == 1?'通讯正常':'通讯异常'}}]</div>
			    </div>
			    <div class="userInfo flex align-center">
			        <div class="icon"></div>
			        <div class="name">{{info.leader}}</div>
			        <div class="tel">{{info.phone}}</div>
			    </div>
			    <div class="addr flex align-center">
			        <div class="icon"></div>
			        <div class="label flex1">{{info.addr}}</div>
			    </div>
			
			    <div class="handly flex align-center">
			        <div class="handleWater flex1 flex align-center">
			            <div class="lt">
			                <img src="../../static/imgs/ztts/tc_drsl.png" alt="">
			            </div>
			            <div class="rt">
			                <div class="tit">当日处理水量</div>
			                <div class="datas"><span class="num" style="margin-right: 6px">{{info.handleWater}}</span><span class="unit">{{info.handleUnit}}</span></div>
			            </div>
			        </div>
			        <div class="outWater flex1 flex align-center">
			            <div class="lt">
			                <img src="../../static/imgs/ztts/tc_drsl.png" alt="">
			            </div>
			            <div class="rt">
			                <div class="tit">当日处理水量</div>
			                <div class="datas"><span class="num" style="margin-right: 6px">{{info.outWater}}</span><span class="unit">{{info.outUnit}}</span></div>
			            </div>
			        </div>                    
			    </div>
			</div>
			<div class="video flex align-center">
			    <div class="icon"><img src="../../static/imgs/ztts/tc_jk.png" alt=""></div>
			    <div class="name flex1">视频监控</div>
			    <div class="iconRt flex all-center">
			        <img src="../../static/imgs/ztts/tc_go.png" alt="">
			    </div>
			    <div class="botLt corner"></div>
			    <div class="botRt corner"></div>
			</div>
		</myDialog>
	</Teleport>	
</template>

<script setup>
	import { watch,ref } from 'vue'
	import myDialog from '../myDialog/myDialog.vue'
	const emits = defineEmits(['close'])
	let props = defineProps({
		left:{
			type: [String,Number],
			default: () => ''
		},
		top:{
			type: [String,Number],
			default: () => ''
		},
		showDialog: {
			type: Boolean,
			default: () => true
		},
		info: {
			type: Object,
			default: () => {
				return {}
			}
		}
	})
	let visible = props.showDialog
	const close = () => {
		visible = false
	}
	
	watch(()=>props.showDialog,(val)=>{
		visible = val
	})
</script>

<style lang="scss" scoped>
	.dialog{
		color: #fff;
	}
	.myDialog{
	    width: 320px;
	    padding: 0;
		z-index: 999;
	    .dialogTop{
	        padding: 10px;
	    }
		.title{
		    color: #00FDFF;         
		    .icon{
		        width: 30px;
		        height: 26px;
		        background: url('../../static/imgs/top_tc.png') no-repeat;
		        background-size: cover;
		    }
		    .tit{
		        font-size: 16px;
		        font-family: Source Han Sans CN;
		        font-weight: 800;
		        margin-left: 4px;
		        margin-right: 10px;
		    }
		}
		.userInfo{
		    color: #00FDFF;    
		    .icon{
		        width: 24px;
		        height: 24px;
		        background: url('../../static/imgs/ztts/tc_lxr.png') no-repeat;
		        background-size: 100% 100%;
				margin-top: 2px;
		    }
		    .name{
		        margin-left: 2px;
		        margin-right: 10px
		    }
		    .name, .tel{
		        font-size: 13px;
				line-height: 11px;
		        font-family: Source Han Sans CN;
		    }
		}
		.addr{
		    color: #00FDFF; 
		    .icon{
		        width: 24px;
		        height: 24px;
				margin-top: 2px;
		        background: url('../../static/imgs/ztts/tc_dz.png') no-repeat;
				background-size: 100% 100%;
		    }
		    .label{
		        font-size: 13px;
		        margin-left: 4px;
				line-height: 11px;
		        font-family: Source Han Sans CN;
		    }
		}
		.handly{
		    margin-top: 10px;
		    >div{
		        color: #00FDFF;
				padding: 8px 0;
		        background-color: rgba(33, 126, 126, .7);
		        .rt{
		            .datas{
		                margin-top: 4px;
		                .num{
		                    font-size: 14px;
		                    font-family: Impact;
		                }
		            }
		        }
		    }
		    .handleWater{
		        margin-right: 14px;
		    }
		}
		.video{
		    color: #00FDFF; 
		    border-top: 1px solid rgba(0, 253, 255, .5);
		    position: relative;
		    .name{
		        font-size: 14px;
		        font-family: Source Han Sans CN;
		        font-weight: 400;
		        color: #00FDFF;
		    }
		    .botLt{
		        position: absolute;
		        width: 10px;
		        height: 10px;
		        left: -2px;
		        top: -9px;        
		        background: url('../../static/imgs/bottomleft.png') no-repeat;
		        background-size: cover;
		    }
		    .botRt{
		        position: absolute;
		        width: 10px;
		        height: 10px;
		        right: -2px;
		        top: -9px;        
		        background: url('../../static/imgs/bottomright.png') no-repeat;
		        background-size: cover;
		    }
		}
		.close{
		    top: -2px!important;
		}
		.topLt{        
		    left: -2px!important;
		    top: -2px!important;        
		}
		.topRt{
		    right: -2px!important;
		    top: -2px!important;        
		}
		.botLt{
		    left: -2px!important;
		    bottom: -2px!important;
		}
		.botRt{
		    right: -2px!important;
		    bottom: -2px!important;        
		}
	}
	
	
</style>