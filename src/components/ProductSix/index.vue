<template>
    <div class="productfirst">
        <div class="top">
          <div class="floor">款号:<el-input v-model="input" placeholder="请输入" style="width:230px" size="medium"></el-input></div>
          <div class="floor">商品名称:<el-input v-model="input" placeholder="请输入" style="width:230px" size="medium"></el-input></div>
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
          <div class="floor">商品类型:
              <el-select v-model="value" clearable placeholder="请选择" style="width:230px">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </div>
          <div class="floor">配送方式:
              <el-select
                v-model="value"
                multiple
                filterable
                allow-create
                default-first-option
                placeholder="请选择"
                style="width:230px">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </div> 
          <div class="floor">店铺:
            <el-select v-model="value" placeholder="请选择" style="width:230px">
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
          <div class="floor">
              <div class="block" style="width:1000px">
                <span class="demonstration">审核时间:</span>
                <el-date-picker
                  v-model="value2"
                  type="daterange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions" style="width:350px">
                </el-date-picker>
              </div>
          </div>
        </div>
        <div class="btn">   
            <span><el-button type="primary" size="medium" style="background:#3ec6b6">查看</el-button></span>
            <span><el-button size="medium">重置</el-button></span>
        </div>
        <div class="addbtn">
           <el-button type="primary" icon="el-icon-plus" circle></el-button>
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
                label="日期"
                width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                show-overflow-tooltip>
              </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
              <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
              <el-button @click="toggleSelection()">取消选择</el-button>
            </div>
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
                options2: [{
                  value: '送货上门',
                  label: '送货上门'
                }, {
                  value: '门店自提',
                  label: '门店自提'
                }, {
                  value: '自动充值',
                  label: '自动充值'
                }],
                value: '',
                pickerOptions: {
                  shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                      picker.$emit('pick', [start, end]);
                    }
                  }, {
                    text: '最近一个月',
                    onClick(picker) {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                      picker.$emit('pick', [start, end]);
                    }
                  }, {
                    text: '最近三个月',
                    onClick(picker) {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                      picker.$emit('pick', [start, end]);
                    }
                  }]
                },
                value1: '',
                value2: '',
                tableData: [{
                  date: '2016-05-03',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-02',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-04',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-01',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-08',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-06',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-07',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }],
                multipleSelection: []
            }
        },
        methods: {
          toggleSelection(rows) {
            if (rows) {
              rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
              });
            } else {
              this.$refs.multipleTable.clearSelection();
            }
          },
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
</style>