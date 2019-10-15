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

const OrderRouter = {
  path: '/order',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Page',
  meta: {
    title: '订单',
    icon: 'order'
  },
  children: [{
    path: 'orderList',
    component: () =>
                import('@/views/table/dynamic-table/index'),
    name: 'orderList',
    meta: { title: '订单管理' }
  },
  {
    path: 'storeOrder',
    component: () =>
                import('@/views/table/drag-table'),
    name: 'storeOrder',
    meta: { title: '店铺订单' }
  },
  {
    path: 'refund',
    component: () =>
                import('@/views/table/dynamic-table/index'),
    name: 'refund',
    meta: { title: '退款管理' }
  },
  {
    path: 'refundFull',
    component: () =>
                import('@/views/table/drag-table'),
    name: 'refundFull',
    meta: { title: '整单退' }
  },
  {
    path: 'invoice',
    component: () =>
                import('@/views/table/drag-table'),
    name: 'invoice',
    meta: { title: '发票管理' }
  },
  {
    path: 'examine',
    component: () =>
                import('@/views/table/dynamic-table/index'),
    name: 'examine',
    meta: { title: '退款审核' }
  },
  {
    path: 'drawback',
    component: () =>
                import('@/views/table/drag-table'),
    name: 'drawback',
    meta: { title: '财务退款' }
  }
  ]
}
export default OrderRouter
