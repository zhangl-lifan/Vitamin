<template>
    <div>
        <div class="top">
          
          <div class="floor">所属门店:
             <el-select v-model="value" placeholder="请选择" style="width:230px">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          </div> 
          <div class="floor">状态:
                <el-select v-model="value" placeholder="请选择" style="width:230px">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
          </div> 
          <div class="floor">关联属性组:
             <el-select v-model="value" placeholder="请选择" style="width:230px">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          </div> 
          <div class="floor">属性值:<el-input v-model="input" placeholder="请输入名称或编码" style="width:230px" size="medium"></el-input></div>
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
                prop="name"
                label="名称"
                width="180">
              </el-table-column>
              <el-table-column
                prop="coding"
                label="编码"
                width="180">
              </el-table-column>
              <el-table-column
                prop="store"
                label="门店"
                width="180">
              </el-table-column>
              <el-table-column
                prop="status"
                label="状态"
                width="180">
              </el-table-column>
              <el-table-column
                prop="texture"
                label="操作"
                width="180">
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
                value: '',
                tableData: [],
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