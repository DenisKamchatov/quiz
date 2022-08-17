<template>
  <main class="main container">
    <QuestionBlock />
    <div class="main__variants variants">
      <h4 v-for="(variant, index) of variants" :key="index" class="variants__variant variant">
        {{ variant }}
      </h4>
    </div>
    <nuxt-link class="main__next-block" :to="{name: 'questions-id', params: { id: (Number($route.params.id) + 1) }}" tag="button">
      <h5 class="main__next-text">
        Следующий вопрос
      </h5>
      <svg
        id="Layer_1"
        class="main__next-arrow"
        style="enable-background:new 0 0 128 128;"
        version="1.1"
        viewBox="0 0 128 128"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <polygon points="79.9,98.9 114.8,64 79.9,29.1 74.2,34.8 99.5,60 36,60 36,68 99.5,68 74.2,93.2  " />
          <rect height="8" width="8" x="16" y="60" />
        </g>
      </svg>
    </nuxt-link>
  </main>
</template>

<script>
import QuestionBlock from '~/components/QuestionBlock.vue'
export default {
  name: 'QuestionPage',
  components: { QuestionBlock },
  data () {
    return {
      variants: [
        '1',
        '2',
        '3',
        '4'
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "~assets/scss/_variables.scss";
  .main {
    &__variants {
      margin: 40px auto 0 auto;
      width: 40%;
    }
    &__next-arrow {
      width: 40px;
      fill: #F1F1F1;
      margin: 0 0 0 5px;
    }
    &__next-block {
      display: flex;
      align-items: center;
      position: absolute;
      right: 3%;
      top: 50%;
      background-color: $next-button-bg;
      padding: 5px 10px;
      border-radius: 10px;
      color: $button-text-color;
    }
    &__next-text {
      text-align: center;
    }
  }
  .variant {
    background-color: $variant-bg;
    color: $variant-text;
    text-align: center;
    padding: 15px 10px;
    border-radius: 15px;
  }
  .variant:not(:first-of-type) {
    margin: 20px 0 0 0;
  }
</style>
