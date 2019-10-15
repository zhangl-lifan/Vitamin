<!--
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-15 09:43:56
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-15 14:28:51
 -->
<template>
  <div v-if="title!==noShow" class="titleShow">
    <h3>{{ title }}</h3>
  </div>
</template>
<script>
export default {
  name: 'Head',
  props: {
    title: String
  },
  data() {
    return {
      noShow: '概括'
    }
  }
}
</script>
<style lang="scss">
.titleShow {
  width: 90%;
  height: 79px;
  display: flex;
  background-color: #fff;
  align-items: center;
  margin: 0 auto;
}
.titleShow h3 {
  font-weight: 500;
  margin-left: 20px;
}
</style>
