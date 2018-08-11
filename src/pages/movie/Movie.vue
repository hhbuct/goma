<template>
  <div>
    <nav-bar nav-bar-style="default"></nav-bar>
    <div class="movie-detail-body">
      <div class="top-area"></div>
      <div class="item-simple">
        <div style="height: 35px;background: #4EAADE"></div>
        <div class="item-simple-shadow">
          <item-simple-content></item-simple-content>
        </div>
      </div>
      <div class="item-detail-content">
        <item-detail-content></item-detail-content>
      </div>
      <p class="line-dot"></p>
      <div class="item-resource">
        <item-resource></item-resource>
      </div>
      <footer-bar></footer-bar>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/common/NavBar'
import ItemSimpleContent from './components/ItemSimpleContent'
import ItemDetailContent from './components/ItemDetailContent'
import FooterBar from '../../components/common/FooterBar'
import ItemResource from './components/ItemResource'

export default {
  name: 'Movie',
  components: {ItemResource, FooterBar, ItemDetailContent, ItemSimpleContent, NavBar},
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.commit('coverHidden')
    })
  },
  mounted () {}
}
</script>

<style scoped lang="stylus">
  @import "../../assets/styles/global.styl"

  .movie-detail-body
    position relative
    margin-top 60px

  .top-area
    width 100%
    height 228px
    position absolute
    left 0
    top 0
    background #4EAADE

  .item-simple
    width $contentWidth px
    position relative
    margin 0 auto
    z-index 2

  .item-simple-shadow
    width $contentWidth px
    margin 0 auto
    position relative
    z-index 2
    padding 17px 11px 0
    background url("../../assets/images/movie_item_simple_shadow.png") no-repeat

  .item-detail-content
    width $contentWidth px
    margin 0 auto
    padding 10px 0

  .line-dot
    width $contentWidth px
    margin 0 auto 30px
    height 0
    border-bottom 1px dotted #ccc

  .item-resource
    width $contentWidth px
    margin 0 auto 60px

</style>
