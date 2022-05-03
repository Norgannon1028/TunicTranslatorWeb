import Vue from 'vue'
import Router from 'vue-router'
import Translator from '@/views/Translator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Translator
    },
    {
      path: '/translator',
      name: 'Translator',
      component: Translator
    },
    {
      path: '/*',
      redirect: Translator
    }
  ]
})
