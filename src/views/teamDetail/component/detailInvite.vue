<!--
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-18 10:30:51
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-19 09:49:13
 -->
<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: white">
      <el-menu
        background-color="white"
        text-color="rgba(0,0,0,.65)"
        :unique-opened="false"
        active-text-color="#3ec6b6"
        :collapse-transition="false"
        mode="vertical"
      >
        <!--  -->
        <el-menu-item-group>
          <div v-for="(item) in fullData" :key="item.id">
            <template v-if="item.name!==initstr" slot="title">
              <span @click="handleClick(item.id)">{{ item.name }}</span>
            </template>
          </div>
        </el-menu-item-group>
      </el-menu>
    </el-aside>
    <el-container v-for="(item,index) in fullData" :key="item.id" :index="index">
      <div v-if="item.id === showId" class="mess-container">333</div>
    </el-container>
  </el-container>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'Details',
  data() {
    return {
      initstr: '',
      showId: '656'
    }
  },
  computed: mapState({
    userInfo: state => state.user.userInfo,
    selfInfo: state => state.user.selfInfo,
    fullData: state => state.user.fullData
  }),
  mounted() {
    this.InitRequest()
    // this.Init();
  },
  methods: {
    async InitRequest() {
      await this.$store.dispatch('user/getUserData')
      await this.$store.dispatch('user/getUserInfo', {
        user_id: this.$route.query.id
      })
      await this.$store.dispatch('user/patienceList', {
        unique_id: this.$route.query.id
      })
    },
    Init() {
      setTimeout(() => {
        console.log(this.userInfo, this.selfInfo)
      }, 2000)
    },
    handleClick(id) {
      this.showId = id
    }
  }
}
</script>
<style lang="scss">
.el-aside {
  min-height: 600px;
  padding: 0;
}
.ant-layout-sider {
  flex: 0 0 200px;
  max-width: 200px;
  min-width: 200px;
  width: 200px;
}
.el-menu {
  height: auto;
  margin-top: 60px;
  border-right: 0;
}
.el-menu li {
  height: 50px;
  width: 90%;
  line-height: 50px;
  margin-bottom: 8px;
  margin-left: 10%;
  div {
    font-size: 16px;
    cursor: pointer;
  }
}
.active {
  background: #fafafa;
}
.active ::after {
  border-right: 3px solid #3ec6b6;
}
</style>
