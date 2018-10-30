<template lang="">
  <div id="app">
    <pm-header></pm-header>
    <pm-notification :typeNotification="hasData" v-show="showNotification">
      <p v-if="hasData" slot="body">No se encontraron resultados</p>
      <p v-else="v-else" slot="body">{{ searchMessage }}</p>
    </pm-notification>
    <section class="section">
      <nav class="nav">
        <div class="container">
          <input class="input is-large" type="text" placeholder="Buscar canciones" v-model="searchQuery"/>
            <div class="buttons">
              <a class="button is-info is-large" @click="search" @key.enter="search">Buscar</a>
              <a class="button is-danger is-large" @click="cancel">&times;</a>
            </div>
            <pm-loader v-show="isLoading"></pm-loader>
        </div>
      </nav>
      <div class="container">
        <p><small>{{ searchMessage }}</small></p>
      </div>
      <div class="container results">
        <div class="columns is-multiline">
          <div :key= "index" v-for="(t, index)  in tracks">
            <pm-track v-bind:track="t" @select="setSelectedTrack" :class="{ 'is-active': t.id === selectedTrack }">
            </pm-track>
            <!-- {{ t.name }} - {{ t.artists[0].name }} -->
          </div>
        </div>
      </div>
    </section>
    <pm-footer></pm-footer>
  </div>
</template>


<script>
import trackService from '@/services/track'
import PmFooter from '@/components/layout/Footer.vue'
import PmHeader from '@/components/layout/Header.vue'
import PmTrack from '@/components/Track.vue'
import PmLoader from '@/components/shared/Loader.vue'
import PmNotification from '@/components/shared/Notification.vue'
// array con objetos
// const tracks = [
//   { name: 'Muchacha', artist: 'Luis Alberto Spinetta' },
//   { name: 'Hoy aca en el baile', artist: 'El Pepo' },
//   { name: 'I was made for loving you', artist: 'Kiss' }
// ]

export default {
  name: 'app',
  components: { PmFooter, PmHeader, PmTrack, PmLoader, PmNotification },
  data () {
    return {
      // buscar
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false,
      hasData: false
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = true
          this.hasData = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    // Click
    // search () {
    //   // tracks de mi v-model sera igual al tracks de mi array
    //   this.tracks = tracks
    // }
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    },
    cancel () {
      this.tracks = []
      this.searchQuery = ''
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

</style>
