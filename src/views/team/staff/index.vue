<!--
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-15 15:08:41
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-15 20:02:46
 -->
<template>
  <div class="tabs">
    <StaffModule />
  </div>
</template>
<script>
import StaffModule from '@/components/Tabs/staffM'
export default {
  components: { StaffModule }
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
