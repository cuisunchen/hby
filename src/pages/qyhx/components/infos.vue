<template>
	<div class="infos flex1 flex-column animate fadeInLeft">
	    <div class="row flex1 flex">
	        <div class="item flex1 flex-column">
	            <div class="title flex all-center">基本信息</div>
	            <border class="flex1 flex-column justify-center">
	                <ul class="texts">
	                    <li>深圳</li>
	                    <li>环保行业</li>
	                    <li>全资国有企业</li>
	                </ul>
	            </border>
	        </div>
	        <div class="item flex1 flex-column" style="margin: 0 16px">
	            <div class="title flex all-center">业务规模</div>
	            <border class="flex1 flex-column justify-center">
	                <ul class="texts">
	                    <li>38污水处理厂站</li>
	                    <li>垃圾焚烧3000吨/日</li>
	                    <li>污水3.8万吨/日</li>
	                </ul>
	            </border>
	        </div>
	        <div class="item flex1 flex-column">
	            <div class="title flex all-center">产品技术</div>
	            <border class="flex1 flex-column justify-center">
	                <ul class="texts">
	                    <li>微爆氧化沟</li>
	                    <li>尾水提示深度处理系统</li>
	                    <li>生活垃圾渗沥液处理设备</li>
	                    <li>含铊废水处理系统</li>
	                </ul>
	            </border>
	        </div>
	    </div>
	    <div class="row flex1 flex" style="margin-top: 10px">
	        <div class="item flex1 flex-column">
	            <div class="title flex all-center">基本信息</div>
	            <border class="flex1 flex-column justify-center">
	                <ul class="texts">
	                    <li>深圳</li>
	                    <li>环保行业</li>
	                    <li>全资国有企业</li>
	                </ul>
	            </border>
	        </div>
	        <div class="item flex1 flex-column" style="margin: 0 16px">
	            <div class="title flex all-center">业务规模</div>
	            <border class="flex1 flex-column justify-center">
	                <ul class="texts">
	                    <li>38污水处理厂站</li>
	                    <li>垃圾焚烧3000吨/日</li>
	                    <li>污水3.8万吨/日</li>
	                </ul>
	            </border>
	        </div>
	        <div class="item flex1 flex-column">
	            <div class="title flex all-center">产品技术</div>
	            <border class="flex1 flex-column justify-center">
	                <ul class="texts">
	                    <li>微爆氧化沟</li>
	                    <li>尾水提示深度处理系统</li>
	                    <li>生活垃圾渗沥液处理设备</li>
	                    <li>含铊废水处理系统</li>
	                </ul>
	            </border>
	        </div>
	    </div>
	</div>
</template>

<script lang="ts" setup>
import border from '@/components/border/border.vue'
</script>

<style lang="scss" scoped>
	.infos{		
	    .row{
			&:first-child{
				margin-bottom: 20px;
			}
	        .item{
	            position: relative;
	            .title{
	                width: 80%;
	                height: 68px;
	                font-size:14px;
	                font-family: PangMenZhengDao;
	                font-weight: 400;
	                color: #00FBFF;
	                background: url('../../../assets/imgs/qyhx_titlebg.png') no-repeat;                        
	                background-size: 100% 100%;
	                position: absolute;
	                top: 0;
	                left: 50%;
	                transform: translateX(-50%);
	            }
	            .border{
	                position: absolute;
	                top: 34px;
	                left: 0;
	                right: 0;
	                bottom: 0;
	                z-index: 8;
	                background: url('../../../assets/imgs/qyhx_textbg.png') no-repeat;                        
	                background-size: 100% 100%;
	                .texts{
	                    margin: 0 30px;
	                    li{
	                        font-size: 16px;
	                        font-family: SourceHanSansCN;
	                        color: #00FDFF;
	                        margin-bottom: 10px;
	                        &:last-child{
	                            margin-bottom: 0;
	                        }
	                    }
	                }
	            }
	        }
	    }
	}
</style>