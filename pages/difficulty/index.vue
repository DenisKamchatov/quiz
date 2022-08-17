<template>
  <main class="main container">
    <ChooseBlock :difficulties="difficulties" />
  </main>
</template>

<script>
import ChooseBlock from '~/components/ChooseBlock.vue'
export default {
  name: 'DifficultyPage',
  components: { ChooseBlock },
  data () {
    return {
      difficulties: [
        'Легко',
        'Нормально',
        'Сложно'
      ]
    }
  }
}
</script>
