<!--
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-17 11:38:35
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-17 22:41:47
 -->
<template>
  <div class="table-list">
    <el-table :data="roledata.data.list" style="width: 100%">
      <el-table-column label="角色" width="200" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.role_name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="权限" width="500">
        <template slot-scope="scope">
          <span>{{ scope.row.description }}</span>
        </template>
      </el-table-column>
      <el-table-column label="店铺权限" width="200">
        <template slot-scope="scope">
          <span v-if="scope.row.store_permission === 1">全部</span>
          <span v-else>所辖店铺</span>
        </template>
      </el-table-column>
      <el-table-column label="手机app" width="200">
        <template slot-scope="scope">
          <span v-if="scope.row.is_app === 0">不适用</span>
          <span v-else>适用</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <span class="jump">查看</span>
      </el-table-column>
    </el-table>
    <div class="page">
      <span class="totalNum">共{{ roledata.data.pagination.totalCount }}条</span>
      <el-pagination
        layout="prev, pager, next"
        :total="roledata.data.pagination.totalCount"
        @current-change="handleChange"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'InivePage',
  methods: {
    handleChange(e) {
      this.tabMes.tabRoleMes.page = `${e}`
      const params = {
        ...this.tabMes.tabRoleMes.page
      }
      this.$store.dispatch('user/getFutureData', params)
    }
  },
  computed: mapState({
    roledata: state => state.user.roledata
  })
}
</script>
<style lang="scss">
.table-list {
  height: auto;
  background: #fff;
  margin-top: 60px;

  .el-button {
    width: 40px;
    height: 40px;
    background-color: #3ec6b6;
    border-radius: 50%;
    color: #fff;
    font-size: 30px;
    margin: 0 0 24px 5%;
    position: relative;
    top: 20px;
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

.page {
  text-align: right;
  margin-right: 10%;
  margin: 20px 0;

  .el-pagination {
    display: inline-block;
  }

  .btn-prev,
  .btn-next {
    display: inline-block;
    min-width: 40px;
    height: 40px;
    color: rgba(0, 0, 0, 0.65);
    font-family: Arial;
    line-height: 40px;
    text-align: center;
    vertical-align: middle;
    list-style: none;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid #d9d9d9;
    margin-right: 12px;
    transition: all 0.3s;

    i {
      font-size: 14px;
    }
  }

  .active {
    border-color: #3ec6b6 !important;
    font-weight: 500;
    background: #fff;
    color: #3ec6b6 !important;
  }
}

.totalNum {
  position: relative;
  top: 5px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 16px;
  font-variant: tabular-nums;
  font-feature-settings: "tnum";
}

.el-table {
  margin-left: 2%;
  .el-table__header-wrapper{
      margin-top: 25px;
  }
  tr{
      height: 80px;
  }
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
</style>
