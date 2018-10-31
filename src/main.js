import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

import blur from '@/directives/blur'

import msToMm from '@/filters/ms-to-mm'
import routes from '@/routes'

import EventBus from '@/plugins/event-bus'

// decirle a vue que use vue router
Vue.use(VueRouter)
// usar evenbus
Vue.use(EventBus)
Vue.use(msToMm)
Vue.use(blur)

const router = new VueRouter({
  routes,
  // quitar #  de la Url localhost:8080/#/
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  // a la instancia de vue le pasamos router que contienen todas nuestras rutas
  router
})
