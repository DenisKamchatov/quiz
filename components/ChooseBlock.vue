<template>
  <div class="main__difficulty difficulty">
    <div class="difficulty__top">
      <h4 v-if="$route.name === 'difficulty'" class="difficulty__title">
        Выберите сложность
      </h4>
      <h4 v-else class="difficulty__title">
        Выберите категорию
      </h4>
    </div>
    <ul v-if="$route.name === 'difficulty'" class="difficulty__list">
      <nuxt-link
        v-for="(difficulty, index) of difficulties"
        :key="index"
        class="difficulty__item"
        :to="{name: 'category', params: { difficulty: difficulty.name }}"
        tag="li"
      >
        {{ difficulty.name }}
      </nuxt-link>
    </ul>
    <ul v-else-if="$route.name === 'category'" class="difficulty__list">
      <nuxt-link
        v-for="(category, index) of categories"
        :key="index"
        class="difficulty__item"
        :to="{name: 'questions-id', params: { category: category, id: 0 }}"
        tag="li"
      >
        {{ category.name }}
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ChooseBlock',
  props: {
    difficulties: {
      type: Array,
      default () {
        return []
      }
    },
    categories: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    ...mapGetters({
      currentDifficulty: 'questions/getCurrentDifficulty'
    })
  },
  mounted () {
    this.setDifficulty(this.$route.params.difficulty ? this.$route.params.difficulty : this.currentDifficulty)
  },
  methods: {
    ...mapActions({
      setDifficulty: 'questions/setCurrentDifficulty'
    })
  }
}
</script>

<style lang="scss">
  @import "~assets/scss/_variables.scss";
  .difficulty {
    background-color: $table-bg;
    border: 7px solid $table-border;
    border-radius: 40px;
    margin: 40px auto 0 auto;
    width: 50%;

    &__top {
      background-color: $table-header;
      border-radius: 40px 40px 0 0;
      padding: 30px 20px;
      margin: -7px 0 0 0;
    }
    &__title {
      text-align: center;
    }
    &__list {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 90%;
      margin: 0 auto;
      padding: 30px 0;
    }
    &__item {
      background-color: $variant-bg;
      color: $variant-text;
      text-align: center;
      font-size: 30px;
      font-weight: 500;
      padding: 25px 15px;
      border-radius: 20px;
      cursor: pointer;
    }
    &__item:not(:first-of-type) {
      margin: 30px 0 0 0;
    }
  }
</style>
