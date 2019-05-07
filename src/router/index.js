import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layout/default'
import Blank from '@/layout/blank'
import goodsList from '@/page/goodsList'
import Index from '@/page/index'
import ChangeCity from '@/page/changeCity'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'default',
      component: Default,
      redirect: '/index',
      children: [{
        path: 's/:name',
        name: 'goods',
        component: goodsList
      }, {
        path: 'index',
        name: 'index',
        component: Index
      },
      {
        path: 'changeCity',
        name: 'changeCity',
        component: ChangeCity
      }
      ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: Blank
    }
  ]
})
