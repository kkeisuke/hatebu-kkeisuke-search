<template>
  <Header class="AppHeader">
    <Logo />
    <SubMenu />
  </Header>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '@/components/app-header/atoms/Logo.vue'
import SubMenu from '@/components/app-header/organisms/SubMenu.vue'

export default Vue.extend({
  name: 'AppHeader',
  components: {
    Logo,
    SubMenu
  }
})
</script>

<style lang="less" scoped>
@import '~@/styles/iview-variables.less';

.AppHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::before {
    @media screen and (max-width: @screen-sm-max) {
      display: none;
    }
    content: '';
    width: 100px;
  }
  .SubMenu {
    width: 100px;
    text-align: right;
  }
}
</style>
