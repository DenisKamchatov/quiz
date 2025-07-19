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
        },
        {
          name: 'Docker',
          categoryPrice: 2000,
          questions: [
            {
              question: 'Что такое Docker?',
              answers: [
                'Система управления базами данных',
                'Система виртуализации на уровне ОС для запуска приложений в контейнерах',
                'Язык программирования',
                'Система мониторинга'
              ],
              correctAnswer: 'Система виртуализации на уровне ОС для запуска приложений в контейнерах',
              price: 300,
              correct: undefined
            },
            {
              question: 'Что такое контейнер в Docker?',
              answers: [
                'Образ приложения',
                'Изолированный процесс с собственным окружением',
                'Сервер в облаке',
                'Файл конфигурации'
              ],
              correctAnswer: 'Изолированный процесс с собственным окружением',
              price: 600,
              correct: undefined
            },
            {
              question: 'Какой файл используется для создания Docker-образа?',
              answers: [
                '.dockerignore',
                'Dockerfile',
                'docker-compose.yml',
                'README.md'
              ],
              correctAnswer: 'Dockerfile',
              price: 400,
              correct: undefined
            },
            {
              question: 'Какая команда используется для запуска контейнера?',
              answers: [
                'docker run',
                'docker build',
                'docker pull',
                'docker stop'
              ],
              correctAnswer: 'docker run',
              price: 400,
              correct: undefined
            },
            {
              question: 'Как проверить список запущенных контейнеров?',
              answers: [
                'docker ps',
                'docker ls',
                'docker containers',
                'docker list'
              ],
              correctAnswer: 'docker ps',
              price: 800,
              correct: undefined
            },
            {
              question: 'Что такое Docker Hub?',
              answers: [
                'Инструмент для создания Docker-образов',
                'Онлайн-репозиторий Docker-образов',
                'Графический интерфейс для Docker',
                'Операционная система для контейнеров'
              ],
              correctAnswer: 'Онлайн-репозиторий Docker-образов',
              price: 300,
              correct: undefined
            }
          ]
        },
        {
          name: 'TypeScript',
          categoryPrice: 2000,
          questions: [
            {
              question: 'Какой тип данных в TypeScript используется для обозначения истинности?',
              answers: ['string', 'number', 'boolean', 'any'],
              correctAnswer: 'boolean',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какой тип в TypeScript позволяет переменной принимать любое значение?',
              answers: ['number', 'any', 'unknown', 'void'],
              correctAnswer: 'any',
              price: 300,
              correct: undefined
            },
            {
              question: 'Как объявить переменную с явным указанием типа?',
              answers: ['let x = 10', 'let x: number = 10', 'let x as number = 10', 'let x = number(10)'],
              correctAnswer: 'let x: number = 10',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какой тип указывается, если функция ничего не возвращает?',
              answers: ['null', 'undefined', 'void', 'never'],
              correctAnswer: 'void',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какой тип используется для значений, которые могут быть либо `null`, либо `undefined`?',
              answers: ['void', 'never', 'unknown', 'union (|)'],
              correctAnswer: 'union (|)',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какое ключевое слово используется для определения неизменяемых переменных?',
              answers: ['var', 'const', 'let', 'final'],
              correctAnswer: 'const',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какой тип используется для массивов в TypeScript?',
              answers: ['array<T>', 'T[]', 'list<T>', 'sequence<T>'],
              correctAnswer: 'T[]',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какой тип указывает, что значение может быть любого типа, но требует проверки перед использованием?',
              answers: ['any', 'unknown', 'void', 'never'],
              correctAnswer: 'unknown',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какой символ используется для указания необязательного свойства в интерфейсе?',
              answers: ['!', '?', ':', '|'],
              correctAnswer: '?',
              price: 300,
              correct: undefined
            },
            {
              question: 'Что означает ключевое слово `enum` в TypeScript?',
              answers: ['Класс', 'Тип', 'Перечисление', 'Функция'],
              correctAnswer: 'Перечисление',
              price: 300,
              correct: undefined
            }
          ]
        },
        {
          name: 'JavaScript',
          categoryPrice: 2000,
          questions: [
            {
              question: 'Как объявить переменную в JavaScript?',
              answers: ['var', 'let', 'const', 'все варианты верны'],
              correctAnswer: 'все варианты верны',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какой тип данных используется для хранения целых и дробных чисел?',
              answers: ['string', 'number', 'boolean', 'object'],
              correctAnswer: 'number',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какой оператор используется для сравнения по значению и типу?',
              answers: ['==', '===', '=', '!='],
              correctAnswer: '===',
              price: 300,
              correct: undefined
            },
            {
              question: 'Как вызвать функцию в JavaScript?',
              answers: ['function myFunction()', 'myFunction()', 'call myFunction', 'invoke myFunction'],
              correctAnswer: 'myFunction()',
              price: 300,
              correct: undefined
            },
            {
              question: 'Как добавить комментарий в JavaScript?',
              answers: ['// Это комментарий', '/* Это комментарий */', '\' Это комментарий', 'оба варианта // и /* */'],
              correctAnswer: 'оба варианты // и /* */',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какой метод выводит текст в консоль?',
              answers: ['console.log()', 'document.write()', 'window.alert()', 'все варианты верны'],
              correctAnswer: 'все варианты верны',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какой тип данных представляет собой неопределённое значение?',
              answers: ['null', 'undefined', 'NaN', 'void'],
              correctAnswer: 'undefined',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какой тип данных используется для хранения нескольких значений в упорядоченном списке?',
              answers: ['object', 'array', 'map', 'set'],
              correctAnswer: 'array',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какое ключевое слово используется для возврата значения из функции?',
              answers: ['return', 'break', 'continue', 'yield'],
              correctAnswer: 'return',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какой цикл используется для перебора элементов массива?',
              answers: ['for', 'for...of', 'for...in', 'while'],
              correctAnswer: 'for...of',
              price: 300,
              correct: undefined
            }
          ]
        },
        {
          name: 'Vue',
          categoryPrice: 2000,
          questions: [
            {
              question: 'Какое ключевое слово используется для объявления реактивной переменной в Vue 3 Composition API?',
              answers: ['ref', 'reactive', 'state', 'data'],
              correctAnswer: 'ref',
              price: 200,
              correct: undefined
            },
            {
              question: 'Какой директивой в Vue отображается текстовое содержимое?',
              answers: ['#text', 'v-text', 'v-html', 'v-model'],
              correctAnswer: 'v-text',
              price: 200,
              correct: undefined
            },
            {
              question: 'Какой директивой в Vue создаётся двустороннее связывание?',
              answers: ['v-bind', 'v-on', 'v-model', 'v-show'],
              correctAnswer: 'v-model',
              price: 200,
              correct: undefined
            },
            {
              question: 'Какой директивой в Vue можно скрыть элемент, оставив его в DOM?',
              answers: ['v-if', 'v-show', 'v-display', 'v-visibility'],
              correctAnswer: 'v-show',
              price: 200,
              correct: undefined
            },
            {
              question: 'Какой метод жизненного цикла вызывается после монтирования компонента?',
              answers: ['created', 'mounted', 'updated', 'beforeMount'],
              correctAnswer: 'mounted',
              price: 200,
              correct: undefined
            },
            {
              question: 'Какой директивой в Vue можно выполнить метод при клике?',
              answers: ['v-click', 'v-on:click', '@click', 'оба варианта v-on:click и @click'],
              correctAnswer: 'оба варианта v-on:click и @click',
              price: 200,
              correct: undefined
            },
            {
              question: 'Как создать компонент в Vue 3?',
              answers: [
                'export default { component: true }',
                'export default { setup() {} }',
                'export default { name: "MyComponent", setup() {} }',
                'все варианты верны'
              ],
              correctAnswer: 'export default { name: "MyComponent", setup() {} }',
              price: 200,
              correct: undefined
            },
            {
              question: 'Какой директивой можно отрендерить список элементов?',
              answers: ['v-for', 'v-loop', 'v-each', 'v-repeat'],
              correctAnswer: 'v-for',
              price: 200,
              correct: undefined
            },
            {
              question: 'Какой функцией в Composition API можно отслеживать изменения реактивной переменной без указания зависимостей?',
              answers: ['watch', 'watchEffect', 'onWatch', 'observe'],
              correctAnswer: 'watchEffect',
              price: 200,
              correct: undefined
            },
            {
              question: 'Как подключить Vue 3 в HTML через CDN?',
              answers: [
                '<script src="https://cdn.vuejs.org/vue.js ">',
                '<script src="https://unpkg.com/vue @3/dist/vue.global.js">',
                '<script src="https://vuejs.org/vue.min.js ">',
                'все варианты верны'
              ],
              correctAnswer: 'все варианты верны',
              price: 200,
              correct: undefined
            },
            {
              question: 'Какой директивой можно динамически применить класс к элементу?',
              answers: ['v-class', ':class', 'v-bind:class', 'оба варианта :class и v-bind:class'],
              correctAnswer: 'оба варианты :class и v-bind:class',
              price: 200,
              correct: undefined
            },
            {
              question: 'Что делает `v-if`?',
              answers: [
                'Скрывает элемент через CSS',
                'Условно рендерит элемент в DOM',
                'Применяет стиль',
                'Проверяет тип данных'
              ],
              correctAnswer: 'Условно рендерит элемент в DOM',
              price: 200,
              correct: undefined
            },
            {
              question: 'Какой метод используется для регистрации дочерних компонентов?',
              answers: [
                'components: { Child }',
                'setup() { return { Child } }',
                'import Child from "./Child.vue"',
                'все варианты верны'
              ],
              correctAnswer: 'components: { Child }',
              price: 200,
              correct: undefined
            },
            {
              question: 'Как передать данные из родителя в дочерний компонент?',
              answers: [
                'props',
                'emit',
                'provide/inject',
                'store'
              ],
              correctAnswer: 'props',
              price: 200,
              correct: undefined
            },
            {
              question: 'Какой функцией в Composition API можно создать реактивный объект?',
              answers: [
                'ref',
                'reactive',
                'computed',
                'watch'
              ],
              correctAnswer: 'reactive',
              price: 200,
              correct: undefined
            }
          ]
        },
        {
          name: 'SQL',
          categoryPrice: 2000,
          questions: [
            {
              question: 'Какой SQL-командой выбираются данные из таблицы?',
              answers: ['SELECT', 'INSERT', 'UPDATE', 'DELETE'],
              correctAnswer: 'SELECT',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какой оператор используется для фильтрации записей в SQL?',
              answers: ['FROM', 'JOIN', 'WHERE', 'ORDER BY'],
              correctAnswer: 'WHERE',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какое ключевое слово используется для сортировки результатов?',
              answers: ['GROUP BY', 'ORDER BY', 'SORT BY', 'ARRANGE'],
              correctAnswer: 'ORDER BY',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какой SQL-командой добавляется новая запись в таблицу?',
              answers: ['ADD', 'CREATE', 'INSERT INTO', 'NEW'],
              correctAnswer: 'INSERT INTO',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какой оператор используется для объединения строк из нескольких таблиц?',
              answers: ['JOIN', 'UNION', 'MERGE', 'CONNECT'],
              correctAnswer: 'JOIN',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какой тип данных в SQL используется для хранения текста переменной длины?',
              answers: ['CHAR', 'VARCHAR', 'TEXT', 'STRING'],
              correctAnswer: 'VARCHAR',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какой оператор используется для группировки результатов?',
              answers: ['GROUP BY', 'ORDER BY', 'HAVING', 'WHERE'],
              correctAnswer: 'GROUP BY',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какой SQL-командой удаляется таблица?',
              answers: ['DELETE TABLE', 'DROP TABLE', 'REMOVE TABLE', 'TRUNCATE TABLE'],
              correctAnswer: 'DROP TABLE',
              price: 300,
              correct: undefined
            },
            {
              question: 'Как выбрать все столбцы из таблицы `users`?',
              answers: ['SELECT users.*', 'SELECT * FROM users', 'SELECT all FROM users', 'SELECT ALL users'],
              correctAnswer: 'SELECT * FROM users',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какой SQL-функцией можно посчитать количество записей?',
              answers: ['SUM()', 'COUNT()', 'LENGTH()', 'TOTAL()'],
              correctAnswer: 'COUNT()',
              price: 300,
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
        },
        {
          name: 'Docker',
          categoryPrice: 4000,
          questions: [
            {
              question: 'Какой командой можно остановить запущенный контейнер?',
              answers: [
                'docker kill',
                'docker stop',
                'docker pause',
                'docker exit'
              ],
              correctAnswer: 'docker stop',
              price: 500,
              correct: undefined
            },
            {
              question: 'Что делает команда `docker build`?',
              answers: [
                'Запускает контейнер',
                'Останавливает контейнер',
                'Создаёт образ из Dockerfile',
                'Скачивает образ с Docker Hub'
              ],
              correctAnswer: 'Создаёт образ из Dockerfile',
              price: 700,
              correct: undefined
            },
            {
              question: 'Как указать порт при запуске контейнера?',
              answers: [
                '--port',
                '-p',
                '--expose',
                '-P'
              ],
              correctAnswer: '-p',
              price: 800,
              correct: undefined
            },
            {
              question: 'Для чего используется `docker-compose.yml`?',
              answers: [
                'Для создания образов',
                'Для описания и запуска многоконтейнерных приложений',
                'Для хранения переменных окружения',
                'Для логирования'
              ],
              correctAnswer: 'Для описания и запуска многоконтейнерных приложений',
              price: 900,
              correct: undefined
            },
            {
              question: 'Какой ключ используется для запуска контейнера в фоновом режиме?',
              answers: [
                '-f',
                '-d',
                '-b',
                '-r'
              ],
              correctAnswer: '-d',
              price: 1000,
              correct: undefined
            },
            {
              question: 'Что такое volume в Docker?',
              answers: [
                'Временное хранилище внутри контейнера',
                'Постоянное хранилище данных вне контейнера',
                'Образ с данными',
                'Лог-файл контейнера'
              ],
              correctAnswer: 'Постоянное хранилище данных вне контейнера',
              price: 700,
              correct: undefined
            },
            {
              question: 'Как проверить логи контейнера?',
              answers: [
                'docker log',
                'docker logs',
                'docker history',
                'docker trace'
              ],
              correctAnswer: 'docker logs',
              price: 300,
              correct: undefined
            },
            {
              question: 'Какой коммандой можно удалить все остановленные контейнеры?',
              answers: [
                'docker rm $(docker ps -a -q)',
                'docker rmi $(docker images -q)',
                'docker system prune',
                'docker container prune'
              ],
              correctAnswer: 'docker container prune',
              price: 1000,
              correct: undefined
            }
          ]
        },
        {
          name: 'TypeScript',
          categoryPrice: 4000,
          questions: [
            {
              question: 'Что означает `readonly` в TypeScript?',
              answers: ['Свойство можно изменять', 'Свойство нельзя изменять после инициализации', 'Свойство является статическим', 'Свойство скрыто'],
              correctAnswer: 'Свойство нельзя изменять после инициализации',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как объявить тип, который может быть либо строкой, либо числом?',
              answers: ['string & number', 'string | number', 'either<string, number>', 'string or number'],
              correctAnswer: 'string | number',
              price: 500,
              correct: undefined
            },
            {
              question: 'Какой тип используется для функций, которые никогда не возвращают значение?',
              answers: ['void', 'never', 'unknown', 'any'],
              correctAnswer: 'never',
              price: 600,
              correct: undefined
            },
            {
              question: 'Что делает `as const` в TypeScript?',
              answers: ['Превращает массив в объект', 'Делает значения литералами и неизменными', 'Превращает тип в any', 'Добавляет свойства к объекту'],
              correctAnswer: 'Делает значения литералами и неизменными',
              price: 700,
              correct: undefined
            },
            {
              question: 'Какой тип используется для дженериков в TypeScript?',
              answers: ['any', 'T', 'unknown', 'object'],
              correctAnswer: 'T',
              price: 500,
              correct: undefined
            },
            {
              question: 'Что такое `type` в TypeScript?',
              answers: ['Класс', 'Функция', 'Псевдоним типа', 'Интерфейс'],
              correctAnswer: 'Псевдоним типа',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как сделать все свойства объекта необязательными?',
              answers: ['Partial<T>', 'Required<T>', 'Readonly<T>', 'Optional<T>'],
              correctAnswer: 'Partial<T>',
              price: 700,
              correct: undefined
            },
            {
              question: 'Какой механизм позволяет ограничивать типы в дженериках?',
              answers: ['extends', 'implements', 'typeof', 'instanceof'],
              correctAnswer: 'extends',
              price: 700,
              correct: undefined
            },
            {
              question: 'Какой тип используется для объектов, у которых ключи ограничены определёнными строками?',
              answers: ['keyof', 'typeof', 'in', 'enum'],
              correctAnswer: 'keyof',
              price: 800,
              correct: undefined
            },
            {
              question: 'Что означает `Omit<T, K>`?',
              answers: ['Выбирает свойства из T', 'Убирает свойства K из T', 'Делает свойства T необязательными', 'Добавляет свойства K к T'],
              correctAnswer: 'Убирает свойства K из T',
              price: 800,
              correct: undefined
            }
          ]
        },
        {
          name: 'JavaScript',
          categoryPrice: 4000,
          questions: [
            {
              question: 'Что такое замыкание в JavaScript?',
              answers: [
                'Функция, которая имеет доступ к переменным внешней функции',
                'Функция, которая вызывает сама себя',
                'Объект, который содержит методы',
                'Переменная, которая хранит функцию'
              ],
              correctAnswer: 'Функция, которая имеет доступ к переменным внешней функции',
              price: 500,
              correct: undefined
            },
            {
              question: 'Что такое `this` в JavaScript?',
              answers: [
                'Ссылка на текущий объект',
                'Ключевое слово для создания классов',
                'Функция',
                'Метод'
              ],
              correctAnswer: 'Ссылка на текущий объект',
              price: 500,
              correct: undefined
            },
            {
              question: 'Какой метод преобразует JSON-строку в объект?',
              answers: [
                'JSON.stringify()',
                'JSON.parse()',
                'JSON.toObject()',
                'JSON.convert()'
              ],
              correctAnswer: 'JSON.parse()',
              price: 600,
              correct: undefined
            },
            {
              question: 'Что такое `event loop` в JavaScript?',
              answers: [
                'Процесс обработки событий',
                'Механизм обработки асинхронных операций',
                'Цикл, который проверяет, есть ли новые события',
                'Все варианты верны'
              ],
              correctAnswer: 'Все варианты верны',
              price: 700,
              correct: undefined
            },
            {
              question: 'Как получить элемент по ID в DOM?',
              answers: [
                'document.getElementById()',
                'document.querySelector()',
                'document.getElementsByClassName()',
                'оба варианта document.getElementById() и document.querySelector()'
              ],
              correctAnswer: 'оба варианта document.getElementById() и document.querySelector()',
              price: 500,
              correct: undefined
            },
            {
              question: 'Что такое `callback`-функция?',
              answers: [
                'Функция, переданная в другую функцию как аргумент',
                'Функция, которая вызывается после выполнения другой функции',
                'Функция, которая всегда возвращает true',
                'оба варианта: функция, переданная в другую функцию и вызываемая после'
              ],
              correctAnswer: 'оба варианта: функция, переданная в другую функцию и вызываемая после',
              price: 500,
              correct: undefined
            },
            {
              question: 'Какой метод используется для удаления последнего элемента массива?',
              answers: [
                'pop()',
                'shift()',
                'splice()',
                'slice()'
              ],
              correctAnswer: 'pop()',
              price: 700,
              correct: undefined
            },
            {
              question: 'Как создать промис в JavaScript?',
              answers: [
                'new Promise()',
                'Promise.create()',
                'async function',
                'new Future()'
              ],
              correctAnswer: 'new Promise()',
              price: 700,
              correct: undefined
            },
            {
              question: 'Что такое `prototype` в JavaScript?',
              answers: [
                'Свойство объекта',
                'Объект, который содержит методы и свойства для других объектов',
                'Класс',
                'Функция'
              ],
              correctAnswer: 'Объект, который содержит методы и свойства для других объектов',
              price: 800,
              correct: undefined
            },
            {
              question: 'Какой метод объединяет два или более массива?',
              answers: [
                'concat()',
                'push()',
                'join()',
                'slice()'
              ],
              correctAnswer: 'concat()',
              price: 800,
              correct: undefined
            }
          ]
        },
        {
          name: 'Vue',
          categoryPrice: 4000,
          questions: [
            {
              question: 'Что возвращает `setup()` в компоненте Vue?',
              answers: [
                'Объект с данными',
                'JSX',
                'Функция',
                'Только реактивные данные'
              ],
              correctAnswer: 'Объект с данными',
              price: 400,
              correct: undefined
            },
            {
              question: 'Как использовать `defineProps()` в Vue 3 с Composition API?',
              answers: [
                'import { defineProps } from "vue"',
                'const props = defineProps(["title"])',
                'function defineProps()',
                'оба варианта import и const'
              ],
              correctAnswer: 'оба варианта import и const',
              price: 400,
              correct: undefined
            },
            {
              question: 'Как обновить реактивную переменную, созданную через `ref`?',
              answers: [
                'variable = newValue',
                'variable.value = newValue',
                'variable.update(newValue)',
                'ref(variable, newValue)'
              ],
              correctAnswer: 'variable.value = newValue',
              price: 400,
              correct: undefined
            },
            {
              question: 'Какой хук используется для вычисления значения на основе других реактивных данных?',
              answers: [
                'watch',
                'watchEffect',
                'computed',
                'onMounted'
              ],
              correctAnswer: 'computed',
              price: 400,
              correct: undefined
            },
            {
              question: 'Как зарегистрировать событие в дочернем компоненте?',
              answers: [
                '$emit("event")',
                'const emit = defineEmits(["event"])',
                'emit("event")',
                'оба варианта const emit и emit'
              ],
              correctAnswer: 'оба варианты const emit и emit',
              price: 400,
              correct: undefined
            },
            {
              question: 'Как использовать `v-model` с кастомным именем?',
              answers: [
                'v-model:title',
                'v-model="title"',
                'v-model:title.sync',
                'v-model:title.lazy'
              ],
              correctAnswer: 'v-model:title',
              price: 400,
              correct: undefined
            },
            {
              question: 'Как получить ссылку на DOM-элемент в Vue 3?',
              answers: [
                'ref="element"',
                'const element = ref()',
                'this.$refs.element',
                'оба варианта const element и ref="element"'
              ],
              correctAnswer: 'оба варианты const element и ref="element"',
              price: 400,
              correct: undefined
            },
            {
              question: 'Что делает `v-once`?',
              answers: [
                'Рендерит элемент только один раз',
                'Обновляет элемент при изменении',
                'Не рендерит элемент',
                'Выполняет код один раз'
              ],
              correctAnswer: 'Рендерит элемент только один раз',
              price: 400,
              correct: undefined
            },
            {
              question: 'Как использовать `provide/inject` в Vue?',
              answers: [
                'provide: { data }, inject: ["data"]',
                'provide() { return { data } }, inject: { data }',
                'inject() { return { data } }, provide: { data }',
                'все варианты верны'
              ],
              correctAnswer: 'provide() { return { data } }, inject: { data }',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как использовать `v-slot`?',
              answers: [
                '<template v-slot:default>',
                '#default',
                '<template #default>',
                'все варианты верны'
              ],
              correctAnswer: 'все варианты верны',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как установить и использовать Vue Router?',
              answers: [
                'createRouter()',
                'useRouter()',
                'router-link',
                'все варианты верны'
              ],
              correctAnswer: 'все варианты верны',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как использовать `Suspense` в Vue 3?',
              answers: [
                'Для отображения загрузки асинхронных компонентов',
                'Для отложенного рендеринга',
                'Для работы с промисами',
                'все варианты верны'
              ],
              correctAnswer: 'все варианты верны',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как использовать `customRef()`?',
              answers: [
                'Для создания пользовательских реактивных ссылок',
                'Для работы с асинхронными данными',
                'Для оптимизации производительности',
                'все варианты верны'
              ],
              correctAnswer: 'все варианты верны',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как использовать `defineAsyncComponent()`?',
              answers: [
                'Для динамического импорта компонента',
                'Для асинхронной загрузки компонента',
                'Для оптимизации размера приложения',
                'все варианты верны'
              ],
              correctAnswer: 'все варианты верны',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как использовать `onBeforeUnmount()`?',
              answers: [
                'Для очистки данных перед удалением компонента',
                'Для остановки таймеров',
                'Для отписки от событий',
                'все варианты верны'
              ],
              correctAnswer: 'все варианты верны',
              price: 500,
              correct: undefined
            }
          ]
        },
        {
          name: 'SQL',
          categoryPrice: 4000,
          questions: [
            {
              question: 'Что делает `LEFT JOIN`?',
              answers: [
                'Возвращает все строки из левой таблицы и совпадающие из правой',
                'Возвращает только совпадающие строки из обеих таблиц',
                'Возвращает все строки из правой таблицы',
                'Возвращает строки, которых нет в правой таблице'
              ],
              correctAnswer: 'Возвращает все строки из левой таблицы и совпадающие из правой',
              price: 500,
              correct: undefined
            },
            {
              question: 'Какое ключевое слово используется для удаления дубликатов в SQL?',
              answers: ['DISTINCT', 'UNIQUE', 'SINGLE', 'ONLY'],
              correctAnswer: 'DISTINCT',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как использовать подзапрос в SQL?',
              answers: [
                'SELECT * FROM table WHERE id = 1',
                'SELECT * FROM table WHERE id IN (SELECT id FROM another_table)',
                'SELECT * FROM table JOIN another_table',
                'SELECT * FROM table WHERE id = VALUES'
              ],
              correctAnswer: 'SELECT * FROM table WHERE id IN (SELECT id FROM another_table)',
              price: 600,
              correct: undefined
            },
            {
              question: 'Что делает оператор `HAVING`?',
              answers: [
                'Фильтрует строки до группировки',
                'Фильтрует группы после группировки',
                'Сортирует результаты',
                'Объединяет таблицы'
              ],
              correctAnswer: 'Фильтрует группы после группировки',
              price: 700,
              correct: undefined
            },
            {
              question: 'Как создать индекс в SQL?',
              answers: [
                'CREATE INDEX',
                'ADD INDEX',
                'MAKE INDEX',
                'BUILD INDEX'
              ],
              correctAnswer: 'CREATE INDEX',
              price: 500,
              correct: undefined
            },
            {
              question: 'Какие из перечисленных типов JOIN существуют?',
              answers: [
                'INNER JOIN',
                'FULL OUTER JOIN',
                'CROSS JOIN',
                'все варианты верны'
              ],
              correctAnswer: 'все варианты верны',
              price: 500,
              correct: undefined
            },
            {
              question: 'Что делает функция `COALESCE()`?',
              answers: [
                'Возвращает первое ненулевое значение',
                'Преобразует типы данных',
                'Удаляет пробелы',
                'Объединяет строки'
              ],
              correctAnswer: 'Возвращает первое ненулевое значение',
              price: 700,
              correct: undefined
            },
            {
              question: 'Как получить уникальные значения по двум столбцам?',
              answers: [
                'SELECT column1, column2 FROM table',
                'SELECT DISTINCT column1, column2 FROM table',
                'SELECT UNIQUE column1, column2 FROM table',
                'SELECT DISTINCT column1 FROM table'
              ],
              correctAnswer: 'SELECT DISTINCT column1, column2 FROM table',
              price: 700,
              correct: undefined
            },
            {
              question: 'Как использовать оператор `BETWEEN`?',
              answers: [
                'WHERE age BETWEEN 10 AND 20',
                'WHERE age > 10 AND age < 20',
                'WHERE age IN (10, 20)',
                'WHERE age RANGE 10 TO 20'
              ],
              correctAnswer: 'WHERE age BETWEEN 10 AND 20',
              price: 800,
              correct: undefined
            },
            {
              question: 'Какой SQL-функцией можно округлить число?',
              answers: [
                'ROUND()',
                'CEIL()',
                'FLOOR()',
                'все варианты верны'
              ],
              correctAnswer: 'все варианты верны',
              price: 800,
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
        },
        {
          name: 'Docker',
          categoryPrice: 4000,
          questions: [
            {
              question: 'Какое значение принимает `CMD` в Dockerfile, если оно указано несколько раз?',
              answers: [
                'Все команды выполняются последовательно',
                'Только первое значение учитывается',
                'Выбрасывается ошибка',
                'Учитывается только последнее значение'
              ],
              correctAnswer: 'Учитывается только последнее значение',
              price: 400,
              correct: undefined
            },
            {
              question: 'Что делает инструкция `ENTRYPOINT` в Dockerfile?',
              answers: [
                'Задаёт аргументы по умолчанию',
                'Указывает команду, которая всегда выполняется при запуске контейнера',
                'Задаёт рабочую директорию',
                'Определяет пользовательский интерфейс'
              ],
              correctAnswer: 'Указывает команду, которая всегда выполняется при запуске контейнера',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как указать переменные окружения при запуске контейнера?',
              answers: [
                '--env',
                '-e',
                '--env-vars',
                '-v'
              ],
              correctAnswer: '-e',
              price: 400,
              correct: undefined
            },
            {
              question: 'Какой тип сети создаётся по умолчанию при запуске контейнера?',
              answers: [
                'bridge',
                'host',
                'none',
                'overlay'
              ],
              correctAnswer: 'bridge',
              price: 400,
              correct: undefined
            },
            {
              question: 'Что делает `docker swarm`?',
              answers: [
                'Управляет контейнерами на одном хосте',
                'Организует кластер контейнеров',
                'Управляет образами',
                'Отслеживает логи'
              ],
              correctAnswer: 'Организует кластер контейнеров',
              price: 600,
              correct: undefined
            },
            {
              question: 'Какой коммандой можно посмотреть информацию о контейнере в формате JSON?',
              answers: [
                'docker info',
                'docker inspect',
                'docker details',
                'docker describe'
              ],
              correctAnswer: 'docker inspect',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как создать пользовательскую сеть в Docker?',
              answers: [
                'docker network create mynet',
                'docker create network mynet',
                'docker network add mynet',
                'docker network setup mynet'
              ],
              correctAnswer: 'docker network create mynet',
              price: 500,
              correct: undefined
            },
            {
              question: 'Что означает опция `--build-arg` в команде `docker build`?',
              answers: [
                'Указывает аргументы для `RUN`',
                'Передаёт аргументы в `ARG` в Dockerfile',
                'Передаёт аргументы в `CMD`',
                'Передаёт аргументы в `ENV`'
              ],
              correctAnswer: 'Передаёт аргументы в `ARG` в Dockerfile',
              price: 700,
              correct: undefined
            },
            {
              question: 'Какой контейнерный runtime по умолчанию используется в Docker?',
              answers: [
                'containerd',
                'LXC',
                'runc',
                'CRI-O'
              ],
              correctAnswer: 'containerd',
              price: 800,
              correct: undefined
            },
            {
              question: 'Как синхронизировать локальные изменения с контейнером без пересборки образа?',
              answers: [
                'Использовать bind mounts',
                'Использовать `COPY` в Dockerfile',
                'Использовать `ADD`',
                'Использовать `docker commit`'
              ],
              correctAnswer: 'Использовать bind mounts',
              price: 700,
              correct: undefined
            }
          ]
        },
        {
          name: 'TypeScript',
          categoryPrice: 4000,
          questions: [
            {
              question: 'Что такое условные типы в TypeScript?',
              answers: ['Типы, основанные на значениях', 'Типы, которые зависят от других типов', 'Типы, основанные на переменных', 'Типы, которые зависят от функций'],
              correctAnswer: 'Типы, которые зависят от других типов',
              price: 700,
              correct: undefined
            },
            {
              question: 'Как использовать `infer` в условных типах?',
              answers: ['Для получения типа из другого типа', 'Для создания нового типа', 'Для проверки типа', 'Для приведения типа'],
              correctAnswer: 'Для получения типа из другого типа',
              price: 800,
              correct: undefined
            },
            {
              question: 'Что делает `never` в TypeScript?',
              answers: ['Означает, что значение не определено', 'Означает, что функция всегда выбрасывает ошибку или никогда не завершается', 'Означает пустое значение', 'Означает любой тип'],
              correctAnswer: 'Означает, что функция всегда выбрасывает ошибку или никогда не завершается',
              price: 800,
              correct: undefined
            },
            {
              question: 'Какой тип позволяет извлечь тип значения из Promise?',
              answers: ['Awaited<T>', 'PromiseType<T>', 'Unwrapped<T>', 'Resolved<T>'],
              correctAnswer: 'Awaited<T>',
              price: 800,
              correct: undefined
            },
            {
              question: 'Как работает `keyof typeof obj`?',
              answers: ['Возвращает типы всех свойств', 'Возвращает типы всех методов', 'Возвращает строковые ключи объекта', 'Возвращает тип самого объекта'],
              correctAnswer: 'Возвращает строковые ключи объекта',
              price: 700,
              correct: undefined
            },
            {
              question: 'Как использовать `Record<Keys, Type>`?',
              answers: ['Для создания объекта с указанными ключами и типами', 'Для создания массива', 'Для создания класса', 'Для создания интерфейса'],
              correctAnswer: 'Для создания объекта с указанными ключами и типами',
              price: 700,
              correct: undefined
            },
            {
              question: 'Что делает `Pick<T, K>`?',
              answers: ['Убирает свойства K из T', 'Выбирает свойства K из T', 'Делает свойства T необязательными', 'Добавляет свойства K к T'],
              correctAnswer: 'Выбирает свойства K из T',
              price: 700,
              correct: undefined
            },
            {
              question: 'Как сделать все свойства объекта обязательными?',
              answers: ['Partial<T>', 'Required<T>', 'Readonly<T>', 'Optional<T>'],
              correctAnswer: 'Required<T>',
              price: 700,
              correct: undefined
            },
            {
              question: 'Что такое `Mapped Types`?',
              answers: ['Типы, созданные на основе других типов с изменёнными свойствами', 'Типы, основанные на массивах', 'Типы, основанные на функциях', 'Типы, основанные на классах'],
              correctAnswer: 'Типы, созданные на основе других типов с изменёнными свойствами',
              price: 800,
              correct: undefined
            },
            {
              question: 'Как использовать `Exclude<T, U>`?',
              answers: ['Добавляет типы из U к T', 'Убирает типы U из T', 'Объединяет типы T и U', 'Проверяет, является ли T подтипом U'],
              correctAnswer: 'Убирает типы U из T',
              price: 800,
              correct: undefined
            }
          ]
        },
        {
          name: 'JavaScript',
          categoryPrice: 4000,
          questions: [
            {
              question: 'Что такое `event delegation` в JavaScript?',
              answers: [
                'Обработка событий на дочерних элементах через родительский',
                'Обработка событий на нескольких элементах одновременно',
                'Создание событий программно',
                'Отправка события на сервер'
              ],
              correctAnswer: 'Обработка событий на дочерних элементах через родительский',
              price: 700,
              correct: undefined
            },
            {
              question: 'Что такое `IIFE` в JavaScript?',
              answers: [
                'Immediately Invoked Function Expression',
                'Функция, которая вызывается после определения',
                'Функция, которая создаёт локальную область видимости',
                'все варианты верны'
              ],
              correctAnswer: 'все варианты верны',
              price: 800,
              correct: undefined
            },
            {
              question: 'Как работает `this` в стрелочных функциях?',
              answers: [
                'Всегда ссылается на window',
                'Наследует значение `this` из внешней области видимости',
                'Ссылается на саму функцию',
                'Не имеет собственного `this`'
              ],
              correctAnswer: 'Наследует значение `this` из внешней области видимости',
              price: 800,
              correct: undefined
            },
            {
              question: 'Что такое `currying` в JavaScript?',
              answers: [
                'Создание новых функций из существующих',
                'Преобразование функции с несколькими аргументами в последовательность функций с одним аргументом',
                'Объединение функций',
                'Использование функции внутри другой функции'
              ],
              correctAnswer: 'Преобразование функции с несколькими аргументами в последовательность функций с одним аргументом',
              price: 800,
              correct: undefined
            },
            {
              question: 'Какой метод позволяет привязать `this` к функции?',
              answers: [
                'bind()',
                'call()',
                'apply()',
                'все варианты верны'
              ],
              correctAnswer: 'все варианты верны',
              price: 700,
              correct: undefined
            },
            {
              question: 'Что такое `debounce` в JavaScript?',
              answers: [
                'Функция, которая ограничивает частоту вызова другой функции',
                'Функция, которая вызывается после определённого времени без вызова',
                'Функция, которая выполняется один раз',
                'оба варианта: ограничивает частоту и вызывается после таймера'
              ],
              correctAnswer: 'оба варианта: ограничивает частоту и вызывается после таймера',
              price: 700,
              correct: undefined
            },
            {
              question: 'Как работает `event.preventDefault()`?',
              answers: [
                'Останавливает выполнение функции',
                'Отменяет стандартное поведение браузера для события',
                'Удаляет событие',
                'Предотвращает повторный вызов события'
              ],
              correctAnswer: 'Отменяет стандартное поведение браузера для события',
              price: 700,
              correct: undefined
            },
            {
              question: 'Что такое `Promise.race()`?',
              answers: [
                'Возвращает первый выполненный промис',
                'Возвращает все промисы',
                'Возвращает промис, если все выполнились успешно',
                'Возвращает промис, если хотя бы один выполнился'
              ],
              correctAnswer: 'Возвращает первый выполненный промис',
              price: 700,
              correct: undefined
            },
            {
              question: 'Что такое `Proxy` в JavaScript?',
              answers: [
                'Объект, который оборачивает другой объект и может перехватывать операции над ним',
                'Тип данных',
                'Функция',
                'Метод'
              ],
              correctAnswer: 'Объект, который оборачивает другой объект и может перехватывать операции над ним',
              price: 800,
              correct: undefined
            },
            {
              question: 'Как работает `async/await`?',
              answers: [
                'Упрощает работу с промисами',
                'Позволяет писать асинхронный код как синхронный',
                'Работает только с `Promise`',
                'все варианты верны'
              ],
              correctAnswer: 'все варианты верны',
              price: 800,
              correct: undefined
            }
          ]
        },
        {
          name: 'Vue',
          categoryPrice: 4000,
          questions: [
            {
              question: 'Что делает `shallowRef()` в Vue 3?',
              answers: [
                'Создаёт реактивную ссылку, но не делает внутренние свойства реактивными',
                'Создаёт реактивный объект',
                'Создаёт глубокую реактивность',
                'Создаёт реактивность только для массивов'
              ],
              correctAnswer: 'Создаёт реактивную ссылку, но не делает внутренние свойства реактивными',
              price: 500,
              correct: undefined
            },
            {
              question: 'Что делает `triggerRef()`?',
              answers: [
                'Обновляет значение ref',
                'Ручное обновление shallowRef',
                'Запускает перерендер компонента',
                'Все варианты верны'
              ],
              correctAnswer: 'Ручное обновление shallowRef',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как использовать `watch()` с несколькими источниками?',
              answers: [
                'watch([source1, source2], callback)',
                'watch(source1, source2, callback)',
                'watch(() => [source1, source2], callback)',
                'оба варианта watch([source1, source2] и watch(() => [source1, source2]'
              ],
              correctAnswer: 'оба варианта watch([source1, source2] и watch(() => [source1, source2]',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как реализовать кастомный хук в Vue 3?',
              answers: [
                'Создать функцию, возвращающую реактивные данные и методы',
                'Использовать defineProps',
                'Использовать defineEmits',
                'Все варианты верны'
              ],
              correctAnswer: 'Создать функцию, возвращающую реактивные данные и методы',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как работает `toRefs()`?',
              answers: [
                'Превращает реактивный объект в объект с ref-ами',
                'Превращает обычный объект в реактивный',
                'Создаёт вычисляемые свойства',
                'Создаёт реактивность для массива'
              ],
              correctAnswer: 'Превращает реактивный объект в объект с ref-ами',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как использовать `defineProps()` с типами?',
              answers: [
                'defineProps({ title: String })',
                'defineProps(["title"])',
                'defineProps({ title: { type: String, required: true } })',
                'все варианты верны'
              ],
              correctAnswer: 'все варианты верны',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как использовать `defineEmits()`?',
              answers: [
                'defineEmits(["update"])',
                'const emit = defineEmits(["update"])',
                'emit("update")',
                'все варианты верны'
              ],
              correctAnswer: 'все варианты верны',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как использовать `defineModel()`?',
              answers: [
                'Для упрощения работы с v-model',
                'Для создания реактивной модели',
                'Для работы с формами',
                'все варианты верны'
              ],
              correctAnswer: 'Для упрощения работы с v-model',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как использовать `useAttrs()`?',
              answers: [
                'Для получения всех необработанных атрибутов',
                'Для передачи атрибутов дочерним компонентам',
                'Для работы с props',
                'все варианты верны'
              ],
              correctAnswer: 'все варианты верны',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как использовать `useSlots()`?',
              answers: [
                'Для работы с содержимым между тегами компонента',
                'Для работы с v-slot',
                'Для создания слотов',
                'все варианты верны'
              ],
              correctAnswer: 'все варианты верны',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как использовать `useId()`?',
              answers: [
                'Для генерации уникального ID',
                'Для работы с формами',
                'Для работы с accessibility',
                'все варианты верны'
              ],
              correctAnswer: 'все варианты верны',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как использовать `useRouter()`?',
              answers: [
                'Для навигации между страницами',
                'Для программного изменения маршрута',
                'Для получения текущего маршрута',
                'все варианты верны'
              ],
              correctAnswer: 'все варианты верны',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как использовать `useStore()`?',
              answers: [
                'Для работы с Vuex',
                'Для работы с Pinia',
                'Для глобального управления состоянием',
                'все варианты верны'
              ],
              correctAnswer: 'все варианты верны',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как использовать `useFetch()`?',
              answers: [
                'Для выполнения HTTP-запросов',
                'Для работы с асинхронными данными',
                'Встроенная функция в Nuxt 3',
                'все варианты верны'
              ],
              correctAnswer: 'все варианты верны',
              price: 500,
              correct: undefined
            },
            {
              question: 'Как использовать `useAsyncData()`?',
              answers: [
                'Для асинхронной загрузки данных на сервере',
                'В Nuxt 3',
                'Для SSR',
                'все варианты верны'
              ],
              correctAnswer: 'все варианты верны',
              price: 500,
              correct: undefined
            }
          ]
        },
        {
          name: 'SQL',
          categoryPrice: 4000,
          questions: [
            {
              question: 'Что такое CTE (Common Table Expression)?',
              answers: [
                'Таблица, созданная с помощью CREATE TABLE',
                'Временная таблица, видимая только в текущем запросе',
                'Представление',
                'Хранимая процедура'
              ],
              correctAnswer: 'Временная таблица, видимая только в текущем запросе',
              price: 700,
              correct: undefined
            },
            {
              question: 'Как работает `RANK()` в SQL?',
              answers: [
                'Назначает уникальный номер строкам',
                'Назначает номер с пропусками при совпадении значений',
                'Назначает номер без пропусков при совпадении',
                'Не поддерживается в SQL'
              ],
              correctAnswer: 'Назначает номер с пропусками при совпадении значений',
              price: 800,
              correct: undefined
            },
            {
              question: 'Что делает `PIVOT` в SQL?',
              answers: [
                'Переворачивает таблицу',
                'Преобразует строки в столбцы',
                'Группирует данные',
                'Сортирует данные'
              ],
              correctAnswer: 'Преобразует строки в столбцы',
              price: 800,
              correct: undefined
            },
            {
              question: 'Как использовать оконные функции в SQL?',
              answers: [
                'SUM(sales) OVER(PARTITION BY region)',
                'SUM(sales) GROUP BY region',
                'SUM(sales) WHERE region',
                'SUM(sales) ORDER BY region'
              ],
              correctAnswer: 'SUM(sales) OVER(PARTITION BY region)',
              price: 800,
              correct: undefined
            },
            {
              question: 'Что такое транзакция в SQL?',
              answers: [
                'Группа SQL-команд, выполняемых как единое целое',
                'Одна SQL-команда',
                'Функция базы данных',
                'Представление'
              ],
              correctAnswer: 'Группа SQL-команд, выполняемых как единое целое',
              price: 700,
              correct: undefined
            },
            {
              question: 'Какой оператор используется для создания представления?',
              answers: [
                'CREATE TABLE',
                'CREATE VIEW',
                'CREATE FUNCTION',
                'CREATE PROCEDURE'
              ],
              correctAnswer: 'CREATE VIEW',
              price: 700,
              correct: undefined
            },
            {
              question: 'Что такое `UNION` в SQL?',
              answers: [
                'Объединяет результаты двух запросов без дубликатов',
                'Объединяет результаты с дубликатами',
                'Возвращает только совпадающие строки',
                'Удаляет дубликаты'
              ],
              correctAnswer: 'Объединяет результаты двух запросов без дубликатов',
              price: 700,
              correct: undefined
            },
            {
              question: 'Как использовать `CASE WHEN` в SQL?',
              answers: [
                'SELECT CASE WHEN age > 18 THEN "adult" ELSE "minor" END',
                'SELECT IF(age > 18, "adult", "minor")',
                'SELECT SWITCH(age > 18, "adult", "minor")',
                'SELECT IF ELSE age > 18'
              ],
              correctAnswer: 'SELECT CASE WHEN age > 18 THEN "adult" ELSE "minor" END',
              price: 700,
              correct: undefined
            },
            {
              question: 'Как ограничить количество возвращаемых строк в SQL?',
              answers: [
                'LIMIT',
                'TOP',
                'ROWNUM',
                'все варианты верны'
              ],
              correctAnswer: 'все варианты верны',
              price: 800,
              correct: undefined
            },
            {
              question: 'Что такое `SELF JOIN`?',
              answers: [
                'Соединение таблицы с самой собой',
                'Соединение двух разных таблиц',
                'Соединение с временной таблицей',
                'Соединение с представлением'
              ],
              correctAnswer: 'Соединение таблицы с самой собой',
              price: 800,
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
