<template>
  <div>
    <transition name="fade">
      <div v-if="coverShow">
        <header class="app-nav">
          <div class="goma-logo" id="goma-logo">
            <h1><a :href=domainName title="Goma走马网">Goma走马网</a></h1>
          </div>
          <nav>
            <div class="nav-left">
              <ul>
                <li class="nav-left-item" @click="onHomeLinkClick">
                  <router-link to="/home">首页</router-link>
                </li>
                <li class="nav-left-item" @click="onWideMovieLinkClick">
                  <router-link to="/wide-movie">影视</router-link>
                </li>
                <li class="nav-left-item" @click="onLiveLinkClick">
                  <router-link to="/live">直播</router-link>
                </li>
              </ul>
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
                  <router-link to="sso">注册/登录</router-link>
                  <i class="line"></i>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div class="cover">
          <div class="cover-left">
            <div class="left-square">
              <p class="butterfly">無限大な夢のあとの<br>何もない世の中じゃ</p>
            </div>
            <div class="left-triangle"></div>
          </div>
          <div class="cover-content">
            <p class="text-first-line">We could not find what you were looking for.<br><br><br></p>
            <p class="text">这是一个很大的互联网，你可以遨游其中，尽情探索你感兴趣的东西</p>
            <p class="text">这是一个很小的互联网，你会经常看到上面这句话</p>
            <p class="text">好在，它是开放的</p>
            <p class="text">只要勤于搜索，你总会找到你希望找到的<br><br></p>
            <p class="text">你可以在搜索框中输入关键词，然后，发现惊喜 ──── </p>
            <div class="search-box">
              <div class="indent"></div>
              <input title="search-keyword" class="search-input" type="text" placeholder="请输入搜索关键词">
              <i class="iconfont icon-search"></i>
            </div>
          </div>
          <div class="page-not-found"></div>
        </div>
        <div>
          <i class="iconfont icon-page-turning" @click="onPageTurningClick"></i>
        </div>
      </div>
    </transition>
    <router-view id="second-page" style="padding-top: 60px"></router-view>
  </div>
</template>

<script>
import { domainName } from '../../common/global'
import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  components: {},
  data () {
    return {
      domainName: domainName,
      qrCodeTipShow: false,
      scrollAction: {x: 'undefined', y: 'undefined'}
    }
  },
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
    scrollFunc () {
      if (typeof this.scrollAction.x === 'undefined') {
        this.scrollAction.x = window.pageXOffset
        this.scrollAction.y = window.pageYOffset
      }
      let diffX = this.scrollAction.x - window.pageXOffset
      let diffY = this.scrollAction.y - window.pageYOffset
      if (diffX < 0) {
        this.scrollDirection = 'right'
      } else if (diffX > 0) {
        this.scrollDirection = 'left'
      } else if (diffY < 0) {
        this.scrollDirection = 'down'
      } else if (diffY > 0) {
        this.scrollDirection = 'up'
      } else {
        // First scroll event
      }
      this.scrollAction.x = window.pageXOffset
      this.scrollAction.y = window.pageYOffset
    },
    onScrollDown () {
      this.scrollFunc()
      if (this.scrollDirection === 'down') {
        this.toNextPage()
      }
    },
    toNextPage () {
      function smoothDown () {
        let total = document.getElementById('second-page').offsetTop
        console.log('total====' + total)
        let distance = document.documentElement.scrollTop || document.body.scrollTop
        let step = total / 50

        if (distance < total) {
          distance += step
          document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          setTimeout(smoothDown, 10)
        } else {
          document.body.scrollTop = total
          document.documentElement.scrollTop = total
        }
      }

      if (this.coverShow) {
        smoothDown()
        this.$store.commit('coverHidden')
      }
    },
    onHomeLinkClick () {
      this.toNextPage()
      this.$store.commit('handleHomeClick')
    },
    onWideMovieLinkClick () {
      this.toNextPage()
      this.$store.commit('handleWideMovieClick')
    },
    onLiveLinkClick () {
      this.toNextPage()
      this.$store.commit('handleLiveClick')
    },
    onPageTurningClick () {
      this.toNextPage()
      this.$store.commit('handleHomeClick')
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScrollDown)
  },
  watch: {
    coverShow (val) {
      if (val === false) {
        window.removeEventListener('scroll', this.onScrollDown)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "../../assets/styles/global.styl"

  .app-nav {
    height px2vh(60, $defaultHeight) vh
    width 100vw
    position absolute
    display flex
    align-items center
    right 0
    top 0
    box-shadow 0 0 5px 3px #F4F2F3
  }

  .goma-logo {
    background url("../../assets/images/logo-nav.png") no-repeat center center
    background-size 100% 100%
    width px2vw(140, $defaultWidth) vw
    height px2vh(60) vh
    display block
    float left
    position relative
    margin-left (px2vw(200, $defaultWidth) + 7) vw
    text-indent -9999px
    z-index 4
    cursor pointer
  }

  .cover {
    height 100vh
    display flex
    justify-content space-between
    background-size 100% 100%
  }

  .cover-left
    float left
    z-index 3
    padding-right px2vw(30, $defaultWidth) vw

  .left-square {
    height 101vh
    width (5 + 2 * px2vw(100, $defaultWidth)) vw
    background #464E54
    float left
  }

  .left-triangle {
    float left
    border-color #464E54 transparent transparent transparent
    border-style solid solid solid solid
    border-top-width 100vh
    border-right-width px2vw(150, $defaultWidth) vw
    border-bottom-width 0
    border-left-width 0
  }

  .butterfly {
    writing-mode vertical-rl
    padding 30vh 2vw 0 3vw
    font-size px2vw(50) vw
    line-height px2vw(100) vw
    color white
    cursor default
  }

  .cover-content
    margin 25vh 0 0 0
    flex 1
    font-size px2vw(20) vw

  .text
    line-height px2vh(35) vh

  .text-first-line
    font-size px2vh(35) vh

  .page-not-found
    width px2vw(520) vw
    height px2vw(520) vw
    margin 25vh 5vw 0 0
    background url("../../assets/images/bg-404.png") no-repeat center center
    background-size 100% 100%

  .search-box
    width px2vw(680) vw
    height px2vh(50) vh
    font-size px2vw(18) vw
    margin-top px2vh(35) vh
    display flex
    background #F4F2F3
    border 1px solid #F4F2F3

  .indent
    width px2vw(15) vw
    background white

  .search-input
    flex 1

  input::-webkit-input-placeholder {
    font-size px2vw(18) vw
  }

  input:-moz-placeholder {
    font-size px2vw(18) vw
  }

  input::-moz-placeholder {
    font-size px2vw(18) vw
  }

  input :-ms-input-placeholder {
    font-size px2vw(18) vw
  }

  .icon-search
    font-size px2vw(28) vw
    width px2vw(50) vw
    height px2vh(50) vh
    line-height px2vh(50) vh
    text-align center
    cursor pointer

  .icon-search:hover
    background #3D454A
    color white

  nav
    width 100%
    a:-webkit-any-link
      color #3D454A
    a:-webkit-any-link:visited
      color #3D454A
    a:-webkit-any-link:active
      color #3D454A

  .nav-left
    float left
    margin-left px2vw(30) vw

  .nav-left-item
    float left
    cursor pointer
    padding-left px2vw(15) vw
    padding-right px2vw(15) vw
    height px2vh(60) vh
    line-height px2vh(60) vh
    font-size px2vw(16) vw
    color #667573
    &:hover
      border-bottom #3D454A solid 2px

  .nav-right
    float right
    margin-right 4vw

  .nav-right-item
    float left
    cursor pointer
    padding-left px2vw(15) vw
    padding-right px2vw(15) vw
    height px2vh(60) vh
    line-height px2vh(60) vh
    font-size px2vw(14) vw
    position relative
    color #667573
    &:hover
      background #F4F2F3
      color black

  .line
    height px2vh(32) vh
    width 0
    position absolute
    left 0
    top px2vh(14) vh
    border-left 1px solid #eee
    border-right 1px solid #eee
    overflow hidden

  .icon-mobile
    float left
    font-size px2vw(30) vw

  .icon-drop-down
    font-size px2vw(12) vw

  .icon-user
    float left
    font-size px2vw(22) vw
    padding-right px2vw(8) vw

  .qrcode-tip
    position absolute
    top px2vh(60) vh
    left -(px2vw(40)) vw
    width px2vw(140) vw
    height px2vh(180) vh
    background #EAEAEA

  .qrcode-tip-angle
    position absolute
    top px2vh(48) vh
    left px2vw(60) vw
    border-top 6px solid transparent
    border-right 6px solid transparent
    border-bottom 6px solid #EAEAEA
    border-left 6px solid transparent

  .fade-enter-active, .fade-leave-active
    transition opacity .5s

  .fade-enter, .fade-leave-to
    opacity 0

  @keyframes shake
    0%
      top 87vh
    100%
      top 90vh

  .icon-page-turning
    position: absolute;
    display flex
    align-items center
    right 50vw;
    top 90vh
    font-size px2vw(40) vw
    cursor pointer
    animation shake 1s linear infinite alternate

</style>
