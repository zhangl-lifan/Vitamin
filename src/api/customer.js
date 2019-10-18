/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 14:19:16
 * @LastEditTime: 2019-10-18 11:46:55
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
  data = qs.stringify(data)
  return request({
    url: '/member/search-set',
    method: 'post',
    baseURL: '/api',
    data
  })
}

export function clientdetail(data) {
  data = qs.stringify(data)
  return request({
    url: '/member/member-info',
    method: 'post',
    baseURL: '/api',
    data
  })
}

