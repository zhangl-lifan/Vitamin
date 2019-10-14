/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const VipRouter = {
  path: '/market',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'market',
  meta: {
    title: '会员',
    icon: 'table'
  },
  children: [{
    path: 'vip-cord',
    component: () =>
                import('@/views/table/dynamic-table/index'),
    name: 'DynamicTable',
    meta: { title: '会员卡' }
  },
  {
    path: 'cord-active',
    component: () =>
                import('@/views/table/drag-table'),
    name: 'cord-active',
    meta: { title: '绑定会员卡设置' }
  },
  {
    path: 'cord-uncode',
    component: () =>
                import('@/views/table/drag-table'),
    name: 'cord-uncode',
    meta: { title: '自拓二维码管理' }
  }
  ]
}
export default VipRouter
