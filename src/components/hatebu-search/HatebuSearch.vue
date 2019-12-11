<template>
  <div class="HatebuSearch">
    <HatebuSearchForm />
    <HatebuSearchList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HatebuSearchForm from '@/components/hatebu-search/organisms/HatebuSearchForm.vue'
import HatebuSearchList from '@/components/hatebu-search/organisms/HatebuSearchList.vue'

export default Vue.extend({
  name: 'HatebuSearch',
  components: {
    HatebuSearchForm,
    HatebuSearchList
  }
})
</script>

<style lang="scss" scoped></style>
