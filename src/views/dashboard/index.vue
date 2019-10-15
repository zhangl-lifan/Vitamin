<!--
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-14 11:00:00
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-15 14:37:11
 -->
<template>
  <div class="dashboard-container">
    <div class="user-content">
      <div class="user-name">您好，{{ userInfo.user_name }}!</div>
      <p class="look">看看你店里发生了什么</p>
      <p class="noConetnt">没有内容...看去推广你的店铺吧~</p>
    </div>
    <div class="qrCodeBox">
      <div class="account">绑定您的账号</div>
      <div class="qrCode">
        <img src="@/assets/img/qrcode.png">
      </div>
      <div class="introduce">为了使用商户端全部功能，请扫描二维码，前往“国芳官微商城”，绑定你的账号</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Dashboard',
  computed: mapState({
    userInfo: state => state.user.userInfo
  }),
  mounted() {
    this.getInitData()
  },
  methods: {
    getInitData() {
      this.$store.dispatch('user/getUserData')
    }
  }
}
</script>
<style lang="scss">
.user-content {
  width: 90%;
  height: auto;
  margin: 0 auto;
  .user-name {
    font-size: 22px;
    color: rgba(0, 0, 0, 0.65);
  }
  .look {
    color: #a0a0a0;
  }
  .noConetnt {
    color: rgba(0, 0, 0, 0.65);
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC,
      Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial,
      sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  }
}
.qrCodeBox {
  float: right;
  margin-right: 70px;
  width: 210px;
  background-color: #fff;
  position: relative;
  top: -50px;
  .account {
    text-align: center;
    color: rgba(0, 0, 0, 0.75);
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC,
      Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial,
      sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-feature-settings: "tnum";
    font-variant: tabular-nums;
    line-height: 1.5;
    padding-top: 20px;
  }
  .qrCode {
    text-align: center;
    margin-top: 15px;
  }
  .introduce {
    width: 110px;
    height: auto;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.75);
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC,
      Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial,
      sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-variant: tabular-nums;
    line-height: 1.5;
    padding-bottom: 20px;
    margin-left: 50px;
    margin-top: 10px;
  }
}
</style>
