<template>
  <div class="HatebuSearchList">
    <HatebuSearchListItem v-for="result in searchResults" :key="result.objectID" :search-result="result" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import store from '@/store'
import { SearchResult } from '@/store/modules/algolia/algolia'
import HatebuSearchListItem from '@/components/hatebu-search/molecules/HatebuSearchListItem.vue'

export default Vue.extend({
  name: 'HatebuSearchList',
  components: {
    HatebuSearchListItem
  },
  computed: {
    searchResults(): SearchResult[] {
      return store.getters['algolia/searchResults']
    }
  }
})
</script>

<style lang="scss" scoped>
.HatebuSearchList {
  .HatebuSearchListItem {
    & + .HatebuSearchListItem {
      margin-top: 20px;
    }
  }
}
</style>
