<template>
  <main class="main container">
    <h2 class="main__title">
      Добро пожаловать!
    </h2>
    <div class="main__description">
      <h4 class="main__text">
        Это QUIZ-викторина, в которой нужно отвечать на вопросы и зарабатывать монеты.
      </h4>
      <h4 class="main__text">
        Если вы заработаете нужное количество денег, то победите!
      </h4>
      <h4 class="main__text">
        Однако если нет...
      </h4>
      <h4 class="main__text">
        То вы проиграете)
      </h4>
      <h4 class="main__text">
        Но не стоит отчаиваться! Вы всегда можете переиграть набор и выиграть!
      </h4>
    </div>
    <div class="main__button">
      <Button text="Нажмите, чтобы начать игру" link="difficulty" />
    </div>
  </main>
</template>

<script>
import { mapActions } from 'vuex'
import Button from '~/components/UI/Button.vue'
export default {
  name: 'IndexPage',
  components: { Button },
  transition: 'bounce',
  mounted () {
    this.resetIncome()
  },
  methods: {
    ...mapActions({
      resetIncome: 'setIncome'
    })
  }
}
</script>

<style lang="scss">
  @import "~assets/scss/_variables.scss";
  .main {
    &__title {
      margin: 80px 0 0 0;
      text-align: center;
    }
    &__description {
      width: 60%;
      margin: 40px auto 0 auto;

    }
    &__text {
      line-height: 1.3;
    }
    &__text:not(:first-of-type) {
      margin: 30px 0 0 0;
    }
    &__button {
      margin: 30px 0 0 0;
      display: flex;
      justify-content: center;
    }
  }
</style>
