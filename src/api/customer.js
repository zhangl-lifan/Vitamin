/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 14:19:16
 * @LastEditTime: 2019-10-17 11:29:59
 * @LastEditors: Please set LastEditors
 */
import request from '@/utils/request'
import qs from 'qs'
export function member(data) {
  data = qs.stringify(data)
  return request({
    url: '/member/member-list',
    method: 'post',
    baseURL: '/api',
    data
  })
}

export function searchset(data) {
  // console.log('data',data);
  data = qs.stringify(data)
  return request({
    url: '/member/search-set',
    method: 'post',
    baseURL: '/api',
    data
  })
}

export function clientdetail(data) {
  // console.log('data',data);
  data = qs.stringify(data)
  return request({
    url: '/member/member-info',
    method: 'post',
    baseURL: '/api',
    data
  })
}

