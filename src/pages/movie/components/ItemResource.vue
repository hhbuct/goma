<template>
  <div>
    <div class="module-title">
      <span>资源集合</span>
    </div>
    <div class="item-live">
      <div class="item-header">
        <i class="iconfont icon-way"></i>
        <span>在线播放</span>
      </div>
      <ul class="item-live-parts-indicator" ref="partsIndicator" v-if="isPartsIndicatorShow">
        <li v-for="(item,index) in indicatorCount" :key="index" @click="onIndicatorClick($event,index)">
          {{index*40+1 === Math.min(episodesCount,item*40)?index*40+1:index*40+1+'-'+Math.min(episodesCount,item*40)}}
        </li>
      </ul>
      <ul class="item-live-parts" v-if="!isSinglePart" :class="{'item-live-parts-wrap':isPartsIndicatorShow}">
        <li v-for="(i) in resourcePartShowArray" :key="i" class="item-part">{{i}}</li>
        <li v-for="(j) in noResourcePartShowArray" :key="j" class="item-part no-live-resource">{{j}}</li>
      </ul>
      <ul class="item-live-parts" v-if="isSinglePart">
        <li class="item-part single-part">{{name}}</li>
      </ul>
    </div>
    <div class="item-download">
      <div class="item-header">
        <i class="iconfont icon-way"></i>
        <span>资源下载</span>
      </div>
      <ul class="download-indicator">
        <li class="collection-indicator" :class="{'active':isCollectionActive}" @click="onDownloadCollectionClick">
          <span>全&nbsp;集</span></li>
        <li class="separation-indicator" :class="{'active':!isCollectionActive}" @click="onDownloadSeparationClick">
          <span>分&nbsp;集</span></li>
      </ul>
      <div class="download-area collection-area" v-if="isCollectionActive">
        <table>
          <tr class="header-row">
            <th class="header-row-name">资源名称</th>
            <th>语言</th>
            <th>字幕</th>
            <th>更新时间</th>
            <th>电影大小</th>
            <th class="header-row-download">下载</th>
          </tr>
          <tr class="item-row" v-for="(item,index) in collectionDownloadData" :key="index">
            <td class="item-row-name">{{item.name}}</td>
            <td>{{item.language}}</td>
            <td>{{item.subtitle}}</td>
            <td>{{item.updateTime}}</td>
            <td>{{item.resourceSize}}</td>
            <td class="item-row-links">
              <a class="btn-download" target="_blank" :href=item.magnetLink>
                <i class="iconfont icon-magnet"></i>磁力链接
              </a>
              <a :id="'btn-download'+index" v-if="item.baiduNetDisk" class="btn-download"
                 @click="onBaiduNetDiskBtnClick(item.baiduNetDisk,index)"
                 :data-clipboard-text="item.baiduNetDisk.baiduNetDiskCode">
                <i class="iconfont icon-baiduyun"></i>百度云盘
              </a>
            </td>
          </tr>
        </table>
      </div>
      <div class="download-area separation-area" v-if="!isCollectionActive">
      </div>
    </div>
    <modal name="baiduNetDiskModal" @before-open="beforeBaiduNetDiskModalOpen" :width="440" :height="192">
      <div class="pop-main">
        <div class="success-tip-box">
          <span class="success-tip"><i
            class="iconfont icon-right"></i><i>提取码&nbsp;"{{baiduNetDiskModalCode}}"&nbsp;<i
            v-if="baiduNetDiskModalState">已复制</i></i></span>
          <a class="go-btn" :href=baiduNetDiskModalUrl target="_blank">前往下载页面</a>
        </div>
        <div class="support">
          推荐：<a href="#" target="_blank">百度云文件提速下载方法</a>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import { range } from '../../../common/utils'
import Clipboard from 'clipboard'

export default {
  name: 'ItemDownloadResource',
  data () {
    return {
      name: '小偷家族',
      episodesCount: 49,
      resourceEpisodesCount: 40,
      resourcePartShowArray: [],
      noResourcePartShowArray: [],
      downloadActiveIndex: 0,
      collectionDownloadData: [
        {
          name: '肖申克的救赎',
          language: '英语',
          subtitle: '中文',
          resourceSize: '2.76GB',
          updateTime: '2018-04-11',
          magnetLink: 'magnet:?xt=urn:btih:97afde09118429ad6eeae4eb6f0d4b7e255d2721&amp;dn=Ф��˵ľ���.1994.��Ӣ��Ļ.��Ӣ˫���ʥ�Ǿ��޿�'
        },
        {
          name: '肖申克的救赎.The.Shawshank.Redemption.1994.BD...',
          language: '英语',
          subtitle: '中英',
          resourceSize: '4.216GB',
          updateTime: '2018-04-11',
          magnetLink: 'magnet:?xt=urn:btih:97afde09118429ad6eeae4eb6f0d4b7e255d2721&amp;dn=Ф��˵ľ���.1994.��Ӣ��Ļ.��Ӣ˫���ʥ�Ǿ��޿�',
          baiduNetDisk: {
            baiduNetDiskLink: 'https://pan.baidu.com/s/1Pv76AJzjd-lV7yKJE-6yuQ',
            baiduNetDiskCode: 'xbbq'
          }
        }
      ],
      baiduNetDiskModalState: false,
      baiduNetDiskModalUrl: '',
      baiduNetDiskModalCode: ''
    }
  },
  methods: {
    partsIndicatorInit () {
      if (this.$refs.partsIndicator) {
        this.$refs.partsIndicator.firstChild.classList.add('active')
      }
    },
    livePartShowArrayInit () {
      this.resourcePartShowArray = range(1, Math.min(41, this.resourceEpisodesCount + 1))
      this.noResourcePartShowArray = range(this.resourceEpisodesCount + 1, Math.min(this.episodesCount + 1, 41))
      console.log(this.noResourcePartShowArray)
    },
    onIndicatorClick (e, index) {
      let count = Math.ceil(this.episodesCount / 40)
      for (let i = 0; i < count; i++) {
        if (i === index) {
          e.target.parentNode.children[i].classList.add('active')
        } else {
          e.target.parentNode.children[i].classList.remove('active')
        }
      }
      if (e.target.innerHTML.includes('-')) {
        let tempArray = []
        e.target.innerHTML.split('-').forEach(i => {
          tempArray.push(parseInt(i.replace(/\s+/g, '')))
        })
        if (this.resourceEpisodesCount > tempArray[1]) {
          this.resourcePartShowArray = range(tempArray[0], tempArray[1] + 1)
          this.noResourcePartShowArray = []
        }
        if (this.resourceEpisodesCount >= tempArray[0] && this.resourceEpisodesCount <= tempArray[1]) {
          this.resourcePartShowArray = range(tempArray[0], this.resourceEpisodesCount + 1)
          this.noResourcePartShowArray = range(this.resourceEpisodesCount + 1, tempArray[1] + 1)
        }
        if (this.resourceEpisodesCount < tempArray[0]) {
          this.resourcePartShowArray = []
          this.noResourcePartShowArray = range(tempArray[0], tempArray[1] + 1)
        }
      } else {
        let temp = parseInt(e.target.innerHTML)
        if (this.resourceEpisodesCount === temp) {
          this.resourcePartShowArray = [temp]
          this.noResourcePartShowArray = []
        } else {
          this.resourcePartShowArray = []
          this.noResourcePartShowArray = [temp]
        }
      }
    },
    onDownloadCollectionClick () {
      this.downloadActiveIndex = 0
    },
    onDownloadSeparationClick () {
      this.downloadActiveIndex = 1
    },
    onBaiduNetDiskBtnClick (baiduNetDiskItem, index) {
      let nodeId = '#btn-download' + index
      let clipboard = new Clipboard(nodeId)
      clipboard.on('success', () => {
        let baiduNetDiskModalItem = {}
        baiduNetDiskModalItem.state = 'success'
        baiduNetDiskModalItem.item = baiduNetDiskItem
        this.$modal.show('baiduNetDiskModal', baiduNetDiskModalItem)
      })
      clipboard.on('error', () => {
        let baiduNetDiskModalItem = {}
        baiduNetDiskModalItem.state = 'error'
        baiduNetDiskModalItem.item = baiduNetDiskItem
        this.$modal.show('baiduNetDiskModal', baiduNetDiskModalItem)
      })
    },
    beforeBaiduNetDiskModalOpen (e) {
      e.params.state === 'success' ? this.baiduNetDiskModalState = true : this.baiduNetDiskModalState = false
      this.baiduNetDiskModalUrl = e.params.item.baiduNetDiskLink
      this.baiduNetDiskModalCode = e.params.item.baiduNetDiskCode
    }
  },
  computed: {
    indicatorCount () {
      return Math.ceil(this.episodesCount / 40)
    },
    isPartsIndicatorShow () {
      return this.episodesCount > 40
    },
    isSinglePart () {
      return this.episodesCount === 1
    },
    isCollectionActive () {
      return this.downloadActiveIndex === 0
    }
  },
  mounted () {
    this.partsIndicatorInit()
    this.livePartShowArrayInit()
  }
}
</script>

<style scoped lang="stylus">
  .module-title
    text-align center
    span
      font-size 20px
      line-height 30px

  .item-live
    margin-top 15px

  .item-download
    margin-top 15px

  .item-header
    padding-bottom 10px
    .icon-way
      font-size 24px
    span
      height 28px
      line-height 28px

  .item-live-parts-indicator
    display flex
    margin 0 0 18px 25px
    li
      width 55px
      height 22px
      line-height 22px
      text-align center
      font-size 13px
      margin-right 15px
      cursor pointer
      &:hover
        color #4EAADE
    .active
      border 1px solid #606070
      background-color #606070
      color white
      &:hover
        color white

  .item-live-parts
    display flex
    flex-wrap wrap
    margin-bottom -10px
    .no-live-resource
      border 1px solid #DCDCDC
      color #BEBEBE
      cursor default
      &:hover
        background #f5f5f5

  .item-live-parts-wrap
    height 90px

  .item-part
    width 49px
    height 35px
    line-height 35px
    display block
    border 1px solid #cacaca
    text-align center
    margin-right 10px
    margin-bottom 10px
    font-size 14px
    background #f5f5f5
    color #666
    border-radius 2px
    cursor pointer
    &:hover
      background-color #e8e8e8

  .single-part
    height auto
    width auto
    padding 0 8px
    max-width 100px
    overflow hidden
    text-overflow ellipsis
    white-space nowrap

  .download-indicator
    width 200px
    /*height 25px*/
    border-bottom 1px solid #eaeaea
    margin-left 25px
    display flex
    li
      height inherit
      margin-right 20px
      color #959a9e
      font-size 14px
      cursor pointer
      position relative
      z-index 2
      border-bottom 1px solid #eaeaea
      margin-bottom -1px
      &:hover
        position relative
        z-index 2
        color #505961
        border-bottom 1px solid #505961
      span
        display block
        padding 0 5px 7px
        transition border-color 0.05s
    .active
      color #505961
      border-bottom 1px solid #505961

  .download-area
    background #eaeaea
    margin-top 20px
    border-radius 5px
    position relative
    padding 8px

  .collection-area:after
    content ''
    position absolute
    top -19px
    left 35px
    border-top 10px solid transparent
    border-right 10px solid transparent
    border-bottom 10px solid #eaeaea
    border-left 10px solid transparent

  .separation-area:after
    content ''
    position absolute
    top -19px
    left 95px
    border-top 10px solid transparent
    border-right 10px solid transparent
    border-bottom 10px solid #eaeaea
    border-left 10px solid transparent

  table
    width 100%
    background #333
    color rgba(255, 255, 255, .9)
    border-radius 2px
    font-size 13px
    text-align center
    border-collapse collapse
    border-spacing 0
    tr
      border 1px solid #484848
      cursor default
      th
        padding 5px 10px
        font-weight normal
      td
        padding 5px 10px
        border-top 0 none
        font-weight normal
      &:hover
        background-color: rgba(255, 255, 255, .05);
    .iconfont
      margin-right 5px

  .header-row
    height 30px
    &:hover
      background-color #333
    .header-row-name
      text-align left
    .header-row-download
      text-align right

  .item-row
    .item-row-name
      text-align left
    .item-row-links
      display flex
      justify-content flex-end
      margin-right -5px
      a
        text-align center
        margin-right 5px

  .btn-download
    display inline-block
    width 90px
    height 30px
    line-height 30px
    background #4eaade
    color white
    transition all .4s ease
    cursor pointer
    &:hover
      opacity .8

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
