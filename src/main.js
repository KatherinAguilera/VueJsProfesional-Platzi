import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import routes from '@/routes'

import EventBus from '@/plugins/event-bus'

// decirle a vue que use vue router
Vue.use(VueRouter)
// usar evenbus
Vue.use(EventBus)

const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  render: h => h(App),
  // a la instancia de vue le pasamos router que contienen todas nuestras rutas
  router
})
