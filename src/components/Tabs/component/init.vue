<!--
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-15 18:56:45
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-15 21:20:55
 -->
<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item v-for="(item,index) in initData" :key="index" :label="item.spanName">
        <el-input v-if="item.type===stateType.ipt" :placeholder="item.pls" />
        <el-select v-else-if="item.type===stateType.select" :placeholder="item.pls">
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
  data() {
    return {
      stateType: {
        ipt: 'ipt',
        select: 'select'
      },
      initData: [
        {
          spanName: '手机号',
          type: 'ipt',
          pls: '请输入'
        },
        {
          spanName: '所属店铺',
          type: 'select',
          pls: '请选择',
          list: [
            {
              name: 'asfasfasf',
              id: 555
            },
            {
              name: 'ffsafsf',
              id: 33
            },
            {
              name: 'saff',
              id: 666
            },
            {
              name: 'sa',
              id: 22
            }
          ]
        },
        {
          spanName: '角色',
          type: 'select',
          pls: '请选择',
          list: [
            {
              name: 'asfasfasf',
              id: 555
            },
            {
              name: 'ffsafsf',
              id: 33
            },
            {
              name: 'saff',
              id: 666
            },
            {
              name: 'sa',
              id: 22
            }
          ]
        },
        {
          spanName: '顾客账号',
          type: 'select',
          pls: '请选择',
          list: [
            {
              name: 'asfasfasf',
              id: 3
            },
            {
              name: 'ffsafsf',
              id: 33
            },
            {
              name: 'saff',
              id: 666
            },
            {
              name: 'sa',
              id: 22
            }
          ]
        },
        {
          spanName: '状态',
          type: 'select',
          pls: '请选择',
          list: [
            {
              name: 'asfasfasf',
              id: 555
            },
            {
              name: 'ffsafsf',
              id: 33
            },
            {
              name: 'saff',
              id: 666
            },
            {
              name: 'sa',
              id: 22
            }
          ]
        }
      ]
    }
  }
  //   props: {
  //     data: Object
  //   }
}
</script>
<style lang="scss">
.demo-form-inline{
    position: relative;
}
.el-form-item.el-form-item--medium {
  // margin-top: 20px;
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
