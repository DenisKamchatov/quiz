<template>
  <main class="main container">
    <ChooseBlock :categories="categories" />
  </main>
</template>

<script>
// import { mapMutations } from 'vuex';
import { mapActions, mapGetters } from 'vuex'
import ChooseBlock from '~/components/ChooseBlock.vue'
export default {
  name: 'CategoryPage',
  components: { ChooseBlock },
  data () {
    return {
      // categories: [
      //   'Биология',
      //   'Математика',
      //   'Литература',
      //   'География',
      //   'История'
      // ]
    }
  },
  computed: {
    ...mapGetters({
      getCategories: 'questions/getCategoriesByDifficulty',
      currentDifficulty: 'questions/getCurrentDifficulty'
    }),
    categories () {
      return this.getCategories
    }
  },
  mounted () {
    this.findCategories(this.currentDifficulty)
  },
  methods: {
    ...mapActions({
      findCategories: 'questions/findCategoriesByDifficulty'
    })
  }
}
</script>

<style lang="scss">

</style>
