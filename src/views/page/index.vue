<template>
  <div class="page-wrap">
    <div class="card-group">
      <h3>页面</h3>
    </div>
    <div class="card-contain">
      <div class="btn-add">+</div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="名称" width="500">
          <template slot-scope="scope">
            <span>{{ scope.row.page_title }}</span>
          </template>
        </el-table-column>
        <el-table-column label="URL" width="200">
          <template slot-scope="scope">
            <span>{{ scope.row.page_url }}</span>
          </template>
        </el-table-column>

        <el-table-column label="状态" width="240">
          <template slot-scope="scope">
            <span v-if="scope.row.status">线上</span>
            <span v-else style class="text">草稿</span>
          </template>
        </el-table-column>
        <el-table-column label="发布时间" width="260">
          <template slot-scope="scope">
            <span>{{ scope.row.publish_time }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="247">
          <template slot-scope="scope">
            <el-button type="text" size="min" @click="handleClick(scope.row)">查看</el-button>
            <el-button type="text" size="min">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination background layout="prev, pager, next" :total="total" />
        <span class="demonstration">显示总数</span>
      </div>
    </div>
  </div>
</template>
<script>
import { pageList } from '@/api/vitamin/index.js'

export default {
  data() {
    return {
      tableData: [],
      total: 0,
      page: 1,
      page_size: 10
    }
  },
  created() {
    pageList({ page: this.page, page_size: this.page_size }).then(res => {
      // console.log(res.data.list, res.data.total);
      this.total = res.data.total
      this.tableData = res.data.list.map(item => {
        return {
          key: item.id,
          created_at: item.created_at,
          created_by: item.created_by,
          group_id: item.group_id,
          is_deletable: item.is_deletable,
          is_home: item.is_home,
          linked_id: item.linked_id,
          mall_id: item.mall_id,
          page_background: item.page_background,
          page_title: item.page_title,
          mall_logo: item.mall_logo,
          page_url: item.page_url,
          pid: item.pid,
          publish_time: item.publish_time,
          status: item.status,
          updated_at: item.updated_at,
          updated_by: item.updated_by,
          url: item.url
        }
      })
    })
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>
<style scoped lang="scss">
.page-wrap {
  width: 100%;
  height: 100%;
}

.page-wrap .card-group {
  padding: 24px;
  background: #fff;
  overflow: hidden;
  border-bottom: 1px solid #e8e8e8;
  font-weight: normal;
}

.page-wrap .card-group h3 {
  font-weight: normal;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

.card-contain {
  width: 100%;
  overflow: hidden;
  margin-top: 24px;
  padding: 24px;
  background: #fff;

  .btn-add {
    width: 34px;
    height: 34px;
    background: #3ec6b6;
    border-radius: 50%;
    color: #fff;
    font-size: 30px;
    margin-bottom: 24px;
    text-align: center;
    line-height: 30px;
    font-weight: 200;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.text {
  display: inline-block;
  color: #eb2f96;
  background: #fff0f6;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid #ffadd2;
  border-radius: 4px;
  font-size: 12px;
}

.block {
  text-align: right;
  margin-top: 20px;
  display:flex;
  align-items:center;
  justify-content:flex-end;

  .demonstration{
    float: right;

  }

  .el-pagination{
    float: right;
  }
}
</style>
