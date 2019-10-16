<template>
  <el-popover placement="left" title="整体页面设置" width="460" trigger="click">
    <div class="popover-content" v-html="html" />
    <div slot="reference" class="global-template active">
      <div class="global-bg">
        <img src="https://img.weitaming.com/file/20190628124623_482117/top_back.png" alt>
      </div>
      <div class="global-header">首页</div>
      <div class="global-link">
        <img
          alt="loading"
          src="https://img.weitaming.com/test/vm_mall/logo/20191010/2050ba08f6a773eb996f104dec6cb8a8.jpg"
        >
      </div>
    </div>
  </el-popover>
</template>

<script>
import html from '../config.js'
export default {
  data() {
    return {
      html
    }
  }
}
</script>
<style lang="scss">

.ant-popover-placement-leftTop {
    padding-right: 10px;
}

.ant-popover-inner {
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 4px;
}

.ant-popover-title {
    height: 40px;
    line-height:40px;
    padding-left:16px;
    margin: 0;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    border-bottom: 1px solid #e8e8e8;
}

.set-popover-title {
    display: flex;
    justify-content: space-between;
}

.popover-close {
    width: 40px;
    height: 40px;
    text-align: right;
    line-height: 40px;
    font-size: 16px;
    color: #8c8c8c;
    cursor: pointer;
}

.anticon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}

</style>
