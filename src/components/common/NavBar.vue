<template>
  <div>
    <nav :class="{headerbar:!coverShow}">
      <div class="nav-items">
        <div class="nav-left">
          <div class="main-logo">
            <h1><a :href=domainName title="goma走马网">goma走马网</a></h1>
          </div>
          <div class="nav-left-item" @click="handleHomeSelected" id="homeItem">首页</div>
          <div class="nav-left-item" @click="handleWideMovieSelected" id="wideMovieItem">影视</div>
          <div class="nav-left-item" @click="handleLiveSelected" id="liveItem">直播</div>
        </div>
        <div class="nav-right">
          <ul>
            <li class="nav-right-item" v-on:mouseenter="showQrCodeTip" v-on:mouseleave="hiddenQrCodeTip">
              <div class="qrcode-tip-angle" v-if="qrCodeTipShow"></div>
              <i class="iconfont icon-mobile"></i>
              <a href="javascript:;">App下载</a>
              <i class="iconfont icon-drop-down"></i>
              <div class="qrcode-tip" v-if="qrCodeTipShow"></div>
            </li>
            <li class="nav-right-item">
              <i class="iconfont icon-user"></i>
              <router-link to="/sso">注册/登录</router-link>
              <i class="line"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { domainName } from '../../common/global'
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  data () {
    return {
      domainName: domainName,
      qrCodeTipShow: false,
      isHomeItemSelected: false,
      isWideMovieItemSelected: false,
      isLiveItemSelected: false
    }
  },
  props: ['navBarStyle'],
  computed: {
    ...mapGetters(['coverShow'])
  },
  methods: {
    showQrCodeTip () {
      this.qrCodeTipShow = true
    },
    hiddenQrCodeTip () {
      this.qrCodeTipShow = false
    },
    handleHomeSelected () {
      this.$router.push('/home')
      this.$store.commit('handleHomeClick')
    },
    handleWideMovieSelected () {
      this.$router.push('/wide-movie')
      this.$store.commit('handleWideMovieClick')
    },
    handleLiveSelected () {
      this.$router.push('/live')
      this.$store.commit('handleLiveClick')
    }
  },
  watch: {},
  mounted () {
    this.$store.watch(this.$store.getters.isHomeSelected, value => {
      if (value === true) {
        let homeItem = document.getElementById('homeItem')
        let wideMovieItem = document.getElementById('wideMovieItem')
        let liveItem = document.getElementById('liveItem')
        if (!homeItem.classList.contains('nav-item-selected')) {
          homeItem.classList.add('nav-item-selected')
        }
        if (wideMovieItem.classList.contains('nav-item-selected')) {
          wideMovieItem.classList.remove('nav-item-selected')
        }
        if (liveItem.classList.contains('nav-item-selected')) {
          liveItem.classList.remove('nav-item-selected')
        }
      }
    })
    this.$store.watch(this.$store.getters.isWideMovieSelected, value => {
      if (value === true) {
        let homeItem = document.getElementById('homeItem')
        let wideMovieItem = document.getElementById('wideMovieItem')
        let liveItem = document.getElementById('liveItem')
        if (!wideMovieItem.classList.contains('nav-item-selected')) {
          wideMovieItem.classList.add('nav-item-selected')
        }
        if (homeItem.classList.contains('nav-item-selected')) {
          wideMovieItem.classList.remove('nav-item-selected')
        }
        if (liveItem.classList.contains('nav-item-selected')) {
          liveItem.classList.remove('nav-item-selected')
        }
      }
    })
    this.$store.watch(this.$store.getters.isLiveSelected, value => {
      if (value === true) {
        let homeItem = document.getElementById('homeItem')
        let wideMovieItem = document.getElementById('wideMovieItem')
        let liveItem = document.getElementById('liveItem')
        if (!liveItem.classList.contains('nav-item-selected')) {
          liveItem.classList.add('nav-item-selected')
        }
        if (wideMovieItem.classList.contains('nav-item-selected')) {
          wideMovieItem.classList.remove('nav-item-selected')
        }
        if (homeItem.classList.contains('nav-item-selected')) {
          homeItem.classList.remove('nav-item-selected')
        }
      }
    })
  }
}
</script>

<style scoped lang="stylus">
  @import "../../assets/styles/global.styl"

  @media screen and (min-width: 1190px)
    .headerbar
      width 100%
      height 60px
      position fixed
      top 0
      left 0
      background #464E54
      z-index 999

    .nav-items
      height inherit
      width $contentWidth px
      margin 0 auto

    .nav-left
      float left

    .nav-right
      float right

    .nav-left-item
      height 60px
      line-height 60px
      padding-left 15px
      padding-right 15px
      font-size 14px
      float left
      cursor pointer
      color #c8c8c8
      &:hover
        color white

    .nav-item-selected
      border-bottom red solid 2px
      a
        color white

    .main-logo
      width 140px
      height 60px
      margin-right 60px
      display block
      float left
      cursor pointer
      background url("../../assets/images/logo-nav.png") no-repeat center center
      background-size 100% 100%
      text-indent -9999px

    .nav-right-item
      float left
      cursor pointer
      padding-left 15px
      padding-right 15px
      height 60px
      line-height 60px
      font-size 12px
      position relative
      color #c8c8c8
      a
        color #c8c8c8
      &:hover
        color white
        a
          color white

    .qrcode-tip-angle
      position absolute
      top 48px
      left 60px
      border-top: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid #EAEAEA;
      border-left: 6px solid transparent;

    .icon-mobile
      float left
      font-size 30px

    .icon-drop-down
      font-size 12px

    .qrcode-tip
      position absolute
      top 60px
      left -40px
      width 170px
      height 180px
      background #EAEAEA

    .icon-user
      float left
      font-size 22px
      padding-right 8px

    .line
      height 32px
      width 0
      position absolute
      left 0
      top 14px
      font-weight 400
      border-left 1px solid #999
      overflow hidden

  @media screen and (max-width: 1190px)
    .headerbar
      width 100vw
      height px2vh(60) vh
      position fixed
      top 0
      left 0
      background #464E54

    .nav-items
      height inherit
      width 100vw
      margin 0 auto

    .nav-left
      float left

    .nav-right
      float right
      padding-right 15px

    .nav-left-item
      height px2vh(60) vh
      line-height px2vh(60) vh
      padding-left px2vw(15) vw
      padding-right px2vw(15) vw
      font-size px2vw(22) vw
      float left
      cursor pointer
      a
        color #c8c8c8
      &:hover
        a
          color white

    .nav-item-selected
      border-bottom red solid 2px
      a
        color white

    .main-logo
      width px2vw(140) vw
      height px2vh(60) vh
      margin-right px2vw(60) vw
      display block
      float left
      cursor pointer
      background url("../../assets/images/logo-nav.png") no-repeat center center
      background-size 100% 100%
      text-indent -9999px

    .nav-right-item
      float left
      cursor pointer
      padding-left px2vw(15) vw
      padding-right px2vw(15) vw
      height px2vh(60) vh
      line-height px2vh(60) vh
      font-size px2vw(18) vw
      position relative
      color #c8c8c8
      a
        color #c8c8c8
      &:hover
        color white
        a
          color white

    .qrcode-tip-angle
      position absolute
      top px2vh(48) vh
      left px2vw(60) vw
      border-top: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid #EAEAEA;
      border-left: 6px solid transparent;

    .icon-mobile
      float left
      font-size px2vw(40) vw

    .icon-drop-down
      font-size px2vw(12) vw

    .qrcode-tip
      position absolute
      top px2vh(60) vh
      left -px2vw(40) vw
      width px2vw(170) vw
      height px2vh(180) vh
      background #EAEAEA

    .icon-user
      float left
      font-size px2vw(30) vw
      padding-right 8px

    .line
      height px2vw(32) vw
      width 0
      position absolute
      left 0
      top 14px
      font-weight 400
      /*border-left 1px solid #999*/
      border-right 1px solid #999
      overflow hidden

</style>
