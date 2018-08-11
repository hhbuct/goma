const app = {
  state: {
    coverShow: true,
    isHomeSelected: false,
    isWideMovieSelected: false,
    isLiveSelected: false
  },
  actions: {},
  mutations: {
    coverHidden: (state) => {
      state.coverShow = false
    },
    handleHomeClick: state => {
      state.isHomeSelected = true
      state.isWideMovieSelected = false
      state.isLiveSelected = false
    },
    handleWideMovieClick: state => {
      state.isWideMovieSelected = true
      state.isHomeSelected = false
      state.isLiveSelected = false
    },
    handleLiveClick: state => {
      state.isLiveSelected = true
      state.isWideMovieSelected = false
      state.isWideMovieSelected = false
    },
    onHotMovieItemClick: state => {
      state.isHomeSelected = false
    }
  }
}

export default app
