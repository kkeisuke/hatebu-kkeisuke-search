<template>
  <h1 class="Logo"></h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Logo'
})
</script>

<style lang="less" scoped>
@import '~@/styles/iview-variables.less';

.Logo {
  &::before {
    content: "kkeisuke's はてなブックマーク検索";
  }
  @media screen and (max-width: @screen-sm-max) {
    &::before {
      content: "kkeisuke's はてなブ検索";
    }
  }
  font-size: 14px;
  font-weight: bold;
  color: #fff;
}
</style>
