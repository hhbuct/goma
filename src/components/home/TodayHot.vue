<template>
  <div>
    <div class="big-title-area">
      <h4 class="big-title">热门篇</h4>
    </div>
    <div class="today-hot-content">
      <div class="content-left">
        <div class="content-header">
          <div class="header-title hot-movie-header-title">
            <span style="padding-left: 18px">热门影视</span>
          </div>
          <div class="content-indicator">
            <span class="hot-movie-indicator" :class="{'indicator-active':isHotMovieIndicatorActive}"
                  @click="onHotMovieIndicatorClick">热门电影</span>
            <i class="line"></i>
            <span class="hot-series-indicator" :class="{'indicator-active':!isHotMovieIndicatorActive}"
                  @click="onHotSeriesIndicatorClick">热门剧集</span>
          </div>
        </div>
        <div class="content-body">
          <div class="hot-movie-content-body" v-if="isHotMovieIndicatorActive">
            <ul class="first-line">
              <li movieIndex="12345" class="hot-movie-item" @click="onHotMovieItemClick('123456')">
                <div class="movie-item-header">
                  <div class="movie-grade-triangle">
                    <span class="movie-grade">8.4</span>
                  </div>
                  <div class="movie-item-img-wrap">
                    <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2525770523.webp" alt="阿飞正传"
                         width="160px" height="223.41px">
                  </div>
                </div>
                <span class="hot-movie-item-title">阿飞正传</span>
                <!--<span class="hot-movie-item-title">阿飞正传</span>-->
              </li>
              <li class="hot-movie-item">
                <div class="movie-item-header">
                  <div class="movie-grade-triangle">
                    <span class="movie-grade">9.0</span>
                  </div>
                  <div class="movie-item-img-wrap">
                    <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519070834.webp" alt="我不是药神"
                         width="160px" height="223.41px">
                  </div>
                </div>
                <span class="hot-movie-item-title">我不是药神</span>
              </li>
              <li class="hot-movie-item">
                <div class="movie-item-header">
                  <div class="movie-grade-triangle">
                    <span class="movie-grade">8.2</span>
                  </div>
                  <div class="movie-item-img-wrap">
                    <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522880251.webp" alt="超人总动员2"
                         width="160px" height="223.41px">
                  </div>
                </div>
                <span class="hot-movie-item-title">超人总动员2</span>
              </li>
              <li class="hot-movie-item">
                <div class="movie-item-header">
                  <div class="movie-grade-triangle">
                    <span class="movie-grade">5.8</span>
                  </div>
                  <div class="movie-item-img-wrap">
                    <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2526892057.webp" alt="你一定不要错过"
                         width="160px" height="223.41px">
                  </div>
                </div>
                <span class="hot-movie-item-title">你一定不要错过</span>
              </li>
              <li class="hot-movie-item">
                <div class="movie-item-header">
                  <div class="movie-grade-triangle">
                    <span class="movie-grade">8.1</span>
                  </div>
                  <div class="movie-item-img-wrap">
                    <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2526297221.webp" alt="邪不压正"
                         width="160px" height="223.41px">
                  </div>
                </div>
                <span class="hot-movie-item-title">邪不压正</span>
              </li>
            </ul>
            <ul class="first-line">
              <li class="hot-movie-item">
                <div class="movie-item-header">
                  <div class="movie-grade-triangle">
                    <span class="movie-grade">8.4</span>
                  </div>
                  <div class="movie-item-img-wrap">
                    <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2525770523.webp" alt="阿飞正传"
                         width="160px" height="223.41px">
                  </div>
                </div>
                <span class="hot-movie-item-title">阿飞正传</span>
              </li>
              <li class="hot-movie-item">
                <div class="movie-item-header">
                  <div class="movie-grade-triangle">
                    <span class="movie-grade">9.0</span>
                  </div>
                  <div class="movie-item-img-wrap">
                    <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519070834.webp" alt="我不是药神"
                         width="160px" height="223.41px">
                  </div>
                </div>
                <span class="hot-movie-item-title">我不是药神</span>
              </li>
              <li class="hot-movie-item">
                <div class="movie-item-header">
                  <div class="movie-grade-triangle">
                    <span class="movie-grade">8.2</span>
                  </div>
                  <div class="movie-item-img-wrap">
                    <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522880251.webp" alt="超人总动员2"
                         width="160px" height="223.41px">
                  </div>
                </div>
                <span class="hot-movie-item-title">超人总动员2</span>
              </li>
              <li class="hot-movie-item">
                <div class="movie-item-header">
                  <div class="movie-grade-triangle">
                    <span class="movie-grade">5.8</span>
                  </div>
                  <div class="movie-item-img-wrap">
                    <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2526892057.webp" alt="你一定不要错过"
                         width="160px" height="223.41px">
                  </div>
                </div>
                <span class="hot-movie-item-title">你一定不要错过</span>
              </li>
              <li class="hot-movie-item">
                <div class="movie-item-header">
                  <div class="movie-grade-triangle">
                    <span class="movie-grade">8.1</span>
                  </div>
                  <div class="movie-item-img-wrap">
                    <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2526297221.webp" alt="邪不压正"
                         width="160px" height="223.41px">
                  </div>
                </div>
                <span class="hot-movie-item-title">邪不压正</span>
              </li>
            </ul>
          </div>
          <div class="hot-series-content-body" v-if="!isHotMovieIndicatorActive"></div>
        </div>
      </div>
      <div class="content-right">
        <div class="content-header">
          <div class="header-title">
            <span style="padding-left: 18px">热门直播</span>
          </div>
        </div>
        <div class="content-body">
          <div class="hot-live-content-body">
            <a href="http://www.baidu.com" class="hot-live-img-wrap" target="_blank">
              <img src="http://img5.mtime.cn/mg/2018/07/16/112806.68372236.jpg" alt="" width="265px" height="160px">
            </a>
            <a href="http://www.baidu.com" class="hot-live-top" target="_blank">
              <h3>勇士 VS 国王 勇士能否再下一城</h3>
            </a>
            <h2>更多热门直播</h2>
            <dl class="hot-live-list">
              <dd>
                <i class="icon"></i>
                <div class="hot-live-box">
                  <a class="hot-live-title" href="http://www.jisutiyu.com/play/367265.html" target="_blank"
                     title="0:30==>拉斯帕尔马斯vs皇家马德里">
                    00:30 ==&gt; 拉斯帕尔马斯vs皇家马德里
                  </a>
                </div>
              </dd>
              <dd>
                <i class="icon"></i>
                <div class="hot-live-box">
                  <a class="hot-live-title" href="http://www.jisutiyu.com/play/367266.html" target="_blank"
                     title="00:30 ==> 埃弗顿vs曼城">
                    00:30 ==&gt; 埃弗顿vs曼城
                  </a>
                </div>
              </dd>
              <dd>
                <i class="icon"></i>
                <div class="hot-live-box">
                  <a class="hot-live-title" href="http://www.jisutiyu.com/play/367267.html" target="_blank"
                     title="00:30 ==> 拜仁慕尼黑vs多特蒙德">
                    00:30 ==&gt; 拜仁慕尼黑vs多特蒙德
                  </a>
                </div>
              </dd>
              <dd>
                <i class="icon"></i>
                <div class="hot-live-box">
                  <a class="hot-live-title" href="http://www.jisutiyu.com/play/367293.html" target="_blank"
                     title="02:45 ==> 塞维利亚vs巴塞罗那">
                    02:45 ==&gt; 塞维利亚vs巴塞罗那
                  </a>
                </div>
              </dd>
              <dd>
                <i class="icon"></i>
                <div class="hot-live-box">
                  <a class="hot-live-title" href="http://www.jisutiyu.com/play/367294.html" target="_blank"
                     title="02:45 ==> 尤文图斯vsAC米兰">
                    02:45 ==&gt; 尤文图斯vsAC米兰
                  </a>
                </div>
              </dd>
              <dd>
                <i class="icon"></i>
                <div class="hot-live-box">
                  <a class="hot-live-title" href="http://www.jisutiyu.com/play/367371.html" target="_blank"
                     title="20:30 ==> 阿森纳vs斯托克城">
                    20:30 ==&gt; 阿森纳vs斯托克城
                  </a>
                </div>
              </dd>
              <dd data-hotlive="true"><i class="icon"></i>
                <div class="hot-live-box">
                  <a class="hot-live-title" href="http://live.mtime.com/" target="_blank"
                     title="查看更多">查看更多 &gt;&gt;</a>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodayHot',
  data () {
    return {
      isHotMovieIndicatorActive: true
    }
  },
  methods: {
    onHotMovieIndicatorClick () {
      this.isHotMovieIndicatorActive = true
    },
    onHotSeriesIndicatorClick () {
      this.isHotMovieIndicatorActive = false
    },
    onHotMovieItemClick (val) {
      this.$router.push('/movie/' + val)
      this.$store.commit('onHotMovieItemClick')
    }
  }
}
</script>

<style scoped lang="stylus">

  .big-title-area
    text-align center
    position relative
    &::after
      content ''
      width 100%
      height 1px
      background #e5e5e5
      position absolute
      left 0
      top 50%
      z-index 1

  .big-title
    font-size 28px
    font-weight 400
    display block
    position relative
    background #F9F9F9
    width 150px
    margin 0 auto
    z-index 2

  .today-hot-content
    margin 30px 0 0 0

  .content-left
    width 890px
    height 610px
    background white
    float left
    padding 10px

  .content-right
    width 285px
    height 610px
    background white
    float right
    padding 10px

  .content-header
    width 100%
    height 30px
    line-height 30px

  .header-title
    position relative
    width 100px
    float left

  .hot-movie-header-title
    margin-left 6px

  .header-title::before
    content ''
    width 5px
    height 100%
    background #4EAADE
    position absolute
    left 0
    top 0

  .content-indicator
    height 100%
    line-height 100%
    float right
    position relative

  .hot-movie-indicator
    display block
    height 30px
    line-height 30px
    margin 0 10px 0 5px
    float left
    cursor pointer

  .hot-series-indicator
    display block
    height 30px
    line-height 30px
    margin 0 5px 0 10px
    float left
    cursor pointer

  .line
    height 20px
    line-height 20px
    width 0
    float left
    border-left 1px solid #e5e5e5
    position absolute
    left 79px
    top 5px
    overflow hidden

  .indicator-active
    border-bottom #333333 solid 2px

  .content-body
    margin-top 10px

  .hot-movie-content-body
    /*height 300px*/
  .hot-series-content-body
    height 400px
    background wheat

  .first-line
    width 100%
    display flex

  .hot-movie-item
    flex 1
    background white
    margin 7px
    box-shadow 0 0 5px 3px #f4f2f3
    cursor pointer

  .movie-item-header
    position relative

  .movie-item-img-wrap
    width 160px
    height 0
    overflow hidden
    padding-bottom 140%
    background #eee

  .movie-grade-triangle
    width 0
    height 0
    border-style solid
    border-width 0 40px 40px 0
    border-color transparent #fc6a21 transparent transparent
    position absolute
    left 120px
    top 0

  .movie-grade
    position absolute
    left 18px
    top 5px
    color white
    font-size 14px

  .hot-movie-item-title
    display block
    height 25px
    line-height 25px
    margin 5px 0 2px
    text-align center

  .hot-live-img-wrap
    display block
    width 265px
    height 160px
    background #cacaca
    margin-top 17px

  .hot-live-top
    display block
    text-align center
    margin 10px 0 25px

  .hot-live-list
    width 265px
    margin-top 18px
    dd
      position relative
      padding 0 15px 6px 10px
      margin-right 0
      width auto
      height 30px
      border-left 1px solid #e6e6e6
      line-height 100%
      .icon
        position absolute
        top 4px
        left -4px
        width 8px
        height 8px
        background-color #267fd4
        border-radius 50%
        &:after
          content ''
          display block
          width 4px
          height 4px
          border-radius 50%
          background-color white
          position relative
          top 2px
          left 2px
      .hot-live-box
        display block
        margin-left 4px
        width 244px
        .hot-live-title
          float left
          width 244px
          line-height 16px
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          color #333333
          font-size 14px

</style>
