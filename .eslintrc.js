module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/no-irregular-whitespace': ['error', {
      skipComments: true
    }],
    'vue/multi-word-component-names': ['error', {
      ignores: [
        'index',
        'Header',
        'Default',
        'Button'
      ]
    }]
  }
}
