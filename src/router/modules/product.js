/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const ProductRouter = {
  path: '/commodity',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'commodity',
  meta: {
    title: '商品',
    icon: 'table'
  },
  children: [{
    path: 'goods',
    component: () =>
                import('@/views/product/productment'),
    name: 'goods',
    meta: { title: '商品管理' }
  },
  {
    path: 'inventory',
    component: () =>
                import('@/views/product/inventory'),
    name: 'Inventory',
    meta: { title: '库存管理' }
  },
  {
    path: 'norms',
    component: () =>
                import('@/views/product/standard'),
    name: 'norms',
    meta: { title: '规格值管理' }
  },
  {
    path: 'grops',
    component: () =>
                import('@/views/product/productgroup'),
    name: 'grops',
    meta: { title: '商品分组' }
  }
  ]
}
export default ProductRouter
