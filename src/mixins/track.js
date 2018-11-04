const trackMixin = {
  // se peuden colocar methos compute create data
  methods: {
    selectTrack () {
      if (!this.track.preview_url) {
        return
      }
      /* USANDO EMIT */
      // $emit funcion de vue emitir evento ('' , que es lo que le queremos mandar al padre)
      // this.$emit('select', this.track.id)
      // this.$bus.$emit('set-track', this.track)

      /* USANDO STORE */
      // setTrack mutuacion
      this.$store.commit('setTrack', this.track)
    }
  }
}

export default trackMixin
