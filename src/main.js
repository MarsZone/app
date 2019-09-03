import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './plugins/vant.js'
import i18n from './i18n'
// 导入 AOS 
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
