/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const PageRouter = {
  path: '/page',
  component: Layout,
  redirect: '/page/pageList',
  name: 'Page',
  meta: {
    title: '页面',
    icon: 'table'
  },
  children: [{
    path: 'pageList',
    component: () =>
                import('@/views/page/index.vue'),
    name: 'pageList',
    meta: { title: '页面管理' }
  },
  {
    path: 'drag-table',
    component: null

  }
  ]
}
export default PageRouter
