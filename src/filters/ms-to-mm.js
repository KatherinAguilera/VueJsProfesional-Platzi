// convertir la duracion de las canciones que estan en milisegundos a minutos
const msToMm = {}
// funcion de convertis milisegundos a minutos
function convertMsToMm (ms) {
  // minutos
  const min = Math.floor(ms / 60000)
  // segundos
  const sec = ((ms % 60000 / 1000).toFixed(0))

  return `${min}:${(sec < 10) ? '0' + sec : sec}`
}

msToMm.install = function (Vue) {
  // fncion de crear un filtro nuevo
  Vue.filter('ms-to-mm', (val) => {
    return convertMsToMm(val)
  })
}

export default msToMm
