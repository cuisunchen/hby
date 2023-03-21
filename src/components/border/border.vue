<!-- 四个角带拐角样式的div -->
<template>
    <div class='border'>
        <slot></slot>
        <div class="topLt corner"></div>
        <div class="topRt corner"></div>
        <div class="botLt corner"></div>
        <div class="botRt corner"></div>
    </div>
</template>

<script lang="ts" setup>

</script>
<style lang='scss' scoped>
.border{
    position: relative;
    .corner{
        position: absolute;
        width: 10px;
        height: 10px;
    }
    .topLt{        
        left: -1px;
        top: -1px;        
        background: url('../../assets/imgs/topleft.png') no-repeat;
        background-size: cover;
    }
    .topRt{
        right: -1px;
        top: -1px;        
        background: url('../../assets/imgs/topright.png') no-repeat;
        background-size: cover;
    }
    .botLt{
        left: -1px;
        bottom: -1px;        
        background: url('../../assets/imgs/bottomleft.png') no-repeat;
        background-size: cover;
    }
    .botRt{
        right: -1px;
        bottom: -1px;        
        background: url('../../assets/imgs/bottomright.png') no-repeat;
        background-size: cover;
    }
}
</style>