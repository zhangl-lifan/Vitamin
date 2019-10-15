/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 14:19:16
 * @LastEditTime: 2019-10-15 14:42:56
 * @LastEditors: Please set LastEditors
 */
import request from '@/utils/request'
import qs from 'qs'
export function member(data) {
// console.log('data',data);
  data = qs.stringify(data)
  return request({
    url: '/member/member-list',
    method: 'post',
    baseURL: '/api',
    data
  })
}
