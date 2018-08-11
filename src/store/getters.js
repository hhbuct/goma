const getters = {
  coverShow: state => state.app.coverShow,
  isHomeSelected: state => () => state.app.isHomeSelected,
  isWideMovieSelected: state => () => state.app.isWideMovieSelected,
  isLiveSelected: state => () => state.app.isLiveSelected,
  onHotMovieItemClick: state => () => state.app.isHomeSelected
}

export default getters
