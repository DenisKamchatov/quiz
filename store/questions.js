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
              answers: ['1', '2', '4', '6'],
              correctAnswer: '6',
              price: 100,
              correct: undefined
            }
          ]
        }
      ]
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
  currentQuestion: [],
  currentDifficulty: undefined,
  currentCategory: undefined
})

export const actions = {
  findCategoriesByDifficulty (ctx, difficulty) {
    ctx.commit('SET_categoriesByDifficulty', difficulty)
  },
  findQuestionById (ctx, { category, id }) {
    ctx.commit('SET_questionByCategory', { category, id })
  },
  setCurrentDifficulty (ctx, difficulty) {
    ctx.commit('SET_currentDifficulty', difficulty)
  },
  setCurrentCategory (ctx, category) {
    ctx.commit('SET_currentCategory', category)
  }
}

export const mutations = {
  SET_categoriesByDifficulty (state, difficulty) {
    const choosedDifficulty = state.difficulties.find(item => item.name === difficulty)
    state.categoriesByDifficulty = choosedDifficulty.categories
  },
  SET_questionByCategory (state, { category, id }) {
    // console.log(category)
    // console.log(id)
    state.currentQuestion = category.questions[id]
  },
  SET_currentDifficulty (state, difficulty) {
    state.currentDifficulty = difficulty
  },
  SET_currentCategory (state, category) {
    state.currentCategory = category
  },
  SET_correctAnswer (state, correct) {
    const difficulty = state.difficulties.find(item => item.name === state.currentDifficulty)
    const category = difficulty.categories.find(item => item === state.currentCategory)
    const question = category.questions.find(item => item === state.currentQuestion)
    question.correct = correct
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
  },
  getCorrectAnswer (state) {
    return state.currentQuestion.correctAnswer
  },
  getCurrentDifficulty (state) {
    return state.currentDifficulty
  },
  getCurrentCategory (state) {
    return state.currentCategory
  }
}
