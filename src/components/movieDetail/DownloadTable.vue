<template>
  <div>
    <table>
      <tr class="header-row">
        <th class="header-row-name">资源名称</th>
        <th>语言</th>
        <th>字幕</th>
        <th v-if="isSubOutsideColShow">外挂字幕</th>
        <th>更新时间</th>
        <th>电影大小</th>
        <th>备注</th>
        <th class="header-row-download">下载</th>
      </tr>
      <tr class="item-row" v-for="(item,index) in downloadData" :key="index">
        <td class="item-row-name">{{item.name}}</td>
        <td>{{item.language}}</td>
        <td>{{item.subtitle}}</td>
        <td class="item-row-subtitle-outside" v-if="isSubOutsideColShow">
          <a :href="item.subtitleOutside" target="_blank" v-if="item.subtitleOutside === ''">下载</a>
        </td>
        <td>{{item.updateTime}}</td>
        <td>{{item.resourceSize}}</td>
        <td>{{item.remark}}</td>
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
</template>

<script>
import ClipboardJs from 'clipboard'
import BaiduNetDiskModal from './BaiduNetDiskModal'

export default {
  name: 'DownloadTable',
  props: ['downloadData'],
  computed: {
    isSubOutsideColShow () {
      for (let i of this.downloadData) {
        if (i.subtitleOutside !== '') {
          return true
        }
      }
      return false
    }
  },
  methods: {
    onBaiduNetDiskBtnClick (baiduNetDiskItem, index) {
      let nodeId = '#btn-download' + index
      let clipboard = new ClipboardJs(nodeId)
      clipboard.on('success', () => {
        this.$modal.show(BaiduNetDiskModal, {
          baiduNetDiskModalUrl: baiduNetDiskItem.baiduNetDiskLink,
          baiduNetDiskModalState: 'success',
          baiduNetDiskModalCode: baiduNetDiskItem.baiduNetDiskCode
        }, {
          name: 'baiduNetDiskModal',
          width: '400px',
          height: '192px'
        }, {
          'before-close': () => {
            clipboard.destroy()
          }
        })
      })
      clipboard.on('error', () => {
        this.$modal.show(BaiduNetDiskModal, {
          baiduNetDiskModalUrl: baiduNetDiskItem.baiduNetDiskLink,
          baiduNetDiskModalState: 'error',
          baiduNetDiskModalCode: baiduNetDiskItem.baiduNetDiskCode
        }, {
          name: 'baiduNetDiskModal',
          width: '400px',
          height: '192px'
        }, {
          'before-close': () => {
            clipboard.destroy()
          }
        })
      })
    }
  }
}
</script>

<style scoped lang="stylus">
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
      max-width 185px
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
    .item-row-links
      display flex
      justify-content flex-end
      margin-right -5px
      a
        text-align center
        margin-right 5px
    .item-row-subtitle-outside
      display flex
      justify-content center
      align-content center
      a
        display block
        width 35px
        padding-bottom 2px
        border-bottom 1px solid rgba(255, 255, 255, 0.9)
        color rgba(255, 255, 255, 0.9)

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

</style>
