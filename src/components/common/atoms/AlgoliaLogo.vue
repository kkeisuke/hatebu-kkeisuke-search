<template>
  <img src="@/assets/logo-algolia-nebula-blue-full.svg" :width="width" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
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
