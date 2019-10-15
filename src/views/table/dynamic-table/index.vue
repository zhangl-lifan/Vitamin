<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-14 14:35:15
 * @LastEditTime: 2019-10-15 15:09:49
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="app-container">
    <p>顾客管理</p>
    <p><span><i class="el-icon-download" />批量导出</span><span><i class="el-icon-circle-close-outline" />查看已生成报表</span></p>
    <ul>
      <li :class="ind===0?&quot;active&quot;:&quot;&quot;" @click="()=>{change(0)}">有效顾客</li>
      <li :class="ind===1?&quot;active&quot;:&quot;&quot;" @click="()=>{change(1)}">潜在顾客</li>
    </ul>
    <div class="formbox">
      <div v-show="ind===0" class="oneform">
        <el-form v-for="(item,index) in list" ref="form" :key="index" :model="form" label-width="80px">
          <!-- 输入框 -->
          <el-form-item v-if="item.type===&quot;input&quot;" :label="item.name">
            <el-input v-model="form[item.ename]" />
          </el-form-item>
          <!-- 下拉选择 -->
          <el-form-item v-else-if="item.type===&quot;select&quot;" :label="item.name">
            <el-select v-model="form[item.ename]" placeholder="请选择">
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>

          <!-- 最大值最小值 -->
          <el-form-item v-else-if="item.type===&quot;num&quot;" :label="item.name">
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-input v-model="form[item.ename+'min']" />
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-input v-model="form[item.ename+'max']" />
              </el-form-item>
            </el-col>
          </el-form-item>
          <!-- 时间选择器 -->
          <div v-else-if="item.type===&quot;date&quot;" class="block">
            <span class="demonstration">{{ item.name }}</span>
            <el-date-picker
              v-model="form[item.ename]"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </div>

        </el-form>
      </div>

      <div v-show="ind===1" class="lastform">
        <el-form v-for="(item,index) in list" ref="form" :key="index" :model="form" label-width="80px">
          <el-form-item v-if="item.type===&quot;input&quot;" :label="item.name">
            <el-input v-model="form[item.ename]" />
          </el-form-item>
        </el-form>
      </div>
      <div class="buttons">
        <el-button size="medium">重置</el-button>
        <el-button type="primary">查询</el-button>
      </div>
    </div>

    <div class="pagetable">
      <div class="scrolltable">
        <el-table
          :data="tableData2"
          style="width: 100%"
        >
          <el-table-column
            prop="nickname"
            label="昵称"
            width="100"
          />
          <el-table-column
            prop="name"
            label="名字"
            width="100"
          />
          <el-table-column
            prop="grade_code"
            label="手机号"
            width="100"
          />
          <el-table-column
            prop="cid"
            label="卡号"
            width="100"
          />
          <el-table-column
            prop="member_level"
            label="会员等级"
            width="100"
          />
          <el-table-column
            prop="buy_times"
            label="购买次数"
            width="100"
          />
          <el-table-column
            prop="average_price"
            label="客价数"
            width="100"
          />
          <el-table-column
            prop="lately_consume_tim"
            label="最近消费时间"
            width="100"
          />
          <el-table-column
            prop="lately_view_time"
            label="最近浏览时间"
            width="100"
          />
          <el-table-column
            props=""
            label="操作"
            width="100"
          />
        </el-table>
      </div>

      <!-- 分页器 -->
      <div class="block">
        <span class="demonstration">显示总数</span>
        <span>第{{ min }}-{{ max }}条</span>
        <el-pagination
          :current-page.sync="currentPage1"
          :page-size="10"
          layout="total, prev, pager, next"
          :total="100"
          @current-change="handleCurrentChange"
        />
      </div>

    </div>
  </div>

</template>

<script>
import { member } from '@/api/customer'

export default {
  name: 'DynamicTable',
  data() {
    return {
      ind: 0,
      min: 1,
      max: 10,
      tableData2: [],
      form: {
        name: '',
        phone: '',
        cname: '',
        card: '',
        grade: '',
        numbermin: '',
        numbermax: '',
        guestmin: '',
        guestmax: '',
        pay: '',
        client: ''
      },
      list: [
        {
          type: 'input',
          name: '手机号',
          ename: 'phone'
        }, {
          type: 'input',
          name: '名字',
          ename: 'name'
        }, {
          type: 'input',
          name: '昵称',
          ename: 'cname'
        }, {
          type: 'input',
          name: '会员卡号',
          ename: 'card'
        }, {
          type: 'select',
          name: '会员等级',
          ename: 'grade'
        }, {
          type: 'num',
          name: '总购买次数',
          ename: 'number'
        }, {
          type: 'num',
          name: '客价数',
          ename: 'guest'
        }, {
          type: 'date',
          name: '最近消费时间',
          ename: 'pay'
        }, {
          type: 'date',
          name: '成为有效顾客',
          ename: 'client'
        }
      ],
      listlast: [
        {
          type: 'input',
          name: '手机号',
          ename: 'phone'
        }, {
          type: 'input',
          name: '会员卡',
          ename: 'card'
        }
      ],
      currentPage1: 1
    }
  },
  mounted() {
    member({ type: 1, page: 1 }).then(res => {
      this.tableData2 = res.list
    })
  },
  methods: {
    change(num) {
      this.ind = num
    },
    handleCurrentChange(val) {
      this.min = (val - 1) * 10 + 1
      this.max = val * 10
      member({ type: 1, page: val }).then(res => {
        this.tableData2 = res.list
      })
    }
  }

}
</script>
<style lang="scss" scoped>
  .app-container>p>span{
     margin-right:20px;
  }
  .app-container .pagetable{
    width:100%;
    height:auto;
  }
  .app-container .pagetable .block{
   display:flex;
   height:40px;
   align-items: center;
   justify-content:space-between;
  }
  .app-container>p>span:hover{
    color:#3ec6b6;
  }
  .app-container .formbox{
    border-bottom:solid 1px #ccc;
  }
 .app-container>ul{
   width:100%;
   height:40px;
   display: flex;
   align-items:center;
 }
  .app-container>ul>li{
    list-style:none;
     float: left;
     line-height:40px;
     height:40px;
     margin-right:20px;
  }
  .app-container>ul>.active{
    color:#3ec6b6;
    border-bottom:1px #3ec6b6 solid;
  }
  .app-container>p>span>i{
    margin-right:3px;
  }
  .app-container .buttons{
    width:100%;
    height:60px;
    .el-button{
      float:right;
      margin-right:10px;
    }
  }
  .app-containe .scrolltable{
    width:100%;
    height:auto;
    overflow:hidden;
  }
  .app-containe .scrolltable .el-table{
    overflow:auto;
  }
  .app-container .oneform{
    width:100%;
    height:auto;
    display:flex;
    flex-wrap:wrap;
  }
  .app-container .lastform{
      width:100%;
    height:auto;
    display:flex;
    flex-wrap:wrap;
  }
  .app-container .lastform .el-form{
     width:33%;
  }
  .app-container .oneform .el-form{
      width:33%;
      display:flex;
      align-items:center;
      .el-form-item__label{
        text-align:center;
      }
      .block{
        display: flex;
        width:100%;
        span{
          width:100px;
          line-height:40px;
        }
        .el-date-editor{
          flex:1;
        }
      }
  }
  @media all and (max-width:900px){
      .app-container .oneform .el-form{
      width:50%;
     }
     .app-container .last .el-form{
       width:50%;
     }
  }
</style>

