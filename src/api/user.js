/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-14 11:00:00
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-17 20:24:34
 */
import request from '@/utils/request'
import qs from 'qs'

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

export function getAdministratorList(params) {
  return request({
    url: '/user/list',
    method: 'post',
    baseURL: '/api',
    data: qs.stringify(params)
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

export function getRoleDetail(params) {
  return request({
    url: '/role/role-desc-list',
    method: 'post',
    baseURL: '/api',
    data: qs.stringify(params)
  })
}
