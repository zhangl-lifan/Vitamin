<!--
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-15 15:08:41
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-18 07:34:00
 -->
<template>
  <div class="tabs">
    <StaffModule :tab-mes="tabMes" />
  </div>
</template>
<script>
import StaffModule from '@/components/Tabs/staffM'
// 5as4f5asfas5f
export default {
  components: { StaffModule },
  data() {
    return {
      tabMes: {
        tabutureMes: {
          type: '1',
          status: '3',
          page: '1'
        },
        tabRoleMes: {
          mall_id: '61500',
          type: '1',
          page: '1'
        },
        tabTable: {
          type: '1',
          page: '1',
          status: '0,1'
        }
      }
    }
  },
  mounted() {
    this.initGetdata()
  },
  methods: {
    initGetdata() {
      this.$store.dispatch('user/getStoreS', { type: 1 })
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
