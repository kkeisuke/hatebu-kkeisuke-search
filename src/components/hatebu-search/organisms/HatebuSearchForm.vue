<template>
  <Form class="HatebuSearchForm" @submit.native.prevent="hatebuSearch.search">
    <FormItem>
      <Input ref="searchBox" v-model="hatebuSearch.param.freeword" placeholder="Enter something...">
        <Button slot="append" html-type="submit"><AlgoliaLogo /></Button>
      </Input>
    </FormItem>
  </Form>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import AlgoliaLogo from '@/components/common/atoms/AlgoliaLogo.vue'
import { useHatebuSearch } from '../use/useHatebuSearch'

export default createComponent({
  name: 'HatebuSearchForm',
  components: {
    AlgoliaLogo
  },
  setup(initProps, setupContext) {
    return {
      hatebuSearch: useHatebuSearch(setupContext.refs)
    }
  }
})
</script>

<style lang="scss" scoped></style>
