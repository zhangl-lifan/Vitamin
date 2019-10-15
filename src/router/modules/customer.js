/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-14 14:35:15
 * @LastEditTime: 2019-10-14 19:38:57
 * @LastEditors: Please set LastEditors
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
    icon: 'table'
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
