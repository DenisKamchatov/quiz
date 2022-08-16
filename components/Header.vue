<template>
  <header v-if="route === 'index'" class="header">
    {{ route }}
  </header>
  <header v-else-if="route === 'difficulty'" class="header">
    {{ route }}
  </header>
  <header v-else>
    Иначе
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    route: {
      type: String,
      default: 'index'
    }
  }
}
</script>

<style lang="scss">
  .header {
    background-color: #fff;
  }
</style>
