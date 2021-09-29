import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const vm = new Vue({
  render: h => h(App),
  router,
  store,
})

vm.$mount('#app')
