<template>
    <div class="inventtorySecond">
        <div class="top">
          <div class="floor">款号:<el-input v-model="input" placeholder="请输入" style="width:230px" size="medium"></el-input></div>
          <div class="floor">SKU编码:<el-input v-model="input" placeholder="请输入" style="width:230px" size="medium"></el-input></div>
          <div class="floor">分类:
             <el-select v-model="value" clearable placeholder="请选择" style="width:230px">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </div> 
          <div class="floor">品牌:
               <el-select v-model="value" clearable placeholder="请选择" style="width:230px">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </div> 
          <div class="floor">商品来源:
             <el-select v-model="value" clearable placeholder="请选择" style="width:230px">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </div> 
          <div class="floor">
              <span>*</span>
              店铺:
            <el-select v-model="value" placeholder="请选择店铺" style="width:230px">
              <el-option-group
                v-for="group in options1"
                :key="group.label"
                :label="group.label">
                <el-option
                  v-for="item in group.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-option-group>
            </el-select>
          </div>
        </div>
        <div class="btn">   
            <span><el-button type="primary" size="medium" style="background:#3ec6b6">查看</el-button></span>
            <span><el-button size="medium">重置</el-button></span>
        </div>
        <div class="table">
          <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange">
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                prop="img"
                label="主图"
                width="200">
              </el-table-column>
              <el-table-column
                prop="number"
                label="商品款号"
                width="200">
              </el-table-column>
              <el-table-column
                prop="coding"
                label="SKU编码"
                width="200">
              </el-table-column>
              <el-table-column
                prop="brand"
                label="品牌"
                width="200">
              </el-table-column>
              <el-table-column
                prop="stand"
                label="商品规格"
                width="200">
              </el-table-column>
              <el-table-column
                prop="electrical"
                label="电商库存"
                width="1500">
              </el-table-column>
              <el-table-column
                prop="store"
                label="门店"
                width="200">
              </el-table-column>
              <el-table-column
                prop="electrical"
                label="操作"
                width="150">
              </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
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
                options1: [{
                  label: 'F1',
                  options: [{
                    value: 'Shanghai',
                    label: '上海'
                  }, {
                    value: 'Beijing',
                    label: '北京'
                  }]
                }, {
                  label: 'F2',
                  options: [{
                    value: 'Chengdu',
                    label: '成都'
                  }, {
                    value: 'Shenzhen',
                    label: '深圳'
                  }, {
                    value: 'Guangzhou',
                    label: '广州'
                  }, {
                    value: 'Dalian',
                    label: '大连'
                  }]
                }],
                value:"",
                tableData: [{
                  img: '2016-05-03',
                  number: '王小虎',
                  coding: '上海市普陀区金沙江路 1518 弄',
                  brand:"njfkfd",
                  stand:"ufnfoeo",
                  electrical:0,
                  store:"诗易茜"
                }, {
                  img: '2016-05-02',
                  number: '王小虎',
                  coding: '上海市普陀区金沙江路 1518 弄',
                  brand:"njfkfd",
                  stand:"ufnfoeo",
                  electrical:0,
                  store:"诗易茜"
                }, {
                  img: '2016-05-03',
                  number: '王小虎',
                  coding: '上海市普陀区金沙江路 1518 弄',
                  brand:"njfkfd",
                  stand:"ufnfoeo",
                  electrical:0,
                  store:"诗易茜"
                }, {
                  img: '2016-05-02',
                  number: '王小虎',
                  coding: '上海市普陀区金沙江路 1518 弄',
                  brand:"njfkfd",
                  stand:"ufnfoeo",
                  electrical:0,
                  store:"诗易茜"
                }, {
                  img: '2016-05-03',
                  number: '王小虎',
                  coding: '上海市普陀区金沙江路 1518 弄',
                  brand:"njfkfd",
                  stand:"ufnfoeo",
                  electrical:0,
                  store:"诗易茜"
                }, {
                  img: '2016-05-02',
                  number: '王小虎',
                  coding: '上海市普陀区金沙江路 1518 弄',
                  brand:"njfkfd",
                  stand:"ufnfoeo",
                  electrical:0,
                  store:"诗易茜"
                },{
                  img: '2016-05-02',
                  number: '王小虎',
                  coding: '上海市普陀区金沙江路 1518 弄',
                  brand:"njfkfd",
                  stand:"ufnfoeo",
                  electrical:0,
                  store:"诗易茜"
                }],
                multipleSelection: []
            }
        },
        methods: {
          handleSelectionChange(val) {
            this.multipleSelection = val;
          }
        }
    }
</script>

<style lang="scss" scoped>
 .top{
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
  }
 .top div{
    font-size: 19px;
    width: 30%;
    display: flex;
    justify-content: flex-end;
    
  }
  .floor{
    margin: 15px;
  }
  .floor span{
       color: red;
  }
  .btn{
    width: 95%;
    display: flex;
    justify-content: flex-end;
  }
  .btn span{
    margin-left: 20px;
  }
  .addbtn{
    width: 100%;
    background: #fff;
    padding: 20px 0;
  }
  .table{
    margin-top: 30px;
  }
</style>