import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
  if (to.path === '/home') {
    if (!store.state.app.coverShow) {
      console.log(store.state.app.coverShow)
      store.commit('handleHomeClick')
    }
    next()
  } else {
    console.log('bbbb')
    next()
  }
})
