<template>
  <div class="Index">
    <HatebuSearch />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HatebuSearch from '@/components/hatebu-search/HatebuSearch.vue'

export default Vue.extend({
  name: 'Index',
  components: {
    HatebuSearch
  }
})
</script>

<style lang="less" scoped>
@import '~@/styles/iview-variables.less';

.Index {
  .HatebuSearch {
    margin: 0 auto;
    @media screen and (min-width: @screen-lg) {
      width: @screen-lg;
    }
  }
}
</style>
