<template lang="pug">
  <div class="content">
    <p>
      <img :src="track.album.images[0].url"/>
    </p>
    <p>
      <strong>{{ track.name }}</strong>
      <small>[{{ track.duration_ms }}]</small>
    </p>
    <p>
      <audio controls="controls" :src="track.preview_url"></audio>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      track: {}
    }
  },
  created () {
    this.$bus.$on('set-track', (track) => {
      this.track = track
    })
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 124px;
    border-radius: 50%;
  }
  audio{
    height: 80px;
  }
</style>
