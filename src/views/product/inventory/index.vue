<template>
      <div class="inventorybox">
        <div class="title">
        <h2>库存管理</h2>
        <div class="nac">
            <span><i class="el-icon-upload2"></i>批量上传</span>
        </div>
        </div>
        <div class="from">
            <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="销售中" name="first">
                <inventoryFirst></inventoryFirst>
            </el-tab-pane>
            <el-tab-pane label="已售馨(7)" name="second">   
                <inventorySecond></inventorySecond>
            </el-tab-pane>
            </el-tabs>   
        </div>
    </div>
</template>

<script>
import Sortable from 'sortablejs'
import InventoryFirst from "@/components/InventoryFirst"
import InventorySecond from "@/components/InventorySecond"
export default {
  name: 'DragTable',
  data() {
    return {
      activeName: 'first'
    }
  },
  components:{
    InventoryFirst,
    InventorySecond
  },
   methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
  }
}
</script>

<style lang="scss" scoped>
  .inventorybox{
    width: 100%;
    height: 100%;
  }
  .title{
    overflow: hidden;
    width: 100%;
    background: #fff;
    padding: 30px;
    
  }
  .title h2{
    font-weight: normal;
  }
  .title .nac{
      margin-top: 20px;
  }
  .title .nac span{
      margin-right: 20px;
      font-size: 18px
  }
  .title .nac span i{
      margin-right: 5px;
  }
  .from{
    width: 100%;
    background: #fff;
    margin: 30px 0;
    padding: 30px;
  }
</style>