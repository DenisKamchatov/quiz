export const state = () => ({
  countCorrectAnswers: 0,
  income: 0
  // correctAnswers: []
})

export const actions = {
  setIncome (ctx) {
    ctx.commit('SET_resetIncome')
  }
}

export const mutations = {
  SET_incomeCount (state, price) {
    state.income += price
  },
  SET_resetIncome (state) {
    state.income = 0
  }
}

export const getters = {
  getIncome (state) {
    return state.income
  }
}
