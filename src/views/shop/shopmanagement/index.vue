<template>
    <div class="shopbox">
      <div class="title">
        <h2>店铺管理</h2>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部店铺" name="first">
              <ShopFirst></ShopFirst>
          </el-tab-pane>
          <el-tab-pane label="e店铺" name="second">   
              <ShopSecond></ShopSecond>
          </el-tab-pane>
        </el-tabs>
      </div>
  </div>
</template>

<script>
import ShopFirst from "@/components/ShopFirst"
import ShopSecond from "@/components/ShopSecond"
export default { 
  data(){
    return{
      activeName: 'first'
    }
  },
  components:{
    ShopFirst,
    ShopSecond
  },
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
  }
}
</script>

<style lang="scss" scoped>
.shopbox{
    width: 100%;
    height: 100%;
 }
 .title{
    overflow: hidden;
    width: 100%;
    padding: 28px;
    background: #fff;
  }
  .title h2{
    font-weight: normal;
  }
</style>