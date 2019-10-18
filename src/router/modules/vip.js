/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 14:53:05
 * @LastEditTime: 2019-10-17 20:27:52
 * @LastEditors: Please set LastEditors
 */
/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const VipRouter = {
  path: '/vip',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'vip',
  meta: {
    title: '会员',
    icon: 'table'
  },
  children: [{
    path: 'vip-cord',
    component: () =>
                import('@/views/vip/vipcard'),
    name: 'vip-cord',
    meta: { title: '会员卡' }
  },
  {
    path: 'cord-active',
    component: () =>
                import('@/views/vip/bindvipcard'),
    name: 'cord-active',
    meta: { title: '绑定会员卡设置' }
  },
  {
    path: 'cord-uncode',
    component: () =>
                import('@/views/vip/QR_code'),
    name: 'cord-uncode',
    meta: { title: '自拓二维码管理' }
  }
  ]
}
export default VipRouter
