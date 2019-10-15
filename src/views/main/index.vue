<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex">
      <i-col :span="spanLeft" class="layout-menu-left">
        <Menu active-key="1" theme="dark" width="auto">
          <div class="layout-logo">
            <img
              alt="logo"
              src="https://img.weitaming.com/weitaming/partner/icon/icon-wtm-logo.png!b"
            >
            <span>维他命商家后台</span>
          </div>
          <Menu-item key="1" name="1">
            <Icon type="ios-navigate" :size="iconSize" />
            <span class="layout-text">选项 1</span>
          </Menu-item>
          <Menu-item key="2" name="2">
            <Icon type="ios-keypad" :size="iconSize" />
            <span class="layout-text">选项 2</span>
          </Menu-item>
          <Submenu key="1" name="3">
            <template slot="title">
              <Icon type="ios-navigate" />导航一
            </template>
            <Menu-item key="1-1">选项 1</Menu-item>
            <Menu-item key="1-2">选项 2</Menu-item>
            <Menu-item key="1-3">选项 3</Menu-item>
          </Submenu>
        </Menu>
      </i-col>
      <i-col :span="spanRight">
        <div class="layout-header">
          <i-button type="text" @click="toggleClick">
            <Icon type="navicon" size="32" />
          </i-button>
        </div>
        <div class="layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb-item href="#">首页</Breadcrumb-item>
            <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
            <Breadcrumb-item>某应用</Breadcrumb-item>
          </Breadcrumb>
        </div>
        <div class="layout-content">
          <div class="layout-content-main">内容区域</div>
        </div>
        <div class="layout-copy">2011-2016 &copy; TalkingData</div>
      </i-col>
    </Row>
  </div>
</template>
<script>
export default {
  name: 'Main',
  data() {
    return {
      spanLeft: 5,
      spanRight: 19
    }
  },
  computed: {
    iconSize() {
      return this.spanLeft === 5 ? 14 : 24
    }
  },
  methods: {
    toggleClick() {
      if (this.spanLeft === 5) {
        this.spanLeft = 2
        this.spanRight = 22
      } else {
        this.spanLeft = 5
        this.spanRight = 19
      }
    }
  }
}
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.layout .ivu-row-flex {
  width: 100%;
  height: 100%;
}

.layout-breadcrumb {
  padding: 10px 15px 0;
}

.layout-logo {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.layout-logo img {
  width: 32px;
  margin-left: 30px;
  margin-right: 20px;
}

.layout-logo span {
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.65);
}

.layout-content {
  height: 100%;
  margin: 15px;
  overflow: hidden;
  background: #fcfcfc;
  border-radius: 4px;
}
.layout-content-main {
  padding: 10px;
}
.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
.layout-menu-left {
  background: #fff;
}
.layout-header {
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.layout-ceiling-main a {
  color: #9ba7b5;
}
.layout-hide-text .layout-text {
  display: none;
}
.ivu-col {
  transition: width 0.2s ease-in-out;
}

.ivu-menu-dark {
  background: #fff;
  color: rgba(0, 0, 0, 0.65);
}

.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item,
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title {
  color: rgba(0, 0, 0, 0.65);
}

.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover,
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover {
  color: #3ec6b6;
  background: #fff;
}

.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:active,
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:active {
  color: #3ec6b6;
  background: #fff;
}
</style>
