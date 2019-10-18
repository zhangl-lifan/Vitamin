/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 10:44:45
 * @LastEditTime: 2019-10-18 11:48:09
 * @LastEditors: Please set LastEditors
 */
import request from '@/utils/request'
import qs from 'qs'
export function cardtype() {
  return request({
    url: '/membership-setting/card-bg-list',
    method: 'post',
    baseURL: '/api'
  })
}
export function getcity(data) {
  data = qs.stringify(data)
  return request({
    url: '/membership-setting/register-info',
    method: 'post',
    baseURL: '/api',
    data
  })
}
