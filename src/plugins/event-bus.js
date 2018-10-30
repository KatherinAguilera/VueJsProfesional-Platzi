const eventBus = {}
// install declararlo e inyectarlo para ser usado en los componentes
eventBus.install = function (Vue) {
  // extender comportamiento de otros objetos
  Vue.prototype.$bus = new Vue()
}
export default eventBus
