<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 18:53:20
 * @LastEditTime: 2019-10-17 11:55:30
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="clientdetail">
    <div class="header"><img :src="user.avatar" alt=""></div>
    <div class="detailbox">
      <div class="detailleft">
        <div class="detailtop">
          <p>交易信息</p>
          <ul class="message">
            <li>累计消费金额</li>
            <li>累计消费次数</li>
            <li>客单价</li>
            <li>累计消费金额</li>
            <li>累计退款单数</li>
          </ul>
          <ul class="message">

            <li>{{ buynumber.average_price }}</li>
            <li>{{ buynumber.buy_times }}</li>
            <li>{{ buynumber.total_consume_price }}</li>
            <li>{{ buynumber.total_refund_price }}</li>
            <li>{{ buynumber.total_refund_times }}</li>
          </ul>
        </div>
        <div class="detailbottom">
          <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort="{prop: 'date', order: 'descending'}"
          >
            <el-table-column
              prop="date"
              label="订单号"
              width="180"
            />
            <el-table-column
              prop="name"
              label="下单时间"
              sortable
              width="180"
            />
            <el-table-column
              prop="address"
              label="订单状态"
            />
            <el-table-column
              prop="address"
              label="实付金额"
            />
            <el-table-column
              prop="address"
              label="操作"
            />
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000"
          />

        </div>
      </div>
      <div class="detailright">
        <div class="detail_right_top">
          <p>基本信息</p>
          <div>姓名:{{ user.name }}</div>
          <div>手机号:{{ user.telephone }}</div>
          <div>微信昵称:{{ user.wechat_name }}</div>
          <div>最近浏览:{{ user.register_timestamp }}</div>
          <div>成为顾客:{{ user.lately_view_time }}</div>
        </div>
        <div class="detail_right_center">
          <p>会员信息</p>
        </div>
        <div class="detail_right_bottom">
          <p>收货地址</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { clientdetail } from '@/api/customer'
export default {

  name: 'Detail',
  data() {
    return (
      {
        tableData: [],
        user: {},
        buynumber: {}
      }
    )
  },
  mounted() {
    const id = this.$route.params.id

    clientdetail({ id }).then(res => {
      this.user = res.base_info
      this.buynumber = res.trade_info
    })
  }
}
</script>
<style lang="scss" scoped>

   .clientdetail .header{
       width:1100px;
       margin:20px auto;
       background:rgba(0,0,0,.1);
       height:80px;
       display:flex;
       align-items: center;
   }
   .clientdetail .header img{
       display:block;
       width:50px;
       height:50px;
       border-radius:50%;
       margin-left:20px;
   }
   .clientdetail .detailbox{
       width:1100px;
       margin:0 auto;
       height:auto;
       display: flex;
   }
   .clientdetail .detailbox .detailleft{
       width:800px;
       height:auto;
   }
   .clientdetail .detailbox .detailleft .detailtop{
       width:100%;
       height:120px;
       margin:10px 0;
       background:rgba(0,0,0,.1);
       p{
            height:30px;
            line-height:30px;
       }
       .message{
           width:100%;
           height:30px;
           list-style:none;
           display: flex;
           align-items:center;
           li{
               flex:1;
           }
       }

   }
   .clientdetail .detailbox .detailleft .detailbottom{
       width:100%;
       height:auto;
       margin:10px auto;

   }
   .clientdetail .detailbox .detailright{
       width: 300px;
        margin-left:20px;
   }
    .clientdetail .detailbox .detailright .detail_right_top{
        width:300px;
        background: rgba(0,0,0,.1);
        p{
            width:100%;
            height:40px;
            line-height:40px;
            border-bottom:solid 1px #000;
        }
        div{
             height:40px;
            line-height:40px;
        }
    }
    .clientdetail .detailbox .detailright .detail_right_center{
        width:300px;
        margin:30px auto;
        background: rgba(0,0,0,.1);
        p{
            width:100%;
            height:40px;
            line-height:40px;
            border-bottom:solid 1px #000;
        }
    }
     .clientdetail .detailbox .detailright .detail_right_bottom{
        width:300px;
        background: rgba(0,0,0,.1);
        p{
            width:100%;
            height:40px;
            line-height:40px;
            border-bottom:solid 1px #000;
        }
    }
</style>
