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
      getCategories: 'questions/getCategoriesByDifficulty'
    }),
    categories () {
      return this.getCategories
    }
  },
  methods: {
    ...mapActions({
      findCategories: 'questions/findCategoriesByDifficulty'
    })
  },
  mounted () {
    this.findCategories(this.$route.params.difficulty)
  }
}
</script>

<style lang="scss">

</style>
