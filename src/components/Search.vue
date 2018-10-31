<template lang="pug">
  <main>
    <pm-notification :typeNotification="hasData" v-show="showNotification">
      <p v-if="hasData" slot="body">No se encontraron resultados</p>
      <p v-else="v-else" slot="body">{{ searchMessage }}</p>
    </pm-notification>
    <pm-loader v-show="isLoading"></pm-loader>
    <section class="section" v-show="!isLoading">
      <nav class="nav">
        <div class="container">
          <input class="input is-large" type="text" placeholder="Buscar canciones" v-model="searchQuery " @keyup.enter="search"/>
          <div class="buttons">
            <a class="button is-info is-large" @click="search">Buscar</a>
            <a class="button is-danger is-large" @click="cancel">&times;</a>
          </div>
        </div>
      </nav>
      <div class="container">
        <p><small>{{ searchMessage }}</small></p>
      </div>
      <div class="container results">
        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="t in tracks">
            <pm-track v-blur="t.preview_url" :class="{ 'is-active': t.id === selectedTrack }" :track="t" @select="setSelectedTrack"></pm-track>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import trackService from '@/services/track'

import PmTrack from '@/components/Track.vue'

import PmLoader from '@/components/shared/Loader.vue'
import PmNotification from '@/components/shared/Notification.vue'

export default {
  name: 'app',

  components: { PmTrack, PmLoader, PmNotification },

  data () {
    return {
      searchQuery: '',
      tracks: [],

      isLoading: false,
      showNotification: false,

      selectedTrack: '',
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
      this.tracks = []
      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = true
          this.hasData = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    cancel () {
      this.tracks = []
      this.searchQuery = ''
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">

  .results {
    margin-top: 50px;
  }

  .is-active {
    border: 3px #23d160 solid;
  }
</style>