/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-14 11:00:00
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-14 11:00:00
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import StoreRouter from './modules/store'
import PageRouter from './modules/page'
import OrderRouter from './modules/order'
import ProductRouter from './modules/product'
import CustmerRouter from './modules/customer'
import VipRouter from './modules/vip'
import Yingxiao from './modules/yingxiao'
import Team from './modules/team'
import SetPage from './modules/set'

export const constantRoutes = [{
  path: '/redirect',
  component: Layout,
  hidden: true,
  children: [{
    path: '/redirect/:path*',
    component: () =>
                import('@/views/redirect/index')
  }]
},
{
  path: '/login',
  component: () =>
            import('@/views/login/index'),
  hidden: true
},
// {
//   path: '/auth-redirect',
//   component: () => import('@/views/login/auth-redirect'),
//   hidden: true
// },
{
  path: '/404',
  component: () =>
            import('@/views/error-page/404'),
  hidden: true
},
{
  path: '/401',
  component: () =>
            import('@/views/error-page/401'),
  hidden: true
},
{
  path: '/',
  component: Layout,
  redirect: '/home',
  children: [{
    path: 'home',
    component: () =>
                import('@/views/dashboard/index'),
    name: 'Home',
    meta: { title: '首页', icon: 'dashboard', affix: true }
  }]
},
{
  path: '/general',
  component: Layout,
  children: [{
    path: 'general',
    component: () =>
                import('@/views/documentation/index'),
    name: 'General',
    meta: { title: '概括', icon: 'documentation', affix: true }
  }]
},

{
  path: '/profile',
  component: Layout,
  redirect: '/profile/index',
  hidden: true,
  children: [{
    path: 'index',
    component: () =>
                import('@/views/profile/index'),
    name: 'Profile',
    meta: { title: 'Profile', icon: 'user', noCache: true }
  }]
}
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [

  StoreRouter,
  PageRouter,
  OrderRouter,
  ProductRouter,
  CustmerRouter,
  VipRouter,
  Yingxiao,
  Team,
  SetPage,
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

/** *
 *
 *   {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/index.vue'),
    // redirect:'/main/home',
    children: [
      {
        path: '/main/home',
        name: 'home',
        component: () => import('@/views/main/home/index.vue'),
        alias: '首页'
      },
      {
        path: '/main/general',
        name: 'general',
        component: () => import('@/views/main/general/index.vue'),
        alias: '概况'
      },
      {
        path: '/main/store',
        name: 'store',
        component: () => import('@/views/main/store/index.vue'),
        alias: '店铺'
      },
      {
        path: '/main/page',
        name: 'page',
        component: () => import('@/views/main/page/index.vue'),
        alias: '页面'
      },
      {
        path: '/main/order',
        name: 'order',
        component: () => import('@/views/main/order/index.vue'),
        alias: '订单'
      },
      {
        path: '/main/commodity',
        name: 'commodity',
        component: () => import('@/views/main/commodity/index.vue'),
        alias: '商品'
      },
      {
        path: '/main/customer',
        name: 'customer',
        component: () => import('@/views/main/customer/index.vue'),
        alias: '顾客'
      },
      {
        path: '/main/vip',
        name: 'vip',
        component: () => import('@/views/main/vip/index.vue'),
        alias: '会员'
      },
      {
        path: '/main/market',
        name: 'market',
        component: () => import('@/views/main/market/index.vue'),
        alias: '营销'
      },
      {
        path: '/main/temp',
        name: 'temp',
        component: () => import('@/views/main/temp/index.vue'),
        alias: '团队'
      },
      {
        path: '/main/setpage',
        name: 'setpage',
        component: () => import('@/views/main/setpage/index.vue'),
        alias: '设置'
      }
    ]
  }
]

 *
 *
 *
 * ** */
