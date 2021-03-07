import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import QueryTable from 'query-table-test'

Vue.use(ElementUI, {
  size: 'mini'
})

Vue.use(QueryTable)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')