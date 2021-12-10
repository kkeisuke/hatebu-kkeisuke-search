<template>
  <div class="Index">
    <HatebuSearch />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import HatebuSearch from '@/components/hatebu-search/HatebuSearch.vue'

export default defineComponent({
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
