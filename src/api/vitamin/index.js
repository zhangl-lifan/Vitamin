import request from '@/utils/request.js'
import qs from 'qs'

export function pageList(params) {
  const data = qs.stringify(params)
  return request({
    url: '/page-manage/list',
    methods: 'post',
    baseURL: '/api',
    data: data
  })
}

// https://betapartnerapi.weitaming.com/page-manage/del
export function deleteList(params) {
  const data = qs.stringify(params)
  console.log(data, 'params-----')
  return request({
    url: '/page-manage/del',
    methods: 'post',
    baseURL: '/api',
    data: data
  })
}

// /page-manage/component-list
export function FrameList() {
  return request({
    url: '/page-manage/component-list',
    methods: 'post',
    baseURL: '/api'
    // data: data
  })
}
