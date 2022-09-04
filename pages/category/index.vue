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
    this.findCategories(this.$route.params.difficulty ? this.$route.params.difficulty : this.currentDifficulty)
    this.resetIncome()
  },
  methods: {
    ...mapActions({
      findCategories: 'questions/findCategoriesByDifficulty',
      resetIncome: 'setIncome'
    })
  }
}
</script>
