<!--
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-18 10:30:51
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-19 08:35:30
 -->
<template>
  <div>
    <Invite :type="type" />
  </div>
</template>
<script>
import Invite from './component/detailInvite'
// import Role from './component/detailRole'
// import SeleInfo from './component/detailSeleInfo'
export default {
  name: 'Details',
  components: { Invite },
  data() {
    return {
      type: 1
    }
  }
}
</script>
<style lang="scss">
</style>
