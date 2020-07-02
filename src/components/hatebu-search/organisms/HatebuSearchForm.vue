<template>
  <Form class="HatebuSearchForm" @submit.native.prevent="hatebuSearch.search">
    <FormItem>
      <!-- element-id for E2E test -->
      <Input ref="searchBox" v-model="hatebuSearch.param.freeword" element-id="searchBox" placeholder="Enter something...">
        <template v-slot:append>
          <Button html-type="submit"><AlgoliaLogo /></Button>
        </template>
      </Input>
    </FormItem>
  </Form>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@vue/composition-api'
import AlgoliaLogo from '@/components/common/atoms/AlgoliaLogo.vue'
import { useHatebuSearch } from '@/components/hatebu-search/use/useHatebuSearch'
import { Input } from 'view-design'

export default defineComponent({
  name: 'HatebuSearchForm',
  components: {
    AlgoliaLogo
  },
  setup() {
    const searchBox = ref<Input>()

    onMounted(() => {
      searchBox.value?.focus()
    })

    return {
      searchBox,
      hatebuSearch: useHatebuSearch()
    }
  }
})
</script>

<style lang="less" scoped>
@import '~@/styles/iview-variables.less';

.HatebuSearchForm {
  ::v-deep #searchBox {
    @media screen and (max-width: @screen-sm-max) {
      font-size: 16px;
    }
  }
}
</style>
