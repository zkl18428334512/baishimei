import Vue from 'vue'
import App from './App'

import store from './store'
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

import * as filters from './common/filters'


Vue.config.productionTip = false

// Vue.prototype.$api = api
Vue.prototype.$store = store

App.mpType = 'app'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const app = new Vue({
	store,
    ...App
})
app.$mount()
