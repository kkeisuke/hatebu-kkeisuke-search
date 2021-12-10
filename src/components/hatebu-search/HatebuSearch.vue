<template>
  <div class="HatebuSearch">
    <HatebuSearchForm />
    <HatebuSearchList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import HatebuSearchForm from '@/components/hatebu-search/organisms/HatebuSearchForm.vue'
import HatebuSearchList from '@/components/hatebu-search/organisms/HatebuSearchList.vue'

export default defineComponent({
  name: 'HatebuSearch',
  components: {
    HatebuSearchForm,
    HatebuSearchList
  }
})
</script>

<style lang="scss" scoped></style>
