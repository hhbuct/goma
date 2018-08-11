<template>
  <div>
    <footer class="footer">
      <div class="footer-content wp cl">
        <div class="footer-left l">
          <div class="logo">
            <a href="javascript:;"><img src="../../assets/images/logo-nav.png"
                                        alt="foot-logo" style="width: 140px;height: 60px;"/></a>
          </div>
          <div class="footer-link">
            <div><a href="javascript:;">© 2017 - 2018 goma.info</a></div>
            <div><a class="CCB" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
                    target="_blank">CC BY-NC-SA 4.0</a></div>
            <div><a href="javascript:;">粤 ICP 备 13000416 号-1</a></div>
          </div>
        </div>
        <div class="footer-nav r">
          <div class="nav-item" style="width: 30%">
            <h3>合作伙伴</h3>
            <ul>
              <li></li>
            </ul>
          </div>
          <div class="nav-item" style="width: 30%;">
            <h3>商务合作</h3>
            <ul>
              <li><a href="javascript:;" target="_blank">联系我们</a></li>
              <li><a href="javascript:;" target="_blank">观花者，走马也</a></li>
            </ul>
          </div>
          <div class="nav-item" style="width: 30%;">
            <h3>关于本站</h3>
            <ul>
              <li><a href="about.php" target="_blank">关于识趣</a></li>
              <li><a href="javascript:;">版权声明:本站仅为学习使用</a></li>
              <li><a href="about.php">用户条款</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterBar'
}
</script>

<style scoped lang="stylus">
  @import "../../assets/styles/global.styl"

  .footer
    display block
    width 100vw
    height 16.5rem
    background #464E54
    padding-top 3rem
    min-width $contentWidth px

  .wp
    width $contentWidth px
    margin 0 auto

  .cl
    zoom 1

  .l
    float left

  .r
    float right

  a:link, a:visited, a:hover, a:active
    text-decoration none

  .footer-left .logo
    margin-bottom 20px
    overflow hidden
    a
      color white

  .footer-link
    margin-top 8px
    a
      font-size 11px
      color #666
      letter-spacing 0
      line-height 10px
      cursor text

  .footer-nav
    text-align justify
    width 50%
    .nav-item
      display inline-block
      vertical-align top
      h3
        font-size 12px
        color #fff
        letter-spacing 0
        margin-bottom 0.85rem
      li
        font-size 10px
        color #999
        letter-spacing 0
        line-height 1.4rem

  .footer-nav .nav-item li a, .footer-nav .nav-item li a span
    color #999

</style>
