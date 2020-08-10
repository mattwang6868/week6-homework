import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/products',
        component: () => import('../views/Products.vue')
      },
      {
        path: '/Cart',
        component: () => import('../views/Cart.vue')
      },
      {
        path: '/product/:id',
        component: () => import('../views/Product.vue')
      },
      {
        path: '/login',
        component: () => import('../views/Login.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '/admin/products',
        component: () => import('../views/dashboard/Products.vue')
      },
      {
        path: '/admin/cart',
        component: () => import('../views/dashboard/Cart.vue')
      },
      {
        path: '/admin/coupons',
        component: () => import('../views/dashboard/Coupons.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
