<template>
  <div class="pop-main">
    <div class="success-tip-box">
  <span class="success-tip"><i
    class="iconfont icon-right"></i><i>提取码&nbsp;"{{baiduNetDiskModalCode}}"&nbsp;<i
    v-if="baiduNetDiskModalState">已复制</i></i></span>
      <a class="go-btn" :href=baiduNetDiskModalUrl target="_blank" @click="$emit('close')">前往下载页面</a>
    </div>
    <div class="support">
      推荐：<a href="#" target="_blank">百度云文件提速下载方法</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaiduNetDiskModal',
  props: ['baiduNetDiskModalUrl', 'baiduNetDiskModalState', 'baiduNetDiskModalCode']
}
</script>

<style scoped lang="stylus">
  .pop-main
    padding 20px
    border-radius 6px
    .success-tip-box
      background #E5F9E7
      padding 20px
      .success-tip
        display flex
        justify-content center
        align-content center
        color #2C662D
        font-size 20px
        .icon-right
          font-size 22px
          margin-right 5px
          font-weight bold
      .go-btn
        display block
        width 160px
        height 40px
        line-height 40px
        margin 10px auto 0
        text-align center
        color #4eaade
        box-shadow 0 0 0 2px #4eaade inset
        transition all .4s ease
        &:hover
          background #4eaade
          color white
    .support
      color #10A3A3
      line-height 20px
      margin-top 20px
      font-size 14px
      a
        color #10A3A3
        font-weight 500
        text-decoration underline

</style>
