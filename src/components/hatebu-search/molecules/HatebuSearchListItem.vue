<template>
  <Card v-if="markdown" class="HatebuSearchListItem">
    <h3 slot="title">{{ searchResult.objectID }}</h3>
    <IconLink slot="extra" :to="`${blogURL}/posts/${searchResult.objectID}`" class="extra" type="md-browsers" />
    <IconLink slot="extra" :to="`${githubURL}/blob/master/${searchResult.path}`" class="extra" type="logo-github" />
    <div class="markdown" v-html="markdown"></div>
  </Card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import store from '@/store'
import { markdown } from '@/plugins/markdown'
import { SearchResult } from '@/store/modules/algolia/algolia'
import { getSearchResultDefault } from '@/store/modules/algolia/defaults'
import IconLink from '@/components/common/atoms/IconLink.vue'

export default Vue.extend({
  name: 'HatebuSearchListItem',
  components: {
    IconLink
  },
  props: {
    searchResult: {
      type: Object as PropType<SearchResult>,
      required: true,
      default: () => getSearchResultDefault()
    }
  },
  computed: {
    blogURL() {
      return process.env.VUE_APP_BLOG_URL
    },
    githubURL() {
      return process.env.VUE_APP_GITHUB_URL
    },
    markdown(): string {
      const content = store.getters['algolia/parseRawData'](store.getters['hatebuSearch/freeword'], this.searchResult)
      return markdown(content)
    }
  }
})
</script>

<style lang="scss" scoped>
.HatebuSearchListItem {
  word-break: break-word;

  .extra {
    & + .extra {
      margin-left: 5px;
    }
  }
}
</style>

<style lang="scss">
.HatebuSearchListItem {
  .markdown {
    p {
      margin-bottom: 20px;
    }
    code {
      background: #ffff00;
    }
  }
}
</style>
