// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vmodal from 'vue-js-modal'
import router from './router/index'
import store from './store'
import './router.control'

import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.css'
import './assets/styles/iconfont/iconfont.css'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
Vue.use(Vmodal, {dynamic: true, injectModalsContainer: true})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
