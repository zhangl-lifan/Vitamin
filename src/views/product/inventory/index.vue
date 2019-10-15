<template>
      <div class="inventorybox">
        <div class="title">
        <h2>商品管理</h2>
        <div class="nac">
            <span><i class="el-icon-upload2"></i>批量上传</span>
            <span><i class="el-icon-download"></i>批量导出</span>
            <span><i class="el-icon-edit-outline"></i>查看已生成报表</span>
        </div>
        </div>
        <div class="from">
            <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="销售中" name="first">
                <ProductFirst></ProductFirst>
            </el-tab-pane>
            <el-tab-pane label="仓库中" name="second">   
                <ProductSecond></ProductSecond>
            </el-tab-pane>
            <el-tab-pane label="草稿箱" name="third">
                <ProductThird></ProductThird>
            </el-tab-pane>
            <el-tab-pane label="待审核(74)" name="fourth">
                <ProductFourth></ProductFourth>
            </el-tab-pane>
            <el-tab-pane label="未通过审核" name="six">
                <ProductSix></ProductSix>
            </el-tab-pane>
            <el-tab-pane label="商品库" name="four">   
                <ProductFour></ProductFour>
            </el-tab-pane>
            </el-tabs>   
        </div>
    </div>
</template>

<script>
import Sortable from 'sortablejs'
import ProductFirst from "@/components/ProductFirst"
import ProductSecond from "@/components/ProductSecond"
import ProductThird from "@/components/ProductThird"
import ProductFourth from "@/components/ProductFourth"
import ProductSix from "@/components/ProductSix"
import ProductFour from "@/components/ProductFour"
export default {
  name: 'DragTable',
  data() {
    return {
      activeName: 'first'
    }
  },
  components:{
    ProductFirst,
    ProductSecond,
    ProductThird,
    ProductFourth,
    ProductSix,
    ProductFour
  },
   methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
  }
}
</script>

<style lang="scss" scoped>
  .productmentbox{
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