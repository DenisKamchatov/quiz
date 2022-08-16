<template>
  <div>
    <Header :route="this.$route.name" />
    <nuxt />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: 'Default',
  components: {
    Header
  }
}
</script>

<style>

</style>
