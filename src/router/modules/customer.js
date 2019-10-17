/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-14 14:15:03
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-17 09:19:24
 */
/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const CustmerRouter = {
  path: '/custmer',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'custmer',
  meta: {
    title: '顾客',
    icon: 'client'
  },
  children: [{
    path: 'cumerMeage',
    component: () =>
      import('@/views/table/dynamic-table/index'),
    name: 'cumerMeage',
    meta: { title: '顾客管理' }
  },
  {
    path: 'inventory',
    component: null,
    name: 'Inventory'
  }
  ]
}
export default CustmerRouter
