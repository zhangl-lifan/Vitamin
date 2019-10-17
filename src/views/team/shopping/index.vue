<!--
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-15 15:08:41
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-17 22:51:37
 -->
<template>
  <div class="tabs">
    <StaffModule :tab-mes="tabMes" />
  </div>
</template>
<script>
import StaffModule from '@/components/Tabs/staffM'
// asfsf
export default {
  name: 'Shopping',
  components: { StaffModule },
  data() {
    return {
      tabMes: {
        tabutureMes: {
          type: '2',
          status: '3',
          page: '1'
        },
        tabRoleMes: {
          mall_id: '61500',
          type: '2',
          page: '1'
        },
        tabTable: {
          type: '2',
          status: '3',
          page: '1',
          sort_time: ''
        }
      }
    }
  },
  mounted() {
    this.initGetdata()
  },
  methods: {
    initGetdata() {
      this.$store.dispatch('user/getStoreS', { type: 2 })
      this.$store.dispatch('user/getFutureData', {
        ...this.tabMes.tabutureMes
      })
      this.$store.dispatch('user/getRoleList', {
        ...this.tabMes.tabRoleMes
      })
    }
  }
}
</script>
<style>
.tabs {
  width: 98%;
  height: 73px;
  margin: 0 auto;
  position: relative;
  bottom: 20px;
  background-color: #fff;
}
</style>
