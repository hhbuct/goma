<template>
  <div class="home">
    <nav-bar navBarStyle="indicator"></nav-bar>
    <div class="main-content">
      <div class="part-one">
        <div class="top-header">
          <div class="top-search">
            <div class="indent"></div>
            <input type="text" class="search-input-area" title="search-keyword" placeholder="请输入关键词"
                   @focus="handleSearchInputFocus" @blur="handleSearchInputBlur">
            <div class="search-btn" ref="searchBtn" :class="{searchBtnExtra:isSearchInputFocus}">
              <i class="iconfont icon-search"></i>
            </div>
            <div class="search-tips" v-if="isSearchInputFocus"></div>
          </div>
        </div>
        <div class="home-swiper">
          <home-swiper></home-swiper>
        </div>
        <div class="today-hot">
          <today-hot></today-hot>
        </div>
      </div>
      <div class="part-two">
        <div class="funny-article">
          <funny-article></funny-article>
        </div>
        <div class="recommend-list">
          <recommend-list></recommend-list>
        </div>
      </div>
    </div>
    <div class="footer">
      <footer-bar></footer-bar>
    </div>
  </div>
</template>

<script>
import NavBar from '../../../components/common/NavBar'
import HomeSwiper from '../../../components/home/HomeSwiper'
import TodayHot from '../../../components/home/TodayHot'
import FunnyArticle from '../../../components/home/FunnyArticle'
import RecommendList from '../../../components/home/RecommendList'
import FooterBar from '../../../components/common/FooterBar'

export default {
  name: 'Home',
  components: {FooterBar, RecommendList, FunnyArticle, TodayHot, HomeSwiper, NavBar},
  data () {
    return {
      isSearchInputFocus: false
    }
  },
  methods: {
    handleSearchInputFocus () {
      this.isSearchInputFocus = true
    },
    handleSearchInputBlur () {
      this.isSearchInputFocus = false
    }
  },
  mounted () {
  },
  computed: {},
  watch: {
    isSearchInputFocus (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "../../../assets/styles/global.styl"

  .part-one
    height 1200px
    width 100vw
    background linear-gradient(#FFFFFF, #F5F5F5)

  .top-header
    width $contentWidth px
    height 90px
    margin 0 auto
    /*background orange*/
    display flex
    justify-content center
    align-items center

  .top-search
    width 500px
    height 40px
    display flex
    position relative
    justify-content center
    align-items center
    background white
    border 1px solid #e0e0e0
    border-radius 20px
    font-size 14px
    .indent
      width 20px

  .search-input-area
    flex 1

  input::-webkit-input-placeholder {
    font-size 13px
  }

  input:-moz-placeholder {
    font-size 13px
  }

  input::-moz-placeholder {
    font-size 13px
  }

  input:-ms-input-placeholder {
    font-size 13px
  }

  .search-btn
    width 55px
    height 34px
    display flex
    justify-content center
    align-items center
    margin-right 3px
    cursor pointer
    border-radius 20px
    .icon-search
      font-size 20px
      padding-left 4px
    &:hover
      color white
      background #4EAADE

  .searchBtnExtra
    color white
    background #4EAADE

  .search-tips
    width 478px
    height 300px
    position absolute
    top 40px
    left 10px
    background #ccc
    opacity 0.1

  .home-swiper
    width $contentWidth px
    margin 2px auto 0

  .today-hot
    width $contentWidth px
    margin 45px auto 0

  .part-two
    width 100vw

  .funny-article
    width $contentWidth px
    height auto
    margin 45px auto 0

  .recommend-list
    width $contentWidth px
    height auto
    margin 45px auto 0

  .footer
    margin-top 65px
    width 100vw
    height auto

</style>
