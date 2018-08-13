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
      <ul class="item-parts-indicator" ref="livePartsIndicator" v-if="isPartsIndicatorShow">
        <li v-for="(item,index) in indicatorCount" :key="index" @click="onLiveIndicatorClick($event,index)">
          {{index*40+1 === Math.min(episodesCount,item*40)?index*40+1:index*40+1+'-'+Math.min(episodesCount,item*40)}}
        </li>
      </ul>
      <ul class="item-parts" v-if="!isSinglePart" :class="{'item-parts-wrap':isPartsIndicatorShow}">
        <li v-for="(i) in liveResourcePartShowArray" :key="i" class="item-part">{{i}}</li>
        <li v-for="(j) in noLiveResourcePartShowArray" :key="j" class="item-part no-live-resource">{{j}}</li>
      </ul>
      <ul class="item-parts" v-if="isSinglePart">
        <li class="item-part single-part">{{name}}</li>
      </ul>
    </div>
    <div class="item-download">
      <div class="item-header" :class="{'item-header-only-table':!isDownloadIndicatorShow}">
        <i class="iconfont icon-way"></i>
        <span>资源下载</span>
      </div>
      <ul class="download-indicator" v-if="isDownloadIndicatorShow">
        <li class="collection-indicator" :class="{'active':isCollectionActive}" @click="onDownloadCollectionClick">
          <span>全&nbsp;集</span></li>
        <li class="separation-indicator" :class="{'active':!isCollectionActive}" @click="onDownloadSeparationClick">
          <span>分&nbsp;集</span></li>
      </ul>
      <div class="download-area collection-area" v-if="isCollectionActive">
        <download-table :download-data="collectionDownloadData"></download-table>
      </div>
      <div class="download-area separation-area" v-if="!isCollectionActive">
        <ul class="item-parts-indicator" ref="downloadPartsIndicator" v-if="isPartsIndicatorShow">
          <li v-for="(item,index) in indicatorCount" :key="index" @click="onDownloadIndicatorClick($event,index)">
            {{index*40+1 === Math.min(episodesCount,item*40)?index*40+1:index*40+1+'-'+Math.min(episodesCount,item*40)}}
          </li>
        </ul>
        <ul class="item-parts" v-if="!isSinglePart" :class="{'item-parts-wrap':isPartsIndicatorShow}">
          <li v-for="(i) in downloadResourcePartShowArray" :key="i" class="item-part"
              @click="onDownloadItemPartClick(i)">{{i}}
          </li>
          <li v-for="(j) in noDownloadResourcePartShowArray" :key="j" class="item-part no-live-resource">{{j}}</li>
        </ul>
        <ul class="item-parts" v-if="isSinglePart">
          <li class="item-part single-part">{{name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { range } from '../../../common/utils'
import ItemDownloadModal from '../../../components/movieDetail/ItemDownloadModal'
import DownloadTable from '../../../components/movieDetail/DownloadTable'

export default {
  name: 'ItemDownloadResource',
  components: {DownloadTable},
  data () {
    return {
      name: '小偷家族',
      episodesCount: 66,
      resourceEpisodesCount: 1,
      liveResourcePartShowArray: [],
      noLiveResourcePartShowArray: [],
      downloadResourcePartShowArray: [],
      noDownloadResourcePartShowArray: [],
      downloadActiveIndex: 0,
      collectionDownloadData: [
        {
          name: '肖申克的救赎',
          language: '英语',
          subtitle: '中文',
          subtitleOutside: '',
          resourceSize: '2.76GB',
          remark: '720P',
          updateTime: '2018-04-11',
          magnetLink: 'magnet:?xt=urn:btih:97afde09118429ad6eeae4eb6f0d4b7e255d2721&amp;dn=Ф��˵ľ���.1994.��Ӣ��Ļ.��Ӣ˫���ʥ�Ǿ��޿�'
        },
        {
          name: '肖申克的救赎.The.Shawshank.Redemption.肖申克的救赎.The.Shawshank.Redemption.1994.BD...',
          language: '英语',
          subtitle: '中英',
          subtitleOutside: '',
          resourceSize: '4.216GB',
          remark: '[蓝光] [720p] [字幕] [1024p] [高清]',
          updateTime: '2018-04-11',
          magnetLink: 'magnet:?xt=urn:btih:97afde09118429ad6eeae4eb6f0d4b7e255d2721&amp;dn=Ф��˵ľ���.1994.��Ӣ��Ļ.��Ӣ˫���ʥ�Ǿ��޿�',
          baiduNetDisk: {
            baiduNetDiskLink: 'https://pan.baidu.com/s/1Pv76AJzjd-lV7yKJE-6yuQ',
            baiduNetDiskCode: 'xbbq'
          }
        },
        {
          name: '肖申克的救赎',
          language: '英语',
          subtitle: '中文',
          subtitleOutside: 'http://www.baidu.com',
          resourceSize: '2.76GB',
          remark: '720P',
          updateTime: '2018-04-11',
          magnetLink: 'magnet:?xt=urn:btih:97afde09118429ad6eeae4eb6f0d4b7e255d2721&amp;dn=Ф��˵ľ���.1994.��Ӣ��Ļ.��Ӣ˫���ʥ�Ǿ��޿�',
          baiduNetDisk: {
            baiduNetDiskLink: 'https://pan.baidu.com/s/1Pv76AJzjd-lV7yKJE-6yuQ',
            baiduNetDiskCode: 'jqja'
          }
        },
        {
          name: '肖申克的救赎',
          language: '英语',
          subtitle: '中文',
          subtitleOutside: 'http://www.baidu.com',
          resourceSize: '2.76GB',
          remark: '720P',
          updateTime: '2018-04-11',
          magnetLink: 'magnet:?xt=urn:btih:97afde09118429ad6eeae4eb6f0d4b7e255d2721&amp;dn=Ф��˵ľ���.1994.��Ӣ��Ļ.��Ӣ˫���ʥ�Ǿ��޿�',
          baiduNetDisk: {
            baiduNetDiskLink: 'https://pan.baidu.com/s/1Pv76AJzjd-lV7yKJE-6yuQ',
            baiduNetDiskCode: 'jqja'
          }
        },
        {
          name: '肖申克的救赎',
          language: '英语',
          subtitle: '中文',
          subtitleOutside: 'http://www.baidu.com',
          resourceSize: '2.76GB',
          remark: '720P',
          updateTime: '2018-04-11',
          magnetLink: 'magnet:?xt=urn:btih:97afde09118429ad6eeae4eb6f0d4b7e255d2721&amp;dn=Ф��˵ľ���.1994.��Ӣ��Ļ.��Ӣ˫���ʥ�Ǿ��޿�',
          baiduNetDisk: {
            baiduNetDiskLink: 'https://pan.baidu.com/s/1Pv76AJzjd-lV7yKJE-6yuQ',
            baiduNetDiskCode: 'jqja'
          }
        },
        {
          name: '肖申克的救赎',
          language: '英语',
          subtitle: '中文',
          subtitleOutside: 'http://www.baidu.com',
          resourceSize: '2.76GB',
          remark: '720P',
          updateTime: '2018-04-11',
          magnetLink: 'magnet:?xt=urn:btih:97afde09118429ad6eeae4eb6f0d4b7e255d2721&amp;dn=Ф��˵ľ���.1994.��Ӣ��Ļ.��Ӣ˫���ʥ�Ǿ��޿�',
          baiduNetDisk: {
            baiduNetDiskLink: 'https://pan.baidu.com/s/1Pv76AJzjd-lV7yKJE-6yuQ',
            baiduNetDiskCode: 'jqja'
          }
        },
        {
          name: '肖申克的救赎',
          language: '英语',
          subtitle: '中文',
          subtitleOutside: 'http://www.baidu.com',
          resourceSize: '2.76GB',
          remark: '720P',
          updateTime: '2018-04-11',
          magnetLink: 'magnet:?xt=urn:btih:97afde09118429ad6eeae4eb6f0d4b7e255d2721&amp;dn=Ф��˵ľ���.1994.��Ӣ��Ļ.��Ӣ˫���ʥ�Ǿ��޿�',
          baiduNetDisk: {
            baiduNetDiskLink: 'https://pan.baidu.com/s/1Pv76AJzjd-lV7yKJE-6yuQ',
            baiduNetDiskCode: 'jqja'
          }
        },
        {
          name: '肖申克的救赎',
          language: '英语',
          subtitle: '中文',
          subtitleOutside: 'http://www.baidu.com',
          resourceSize: '2.76GB',
          remark: '720P',
          updateTime: '2018-04-11',
          magnetLink: 'magnet:?xt=urn:btih:97afde09118429ad6eeae4eb6f0d4b7e255d2721&amp;dn=Ф��˵ľ���.1994.��Ӣ��Ļ.��Ӣ˫���ʥ�Ǿ��޿�',
          baiduNetDisk: {
            baiduNetDiskLink: 'https://pan.baidu.com/s/1Pv76AJzjd-lV7yKJE-6yuQ',
            baiduNetDiskCode: 'jqja'
          }
        },
        {
          name: '肖申克的救赎',
          language: '英语',
          subtitle: '中文',
          subtitleOutside: 'http://www.baidu.com',
          resourceSize: '2.76GB',
          remark: '720P',
          updateTime: '2018-04-11',
          magnetLink: 'magnet:?xt=urn:btih:97afde09118429ad6eeae4eb6f0d4b7e255d2721&amp;dn=Ф��˵ľ���.1994.��Ӣ��Ļ.��Ӣ˫���ʥ�Ǿ��޿�',
          baiduNetDisk: {
            baiduNetDiskLink: 'https://pan.baidu.com/s/1Pv76AJzjd-lV7yKJE-6yuQ',
            baiduNetDiskCode: 'jqja'
          }
        }
      ]
    }
  },
  methods: {
    livePartsIndicatorInit () {
      if (this.$refs.livePartsIndicator) {
        this.$refs.livePartsIndicator.firstChild.classList.add('active')
      }
    },
    livePartShowArrayInit () {
      this.liveResourcePartShowArray = range(1, Math.min(41, this.resourceEpisodesCount + 1))
      this.noLiveResourcePartShowArray = range(this.resourceEpisodesCount + 1, Math.min(this.episodesCount + 1, 41))
    },
    downloadPartsIndicatorInit () {
      console.log(this.$refs.downloadPartsIndicator)
      if (this.$refs.downloadPartsIndicator) {
        this.$refs.downloadPartsIndicator.firstChild.classList.add('active')
      }
    },
    downloadPartShowArrayInit () {
      this.downloadResourcePartShowArray = range(1, Math.min(41, this.resourceEpisodesCount + 1))
      this.noDownloadResourcePartShowArray = range(this.resourceEpisodesCount + 1, Math.min(this.episodesCount + 1, 41))
    },
    onLiveIndicatorClick (e, index) {
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
          this.liveResourcePartShowArray = range(tempArray[0], tempArray[1] + 1)
          this.noLiveResourcePartShowArray = []
        }
        if (this.resourceEpisodesCount >= tempArray[0] && this.resourceEpisodesCount <= tempArray[1]) {
          this.liveResourcePartShowArray = range(tempArray[0], this.resourceEpisodesCount + 1)
          this.noLiveResourcePartShowArray = range(this.resourceEpisodesCount + 1, tempArray[1] + 1)
        }
        if (this.resourceEpisodesCount < tempArray[0]) {
          this.liveResourcePartShowArray = []
          this.noLiveResourcePartShowArray = range(tempArray[0], tempArray[1] + 1)
        }
      } else {
        let temp = parseInt(e.target.innerHTML)
        if (this.resourceEpisodesCount === temp) {
          this.liveResourcePartShowArray = [temp]
          this.noLiveResourcePartShowArray = []
        } else {
          this.liveResourcePartShowArray = []
          this.noLiveResourcePartShowArray = [temp]
        }
      }
    },
    onDownloadCollectionClick () {
      this.downloadActiveIndex = 0
    },
    onDownloadSeparationClick () {
      this.downloadActiveIndex = 1
      this.$nextTick(() => {
        this.downloadPartsIndicatorInit()
        this.downloadPartShowArrayInit()
      })
    },
    onDownloadIndicatorClick (e, index) {
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
          this.downloadResourcePartShowArray = range(tempArray[0], tempArray[1] + 1)
          this.noDownloadResourcePartShowArray = []
        }
        if (this.resourceEpisodesCount >= tempArray[0] && this.resourceEpisodesCount <= tempArray[1]) {
          this.downloadResourcePartShowArray = range(tempArray[0], this.resourceEpisodesCount + 1)
          this.noDownloadResourcePartShowArray = range(this.resourceEpisodesCount + 1, tempArray[1] + 1)
        }
        if (this.resourceEpisodesCount < tempArray[0]) {
          this.downloadResourcePartShowArray = []
          this.noDownloadResourcePartShowArray = range(tempArray[0], tempArray[1] + 1)
        }
      } else {
        let temp = parseInt(e.target.innerHTML)
        if (this.resourceEpisodesCount === temp) {
          this.downloadResourcePartShowArray = [temp]
          this.noDownloadResourcePartShowArray = []
        } else {
          this.downloadResourcePartShowArray = []
          this.noDownloadResourcePartShowArray = [temp]
        }
      }
    },
    onDownloadItemPartClick (i) {
      this.$modal.show(ItemDownloadModal, {separationDownloadData: this.collectionDownloadData},
        {
          name: 'downloadItemModal',
          width: '1173px',
          height: 'auto'
        })
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
    },
    isDownloadIndicatorShow () {
      return this.episodesCount > 1
    }
  },
  mounted () {
    this.livePartsIndicatorInit()
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
    .item-header-only-table
      padding-bottom 0

  .item-header
    padding-bottom 10px
    .icon-way
      font-size 24px
    span
      height 28px
      line-height 28px

  .item-parts-indicator
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

  .item-parts
    display flex
    flex-wrap wrap
    margin-bottom -10px
    .no-live-resource
      border 1px solid #DCDCDC
      color #BEBEBE
      cursor default
      &:hover
        background #f5f5f5

  .item-parts-wrap
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

  .separation-area
    padding 10px
    .item-parts-indicator
      margin 2px 0 10px 28px
    .item-part
      margin-right 9.5px

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

</style>
