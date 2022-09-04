export const state = () => ({
  difficulties: [
    {
      name: 'Легкая',
      categories: [
        {
          name: 'Математика',
          categoryPrice: 2000,
          questions: [
            {
              question: 'Сколько будет 1+3?',
              answers: ['5', '1', '4', '2'],
              correctAnswer: '4',
              price: 300,
              correct: undefined
            },
            {
              question: 'Сколько будет 1+5?',
              answers: ['1', '2', '4', '6'],
              correctAnswer: '6',
              price: 300,
              correct: undefined
            },
            {
              question: 'Сколько будет 65÷5?',
              answers: ['10', '11', '13', '9'],
              correctAnswer: '13',
              price: 600,
              correct: undefined
            },
            {
              question: 'Сколько будет 11*11?',
              answers: ['101', '144', '122', '121'],
              correctAnswer: '121',
              price: 700,
              correct: undefined
            },
            {
              question: 'Сколько будет 13*13?',
              answers: ['169', '144', '196', '189'],
              correctAnswer: '169',
              price: 700,
              correct: undefined
            }
          ]
        },
        {
          name: 'География',
          categoryPrice: 1000,
          questions: [
            {
              question: 'Столица России',
              answers: ['Екатеринбург', 'Санкт-Петербург', 'Новосибирск', 'Москва'],
              correctAnswer: 'Москва',
              price: 100,
              correct: undefined
            },
            {
              question: 'Где находится Бразилия?',
              answers: ['Южная Америка', 'Африка', 'Северная Америка', 'Азия'],
              correctAnswer: 'Южная Америка',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какая самая большая страна по площади?',
              answers: ['США', 'Китай', 'Канада', 'Россия'],
              correctAnswer: 'Россия',
              price: 200,
              correct: undefined
            },
            {
              question: 'На флаге какой страны изображен клевер?',
              answers: ['США', 'Ирландия', 'Ливия', 'Канада'],
              correctAnswer: 'Канада',
              price: 300,
              correct: undefined
            },
            {
              question: 'На какой реке стоит Санкт-Петербург',
              answers: ['Амур', 'Петер', 'Днепр', 'Нева'],
              correctAnswer: 'Нева',
              price: 400,
              correct: undefined
            }
          ]
        },
        {
          name: 'Биология',
          categoryPrice: 3000,
          questions: [
            {
              question: 'Какое животное обитает только в Китае?',
              answers: ['Слон', 'Макака', 'Панда', 'Коала'],
              correctAnswer: 'Панда',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как называется личинка бабочки?',
              answers: ['Паук', 'Гусеница', 'Червяк', 'Жук'],
              correctAnswer: 'Гусеница',
              price: 400,
              correct: undefined
            },
            {
              question: 'Какая бабочка вредит людям тем, что портит одежду?',
              answers: ['Огнёвка', 'Махаон', 'Моль', 'Капустница'],
              correctAnswer: 'Моль',
              price: 700,
              correct: undefined
            },
            {
              question: 'Какая из этих птиц умеет летать?',
              answers: ['Страус', 'Пингвин', 'Киви', 'Гусь'],
              correctAnswer: 'Гусь',
              price: 800,
              correct: undefined
            },
            {
              question: 'Где у кузнечика ухо?',
              answers: ['На лапках', 'На голове', 'В глазах', 'На брюхе'],
              correctAnswer: 'На лапках',
              price: 900,
              correct: undefined
            }
          ]
        },
        {
          name: 'Русский язык',
          categoryPrice: 2000,
          questions: [
            {
              question: 'Как называется раздел науки о языке, который изучает звуковой состав русского языка?',
              answers: ['Фонетика', 'Синтаксис ', 'Морфология', 'Морфемика '],
              correctAnswer: 'Фонетика',
              price: 400,
              correct: undefined
            },
            {
              question: 'Сколько букв в русском алфавите',
              answers: ['31', '30', '33', '34'],
              correctAnswer: '33',
              price: 400,
              correct: undefined
            },
            {
              question: 'Какого падежа не существует в русском языке?',
              answers: ['Именительный', 'Дательный', 'Предложительный', 'Творительный'],
              correctAnswer: 'Предложительный',
              price: 600,
              correct: undefined
            },
            {
              question: 'Какую форму множественного числа имеет слово «пальто»?',
              answers: ['Пальты', 'Польта', 'Пальта', 'Пальто'],
              correctAnswer: 'Пальто',
              price: 700,
              correct: undefined
            },
            {
              question: 'Какая морфема располагается в начале слова?',
              answers: ['Суффикс', 'Окончание', 'Приставка', 'Дефис'],
              correctAnswer: 'Приставка',
              price: 500,
              correct: undefined
            }
          ]
        }
      ]
    },
    {
      name: 'Нормальная',
      categories: [
        {
          name: 'Информатика',
          categoryPrice: 4000,
          questions: [
            {
              question: 'Как называются данные или программа на магнитном диске?',
              answers: ['Папка', 'Файл', 'Диск', 'Информация'],
              correctAnswer: 'Файл',
              price: 500,
              correct: undefined
            },
            {
              question: 'Что необходимо компьютеру для нормальной работы?',
              answers: ['Прикладные программы', 'Видеокарта', 'Диск в дисководе', 'Операционная система'],
              correctAnswer: 'Операционная система',
              price: 700,
              correct: undefined
            },
            {
              question: 'Что выполняет компьютер сразу после включения POWER?',
              answers: ['Перезагрузка системы', 'Проверку устройств', 'Загрузку программы', 'Обновление программ'],
              correctAnswer: 'Проверку устройств',
              price: 900,
              correct: undefined
            },
            {
              question: 'Что не является операционной системой?',
              answers: ['WINDOWS', 'Norton Commander', 'MS DOS', 'Linux'],
              correctAnswer: 'Norton Commander',
              price: 1000,
              correct: undefined
            },
            {
              question: 'Какая из программ является архиватором?',
              answers: ['RAR', 'DRWEB', 'NDD', 'Windows'],
              correctAnswer: 'RAR',
              price: 800,
              correct: undefined
            },
            {
              question: 'Мутанты, невидимки, черви - это',
              answers: ['Программы-утилиты', 'Виды антивирусных программ', 'Виды компьютерных вирусов', 'Разновидности игр'],
              correctAnswer: 'Виды компьютерных вирусов',
              price: 1200,
              correct: undefined
            }
          ]
        }
      ]
    },
    {
      name: 'Сложная',
      categories: [
        {
          name: 'Математика',
          categoryPrice: 4000,
          questions: [
            {
              question: 'Как ещё называют кубический дециметр?',
              answers: ['Аршин', 'Гектар', 'Метр', 'Литр'],
              correctAnswer: 'Литр',
              price: 500,
              correct: undefined
            },
            {
              question: 'В каких единицах измеряют массу алмазов?',
              answers: ['В граммах', 'В миллиграммах', 'В каратах'],
              correctAnswer: 'В каратах',
              price: 300,
              correct: undefined
            },
            {
              question: 'Две дочери, две матери и бабушка с внучкой. Сколько всего человек?',
              answers: ['Три', 'Шесть', 'Четыре', 'Два'],
              correctAnswer: 'Три',
              price: 400,
              correct: undefined
            },
            {
              question: 'Как называется отрезок, соединяющий середины боковых сторон трапеции?',
              answers: ['Биссектриса', 'Средняя линия', 'Медиана', 'Прямая'],
              correctAnswer: 'Средняя линия',
              price: 700,
              correct: undefined
            },
            {
              question: 'Чему равно произведение всех чисел?',
              answers: ['Нулю', '+∞', '-∞', 'Единице'],
              correctAnswer: 'Нулю',
              price: 700,
              correct: undefined
            },
            {
              question: 'Может ли при делении получиться ноль?',
              answers: ['Да', 'Нет'],
              correctAnswer: 'Да',
              price: 800,
              correct: undefined
            },
            {
              question: 'График функции у = х3?',
              answers: ['Кубическая парабола', 'Кубический эллипс', 'Кубическая гипербола', 'Синусоида'],
              correctAnswer: 'Кубическая парабола',
              price: 800,
              correct: undefined
            },
            {
              question: 'Переведите на древнегреческий язык слова «натянутая тетива»?',
              answers: ['Парабола', 'Отрезок', 'Гипотенуза', 'Гипербола'],
              correctAnswer: 'Гипотенуза',
              price: 1000,
              correct: undefined
            }
          ]
        }
      ]
    }
  ],
  categoriesByDifficulty: [],
  currentQuestion: [],
  currentDifficulty: undefined,
  currentCategory: undefined,
  currentCategoryPrice: undefined
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
    state.currentQuestion = category.questions[id]
  },
  SET_currentDifficulty (state, difficulty) {
    state.currentDifficulty = difficulty
  },
  SET_currentCategory (state, category) {
    state.currentCategoryPrice = category.categoryPrice
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
  },
  getCurrentCategoryPrice (state) {
    return state.currentCategoryPrice
  }
}
