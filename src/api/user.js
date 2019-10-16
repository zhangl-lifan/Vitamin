/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-14 11:00:00
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-16 10:01:06
 */
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function getUserInfo(params) {
  return request({
    url: '/user/user-info',
    method: 'get',
    baseURL: '/api'
  }, {
    headers: {
      ...params
    }
  })
}

export function getAdministratorList() {
  return request({
    url: '/user/list',
    method: 'post',
    baseURL: '/api',
    params: {
      type: '1',
      page: '1',
      status: '0,1'
    }
  })
}
export function getStoreList(params) {
  return request({
    url: '/user/list-sreach',
    method: 'post',
    baseURL: '/api',
    params
  })
}
