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
  path: '/team',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'team',
  meta: {
    title: '团队',
    icon: 'team'
  },
  children: [{
    path: 'team-working',
    component: () =>
                import('@/views/table/dynamic-table/index'),
    name: 'team-working',
    meta: { title: '员工管理' }
  },
  {
    path: 'team-shoping',
    component: () =>
                import('@/views/table/drag-table'),
    name: 'team-shoping',
    meta: { title: '导购管理' }
  }
  ]
}
export default VipRouter
