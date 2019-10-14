/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-14 14:15:03
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-14 14:15:03
 */
/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const VipRouter = {
  path: '/set',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'set',
  meta: {
    title: '设置',
    icon: 'set'
  },
  children: [{
    path: 'store-set',
    component: () =>
                import('@/views/table/dynamic-table/index'),
    name: 'DynamicTable',
    meta: { title: '店铺设置' }
  },
  {
    path: 'dingdan-set',
    component: () =>
                import('@/views/table/drag-table'),
    name: 'dingdan-set',
    meta: { title: '订单设置' }
  },
  {
    path: 'shoping-set',
    component: () =>
                import('@/views/table/drag-table'),
    name: 'shoping-set',
    meta: { title: '商品设置' }
  },
  {
    path: 'login-set',
    component: () =>
                import('@/views/table/drag-table'),
    name: 'login-set',
    meta: { title: '登陆设置' }
  },
  {
    path: 'interstore-set',
    component: () =>
                import('@/views/table/drag-table'),
    name: 'interstore-set',
    meta: { title: '网店设置' }
  },
  {
    path: 'services-set',
    component: () =>
                import('@/views/table/drag-table'),
    name: 'services-set',
    meta: { title: '服务设置' }
  },
  {
    path: 'system-set',
    component: () =>
                import('@/views/table/drag-table'),
    name: 'system-set',
    meta: { title: '系统设置' }
  }
  ]
}
export default VipRouter
