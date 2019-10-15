<!--
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-15 15:08:41
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-15 20:31:13
 -->
<template>
  <div>
    <el-tabs v-model="activeName" tab-position="bottom" @tab-click="handleClick">
      <el-tab-pane label="员工管理" name="staff">员工管理</el-tab-pane>
      <el-tab-pane label="邀请中" name="yaoqing">邀请中</el-tab-pane>
      <el-tab-pane label="角色描述" name="roke">角色描述</el-tab-pane>
    </el-tabs>
    <div class="form-container">
      <From />
    </div>
  </div>
</template>
<script>
import From from './component/init'
export default {
  name: 'StaffM',
  components: { From },
  data() {
    return {
      activeName: 'staff',
      status: 'staff'
    }
  },
  methods: {
    handleClick(tab, event) {
      this.status = tab.paneName
    }
  }
}
</script>
<style lang="scss">
.el-tabs__nav .el-tabs__active-bar {
  background-color: #3ec6b6;
  width: 68px;
  margin-left: 20px;
}
.el-tabs__nav /deep/ .el-tabs__item.is-active {
  color: #3ec6b6;
  font-size: 16px;
}
.el-tabs__nav /deep/ .el-tabs__item {
  font-size: 16px;
}
.el-tabs__content /deep/ .el-tab-pane {
  display: none;
}
#tab-staff {
  margin-left: 20px;
}
.el-tabs__nav-wrap {
  position: relative;
  top: 20px;
}
.form-container {
  background: #fff;
  height: 200px;
  margin-top: 46px;
  padding: 24px;
  position: relative;
}
</style>
