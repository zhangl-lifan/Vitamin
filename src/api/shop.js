import request from '@/utils/request'
const floorListData = require('@/data/floorList.json');

export function floorList() {
    return request({
      url: '/shop/floorListData',
      method: 'get'
    })
}