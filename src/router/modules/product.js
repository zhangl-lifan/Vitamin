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

const ProductRouter = {
  path: '/commodity',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'commodity',
  meta: {
    title: '商品',
    icon: 'product'
  },
  children: [{
    path: 'goods',
    component: () =>
                import('@/views/table/dynamic-table/index'),
    name: 'goods',
    meta: { title: '商品管理' }
  },
  {
    path: 'inventory',
    component: () =>
                import('@/views/table/drag-table'),
    name: 'Inventory',
    meta: { title: '库存管理' }
  },
  {
    path: 'norms',
    component: () =>
                import('@/views/table/dynamic-table/index'),
    name: 'norms',
    meta: { title: '规格值管理' }
  },
  {
    path: 'grops',
    component: () =>
                import('@/views/table/drag-table'),
    name: 'grops',
    meta: { title: '商品分组' }
  }
  ]
}
export default ProductRouter
