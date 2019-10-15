<!--
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-14 11:00:00
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-15 08:39:50
 -->
<template>
  <div :class="{'has-logo':showLogo}">
    <div class="layout-logo">
      <img alt="logo" src="https://img.weitaming.com/weitaming/partner/icon/icon-wtm-logo.png!b">
      <span>维他命商家后台</span>
    </div>
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        background-color="white"
        text-color="rgba(0,0,0,.65)"
        :unique-opened="false"
        active-text-color="#3ec6b6"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters(['permission_routes', 'sidebar']),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
<style lang="scss">
.layout-logo {
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
}

.layout-logo img {
  width: 32px;
  height: 32px;
   margin-left: 32px;
    margin-right: 20px;
}

.layout-logo span {
  font-size: 18px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.65);
}
</style>
