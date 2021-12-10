<template>
  <Card v-if="markdown" class="HatebuSearchListItem">
    <template #title>
      <h3>{{ searchResult.objectID }}</h3>
    </template>
    <template #extra>
      <IconLink :to="`${blogURL}/posts/${searchResult.objectID}`" class="extra" type="md-browsers" />
      <IconLink :to="`${githubURL}/blob/master/${searchResult.path}`" class="extra" type="logo-github" />
    </template>
    <div class="markdown" v-html="markdown"></div>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { markdown } from '@/plugins/markdown'
import { SearchResult } from '@/store/modules/algolia/algolia'
import { getSearchResultDefault } from '@/store/modules/algolia/defaults'
import IconLink from '@/components/common/atoms/IconLink.vue'

export default defineComponent({
  name: 'HatebuSearchListItem',
  components: {
    IconLink
  },
  props: {
    searchResult: {
      type: Object as () => SearchResult,
      required: true,
      default: () => getSearchResultDefault()
    },
    content: {
      type: String,
      default: ''
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
      return markdown(this.content)
    }
  }
})
</script>

<style lang="scss" scoped>
.HatebuSearchListItem {
  word-wrap: break-word;
  overflow-wrap: break-word;

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
