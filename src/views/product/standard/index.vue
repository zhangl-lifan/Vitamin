<template>
    <div class="standardbox">
        <div class="title">
            <h2>自维护销售属性值管理</h2>
        </div>
        <div class="from">
            <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="规格值列表" name="first">
                <StandardFirst></StandardFirst>
            </el-tab-pane>
            <el-tab-pane label="分类与属性组关系" name="second">   
                <StandardSecond></StandardSecond>
            </el-tab-pane>
            </el-tabs>   
        </div>
    </div>
</template>

<script>
    import StandardFirst from "@/components/StandardFirst"
    import StandardSecond from "@/components/StandardSecond"
    export default {
        data() {
            return {
                activeName: 'first'
            }
        },
        components:{
            StandardFirst,
            StandardSecond
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style lang="scss" scoped>
  .standardbox{
    width: 100%;
    height: 100%;
  }
  .title{
    overflow: hidden;
    width: 100%;
    background: #fff;
    padding: 28px;
  }
  .title h2{
    font-weight: normal;
  }
  .from{
    width: 100%;
    background: #fff;
    margin: 30px 0;
    padding: 30px;
  }
</style>