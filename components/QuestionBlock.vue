<template>
  <div class="main__question question">
    <div class="question__top">
      <h4 class="question__title">
        {{ categoryName }}
      </h4>
    </div>
    <div class="question__body">
      <h2 class="question__text">
        {{ question.question }}
      </h2>
    </div>
    <h5 class="question__number">
      Вопрос {{ questionId + 1 }} из {{ countQuestions }}
    </h5>
    <h5 class="question__price">
      Цена вопроса: {{ question.price }}
    </h5>
  </div>
</template>

<script>
export default {
  name: 'QuestionBlock',
  props: {
    categoryName: {
      type: String,
      default: 'Категория'
    },
    question: {
      type: [Object, Array],
      default () {
        return {
          question: 'Вопрос',
          answers: ['1', '2', '3', '4'],
          correctAnswer: '1',
          price: 0,
          correct: undefined
        }
      }
    },
    questionId: {
      type: Number,
      default: 0
    },
    countQuestions: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
  @import "~assets/scss/_variables.scss";
  .question {
    background-color: $table-bg;
    border: 7px solid $table-border;
    border-radius: 40px;
    margin: 40px auto 0 auto;
    width: 40%;
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
    &__number {
      position: absolute;
      bottom: 20px;
      left: 20px;
    }
    &__price {
      position: absolute;
      right: 20px;
      bottom: 20px;
    }
  }
</style>
