<template>
  <div class="PicBox">
    <div class="PicHeader">
      <div class="PicTitle">
        <span>图片广告</span>
        <span>X</span>
      </div>
    </div>
    <div class="PicContent">
      <div class="navBox">
        <div class="LeftText">
          <span>选择模板:</span>
        </div>
        <div class="type-cont">
          <div v-for="item in property.template_type_options" :key="item.id" class="template-item">
            <div class="template-item-logo">
              <img :src="item.logo" alt class="logo">
            </div>
            <div class="template-item-text">{{ item.name }}</div>
          </div>
        </div>
      </div>

      <div class="PicImgBox">
        <p>
          添加图片:
          <span>最多添加10个广告，鼠标拖拽调整顺序</span>
        </p>
        <div v-for="item in num" :key="item" class="DeBox" style="margin-top:15px;">
          <div class="PicAddImg">
            <div class="PicLeft">
              <div class="PicCard">
                <div class="Pic-upload">
                  <span>
                    <i>+</i> 添加图片
                  </span>
                  <span>建议宽度750像素</span>
                  <span>大小600KB以内</span>
                </div>
              </div>
              <!-- input -->
              <input id="UploadImg" type="file" name @change="getImg">
              <img v-if="src" :src="src" alt="loading" class="isShow">
            </div>
            <div class="PicRight">
              <el-select v-model="value">
                <el-option
                  v-for="item in property.pic_ad_options"
                  :key="item.jump_type"
                  :label="item.jump_name"
                  :value="item.jump_name"
                />
              </el-select>
            </div>
          </div>
          <div v-if="num>1" class="delectBox" @click="delectList">
            <span>-</span>
          </div>
        </div>

        <div class="AddBoc" @click="AddCont">
          <span class="AddText">+</span>
          <span>添加图片</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    property: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      num: 1,
      src: '',
      options: [],
      value: ''
    }
  },
  mounted() {
    // pic_ad_options
    console.log(JSON.parse(JSON.stringify(this.property)), 'pic-----')
  },
  methods: {
    getImg(e) {},
    AddCont() {
      this.num = this.num + 1
    },
    delectList() {
      this.num = this.num - 1
    }
  }
}
</script>
<style scoped  lang="scss">
.PicBox {
  width: 440px;
  height: 100%;

  .PicHeader {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #ccc;
  }

  .PicContent {
    width: 100%;
    padding: 0 10px;
    position: relative;
  }
}

.PicHeader .PicTitle {
  width: 100%;
  height: 100%;
  line-height: 40px;
  padding: 0 10px;
  display: flex;

  span:nth-child(1) {
    flex: 9;
  }

  span:nth-child(2) {
    flex: 1;
    font-size: 20px;
    text-align: right;
  }
}

.PicContent .navBox {
  width: 100%;
  display: flex;

  .LeftText {
    flex: 2;
    line-height: 87px;
    text-align: right;
    padding-right: 10px;
  }

  .type-cont {
    flex: 8;
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
  }

  .template-item {
    width: 100px;
    margin-bottom: 16px;
    position: relative;
    margin-right: 50px;
  }

  .template-item .template-item-logo {
    height: 100px;
    padding: 0 5px;
    border: 1px dashed #e8e8e8;
    display: flex;
    justify-content: center;
    align-items: center;
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
  }

  .template-item-text {
    color: #666;
    font-size: 14px;
    margin-top: 5px;
    text-align: center;
  }

  .template-item-logo:active {
    background: rgba(62, 198, 182, 0.1);
    border: 1px dashed #3ec6b6;
  }

  .template-item-logo:hover {
    background: rgba(62, 198, 182, 0.1);
    border: 1px dashed #3ec6b6;
  }
}

.PicContent .PicImgBox {
  width: 100%;
  position: relative;

  p {
    color: #555;

    span {
      color: #999;
    }
  }

  .PicAddImg {
    width: 85%;
    border: 1px dashed #ccc;
    display: flex;
    padding: 10px;
  }

  .PicAddImg:active {
    background: rgba(62, 198, 182, 0.1);
    border: 1px dashed #3ec6b6;
  }

  .PicAddImg:hover {
    background: rgba(62, 198, 182, 0.1);
    border: 1px dashed #3ec6b6;
  }

  .PicLeft {
    flex: 4;
    position: relative;
  }
  .PicCard {
    height: 85px;
    width: 148px;
    text-align: center;
    vertical-align: top;
    background-color: #fafafa;
    border: 1px dashed #d9d9d9;
    border-radius: 4px;
    cursor: pointer;
    padding: 10px 0;

    .Pic-upload {
      width: 148px;
      height: 85px;
      display: flex;
      flex-direction: column;
      span {
        display: inline-block;
        color: #999;
      }

      span:nth-child(1) {
        height: 25px;
        line-height: 25px;
        color: rgb(62, 198, 182);
        font-size: 15px;
        position: relative;
        i {
          font-style: normal;
          font-size: 20px;
          position: absolute;
          top: 1px;
          left: 28px;
        }
      }

      span:nth-child(2) {
        font-size: 12px;
        height: 20px;
      }

      span:nth-child(3) {
        font-size: 12px;
        height: 20px;
      }
    }
  }

  .PicCard:active {
    background: rgba(62, 198, 182, 0.1);
    border: 1px dashed #3ec6b6;
  }

  .PicCard:hover {
    background: rgba(62, 198, 182, 0.1);
    border: 1px dashed #3ec6b6;
  }

  #UploadImg:active {
    background: rgba(62, 198, 182, 0.1);
    border: 1px dashed #3ec6b6;
  }

  #UploadImg:hover {
    background: rgba(62, 198, 182, 0.1);
    border: 1px dashed #3ec6b6;
  }

  #UploadImg {
    position: absolute;
    width: 148px;
    height: 100%;
    background: red;
    top: 0;
    left: 0;
    opacity: 0;
  }

  .isShow {
    position: absolute;
    width: 148px;
    height: 100%;
    background: red;
    top: 0;
    left: 0;
    // opacity: 0;
  }

  .PicRight {
    flex: 6;
    padding-left: 15px;
    display: flex;
    align-items: center;
  }

  .AddBoc {
    width: 85%;
    border: 1px dashed #ccc;
    height: 32px;
    margin-top: 20px;
    text-align: center;
    line-height: 32px;
    position: relative;

    .AddText {
      font-size: 20px;
      position: absolute;
      top: 0px;
      left: 135px;
    }
  }

  .AddBoc:active {
    background: rgba(62, 198, 182, 0.1);
    border: 1px dashed #3ec6b6;
  }

  .AddBoc:hover {
    background: rgba(62, 198, 182, 0.1);
    border: 1px dashed #3ec6b6;
  }
}

.DeBox {
  width: 100%;
  position: relative;
}

.DeBox .delectBox {
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 50px;
  font-size: 24px;
  margin-right: 10px;
  span {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #333;
    text-align: center;
    line-height: 20px;
    display: inline-block;
  }
}
</style>
