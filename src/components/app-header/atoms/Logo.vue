<template>
  <!-- id for E2E test -->
  <h1 id="Logo" class="Logo"></h1>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
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
      content: "kkeisuke's はてブ検索";
    }
  }
  font-size: 14px;
  font-weight: bold;
  color: #fff;
}
</style>
