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

const PageRouter = {
  path: '/page',
  component: Layout,
  redirect: '/page/pageList',
  name: 'Page',
  meta: {
    title: '页面',
    icon: 'page'
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
