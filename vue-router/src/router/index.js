import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Users from '../views/Users.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Productos from '../views/products/Index.vue'
import Detail from '../views/products/Detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home',component: Home },
    { path: '/about', name: 'about', component: About //() => import(/* webpackChunkName: "about" */ './views/About.vue') 
    },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/user/:id', name: 'users', component: Users },
    { path: '/login', name: 'login', component: Login },
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/register', redirect: '/signup' },
    { path: '/products', name: 'products', component: Productos },
    { path: '/product-detail/:id', name: 'product', component: Detail }
  ]
})
