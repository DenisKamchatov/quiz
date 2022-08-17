<template>
  <main class="main container">
    <ChooseBlock :categories="categories" />
  </main>
</template>

<script>
import ChooseBlock from '~/components/ChooseBlock.vue'
export default {
  name: 'CategoryPage',
  components: { ChooseBlock },
  data () {
    return {
      categories: [
        'Биология',
        'Математика',
        'Литература',
        'География',
        'История'
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
