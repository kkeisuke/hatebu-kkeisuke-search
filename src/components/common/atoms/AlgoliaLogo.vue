<template>
  <img src="@/assets/logo-algolia-nebula-blue-full.svg" :width="width" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AlgoliaLogo',
  props: {
    width: {
      type: Number,
      default: 50
    }
  }
})
</script>

<style lang="scss" scoped></style>
