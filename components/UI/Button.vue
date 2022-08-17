<template>
  <nuxt-link
    class="button"
    :to="link"
    tag="button"
  >
    {{ text }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: 'Нажмите'
    },
    link: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";
  .button {
    background-color: $button-bg-color;
    color: $button-text-color;
    padding: 15px 20px;
    border-radius: 5px;
  }
</style>
