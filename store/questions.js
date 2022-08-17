export const state = () => ({
  difficulties: [
    {
      name: 'Легкая',
      categories: [
        {
          name: 'Математика',
          questions: [
            {
              question: 'Сколько будет 1+3?',
              answers: ['5', '1', '4', '2'],
              correctAnswer: '4',
              price: 100,
              correct: undefined
            },
            {
              question: 'Сколько будет 1+5?',
              answers: ['5', '1', '4', '2'],
              correctAnswer: '4',
              price: 100,
              correct: undefined
            }
          ]
        }
      ]
      // questions: [
      //   {
      //     question: 'Сколько будет 1+3?',
      //     answers: ['5', '1', '4', '2'],
      //     correctAnswer: '4',
      //     category: 'math',
      //     price: 100,
      //     correct: undefined
      //   }
      // ]
    },
    {
      name: 'Нормальная',
      questions: [
        {
        }
      ]
    },
    {
      name: 'Сложная',
      questions: [
        {
        }
      ]
    }
  ],
  categoriesByDifficulty: [],
  categoryPrice: 0,
  currentQuestion: []
})

export const actions = {
  findCategoriesByDifficulty (ctx, difficulty) {
    ctx.commit('SET_categoriesByDifficulty', difficulty)
  },
  findQuestionById (ctx, { category, id }) {
    ctx.commit('SET_questionByCategory', { category, id })
  }
}

export const mutations = {
  SET_categoriesByDifficulty (state, difficulty) {
    const choosedDifficulty = state.difficulties.find(item => item.name === difficulty)
    state.categoriesByDifficulty = choosedDifficulty.categories
  },
  SET_questionByCategory (state, { category, id }) {
    state.currentQuestion = category.questions[id]
  }
}

export const getters = {
  getDifficulties (state) {
    return state.difficulties
  },
  getCategoriesByDifficulty (state) {
    return state.categoriesByDifficulty
  },
  getCurrentQuestion (state) {
    return state.currentQuestion
  }
}
