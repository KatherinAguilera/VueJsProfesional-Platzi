<template lang="pug">
  <section class="hero is-success">
  <div class="hero-head">
    <header class="nav">
      <div class="container">
          //- <div class="nav-item"><strong>📻  Platzi Music</strong></div>
          <div class="menu">
            <figure>
              <img  class="logo" src="@/assets/logo1.png">
            </figure>
            <div>
              <router-link class="nav-item" :to="{ name: 'search' }">Buscar</router-link>
              <router-link class="nav-item" to="about">Nosotros</router-link>
            </div>
          </div>
      </div>
    </header>
  </div>
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="hg">
        <h1 class="title">Music Vue</h1>
        <h2 class="subtitle">Canciones que estan Vue-nisimas!</h2>
      </div>
      <pm-player></pm-player>
    </div>
  </div>
  </section>
</template>
<script>
// traer el comp player
import PmPlayer from '@/components/Player.vue'
// puede disponer de
export default {
  components: { PmPlayer }
}
</script>
<style lang="scss" scoped>
img{
  max-width: 80px;
  padding-top: 20px;
}
.menu{
  display: flex;
  margin: 0;
  border-radius:10px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
  padding: 10px 10px;
}
  div .nav-item{
  background:#1496ED;
  padding: 8px 8px;
  border-radius:12px;
  &:hover{
    opacity: .8;
  }
  &:active{
    transition:.3s;
    transform: scale(0.7);
  }
}
.hg{
  letter-spacing: 5px;
  margin-bottom: 30px;
}
h2{
  opacity: .8;
  padding-top: 10px;
}
</style>
