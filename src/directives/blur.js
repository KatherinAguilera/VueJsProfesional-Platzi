// desenfocar una imagen para que se vea borrosa
// descartar los tracks que no se pueden escuchar a partir de que tienen una url como null

const blur = {}
// (el - elemento html, binding- atributos modifiers)
function setBlur (el, binding) {
  // si el elemento es false 0 vacio aplicar el blur
  el.style.filter = !binding.value ? 'blur(3px)' : '(none)'
  // no se puede accionar sobre ese elemnto
  el.style.cursor = !binding.value ? 'not-allowed' : 'inherit'

  el.querySelectorAll('button').forEach(a => {
    if (!binding.value) {
      a.setAttribute('disabled', true)
    } else {
      a.removeAttribute('disabled')
    }
  })
}
// crear directiva de forma global
blur.install = function (Vue) {
  // nombre y funcion
  Vue.directive('blur', {
    bind (el, binding) {
      setBlur(el, binding)
    }
  })
}

export default blur
