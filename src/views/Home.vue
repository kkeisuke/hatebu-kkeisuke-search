<template>
  <Layout class="Home">
    <Content class="container">
      <router-view />
    </Content>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home'
})
</script>

<style lang="scss" scoped>
.Home {
  .container {
    padding: 30px 20px 20px;
  }
}
</style>
