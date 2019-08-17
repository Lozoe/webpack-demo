import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/scripts/pages/HelloWorld'
import TestPage from '@/scripts/pages/TestPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: 'testPage',
      name: 'TestPage',
      component: TestPage
    }
  ]
})
