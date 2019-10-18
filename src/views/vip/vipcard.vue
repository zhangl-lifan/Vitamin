<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-17 20:24:00
 * @LastEditTime: 2019-10-18 15:10:04
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="cipcard">
    <div class="vipleft">
      <!-- <p>会员卡图案</p>
          <p>会员卡图案</p>
          <p>会员卡图案</p>
          <p>会员卡图案</p>
          <p>会员卡图案</p> -->
      <p v-for="(item,index) in listarr" :key="index" :class="ind===index?'active':''" @click="()=>{changeind(index)}">{{ item }}</p>
    </div>
    <div class="vipright">
      <div v-show="ind===0">
        <h4>会员卡图案</h4>
        <p class="radio">+</p>
        <el-table
          :data="cartype"
          style="width: 100%"
        >
          <el-table-column
            label="会员等级编码"
            width="180"
          >
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.level }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="会员等级名称"
            width="180"
          >
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.title }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="卡片图案"
            width="180"
          >
            <template slot-scope="scope">
              <img :src="scope.row.img" alt="" style="width:100px;height:61px">
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button>
              <el-button
                v-popover:popover5
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button>
              <el-popover
                ref="popover5"
                v-model="scope.row.flag"
                placement="top"
                width="160"
              >
                <p>这是一段内容这是一段内容确定删除吗？</p>
                <div style="text-align: right; margin: 0">
                  <el-button size="mini" type="text" @click="hide(scope.$index)">取消</el-button>
                  <el-button type="primary" size="mini" @click="hide(scope.$index)">确定</el-button>
                </div>
              </el-popover>
            </template>

          </el-table-column>
        </el-table>
      </div>

      <!-- 渲染第二个页面 -->
      <div v-show="ind===1" class="second">
        <h4>注册信息</h4>
        <p>姓名:</p>
        <p>性别:</p>
        <p>生日:</p>
        <p>地区:</p>
        <p>选择默认地区：</p>
        <span>修改注册信息</span>
      </div>
    </div>
  </div>
</template>
<script>
import { cardtype, getcity } from '@/api/vip'
export default {
  data() {
    return {
      ind: 0,
      listarr: [
        '会员卡图案', '注册信息', '保存推荐提示语', '使用条款', '商场门店'
      ],
      cartype: [],
      address: [],
      registerForm: []
    }
  },
  mounted() {
    cardtype().then(res => {
      res.data.list.map(item => {
        item.flag = false
      })
      this.cartype = res.data.list

      getcity().then(res => {
        console.log(res)
        this.registerForm = res.data.registerForm
        this.defaultArea = res.data.defaultArea
      })
    })
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    hide(ind) {
      console.log('hide', ind)
    },
    handleDelete(index, row) {
      this.cartype[index].flag = true
    },
    changeind(ind) {
      this.ind = ind
    }
  }

}
</script>
<style lang="scss" scoped>
  .cipcard{
    width:100%;
    height:auto;
    display: flex;
  }
  .cipcard .vipleft{
    width:200px;
    height:1000px;
    border-right:solid 1px #ccc;
  }
  .cipcard .vipleft p{
    width:200px;
    height:40px;
    line-height:40px;
    text-align: center;
    position: relative;
    &:hover{
       color:rgb(62, 198, 182);
    }
  }
  .cipcard .vipleft .active{
    width:198px;
    color:rgb(62, 198, 182);
    border-right:solid 2px rgb(62, 198, 182);
  }
  .cipcard .vipright{
         flex:1;
         margin-left:30px;
         h4{
           padding-left:30px;
           line-height:40px;
         }
         &>div .radio{
           width:50px;
           height:50px;
           border-radius:50%;
           text-align: center;
           line-height:40px;
           color:white;
           font-size:40px;
           background: rgb(62, 198, 182);
           margin:10px 30px;
         }
         .second{
           span{
             padding:10px 30px;
             color:rgb(62, 198, 182);
           }
         }
  }
</style>
