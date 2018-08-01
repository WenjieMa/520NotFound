import Vue from 'vue'
import store from './app/vuex'
import main from './main.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(main)
})
