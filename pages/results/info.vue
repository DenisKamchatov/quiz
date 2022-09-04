<template>
  <main class="main__result result">
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
      <div v-for="(question, index) of getQuestions" :key="index" class="result__question-block">
        <p v-if="question.correct" :class="{result__questionItem: true, correct: true}">
          {{ (index + 1) + ') ' + question.question }}
        </p>
        <p v-else :class="{result__questionItem: true, correct: false}">
          {{ (index + 1) + ') ' + question.question }}
        </p>
        <p v-if="question.correct" :class="{result__answerItem: true, correct: true }">
          {{ question.correctAnswer }}
        </p>
        <p v-else :class="{result__answerItem: true, correct: false }">
          {{ question.correctAnswer }}
        </p>
      </div>
    </div>
    <div class="result__button">
      <Button text="На главную" />
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import Button from '~/components/UI/Button.vue'
export default {
  name: 'ResultMain',
  components: { Button },
  data () {
    return {
      correct: false
    }
  },
  computed: {
    ...mapGetters({
      category: 'questions/getCurrentCategory'
    }),
    getQuestions () {
      return this.category.questions
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
    margin: 100px auto 40px auto;
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
    &__item, &__answerItem {
      flex-basis: 50%;
      text-align: center;
    }
    &__answerItem {
      color: $question-incorrect;
    }
    &__questionItem {
      flex-basis: 50%;
      color: $question-incorrect;
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
  .correct {
    color: $question-correct;
  }
</style>
