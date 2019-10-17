<!--
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-15 15:08:41
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-17 22:33:53
 -->
<template>
  <div>
    <el-tabs v-model="activeName" tab-position="bottom" @tab-click="handleClick">
      <el-tab-pane label="员工管理" name="staff">员工管理</el-tab-pane>
      <el-tab-pane label="邀请中" name="yaoqing">邀请中</el-tab-pane>
      <el-tab-pane label="角色描述" name="roke">角色描述</el-tab-pane>
    </el-tabs>
    <div v-if="status===1" class="form-container">
      <From v-if="isrender" :list.sync="fromData" />
    </div>
    <Table v-if="tabisrender&&status===1" :tab-mes="tabMes" />
    <InvitePage v-if="status===2" :tab-mes="tabMes" />
    <RoleDetail v-if="status===3" :tab-mes="tabMes" />
  </div>
</template>
<script>
import From from './component/init'
import Table from './component/table'
import InvitePage from './component/invitePage'
import RoleDetail from './component/roleDetail'
import { mapState } from 'vuex'
export default {
  name: 'StaffM',
  components: { From, Table, InvitePage, RoleDetail },
  props: {
    tabMes: Object
  },
  data() {
    return {
      activeName: 'staff',
      phone: '',
      store: '',
      role: '',
      account: '',
      iptStatus: '',
      isrender: false,
      tabisrender: false,
      status: 1,
      fromData: [
        {
          name: '手机号',
          type: 'ipt',
          pls: '请输入',
          model: 'phone'
        },
        {
          name: '所属店铺',
          type: 'select',
          pls: '请选择',
          list: [],
          model: 'store'
        },
        {
          name: '角色',
          type: 'select',
          pls: '请选择',
          list: [],
          model: 'roles'
        },
        {
          name: '顾客账号',
          type: 'select',
          pls: '请选择',
          model: 'store',
          list: [
            {
              name: '已关联',
              id: 555
            },
            {
              name: '未关联',
              id: 33
            }
          ]
        },
        {
          name: '状态',
          type: 'select',
          pls: '请选择',
          model: 'iptStatus',
          list: [
            {
              name: '已冻结',
              id: 145
            },
            {
              name: '未冻结',
              id: 5533
            }
          ]
        }
      ]
    }
  },
  mounted() {
    this.gaveData()
  },
  computed: mapState({
    allObj: state => state.user.allObj
  }),
  methods: {
    handleClick(tab, event) {
      if (tab.paneName === 'staff') {
        this.status = 1
      } else if (tab.paneName === 'yaoqing') {
        this.status = 2
      } else {
        this.status = 3
      }
    },
    gaveData() {
      setTimeout(() => {
        this.fromData[1].list = this.allObj.list.stores
        this.fromData[2].list = this.allObj.list.roles
        this.isrender = !!this.fromData[1].list.length
        this.tabisrender = true
      }, 1000)
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
