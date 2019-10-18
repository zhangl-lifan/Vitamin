<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-14 14:35:15
 * @LastEditTime: 2019-10-16 14:52:41
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
              <!-- <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" /> -->

              <el-option v-for="(i,items) in searchlist" :key="items" :label="searchlist[items]" :value="items" />
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
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </div>

        </el-form>
      </div>

      <div v-show="ind===1" class="lastform">
        <el-form v-for="(item,index) in listlast" ref="form" :key="index" :model="form" label-width="80px">
          <el-form-item v-if="item.type===&quot;input&quot;" :label="item.name">
            <el-input v-model="form[item.ename]" />
          </el-form-item>
        </el-form>
      </div>
      <div class="buttons">
        <el-button size="medium" @click="()=>clear()">重置</el-button>
        <el-button type="primary" @click="()=>search()">查询</el-button>
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
            fixed="right"
            label="操作"
            width="100"
          >
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>

            </template>
          </el-table-column>
          <!-- <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>

      </template> -->
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
          :total="totalCount"
          @current-change="handleCurrentChange"
        />
      </div>

    </div>
  </div>

</template>

<script>
import { member, searchset } from '@/api/customer'

export default {
  name: 'DynamicTable',
  data() {
    return {
      ind: 0,
      min: 0,
      max: 0,
      tableData2: [],
      searchlist: {},
      form: {
        name: '',
        mobile: '',
        nickname: '',
        cid: '',
        grade_code: '',
        buy_times_min: '',
        buy_times_max: '',
        price_min: '',
        price_max: '',
        lately_consume_time_start: '',
        lately_consume_time_end: '',
        first_consume_time_start: '',
        first_consume_time_end: ''
      },
      list: [
        {
          type: 'input',
          name: '手机号',
          ename: 'mobile'
        }, {
          type: 'input',
          name: '名字',
          ename: 'name'
        }, {
          type: 'input',
          name: '昵称',
          ename: 'nickname'
        }, {
          type: 'input',
          name: '会员卡号',
          ename: 'cid'
        }, {
          type: 'select',
          name: '会员等级',
          ename: 'grade_code'
        }, {
          type: 'num',
          name: '总购买次数',
          ename: 'buy_times_'
        }, {
          type: 'num',
          name: '客价数',
          ename: 'price_'
        }, {
          type: 'date',
          name: '最近消费时间',
          ename: 'lately_consume_time_'
        }, {
          type: 'date',
          name: '成为有效顾客',
          ename: 'first_consume_time_'
        }
      ],
      listlast: [
        {
          type: 'input',
          name: '手机号',
          ename: 'mobile'
        }, {
          type: 'input',
          name: '会员卡',
          ename: 'cid'
        }
      ],
      currentPage1: 1,
      totalCount: 0
    }
  },
  mounted() {
    member({ type: 1, page: 1 }).then(res => {
      console.log(res, 'res-----')
      this.tableData2 = res.data.list
      this.totalCount = res.data.pagination.totalCount
      this.min = 1
      this.max = 10
    })
    searchset().then(res => {
      this.searchlist = res.grade_level
    })
  },
  methods: {
    change(num) {
      this.ind = num
    },
    handleClick(row) {
      console.log('row', row)
    },
    handleCurrentChange(val) {
      this.min = (val - 1) * 10 + 1
      this.max = val * 10
      const arr = []
      for (const i in this.form) {
        if (this.form[i]) {
          arr.push(i)
        }
      }
      if (arr.length === 0) {
        member({ type: 1, page: val }).then(res => {
          this.tableData2 = res.data.list
          this.totalCount = res.data.pagination.totalCount
        })
      } else {
        const obj = { type: this.ind + 1, page: val }
        arr.map(item => {
          obj[item] = this.form[item]
        })
        for (const i in obj) {
          if (typeof (obj[i]) === 'object') {
            if (obj[i][0].getTime() > obj[i][1].getTime()) {
              obj[i + 'max'] = new Date(obj[i][0].getTime()).toLocaleDateString()
              obj[i + 'min'] = new Date(obj[i][1].getTime()).toLocaleDateString()
            } else {
              obj[i + 'max'] = new Date(obj[i][1].getTime()).toLocaleDateString()
              obj[i + 'min'] = new Date(obj[i][0].getTime()).toLocaleDateString()
            }
          }
        }
        member(obj).then(res => {
          console.log(res, 'res--------')
          this.tableData2 = res.list
          this.totalCount = res.pagination.totalCount
          if (this.totalCount === 0) {
            this.min = 0
            this.max = 0
          }
        })
      }
    },
    clear() {
      for (const i in this.form) {
        this.form[i] = ''
      }
    },
    search() {
      const arr = []
      for (const i in this.form) {
        if (this.form[i]) {
          arr.push(i)
        }
      }
      if (arr.length === 0) {
        member({ type: this.ind + 1, page: 1 }).then(res => {
          this.tableData2 = res.data.list
          this.totalCount = res.data.pagination.totalCount
        })
        return
      }
      const obj = { type: 1, page: 1 }
      arr.map(item => {
        obj[item] = this.form[item]
      })
      for (const i in obj) {
        if (typeof (obj[i]) === 'object') {
          if (obj[i][0].getTime() > obj[i][1].getTime()) {
            obj[i + 'max'] = new Date(obj[i][0].getTime()).toLocaleDateString()
            obj[i + 'min'] = new Date(obj[i][1].getTime()).toLocaleDateString()
          } else {
            obj[i + 'max'] = new Date(obj[i][1].getTime()).toLocaleDateString()
            obj[i + 'min'] = new Date(obj[i][0].getTime()).toLocaleDateString()
          }
        }
      }
      member(obj).then(res => {
        this.tableData2 = res.data.list
        this.totalCount = res.data.pagination.totalCount
        this.min = this.totalCount < 10 ? 1 : this.min
        this.max = this.totalCount < 10 ? 10 : this.max
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

