<template>
  <div class="IconLinks">
    <IconLink v-for="link in subMenu.links" :key="link.url" :to="link.url" :type="link.icon" color="#fff" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useSubMenu } from '@/components/app-header/use/useSubMenu'
import IconLink from '@/components/common/atoms/IconLink.vue'

export default defineComponent({
  name: 'IconLinks',
  components: {
    IconLink
  },
  setup() {
    return {
      subMenu: useSubMenu()
    }
  }
})
</script>

<style lang="scss" scoped></style>
