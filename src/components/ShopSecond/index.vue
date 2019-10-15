<template>
     <div class="secondbox">
        <div class="from">
            <div class="top">
                <p class="pname">店铺名:<el-input v-model="input" placeholder="请输入店铺名称" style="width:280px" size="medium"></el-input></p>
                <p class="floor">店铺授权:
                    <el-select v-model="value" filterable placeholder="请选择" style="width:280px" size="medium">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                </p> 
                <p class="floor">授权品牌:
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
                label="店铺权限">
                </el-table-column>
                <el-table-column
                prop="address"
                label="授权品牌"
                >
                </el-table-column>
                <el-table-column
                prop="type"
                label="商品来源">
                </el-table-column>
                <el-table-column
                prop="weight"
                label="状态">
                </el-table-column>
                <el-table-column
                prop="operation"
                label="操作">
                </el-table-column>
                
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
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
          weight:"bjcdv",
          operation:"查看"
        }, {
          shopname: '2016-05-02',
          floor: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          type:"dv",
          weight:"bjcdv",
          operation:"查看"
        }, {
          shopname: '2016-05-02',
          floor: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          type:"dv",
          weight:"bjcdv",
          operation:"查看"
        }, {
          shopname: '2016-05-02',
          floor: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          type:"dv",
          weight:"bjcdv",
          operation:"查看"
      }]
    }
  }, 
   
}
</script>

<style lang="scss" scoped>
  .secondbox{
      width:100%;
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