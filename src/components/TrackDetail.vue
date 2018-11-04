<template lang="pug">
  <main>
    <pm-loader v-show="isLoading"></pm-loader>
    <div class="container" v-if="track && track.album" v-show="!isLoading" >
      <div class="columns" >
        <div class="column is-3 has-text-centered">
          <figure class="media-left">
            <p class="image"><img :src="track.album.images[0].url"/></p>
            <p class="button-bar"><a class="button is-primary is-large"><span class="icon" @click="selectTrack">▶️</span></a></p>
          </figure>
        </div>
        <div class="column is-8">
          <div class="panel">
            <div class="panel-heading">
              <h1 class="title">{{ trackTitle }}</h1>
            </div>
            <div class="panel-block">
              <div class="article-media">
                <div class="media-content">
                  <div class="content">
                    <ul v-for="(v, k) in track">
                      <li><strong>{{ k }}:&nbsp;</strong><span>{{ v }}</span></li>
                    </ul>
                  </div>
                </div>
                <nav class="nav-level">
                  <div class="level-left"><a class="level-item"></a></div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import trackMixin from '@/mixins/track'
// import trackService from '@/services/track'
import PmLoader from '@/components/shared/Loader.vue'

export default {
  components: { PmLoader },
  mixins: [trackMixin],

  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },

  data () {
    return {
      // track: {},
      isLoading: false
    }
  },
  // obtener el valor de la url .params parametros que viajan en la URL
  created () {
    const id = this.$route.params.id

    if (!this.track || !this.track.id || this.track.id !== id) {
      this.getTrackById({ id })
        .then(() => console.log('Track loaded...'))
    }
    // trackService.getById(id)
    //   .then(res => {
    //     this.track = res
    //   })
  },
  methods: {
    ...mapActions(['getTrackById'])
  }
}
</script>

<style lang="scss">
  .column {
    margin: 20px;
  }
  .button-bar{
    margin-top: 10px;
  }
  .columns{
    display: block;
  }
</style>
