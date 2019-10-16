<!--
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-16 09:15:24
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-17 07:58:01
 -->
<template>
  <div class="table-list">
    <el-button round>+</el-button>
    <el-table :data="tabData" style="width: 100%">
      <el-table-column label="头像" width="80" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.user_name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="手机号" width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.mobile }}</span>
        </template>
      </el-table-column>
      <el-table-column label="角色" width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.role }}</span>
        </template>
      </el-table-column>
      <el-table-column label="所属店铺" width="400">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.store_name[0] }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="顾客账号" width="150">
        <template slot-scope="scope">
          <span v-if="scope.row.job_number===init">未关联</span>
          <span v-else>{{ scope.row.job_number }}</span>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="150">
        <template slot-scope="scope">
          <span v-if="scope.row.status===1">正常</span>
          <span v-else>不正常</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <span class="jump">查看</span>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Table',
  props: {
    tabData: Array
  },
  data() {
    return {
      init: ''
    }
  },
  computed: mapState({
    pageMes: state => state.user.pageMes
  }),
  mounted() {
    setTimeout(() => {
      console.log(this.tabData)
    }, 1000)
  }

}
</script>
<style lang="scss">
.table-list {
  height: auto;
  background: #fff;
  margin-top: 24px;
  .el-button {
    width: 40px;
    height: 40px;
    background-color: #3ec6b6;
    border-radius: 50%;
    color: #fff;
    font-size: 30px;
    margin-bottom: 24px;
    font-weight: 200;
    cursor: pointer;
    display: flex;
    justify-content: center;
    span {
      position: relative;
      top: -6px;
      left: 1px;
    }
  }
}
.el-table {
  margin-top: 20px;
  margin-left: 5%;
}
.el-table .el-table__header-wrapper thead tr /deep/ th {
  background-color: #fcfcfc;
  height: 60px;
}
.el-table th > .cell {
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
}
.el-table .cell /deep/ span {
  color: rgba(0, 0, 0, 0.65);
  font-size: 16px;
  font-variant: tabular-nums;
}
.el-table .cell /deep/ .el-tag {
  padding: 0 10px;
  height: 25px;
  color: rgba(0, 0, 0, 0.65);
  background: #fafafa;
  font-size: 13px;
}
.el-table .cell /deep/ .jump {
  cursor: pointer;
  color: #3ec6b6;
}
img {
  height: 35px;
  width: 35px;
}
</style>
