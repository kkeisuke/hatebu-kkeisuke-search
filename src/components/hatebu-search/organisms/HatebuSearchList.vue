<template>
  <div class="HatebuSearchList">
    <HatebuSearchListItem v-for="markdown in markdowns" :key="markdown.searchResult.objectID" :search-result="markdown.searchResult" :content="markdown.content" />
    <template v-if="isEmpty">
      <HatebuSearchEmptyResult />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import store from '@/store'
import HatebuSearchListItem from '@/components/hatebu-search/molecules/HatebuSearchListItem.vue'
import HatebuSearchEmptyResult from '@/components/hatebu-search/molecules/HatebuSearchEmptyResult.vue'

export default defineComponent({
  name: 'HatebuSearchList',
  components: {
    HatebuSearchListItem,
    HatebuSearchEmptyResult
  },
  computed: {
    markdowns() {
      return store.getters['algolia/markdowns']
    },
    isEmpty(): Boolean {
      return store.getters['algolia/isEmpty']
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
