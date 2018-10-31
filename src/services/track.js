
//  método que va a interactuar con la api de platzi para hacer búsquedas de canciones.import platziMusicService from './platzi-music-service'
import platziMusicService from './platzi-music'
const trackService = {}
trackService.search = function (q) {
  // traer por canciones
  const type = 'track'
  return platziMusicService.get('/search', {
    params: {
      q,
      type
    }
  })
  // respuesta de la api
    .then(res => res.data)
}

trackService.getById = function (id) {
  return platziMusicService.get(`/tracks/${id}`)
    .then(res => res.data)
}

export default trackService
