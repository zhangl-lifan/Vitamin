<!--
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-15 08:42:53
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-16 19:30:23
 -->
<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
}

.fixed-header + .app-main {
  padding-top: 50px;
}

.hasTagsView {

  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header + .app-main {
    padding-top: 84px;
  }
}
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}

.app-main {
  flex: 1;
  // width: 100%;
  height: 100%;
  padding: 20px;
  background: #fcfcfc;
  position: absolute;
  top: 100px;
  left: 0px;
  overflow-y: scroll; /*显示y轴滚动条*/
  // overflow-x: hidden; /*隐藏x轴滚动条*/
}
</style>
