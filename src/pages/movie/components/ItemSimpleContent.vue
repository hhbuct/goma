<template>
  <div class="item-simple-content">
    <div class="content-left">
      <div class="item-cover-box">
        <div class="item-cover-wrap">
          <img src="http://img5.mtime.cn/mg/2018/07/16/094604.72829568_270X405X4.jpg" alt="小偷家族(2018)">
        </div>
      </div>
      <div class="item-visited">
        <p class="item-visited-tip">浏览量</p>
        <p class="item-visited-count">2005</p>
      </div>
      <div class="item-donate">打赏</div>
      <div class="item-operations">
        <div class="btns-wrap">
          <span id="btn"></span>
          <a @mouseover="onDownloadHover">下载电影</a>
          <a @mouseover="onLiveWatchHover">在线观看</a>
        </div>
      </div>
    </div>
    <div class="content-right">
      <div class="item-simple-content-first">
        <div style="overflow: hidden;padding-right: 20px">
          <div style="float: left">
            <span class="item-name">小偷家族</span>&nbsp;
            <span class="item-year">(2018)</span>
          </div>
          <div class="item-subscribe" style="float: right" v-if="!itemSubscribed">+ 追剧
          </div>
          <div class="item-subscribed" style="float: right" v-if="itemSubscribed">已追</div>
        </div>
        <p class="item-original-name">万引き家族</p>
        <div class="other-info-box">
          <span>117分钟&nbsp;-&nbsp;剧情</span>
        </div>
      </div>
      <div class="item-simple-content-divide"></div>
      <div class="item-simple-content-second">
        <div class="item-main-info">
          <dl class="info-list">
            <dd>
              <strong>主演:</strong>
              <span>中川雅也&nbsp;/&nbsp;树木希林&nbsp;/&nbsp;安藤樱&nbsp;/&nbsp;松冈茉优</span>
            </dd>
            <dd>
              <strong>导演:</strong>
              <span>是枝裕和</span>
            </dd>
            <dd>
              <strong>编剧:</strong>
              <span>是枝裕和</span>
            </dd>
            <dd>
              <strong>豆瓣链接:</strong>
              <span>1292052</span>
            </dd>
            <dd>
              <strong>IMDb链接:</strong>
              <span>tt0111161</span>
            </dd>
            <dd>
              <strong>更多片名:</strong>
              <span>Shoplifters&nbsp;/&nbsp;Une Affaire de Famille&nbsp;/&nbsp;Manbiki kazoku</span>
            </dd>
            <dt>
              <h4>剧情梗概:</h4>
              <p>东京的都市丛林中央，残存着一栋古旧寒酸的老房子，这里局促地生活着柴田一家五口人。在工地当临时工的男人阿治（Lily Franky 饰）经常带着儿子祥太（城桧吏 饰）到超市盗窃生活用品，这一天，他们回家路上遇到了独自待在户外的四岁女孩由里（佐佐木美结 饰）。妻子信代（安藤樱 饰）起初极力主张将女孩送回父母身边，但当看到女孩原生家庭的状况时又心生恻隐。原本柴田家就靠着老奶奶初枝（树木希林 饰）的养老金度日，而今多了一口人，自然更艰辛了几分....</p>
              <a class="view-more">更多剧情 >></a>
            </dt>
          </dl>
        </div>
        <div class="outside-links">
          <dl>
            <dt><i class="iconfont icon-way"></i><span class="outside-links-header">站外在线链接</span></dt>
            <dd><i class="iconfont icon-link"></i><span class="link-item">腾讯视频</span><i
              class="iconfont icon-vip"></i></dd>
            <dd><i class="iconfont icon-link"></i><span class="link-item">搜狐视频</span><i
              class="iconfont icon-vip"></i></dd>
            <dd><i class="iconfont icon-link"></i><span class="link-item">爱奇艺</span></dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemSimpleContent',
  data () {
    return {
      itemBtnClass: false,
      itemSubscribed: false
    }
  },
  methods: {
    onLiveWatchHover () {
      document.getElementById('btn').style.cssText = 'top:38px'
    },
    onDownloadHover () {
      document.getElementById('btn').style.cssText = 'top:0px'
    }
  }
}
</script>

<style scoped lang="stylus">
  .item-simple-content
    background white
    display flex
    padding 13px 0 0 13px

  .content-left
    width 294px

  .content-right
    flex 1

  .item-cover-box
    width 294px
    padding 10px
    position relative
    border 1px solid #d5d5d5
    border-radius 10px
    box-shadow 0 0 10px #999
    z-index 2

  .item-cover-wrap
    width 270px
    height 0
    padding-bottom 149.1%
    background #ccc
    overflow hidden
    border 1px solid black
    border-radius 6px

  .item-visited
    text-align center
    padding-top 25px

  .item-visited-tip
    display block
    margin-bottom 8px
    font-size 12px
    font-weight 600
    opacity .5

  .item-visited-count
    display block
    font-size 28px
    font-weight 600

  .item-donate
    width 125px
    line-height 40px
    margin 6px auto 12px
    border 1px solid #E74851
    border-radius 20px
    color white
    background #E74851
    text-align center
    cursor pointer

  .item-operations
    background none repeat scroll 0 0 #363f48
    border-radius 5px
    padding 10px
    position relative
    .btns-wrap
      position relative
      .item-btn-class
        top 38px
      span
        height 38px
        width 100%
        position absolute
        background-color #4eaade
        border-radius 4px
        left 0
        top 0
        transition all 0.3s ease-in 0s
      a
        display block
        position relative
        height 38px
        line-height 38px
        color white
        text-align center
        cursor pointer

  .item-simple-content-first
    height 163px
    padding 20px 0 0 35px

  .item-name
    font-size 35px
    font-weight bold

  .item-year
    font-size 30px
    height 35px
    line-height 35px

  .item-subscribe
    width 75px
    line-height 30px
    border 1px solid #999
    border-radius 20px
    text-align center
    cursor pointer
    font-size 14px
    &:hover
      background #e74851
      border-color #e74851
      color white

  .item-subscribed
    width 75px
    line-height 30px
    border 1px solid #ccc
    color #ccc
    border-radius 20px
    text-align center
    font-size 14px
    cursor default

  .item-original-name
    font-size 25px
    padding 15px 0 15px

  .other-info-box
    background #444
    display inline-block
    line-height 26px
    border-radius 3px
    padding 0 6px
    span
      color white
      font-size 16px

  .item-simple-content-divide
    height 45px
    background #4eaade

  .item-simple-content-second
    padding 20px 0 0 35px
    display flex

  .item-main-info
    flex 1

  .info-list
    width 610px
    display block
    dd
      position relative
      line-height 38px
      font-size 13px
      border-bottom 1px dotted #999
      overflow hidden
      strong
        float left
        width 95px
        font-size 14px
        font-weight bold
        line-height 38px
        text-align left
      span
        float left
    dt
      font-size 13px
      padding-top 13px
      h4
        font-size 14px
        font-weight bold
      p
        margin-top 10px
        line-height 180%
      .view-more
        float right
        margin-top 10px
        cursor pointer
        color #08c

  .outside-links
    width 180px
    height 430px
    background #F5F5F5
    padding 5px
    dt
      margin-bottom 10px
      .icon-way
        font-size 20px
        padding 0 5px 0 0
        font-weight bold
      .outside-links-header
        font-size 14px
        font-weight bold
    dd
      margin 5px 20px
      .link-item
        font-size 13px
        margin-left 5px
        color #08c
        cursor pointer
        padding 2px
        &:hover
          background #08c
          color white
      .icon-vip
        font-size 13px
        float right
        height 17px
        line-height 17px
</style>
