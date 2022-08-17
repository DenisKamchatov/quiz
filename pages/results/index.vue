<template>
  <div class="main__result result">
    <div class="result__top">
      <h4 class="result__title">
        Результаты
      </h4>
    </div>
    <div class="result__body">
      <h2 v-if="win" class="result__text">
        <span class="result__paragraph">
          Поздравляю!
        </span>
        <span class="result__paragraph">
          Вы выиграли!
        </span>
      </h2>
      <h2 v-else class="result__text">
        <span class="result__paragraph result__paragraph--incorrect">
          К сожалению,
        </span>
        <span class="result__paragraph result__paragraph--incorrect">
          Вы проиграли(
        </span>
      </h2>
      <div class="result__button-main">
        <Button text="На главную" link="/" />
      </div>
      <div class="result__button-results">
        <Button text="Посмотреть результаты" link="/results/info" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/UI/Button.vue'
export default {
  name: 'ResultMain',
  components: { Button },
  data () {
    return {
      win: true
    }
  }
}
</script>

<style lang="scss">
  @import "~assets/scss/_variables.scss";
  .result {
    background-color: $table-bg;
    border: 7px solid $table-border;
    border-radius: 40px;
    margin: 40px auto 0 auto;
    width: 50%;
    position: relative;

    &__top {
      background-color: $table-header;
      border-radius: 40px 40px 0 0;
      padding: 30px 20px;
      margin: -7px 0 0 0;
    }
    &__title {
      text-align: center;
    }
    &__text {
      text-align: center;
      padding: 120px 20px 140px 20px;
    }
    &__paragraph {
      display: block;
      color: $text-win;
      &--incorrect {
        color: $question-incorrect;
      }

      &:not(:first-of-type) {
        margin: 10px 0 0 0;
      }
    }
    &__button-main {
      position: absolute;
      bottom: 20px;
      left: 20px;
    }
    &__button-results {
      position: absolute;
      right: 20px;
      bottom: 20px;
    }
  }
</style>
