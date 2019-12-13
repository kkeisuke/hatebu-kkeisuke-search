<template>
  <Form class="HatebuSearchForm" @submit.native.prevent="hatebuSearch.search">
    <FormItem>
      <!-- element-id for E2E test -->
      <Input ref="searchBox" v-model="hatebuSearch.param.freeword" element-id="searchBox" placeholder="Enter something...">
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

<style lang="less" scoped>
@import '~@/styles/iview-variables.less';

.HatebuSearchForm {
  /deep/ #searchBox {
    @media screen and (max-width: @screen-sm-max) {
      font-size: 16px;
    }
  }
}
</style>
