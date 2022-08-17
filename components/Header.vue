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
        Количество пройденных наборов: 0
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
          <div class="header__income-progress" />
        </div>
        <h5 class="header__income-count">
          Заработок: 1200 из 3500
        </h5>
      </div>
      <h5 class="header__count">
        Количество пройденных наборов: 0
      </h5>
    </div>
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
  @import "~assets/scss/_variables.scss";
  .header {
    background-color: $background-header;
    padding: 15px 0;
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
    }
    &__income-progress {
      position: absolute;
      height: 15px;
      background-color: $money-bar-fill;
      width: 50%;
      border-radius: 15px;
    }
    &__income-count {
      margin: 0 0 0 15px;
    }
  }
</style>
