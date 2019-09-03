import Vue from 'vue'
import Router from 'vue-router'
import home from 'views/home/homeView'
import user from 'views/user/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component:home
    },
    {
      path: '/user',
      name: 'user',
      component:user
    },
    { path: '*', component: home }
  ]
})
