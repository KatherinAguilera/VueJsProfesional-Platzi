<template lang="pug">
<div class="container">
  <div class="columns">
    <div class="column is-5 is-offset-4">
      <div :class="[!typeNotification ? 'notification is-success' : 'notification is-danger']">
        <slot name="body">Algo estuvo mal</slot>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: ['typeNotification']
}
</script>
<style lang="scss" scoped>
  .notification {
    margin: 10px;
  }
</style>
