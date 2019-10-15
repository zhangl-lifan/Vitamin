<template>
  <div class="shoppebox">
    <div class="title">
      <h2>专柜导航设置</h2>
    </div>
    <div class="from">
      <div class="top">
          <p class="pname">店铺名:<el-input v-model="input" placeholder="请输入店铺名称" style="width:280px" size="medium"></el-input></p>
          <p class="floor">楼层:
                <el-select v-model="value" filterable placeholder="请选择" style="width:280px" size="medium">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
          </p> 
          <p class="floor">分类:
              <el-select v-model="value" filterable placeholder="请选择" style="width:280px" size="medium">
                  <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
              </el-select>
          </p> 
      </div>
      <div class="buttom">   
        <p><el-button type="primary" size="medium" style="background:#3ec6b6">查看</el-button></p>
        <p><el-button size="medium">重置</el-button></p>
      </div>    
    </div>
    <div class="table">
      <el-table 
        size="medium"
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'shopname', order: 'descending'}"
        >
        <el-table-column
          prop="shopname"
          label="店铺名称">
        </el-table-column>
        <el-table-column
          prop="floor"
          label="楼层">
        </el-table-column>
         <el-table-column
          prop="address"
          label="位置"
          >
        </el-table-column>
         <el-table-column
          prop="type"
          label="所属分类">
        </el-table-column>
        <el-table-column
          prop="weight"
          label="权重"
          sortable
          width="180">
        </el-table-column>
        
      </el-table>
    </div>
  </div>
</template>

<script>
import Sortable from 'sortablejs'
export default {
  name: 'DragTable',
  data() {
    return {
      input: '',
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
      }],
      value: '',
      tableData: [{
          shopname: '2016-05-02',
          floor: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          type:"dv",
          weight:"bjcdv"
        }, {
          shopname: '2016-05-02',
          floor: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          type:"dv",
          weight:"bjcdv"
        }, {
          shopname: '2016-05-02',
          floor: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          type:"dv",
          weight:"bjcdv"
        }, {
          shopname: '2016-05-02',
          floor: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          type:"dv",
          weight:"bjcdv"
        }]
    }
  },
  
}
</script>

<style lang="scss" scoped>
  .shoppebox{
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
    padding: 60px;
  }
  .from .top{
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  .from .top p{
    font-size: 19px;
  }
  .from .buttom{
    display: flex;
    position: absolute;
    right: 10.5%;
  }
  .from .buttom p{
    margin: 10px;
  }
</style>