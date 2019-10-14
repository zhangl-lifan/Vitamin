/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const VipRouter = {
  path: '/yingxiao',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'yingxiao',
  meta: {
    title: '营销',
    icon: 'table'
  },
  children: [{
    path: 'marking-favourable',
    component: () =>
                import('@/views/table/dynamic-table/index'),
    name: 'marking-favourable',
    meta: { title: '优惠券' }
  },
  {
    path: 'marking-once',
    component: () =>
                import('@/views/table/drag-table'),
    name: 'marking-once',
    meta: { title: '一口价' }
  },
  {
    path: 'marking-movingAbout',
    component: () =>
                import('@/views/table/drag-table'),
    name: 'marking-movingAbout',
    meta: { title: '满减活动' }
  },
  {
    path: 'marking-oneAbout',
    component: () =>
                import('@/views/table/drag-table'),
    name: 'marking-oneAbout',
    meta: { title: '限购活动' }
  },
  {
    path: 'marking-store',
    component: () =>
                import('@/views/table/drag-table'),
    name: 'marking-store',
    meta: { title: '店内促销' }
  }
  ]
}
export default VipRouter
