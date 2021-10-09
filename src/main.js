import Vue from 'vue'
import App from './App'
import { Button } from 'mint-ui'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>

const vm = new Vue({
  render: h => h(App),
  router,
  store,
})

vm.$mount('#app')
