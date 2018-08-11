<template>
  <div class="swiper">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide @click.native="handleSwiperSlideClick(1)">
          <img class="swiper-img" src="http://img5.mtime.cn/mg/2018/07/16/095423.45693101.jpg" alt="">
        </swiper-slide>
        <swiper-slide @click.native="handleSwiperSlideClick(2)">
          <img src="http://img5.mtime.cn/mg/2018/07/15/091556.80010538.jpg" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <!--<div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>-->
        <!--<div class="swiper-button-next swiper-button-black" slot="button-next"></div>-->
        <!--<div class="swiper-btn-prev" slot="button-prev"></div>-->
        <!--<div class="swiper-btn-next" slot="button-next"></div>-->
        <!--<div class="swiper-scrollbar" slot="scrollbar"></div>-->
      </swiper>
      <div class="swiper-btn swiper-btn-prev">
        <i class="iconfont icon-left-arrow"></i>
      </div>
      <div class="swiper-btn swiper-btn-next">
        <i class="iconfont icon-right-arrow"></i>
      </div>
    </div>
    <div class="custom-swiper-pagination"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.custom-swiper-pagination',
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            let _html = ''
            for (let i = 1; i <= total; i++) {
              if (current === i) {
                _html += '<i class="pagination-dot active"></i>'
              } else {
                _html += '<i class="pagination-dot"></i>'
              }
            }
            return _html
          }
        },
        navigation: {
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev'
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: false
      }
    }
  },
  methods: {
    handleSwiperSlideClick (index) {
      console.log(index)
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "../../assets/styles/global.styl"

  .wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 30%
    background #eee
    position relative
    cursor pointer

  .swiper-btn
    width 50px
    height 100px
    position absolute
    display flex
    justify-content center
    align-items center
    background url(../../assets/images/swiper-btn-bg.png)
    z-index 2
    opacity .8
    cursor pointer
    outline none
    &:hover
      opacity 1
      color white

  .swiper-btn-prev
    left 0
    top 130px

  .swiper-btn-next
    right 0
    top 130px

  .icon-left-arrow, .icon-right-arrow
    color #c8c8c8
    font-size 50px

  .custom-swiper-pagination
    width $contentWidth px
    height 20px
    display flex
    justify-content center
    align-items center

  .swiper >>> .pagination-dot
    width 7px
    height 7px
    background #cbcbcb
    border 1px solid #cbcbcb
    border-radius 100%
    display inline-block
    text-align right
    margin 0 5px
    cursor pointer

  .swiper >>> .active
    background #4EAADE
    border 1px solid #4EAADE
    width 12px
    border-radius 10px

</style>
