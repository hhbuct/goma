<template>
  <div>
    <div class="modal-header">
      <span class="header-left">
        <i class="iconfont icon-download"></i>
        <span>提示</span>
      </span>
      <i class="iconfont icon-close" @click="$emit('close')"></i>
    </div>
    <div class="modal-body">
      <download-table :download-data="separationDownloadData"></download-table>
    </div>
  </div>
</template>

<script>
import DownloadTable from './DownloadTable'

export default {
  name: 'ItemDownloadModal',
  components: {DownloadTable},
  props: ['separationDownloadData']
}
</script>

<style scoped lang="stylus">
  .modal-header
    width 100%
    height 40px
    line-height 40px
    color white
    background #4eaade

  .header-left
    float left
    .icon-download
      padding 0 5px 0 10px

  .icon-close
    float right
    padding-right 10px
    cursor pointer

  .modal-body
    padding 10px

</style>
