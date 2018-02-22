import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Video from '@/components/Video'
import Roc from '@/components/Roc'
import Rpc from '@/components/Rpc'
import Usa from '@/components/Usa'
import Cda from '@/components/Cda'
import Page from '@/components/Page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/video',
      name: 'Video',
      component: Video,
      children:[
         { path: '/video/roc', component: Roc},
         { path: '/video/rpc', component: Rpc},
         { path: '/video/usa', component: Usa},
         { path: '/video/cda', component: Cda},
      ]
    },
    {
      path: '/page',
      name: 'Page',
      component: Page
    }
  ]
})
