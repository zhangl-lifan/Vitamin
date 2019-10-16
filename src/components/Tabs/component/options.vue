<!--
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-15 18:58:48
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-16 09:12:36
 -->
<template>
  <div class="btnbox">
    <el-form-item>
      <el-button type="primary" plain>查询</el-button>
      <el-button id="reload" type="success" plain>重置</el-button>
    </el-form-item>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.btnbox {
  width: 100%;
  height: 50px;

  .el-button--primary.el-button--medium.is-plain {
    background: #3ec6b6;
    color: #fff;
    height: 40px;
    border: 1px solid #3ec6b6;
    margin-left: 145px;
  }
  .el-form-item__content /deep/  button {
    margin-top: 70px;
    border-radius: 4px;
  }
  #reload {
    color: #3c3c3c;
    border-radius: 4px;
    border: 1px solid #e8e8e8;
    background-color: #fff;
  }
}
</style>
