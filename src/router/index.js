import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/home/HomePage'
import LoginPage from '../views/Login/LoginPage'
import RegPage from '../views/Login/RegPage'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
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
    component: RegPage,
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
