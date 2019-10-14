<template>
  <div class="LoginPage">
    <div class="LoginWrap">
      <div class="login-logo">
        <img src="https://img.weitaming.com/weitaming/partner/icon/icon-wtm-logo.png" alt />
      </div>
      <div class="login-content">
        <div class="login-title">维他命商家后台</div>
        <div class="login-form">
          <div class="phone_login">
            <div class="form-group field-loginfrom-tel-required">
              <input name="phoneNum" type="text" class="form-control" placeholder="输入手机号" value />
            </div>
            <div class="form-group field-loginform-code-require">
              <div class="code-input-outer">
                <input
                  name="code"
                  type="text"
                  class="form-control code-input"
                  placeholder="输入验证码"
                  value
                />
                <span class="color-light code-text cursor-pointer">获取验证码</span>
              </div>
              <p class="help-block help-block-error"></p>
            </div>
          </div>
          <div class="row-btn">
            <div class="row-btn-pos">
              <span class="btn btn-wtm-3 btn-block btn-lg">登录</span>
            </div>
            <div class="row-btn-pos flex-center justify-center full-width">
              <div class="toggle_type">账号登录</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.LoginPage {
  width: 100%;
  height: 100%;
  position: relative;
}

.LoginWrap {
  width: 360px;
  height: 510px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -180px;
  margin-top: -255px;
//   border: 1px solid #ccc;

  .login-logo {
    width: 100%;
    height: 120px;
    text-align: center;

    img {
      width: 120px;
      height: 100%;
    }
  }
}

.login-content {
  width: 100%;
  padding: 20px 30px;

  .login-title {
    width: 100%;
    height: 30px;
    font-family: PingFangSC-Regular;
    font-size: 20px;
    color: #3c3c3c;
    letter-spacing: 4px;
    text-align: center;
    line-height: 30px;
    margin-bottom: 60px;
  }
}

.login-form .form-group {
  margin-bottom: 30px;
}

.login-form .form-group .form-control {
  display: block;
  width: 100%;
  height: 48px;
  padding: 6px 15px;
  border: 1px solid #d7d7d7;
  font-size: 16px;
  color: #3c3c3c;
  background: transparent;
  border-radius: 5px;
  box-shadow: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
}

.login-form .code-input-outer,
.login-form .password-outer {
  position: relative;
}

.login-form .cursor-pointer {
  cursor: pointer;
}

.login-form .code-text {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  line-height: 14px;
}

.color-light {
  color: #3ec6b6;
}

.login-form .form-group .help-block {
  display: block;
  font-size: 12px;
  line-height: 12px;
  margin-top: 15px;
  margin-bottom: 30px;
  color: #ff7887;
}

.login-form .row-btn {
    margin-right: -15px;
    margin-left: -15px;
}

.login-form .row-btn .row-btn-pos {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}

 .login-form .row-btn .row-btn-pos .btn-wtm-3 {
    display: block;
    width: 100%;
    padding: 13px 0;
    margin-bottom: 0;
    line-height: 1.3333333;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    // vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    background-image: none;
    border-radius: 3px;
}

 .login-form .row-btn .row-btn-pos .btn-wtm-3 {
    font-size: 18px;
    background-color: #3ec6b6;
    border-color: #3ec6b6;
    color: #fff;
}

.login-form .row-btn .row-btn-pos {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}

.flex-center {
    display: flex;
    align-items: center;
}

.justify-center {
    display: flex;
    justify-content: center;
}

.login-form .row-btn .row-btn-pos .toggle_type {
    width: 25%;
    text-align: center;
    color: #3c3c3c;
    font-size: 14px;
    margin-top: 30px;
    cursor: pointer;
}
</style>