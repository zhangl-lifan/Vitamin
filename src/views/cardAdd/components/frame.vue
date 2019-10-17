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
.el-popover {
  position: absolute;
  left: 622px !important;
  // left: calc(100% - #{$sideBarWidth}) !important;
  top: 119px !important;
  height: 350px !important;
}

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
  line-height: 40px;
  padding-left: 16px;
  margin: 0;
  color: rgba(0, 0, 0, 0.85);
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
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

.ant-popover-inner-content {
  position: relative;
  padding-bottom: 50px;
  padding: 12px 16px;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  list-style: none;
}

.template-set-cont {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

.ant-popover-inner-content .template-set-form {
  width: 420px;
  max-height: 700px;
  overflow: auto;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

.set-form-item .ant-form-item {
    margin-bottom: 16px;
    font-weight: normal;
}

.ant-form-item-label {
    display: inline-block;
    overflow: hidden;
    line-height: 39.9999px;
    white-space: nowrap;
    text-align: right;
    vertical-align: middle;
    padding-right:7px;
    font-weight: normal;
}

.ant-col-6 {
    display: block;
    box-sizing: border-box;
    width: 25%;
    flex: 0 auto;
    float: left;

}

.ant-col {
    position: relative;
    min-height: 1px;
}

// 左边的样式
.ant-form-item label {
    position: relative;
}

.ant-form-item-label>label {
    color: rgba(0,0,0,.85);
}

.ant-form-item-label>label:after {
    content: ":";
    position: relative;
    top: .5px;
    margin: 8px 0 2px;
}

.set-form-item:last-child .ant-form-item-label>label:after {
    content: "";
    position: relative;
    top: .5px;
    margin: 8px 0 2px;
}

// 右边的
.ant-col-18 {
    display: block;
    box-sizing: border-box;
    width: 75%;
    flex: 0 auto;
    float: left;
}

.ant-form-item-control {
    position: relative;
    line-height: 40px;
    zoom: 1;
}

.ant-form-item-children {
    position: relative;
}

.ant-input {
    box-sizing: border-box;
    margin: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    width: 100%;
    height: 32px;
    padding: 4px 11px;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    line-height: 1.5;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all .3s;
}

// URL
.ant-input-group-wrapper {
    display: inline-block;
    width: 100%;
    text-align: start;
    vertical-align: top;
}

.ant-input-group {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: table;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
}

.ant-input-group-addon:first-child {
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.ant-input-group-addon {
    position: relative;
    padding: 0 11px;
    color: rgba(0,0,0,.65);
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    background-color: #fafafa;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all .3s;
}

.ant-input-group-addon, .ant-input-group-wrap {
    width: 1px;
    white-space: nowrap;
    vertical-align: middle;
}

.ant-input-group-addon, .ant-input-group-wrap, .ant-input-group>.ant-input {
    display: table-cell;
}

.ant-input-group .ant-input {
    float: left;
    width: 100%;
    margin-bottom: 0;
    text-align: inherit;
}

.color-light {
    color: #3ec6b6;
}

.ant-checkbox {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    top: -.09em;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    vertical-align: middle;
    outline: none;
    cursor: pointer;
}

// .ant-checkbox  .ant-checkbox-input {
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     z-index: 1;
//     width: 100%;
//     height: 100%;
//     cursor: pointer;
//     opacity: 1;
// }

.ant-form-item-control:after, .ant-form-item-control:before {
    display: table;
    content: "";
}

.ant-row:after {
    clear: both;
}

.ant-row:after, .ant-row:before {
    display: table;
    content: "";
}

*, :after, :before {
    box-sizing: border-box;
}

</style>
