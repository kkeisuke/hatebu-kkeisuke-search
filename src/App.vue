<template>
  <Layout id="App">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AppHeader from '@/components/app-header/AppHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppHeader
  }
})
</script>

<style lang="scss" scoped>
#App {
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
