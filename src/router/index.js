import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '../views/Login/LoginPage'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/HomePage')
  },
  {
    path: '/shop/:id',
    name: 'ShopPage',
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop/ShopPage')
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    beforeEnter (to, from, next) {
      const isLogin = localStorage.isLogin
      isLogin ? next({ name: 'HomePage' }) : next()
    }
  },
  {
    path: '/register',
    name: 'RegPage',
    component: () => import(/* webpackChunkName: "register" */ '../views/Login/RegPage'),
    beforeEnter (to, from, next) {
      const isLogin = localStorage.isLogin
      isLogin ? next({ name: 'HomePage' }) : next()
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin
  const { name } = to
  const isLoginOrisRegister = (name === 'LoginPage' || name === 'RegPage');
  (isLogin || isLoginOrisRegister) ? next() : next({ name: 'LoginPage' })
})

export default router
