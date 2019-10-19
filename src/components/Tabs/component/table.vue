<!--
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-16 09:15:24
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-19 08:40:03
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
      <el-table-column label="顾客账号" width="130">
        <template slot-scope="scope">
          <span v-if="scope.row.job_number===init">未关联</span>
          <span v-else>{{ scope.row.job_number }}</span>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="130">
        <template slot-scope="scope">
          <span v-if="scope.row.status===1">正常</span>
          <span v-else>不正常</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="130">
        <template slot-scope="scope">
          <span class="jump" @click="JumpPage(scope.row.user_id)">查看</span>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <span class="totalNum">共{{ pageMes.totalCount }}条</span>
      <el-pagination
        layout="prev, pager, next"
        :total="pageMes.totalCount"
        @current-change="handleChange"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Table',
  props: {
    tabMes: Object
  },
  data() {
    return {
      init: ''
    }
  },
  computed: mapState({
    pageMes: state => state.user.pageMes,
    tabData: state => state.user.tabData
  }),
  mounted() {
    this.initGetData()
  },
  methods: {
    handleChange(e) {
      this.tabMes.tabTable.page = `${e}`
      const params = {
        ...this.tabMes.tabTable
      }
      this.$store.dispatch('user/getAdministrators', params)
    },
    initGetData() {
      const params = {
        ...this.tabMes.tabTable
      }
      this.$store.dispatch('user/getAdministrators', params)
    },
    JumpPage(id) {
      this.$router.push({
        path: '/teamDetail',
        query: {
          id
        }
      })
    }
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
    // margin: 0 0 24px 2%;
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

  ul /deep/ .number {
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
    // -webkit-transition: all .3s;
    transition: all 0.3s;
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
  margin-top: 40px;
  margin-left: 2%;
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
