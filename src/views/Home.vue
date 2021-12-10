<template>
  <Layout class="Home">
    <Content class="container">
      <router-view />
      <BackTop :height="200" />
    </Content>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
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
