<template>
  <main class="main container">
    <QuestionBlock :category-name="category.name" :question="currentQuestion" :question-id="questionId" :count-questions="countQuestions" />
    <div
      v-if="choosedVariant === -1"
      class="main__variants variants"
    >
      <div
        v-for="(variant, index) of questionVariants"
        :key="index"
        class="variants__variant variant"
        @click="answerToQuestion(variant, index)"
      >
        <h4 v-if="currentQuestion.correct && variant === correctAnswer" :class="[{variant__body: true, variant__bodyCorrect}]">
          {{ variant }}
        </h4>
        <h4 v-else-if="!currentQuestion.correct && variant !== correctAnswer && index === choosedVariant" :class="[{variant__body: true, variant__bodyIncorrect}]">
          {{ variant }}
        </h4>
        <h4 v-else :class="[{variant__body: true}]">
          {{ variant }}
        </h4>
      </div>
    </div>
    <div
      v-else
      class="main__variants variants"
    >
      <div
        v-for="(variant, index) of questionVariants"
        :key="index"
        class="variants__variant variant variant__is-choosed"
      >
        <h4 v-if="currentQuestion.correct && variant === correctAnswer" :class="[{variant__body: true, variant__bodyCorrect}]">
          {{ variant }}
        </h4>
        <h4 v-else-if="!currentQuestion.correct && variant !== correctAnswer && index === choosedVariant" :class="[{variant__body: true, variant__bodyIncorrect}]">
          {{ variant }}
        </h4>
        <h4 v-else :class="[{variant__body: true}]">
          {{ variant }}
        </h4>
      </div>
    </div>
    <transition name="fade">
      <nuxt-link v-if="((questionId + 1) < countQuestions) && (choosedVariant !== -1)" :class="[{main__nextBlock: true}]" :to="{name: 'questions-id', params: { id: (questionId + 1), category: category }}" tag="button">
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

      <nuxt-link v-else-if="((questionId + 1) >= countQuestions) && (choosedVariant !== -1)" :class="[{main__nextBlock: true}]" :to="{name: 'results'}" tag="button">
        <h5 class="main__next-text">
          К результатам
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
    </transition>
  </main>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import QuestionBlock from '~/components/QuestionBlock.vue'
export default {
  name: 'QuestionPage',
  components: { QuestionBlock },
  data () {
    return {
      difficulty: '',
      category: (this.$route.params.category ? this.$route.params.category : this.currentCategory),
      questionId: Number(this.$route.params.id),
      variant__bodyCorrect: false,
      variant__bodyIncorrect: false,
      choosedVariant: -1
    }
  },
  computed: {
    ...mapGetters({
      question: 'questions/getCurrentQuestion',
      getCorrectAnswer: 'questions/getCorrectAnswer',
      currentCategory: 'questions/getCurrentCategory'
    }),
    currentQuestion () {
      return this.question
    },
    countQuestions () {
      return this.category.questions.length
    },
    questionVariants () {
      return this.question.answers
    },
    correctAnswer () {
      return this.getCorrectAnswer
    }
  },
  mounted () {
    if (this.$route.params.category) {
      this.getQuestion({ category: this.$route.params.category, id: this.questionId })
      this.setCategory(this.$route.params.category)
    } else if (this.currentCategory) {
      this.setCategory(this.currentCategory)
      this.getQuestion({ category: this.currentCategory, id: this.questionId })
    }
  },
  methods: {
    ...mapActions({
      getQuestion: 'questions/findQuestionById',
      setCategory: 'questions/setCurrentCategory'
    }),
    ...mapMutations({
      setCorrectAnswer: 'questions/SET_correctAnswer',
      setIncomeCount: 'SET_incomeCount'
    }),
    answerToQuestion (variant, index) {
      if (this.correctAnswer === variant) {
        this.variant__bodyCorrect = true
        this.variant__bodyIncorrect = false
        this.choosedVariant = index
        this.setCorrectAnswer(true)
        this.setIncomeCount(this.currentQuestion.price)
      } else {
        this.variant__bodyCorrect = false
        this.variant__bodyIncorrect = true
        this.choosedVariant = index
        this.setCorrectAnswer(false)
      }
    }
  }
}
</script>

<style lang="scss">
  @import "~assets/scss/_variables.scss";
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
  .main {
    margin: 100px 0 40px 0;
    &__variants {
      margin: 40px auto 0 auto;
      width: 40%;
    }
    &__next-arrow {
      width: 40px;
      fill: #F1F1F1;
      margin: 0 0 0 5px;
    }
    &__nextBlock {
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
    text-align: center;
    cursor: pointer;

    &__is-choosed {
      cursor: default;
    }
    &__body {
      background-color: $variant-bg;
      color: $variant-text;
      padding: 15px 10px;
      border-radius: 15px;
    }
    &__bodyCorrect {
      background-color: $variant-bg-correct;
      color: $variant-text-action;
    }
    &__bodyIncorrect {
      background-color: $variant-bg-incorrect;
      color: $variant-text-action;
    }
  }
  .variant:not(:first-of-type) {
    margin: 20px 0 0 0;
  }
</style>
