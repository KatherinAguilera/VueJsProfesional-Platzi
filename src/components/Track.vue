<template lang="pug">
  <div class="card is-2">
    <div class="center-img">
      <figure class=""><img :src="track.album.images[0].url"/></figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48"><img :src="track.album.images[0].url"/></figure>
        </div>
        <div class="media-content">
          <p class="title is-6"><strong>{{ track.name }}</strong></p>
          <p class="subtitle is-6">{{ track.artists[0].name }}</p>
        </div>
      </div>
      <div class="content"><small>{{ track.duration_ms }}</small>
        <nav class="level">
          <div class="level-left">
          <a class="level-item">
          <span class="icon is-small" @click="selectTrack" >▶️</span>
          </a>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    track: { type: Object, required: true }
  },
  methods: {
    selectTrack () {
      // $emit funcion de vue emitir evento ('' , que es lo que le queremos mandar al padre)
      this.$emit('select', this.track.id)
      this.$bus.$emit('set-track', this.track)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
    -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
 
}
.content{
  display: flex;
justify-content: space-around;
}
</style>
