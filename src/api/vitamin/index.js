import request from '@/utils/request.js'
import qs from 'qs'

export function pageList(params) {
  const data = qs.stringify(params)
  // request.post('/page-manage/list', data).then(res => {
  //     console.log('res------', res)
  // })
  return request({
    url: '/page-manage/list',
    methods: 'post',
    baseURL: '/api',
    data: data
  })
}
