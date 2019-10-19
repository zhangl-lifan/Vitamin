/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-14 11:00:00
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-18 19:28:34
 */
import {
  login,
  logout,
  getInfo,
  getUserInfo,
  getAdministratorList,
  getStoreList,
  getRoleDetail,
  getInfoData,
  patience
} from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

function idCheck(userInfo, selfInfo) {
  let str = ''
  if (userInfo.unique_id === selfInfo.user_id) {
    str = ''
  } else if (selfInfo.role === '超级管理员') {
    str = ''
  } else {
    str = '账号设置'
  }
  return str
}
function check(userInfo, selfInfo) {
  let str = ''
  if (userInfo.unique_id === selfInfo.user_id) {
    str = '操作历史'
  } else if (selfInfo.role === '超级管理员') {
    str = ''
  } else {
    str = '操作历史'
  }
  return str
}
function backObj(userInfo, selfInfo, fullList) {
  // console.log(userInfo, selfInfo, fullList);
  console.log('sfasfasf', userInfo.unique_id, selfInfo.user_id)
  const arr = [
    {
      name: '基本信息',
      id: 656,
      data: {
        ...selfInfo
      }
    },
    {
      name: idCheck(userInfo, selfInfo),
      id: 66
    },
    {
      name: check(userInfo, selfInfo),
      id: 52,
      data: fullList
    }
  ]
  return arr
}
const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  userInfo: {},
  allObj: {},
  tabData: [],
  pageMes: {},
  inviteData: [],
  roledata: {},
  selfInfo: {},
  fullData: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_USER: (state, payload) => {
    state.userInfo = payload
  },
  SET_DATA: (state, payload) => {
    state.allObj = payload
  },
  SET_TABDATA: (state, { data, message }) => {
    state.tabData = data
    state.pageMes = message
  },
  Set_INIVEDATA: (state, payload) => {
    state.inviteData = payload
  },
  SET_ROLEDATA: (state, payload) => {
    state.roledata = payload
  },
  SET_USERINFO: (state, payload) => {
    state.selfInfo = payload
  },
  SET_FULLDATA: (state, payload) => {
    state.fullData = backObj(state.userInfo, state.selfInfo.data, payload.data)
    console.log(state.fullData)
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  async getUserData({ commit }) {
    const result = await getUserInfo({
      'x-org-id': getToken('org_id'),
      'x-org-type': getToken('org_type'),
      'x-user-id': getToken('userId'),
      'Authorization': getToken('Authorization')
    })
    commit('SET_USER', result.data)
  },
  async getAdministrators({ commit }, params) {
    const result = await getAdministratorList(params)
    commit('SET_TABDATA', { data: result.data.list, message: result.data.pagination })
  },
  async getStoreS({ commit }, params) {
    const result = await getStoreList(params)
    commit('SET_DATA', { list: result.data })
  },
  async getFutureData({ commit }, params) {
    const result = await getAdministratorList(params)
    commit('Set_INIVEDATA', { data: result.data })
  },
  async getRoleList({ commit }, params) {
    const result = await getRoleDetail(params)
    commit('SET_ROLEDATA', { data: result.data })
  },
  async getUserInfo({ commit }, params) {
    const result = await getInfoData(params)
    commit('SET_USERINFO', { data: result.data })
  },
  async patienceList({ commit }, params) {
    const result = await patience(params)
    commit('SET_FULLDATA', { data: result.data.list })
  },
  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response
        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const { roles, name, avatar, introduction } = data

        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }

        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()

        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        dispatch('tagsView/delAllViews', null, { root: true })

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  changeRoles({ commit, dispatch }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const { roles } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      // reset visited views and cached views
      dispatch('tagsView/delAllViews', null, { root: true })

      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
