export const state = () => ({
  completedPacks: [],
  income: 0
})

export const actions = {
  setIncome (ctx) {
    ctx.commit('SET_resetIncome')
  },
  setCompletedPack (ctx, pack) {
    ctx.commit('SET_addCompletedPack', pack)
  }
}

export const mutations = {
  SET_incomeCount (state, price) {
    state.income += price
  },
  SET_resetIncome (state) {
    state.income = 0
  },
  SET_addCompletedPack (state, pack) {
    if (!state.completedPacks.find(item => item === pack)) {
      state.completedPacks.push(pack)
    }
  }
}

export const getters = {
  getIncome (state) {
    return state.income
  },
  getCountCompletedPacks (state) {
    return state.completedPacks.length
  }
}
