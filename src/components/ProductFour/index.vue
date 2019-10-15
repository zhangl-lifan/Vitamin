<template>
    <div class="productfour">
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
              <el-select v-model="value1" multiple placeholder="请选择" style="width:230px">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </div> 
          <div class="floor">店铺:
              <el-select v-model="value1" multiple placeholder="请选择" style="width:230px">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </div>
          <div class="floor">
              <div class="block" style="width:1000px">
                <span class="demonstration">上架时间:</span>
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
                value1: [],
                value2: [],
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
</style>