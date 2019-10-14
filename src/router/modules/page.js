/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const PageRouter = {
  path: '/page',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Page',
  meta: {
    title: '页面',
    icon: 'table'
  },
  children: [{
    path: 'pageList',
    component: () =>
                import('@/views/table/dynamic-table/index'),
    name: 'DynamicTable',
    meta: { title: '页面管理' }
  },
  {
    path: 'drag-table',
    component: () =>
                import('@/views/table/drag-table'),
    name: 'DragTable',
    meta: { title: '专柜导航管理' }
  }
  ]
}
export default PageRouter
