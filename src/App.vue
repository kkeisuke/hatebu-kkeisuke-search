<template>
  <Layout id="App">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '@/components/app-header/organisms/AppHeader.vue'

export default Vue.extend({
  name: 'App',
  components: {
    AppHeader
  }
})
</script>

<style lang="scss" scoped>
#App {
  min-height: 100vh;
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
