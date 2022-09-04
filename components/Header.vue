<template>
  <header v-if="route === 'index'" class="header">
    <div class="container header__inner">
      <h1 class="header__logo">
        quiz
      </h1>
    </div>
  </header>
  <header v-else-if="route === 'difficulty' || route === 'category' || route === 'results-info'" class="header">
    <div class="container header__inner">
      <h1 class="header__logo">
        quiz
      </h1>
      <h5 class="header__count">
        Количество пройденных наборов: {{ countCompletedPacks }}
      </h5>
    </div>
  </header>
  <header v-else-if="route === 'questions-id' || route === 'results'" class="header">
    <div class="container header__inner">
      <h1 class="header__logo">
        quiz
      </h1>
      <div class="header__income">
        <div class="header__income-bar">
          <div class="header__income-progress" :style="'width: ' + (getIncome / getCategoryPrice * 100) + '%'" />
        </div>
        <h5 class="header__income-count">
          Заработок: {{ getIncome }} из {{ getCategoryPrice }}
        </h5>
      </div>
      <h5 class="header__count">
        Количество пройденных наборов: {{ countCompletedPacks }}
      </h5>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  props: {
    route: {
      type: String,
      default: 'index'
    }
  },
  computed: {
    ...mapGetters({
      income: 'getIncome',
      categoryPrice: 'questions/getCurrentCategoryPrice',
      completedPacks: 'getCountCompletedPacks'
    }),
    getIncome () {
      return this.income
    },
    getCategoryPrice () {
      return this.categoryPrice
    },
    countCompletedPacks () {
      return this.completedPacks
    }
  }
}
</script>

<style lang="scss">
  @import "~assets/scss/_variables.scss";
  .header {
    background-color: $background-header;
    padding: 15px 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    box-shadow: 0 0 10px rgba(34, 34, 34, 0.128);

    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__logo {
      text-transform: uppercase;
    }
    &__income {
      display: flex;
      align-items: center;
    }
    &__income-bar {
      background-color: $money-bar-bg;
      height: 15px;
      width: 250px;
      border-radius: 15px;
      position: relative;
      overflow: hidden;
    }
    &__income-progress {
      position: absolute;
      left: 0;
      top: 0;
      height: 15px;
      background-color: $money-bar-fill;
      border-radius: 15px;
    }
    &__income-count {
      margin: 0 0 0 15px;
    }
  }
</style>
