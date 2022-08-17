<template>
  <div>
    <Header :route="this.$route.name" />
    <transition name="slide-fade" mode="out-in">
      <nuxt />
    </transition>
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
