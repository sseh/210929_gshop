import Vue from 'vue'
import { Button } from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store'

// 加载mockServer
import './mock/mockServer'
import loading from './common/image/loading.gif'
import './filters' // 加载过滤器

Vue.config.productionTip = false
// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>
Vue.use(VueLazyload, {
  loading: loading,
})

const vm = new Vue({
  render: h => h(App),
  router,
  store,
})

vm.$mount('#app')
