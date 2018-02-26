// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
/* eslint-disable no-new */

import axios from 'axios'

import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import global_ from "./components/Global.vue"
Vue.prototype.GLOBAL = global_;

Vue.axios.defaults.baseURL = global_.BASE_URL;
Vue.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
