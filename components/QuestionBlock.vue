<template>
  <div class="main__question question">
    <div class="question__top">
      <h4 class="question__title">
        Категория
      </h4>
    </div>
    <div class="question__body">
      <h2 class="question__text">
        Название вопроса
      </h2>
    </div>
    <h5 class="question__number">
      Вопрос 5 из 10
    </h5>
    <h5 class="question__price">
      Цена вопроса: 1000
    </h5>
  </div>
</template>

<script>
export default {
  name: 'QuestionBlock'
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
