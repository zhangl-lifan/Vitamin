/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const StoreRouter = {
  path: '/store',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Store',
  meta: {
    title: '店铺',
    icon: 'table'
  },
  children: [{
    path: 'StoreTable',
    component: () =>
                import('@/views/table/dynamic-table/index'),
    name: 'DynamicTable',
    meta: { title: '店铺管理' }
  },
  {
    path: 'NavTable',
    component: () =>
                import('@/views/table/drag-table'),
    name: 'DragTable',
    meta: { title: '专柜导航管理' }
  }
  ]
}
export default StoreRouter
