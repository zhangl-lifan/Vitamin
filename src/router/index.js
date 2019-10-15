/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-09 10:49:46
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-14 19:09:33
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
{
  path: '/auth-redirect',
  component: () =>
            import('@/views/login/auth-redirect'),
  hidden: true
},
{
  path: '/404',
  component: () =>
            import('@/views/error-page/404'),
  hidden: true
},
// {
//  path: '/404',
//     component: () => import('@/views/errorPage/404'),
//     hidden: true
// },
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
    meta: { title: '首页', icon: 'home', affix: true }
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
}, {
  path: '/cardAdd',
  component: Layout,
  redirect: '/cardAdd/Add',
  children: [{
    path: 'Add',
    component: () =>
                import('@/views/cardAdd/index')
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
