import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'

import Vant from 'vant'

import './styles/index.less'
// 动态设置rem基准值

import 'amfe-flexible'

// 加载dayjs初始配置
import './utils/dayjs'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
