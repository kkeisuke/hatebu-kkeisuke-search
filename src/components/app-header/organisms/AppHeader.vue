<template>
  <Header class="AppHeader">
    <Logo></Logo>
  </Header>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '@/components/app-header/atoms/Logo.vue'

export default Vue.extend({
  name: 'AppHeader',
  components: {
    Logo
  }
})
</script>

<style lang="scss" scoped>
.AppHeader {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
