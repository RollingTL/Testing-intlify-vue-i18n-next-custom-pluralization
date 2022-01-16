import { createApp } from 'vue'
import App from './App.vue'

import { createI18n } from 'vue-i18n'
import { VERSION } from 'vue-i18n'
console.log(VERSION)

function customRule(choice, choicesLength, orgRule) {
  if (choice === 0) {
    return 0
  }
  const teen = choice > 10 && choice < 20
  const endsWithOne = choice % 10 === 1
  if (!teen && endsWithOne) {
    return 1
  }
  if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
    return 2
  }
  return choicesLength < 4 ? 2 : 3
}

const i18n = createI18n({
  globalInjection: true,
  legacy: false,
  pluralizationRules: {
    ru: customRule
  },
  locale: 'ru', // set locale
  fallbackLocale: 'ru', // set fallback locale
  messages: {
  ru: {
    car: '0 машин | {n} машина | {n} машины | {n} машин',
    banana: 'нет бананов | {n} банан | {n} банана | {n} бананов'
  }
}
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
