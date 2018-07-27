import Vue from 'vue'
import Router from 'vue-router'
import Axios from 'axios'
import header from '@/components/home'

import index1 from '@/components/index1'
import index2 from '@/components/index2'
import index3 from '@/components/index3'
import index4 from '@/components/index4'

import footer from '@/components/footer'


Vue.use(Router)
Vue.prototype.$axios=Axios

export default new Router({
  linkActiveClass: 'active',
  routes: [

    {path: '/',component:header,redirect: '/index1',
      //子路由
      children:[
        {path:'index1',name:'index1',component:index1},
        {path:'index2',name:'index2',component:index2},
        {path:'index3',name:'index3',component:index3},
        {path:'index4',name:'index4',component:index4}
      ]
    },
    {path:'/footer',component:footer}
  ]
})
