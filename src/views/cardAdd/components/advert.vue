<template>
  <div class="page-template bg-white">
    <h3 style="border-bottom: 1px solid rgb(232, 232, 232);">模块</h3>
    <div v-for="(item,index) in advertList" :key="index" class="template-container">
      <p class="type-title">{{ item.type_name }}</p>
      <div class="type-cont">
        <div v-for="(val) in item.children" :key="val.id" class="template-item">
          <!-- 弹框 -->
          <Propve :data="val" :option="'view'">
            <div class="template-item-logo" @click="MarkBox(val)">
              <img :src="val.logo" alt class="logo">
            </div>
            <div class="template-item-text">{{ val.name }}</div>
          </Propve>
          <!--  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Propve from '@/components/propve'

export default {
  name: 'Advert',
  components: {
    Propve
  },
  props: {
    advertList: {
      type: Object,
      default: null
    }
  },
  data() {
    return {}
  },
  methods: {
    MarkBox(item) {
      console.log(item, 'item----')
    }
  }
}
</script>
<style scoped  lang="scss">
.page-template {
  width: 256px;
  min-height: 700px;
  position: relative;
}

.page-template .template-container .type-cont .template-item .el-popover {
  width: 456px;
  position: absolute;
  left: 700px !important;
  top: 119px !important;
  height: 350px !important;
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
  position: relative;
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

.page-manage
  .page-template
  .template-container
  .template-item
  .template-item-logo:active {
  background: rgba(62, 198, 182, 0.1);
  border: 1px dashed #3ec6b6;
}

.page-manage
  .page-template
  .template-container
  .template-item.check
  .template-item-logo,
.page-manage
  .page-template
  .template-container
  .template-item
  .template-item-logo:hover {
  background: rgba(62, 198, 182, 0.1);
  border: 1px dashed #3ec6b6;
}
</style>
