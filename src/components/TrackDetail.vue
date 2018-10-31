<template lang="pug">
  <div class="container">
    <div class="columns">
      <div class="column is-5 is-offset-4">
        <pm-loader v-show="isLoading"></pm-loader>
        <pm-track :track="track" ></pm-track>
      </div>
    </div>
  </div>
</template>

<script>
import trackService from '@/services/track'
import PmTrack from '@/components/Track.vue'
import PmLoader from '@/components/shared/Loader.vue'

export default {
  components: { PmTrack, PmLoader },

  data () {
    return {
      track: {},
      isLoading: false

    }
  },
  // obtener el valor de la url .params parametros que viajan en la URL
  created () {
    this.isLoading = true
    const id = this.$route.params.id
    trackService.getById(id)
      .then(res => {
        this.isLoading = false
        this.track = res
      })
  }
}
</script>

<style lang="scss">
 
</style>
