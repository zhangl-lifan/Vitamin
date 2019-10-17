<template>
  <div class="content-action">
    <div class="page-container" style="padding-bottom: 100px;">
      <div class="ant-spin-nested-loading">
        <div class="ant-spin-container">
          <div class="page-manage">
            <div class="page-template bg-white">
              <h3 style="border-bottom: 1px solid rgb(232, 232, 232);">模块</h3>
              <div class="template-container">
                <p class="type-title">图文类</p>
                <div class="type-cont">
                  <div class="template-item">
                    <div class="template-item-logo">
                      <img
                        src="https://img.weitaming.com/file/20190627115347_974851/pic_ad_big.png"
                        alt
                        class="logo"
                      >
                    </div>
                    <div class="template-item-text">广告图</div>
                  </div>
                </div>
              </div>
              <div class="template-container">
                <p class="type-title">经典模板</p>
                <div class="type-cont">
                  <div class="template-item">
                    <div class="template-item-logo">
                      <img
                        src="https://img.weitaming.com/file/20190627125255_516869/title.png"
                        alt
                        class="logo"
                      >
                    </div>
                    <div class="template-item-text">标题</div>
                  </div>
                  <div class="template-item">
                    <div class="template-item-logo">
                      <img
                        src="https://img.weitaming.com/file/20190627125339_960552/hr.png"
                        alt
                        class="logo"
                      >
                    </div>
                    <div class="template-item-text">辅助线</div>
                  </div>
                  <div class="template-item">
                    <div class="template-item-logo">
                      <img
                        src="https://img.weitaming.com/file/20190627125213_354175/search.png"
                        alt
                        class="logo"
                      >
                    </div>
                    <div class="template-item-text">搜索</div>
                  </div>
                  <div class="template-item">
                    <div class="template-item-logo">
                      <img
                        src="https://img.weitaming.com/file/20190627125339_960552/hr.png"
                        alt
                        class="logo"
                      >
                    </div>
                    <div class="template-item-text">头条</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="page-config bg-white">
              <div class="config-global">
                <Frame />
                <!-- 左边的列条 -->
                <div class="set-slide bg-white ant-popover-open">
                  <p class="set-text">
                    <span>整体页面设置</span>
                  </p>
                  <div v-if="isShow" class="padding-4-tnb">
                    <i
                      aria-label="图标: setting"
                      class="anticon anticon-setting"
                      style="color: rgb(62, 198, 182);"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        class
                        data-icon="setting"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z"
                        />
                      </svg>
                    </i>
                  </div>
                </div>
              </div>

              <!-- 下边的内容盒子 -->
              <div class="config-body" style="background: rgb(255, 255, 255);" />
            </div>
          </div>
          <div class="bottom-footbar">
            <button type="button" class="ant-btn btn-default">
              <span>保存并继续</span>
            </button>
            <button type="button" class="ant-btn btn-default margin-10-left">
              <span>预 览</span>
            </button>
            <button type="button" class="ant-btn margin-10-left btn-default">
              <span>存草稿</span>
            </button>
            <button
              type="button"
              class="ant-btn btn-default margin-10-left"
              style="background: rgb(62, 198, 182); color: rgb(255, 255, 255);"
            >
              <span>发 布</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Frame from './components/frame'
export default {
  components: {
    Frame
  },
  data() {
    return {
      visible: false,
      isShow: false
    }
  },
  mounted() {
    console.log(this.$refs.iconSize)
  }
}
</script>
<style  lang="scss">
// .content-action {
// //   padding: 0 24px;
// }
.page-container {
  width: 100%;
  overflow: hidden;
}

.ant-spin-nested-loading {
  position: relative;
}

.ant-spin-container {
  position: relative;
  transition: opacity 0.3s;
}

.ant-spin-container:after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: none\9;
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: 0;
  transition: all 0.3s;
  content: "";
  pointer-events: none;
}

.page-manage {
  width: 100%;
  display: flex;
}

.page-manage .page-template {
  width: 256px;
  min-height: 700px;
}

.bg-white {
  background: #fff;
}

.page-manage .page-template h3 {
  height: 40px;
  margin: 0;
  line-height: 40px;
  padding-left: 16px;
  font-weight: normal;
  font-size: 16px;
}

.page-manage .page-template .template-container {
  width: 100%;
  padding: 10px 16px;
  border-bottom: 1px solid #e8e8e8;
}

.page-manage .page-template .template-container .type-title {
  height: 30px;
  line-height: 30px;
  margin: 0;
}

.page-manage .page-template .template-container .type-cont {
  width: 100%;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.page-manage .page-template .template-container .template-item {
  width: 100px;
  margin-bottom: 16px;
}

.page-manage
  .page-template
  .template-container
  .template-item
  .template-item-logo {
  height: 100px;
  padding: 0 5px;
  border: 1px dashed #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-manage
  .page-template
  .template-container
  .template-item
  .template-item-logo
  .logo {
  width: 100%;
  height: auto;
  background: hsla(0, 0%, 84.3%, 0.5);

  img {
    border-style: none;
  }
  img {
    vertical-align: middle;
  }
}

.template-item-text {
  color: #666;
  font-size: 14px;
  margin-top: 5px;
}

.page-manage .page-config {
  width: 375px;
  min-height: 700px;
  margin-left: 180px;
}

.bottom-footbar {
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #e8e8e8;
  padding: 12px 24px;
  text-align: right;
  left: 0;
  background: #fff;
  border-radius: 0 0 4px 4px;
  z-index: 99;
}

.page-manage .page-config .config-global {
  width: 100%;
  position: relative;
}

.page-manage .page-config .config-body {
  min-height: 550px;
}

.page-manage .page-config .active:active {
  border: 1px dashed #3ec6b6;
}

.page-manage .page-config .config-global .global-bg,
.page-manage .page-config .config-global .global-bg img {
  width: 100%;
}

.page-manage .page-config .config-global .global-header {
  position: absolute;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  top: 20px;
  font-size: 18px;
  font-weight: 600;
}

.page-manage .page-config .config-global .global-link {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
}

.page-manage .page-config .config-global .global-link img {
  width: 120px;
}

.page-manage .page-config .set-slide {
  width: 28px;
  padding: 4px 8px;
  position: absolute;
  right: -36px;
  border-radius: 4px;
  font-size: 12px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.05);
  top: 0;
}

.page-manage .page-config .set-slide .set-text {
  color: #7c7c7c;
}
.page-manage .page-config .set-slide .padding-4-tnb {
  padding: 4px 0;
}
.anticon {
  display: inline-block;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
}

.popper__arrow{
  top:12px !important;
}

.btn-default,
.btn-info {
  display: inline-block;
  padding: 6px 15px;
  background: #fff;
  cursor: pointer;
}
.btn-default {
  color: #3ec6b6;
  border-radius: 4px;
  border: 1px solid #3ec6b6;
}
</style>
