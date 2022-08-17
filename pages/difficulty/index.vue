<template>
  <main class="main container">
    <ChooseBlock :difficulties="getDifficulties" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import ChooseBlock from '~/components/ChooseBlock.vue'
export default {
  name: 'DifficultyPage',
  components: { ChooseBlock },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      difficulties: 'questions/getDifficulties'
    }),
    getDifficulties () {
      return this.difficulties
    }
  }
}
</script>
