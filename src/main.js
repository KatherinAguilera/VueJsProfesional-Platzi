import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import EventBus from '@/plugins/event-bus'
// usar evenbus
Vue.use(EventBus)
new Vue({
  el: '#app',
  render: h => h(App)
})
