import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/home/HomePage'
import Home from '../pages/home/components/Home'
import WideMovie from '../pages/home/components/WideMovie'
import Live from '../pages/home/components/Live'
import Sso from '../pages/Sso'
import Movie from '../pages/movie/Movie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/wide-movie',
          name: 'WideMovie',
          component: WideMovie
        },
        {
          path: '/live',
          name: 'Live',
          component: Live
        }
      ]
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/sso',
      name: 'Sso',
      component: Sso
    }
  ]
})
