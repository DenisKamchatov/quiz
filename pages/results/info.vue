<template>
  <div class="main__result result">
    <div class="result__top">
      <h4 class="result__title">
        Результаты
      </h4>
    </div>
    <div class="result__body">
      <div class="result__body-title">
        <h4 class="result__item">
          вопросы
        </h4>
        <h4 class="result__item">
          ответы
        </h4>
      </div>
      <div v-for="(question, index) of questions" :key="index" class="result__question-block">
        <p class="result__question-item">
          {{ (index + 1) + ') ' + question.question }}
        </p>
        <p class="result__answer-item">
          {{ question.answer }}
        </p>
      </div>
    </div>
    <div class="result__button">
      <Button text="На главную" />
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
      questions: [
        {
          question: 'ВОпросв первый ВОпросв первый ВОпросв первый ВОпросв первый',
          answer: 'Большая волга'
        },
        {
          question: 'Новый Новый Новый Новый НовыйНовый Новый',
          answer: 'Маленькая волга'
        }
      ]
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
    &__body {
      padding: 20px 30px;
    }
    &__body-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-transform: uppercase;
    }
    &__item, &__answer-item {
      flex-basis: 50%;
      text-align: center;
    }
    &__question-item {
      flex-basis: 50%;
    }
    &__question-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__button {
      display: flex;
      justify-content: center;
      margin: 0 0 20px 0;
    }
    &__question-block:not(:first-of-type) {
      margin: 20px 0 0 0;
    }
  }
</style>
