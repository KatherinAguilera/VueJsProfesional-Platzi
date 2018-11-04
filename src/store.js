import Vue from 'vue'
import Vuex from 'vuex'

import trackService from '@/services/track'

Vue.use(Vuex)

// usando store
const store = new Vuex.Store({
  // propiedades para bindiar reemplazando la data de los componentes
  state: {
    // inicializar en vacio
    track: {}
  },

  getters: {
    trackTitle (state) {
      if (!state.track.name) { return '' }
      return `${state.track.name} - ${state.track.artists[0].name}`
    }
  },
  // guardar y setear la informacion en store codigo assincronico
  mutations: {
    setTrack (state, track) {
      state.track = track
    }
  },
  // obtener la informacion de la cancion a traves de un id,
  // reemplazara codigo del componente de trackDetail
  // usar el storre como almacenamiento interno en vez de volver y pedir la informacion
  // a la api
  actions: {
    getTrackById (context, payload) {
      return trackService.getById(payload.id)
        .then(res => {
          context.commit('setTrack', res)
          return res
        })
    }
  }
})
export default store
