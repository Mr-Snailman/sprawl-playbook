import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SprawlPlaybook from '@/components/SprawlPlaybook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SprawlPlaybook',
      component: SprawlPlaybook
    }
  ]
})
