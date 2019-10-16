<!--
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-15 18:56:45
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-16 15:49:25
 -->
<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item v-for="(item,index) in list" :key="index" :label="item.name">
        <el-input v-if="item.type===stateType.ipt" v-model="item.model" :placeholder="item.pls" />
        <el-select
          v-else-if="item.type===stateType.select"
          v-model="item.model"
          :placeholder="item.pls"
        >
          <el-option v-for="ls in item.list" :key="ls.id" :value="ls.name" />
        </el-select>
      </el-form-item>
      <BtnBox />
    </el-form>
  </div>
</template>
<script>
import BtnBox from './options'
export default {
  name: 'Init',
  components: { BtnBox },
  props: {
    list: Array
  },
  data() {
    return {
      stateType: {
        ipt: 'ipt',
        select: 'select'
      }
    }
  }
}
</script>
<style lang="scss">
.demo-form-inline {
  position: relative;
}
.el-form-item.el-form-item--medium {
  width: 32.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
}
.el-form-item /deep/ label {
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
  font-weight: 500;
}
.el-input /deep/ .el-input__inner {
  width: 250px;
}
</style>
