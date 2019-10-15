/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-14 11:00:00
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-14 11:00:00
 */
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken(params = TokenKey) {
  return Cookies.get(params)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
