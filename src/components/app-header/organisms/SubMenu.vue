<template>
  <div class="SubMenu">
    <IconLinks />
    <SubSideMenu />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import IconLinks from '@/components/app-header/molecules/IconLinks.vue'
import SubSideMenu from '@/components/app-header/molecules/SubSideMenu.vue'

export default defineComponent({
  name: 'SubMenu',
  components: {
    IconLinks,
    SubSideMenu
  }
})
</script>

<style lang="less" scoped>
@import '~@/styles/iview-variables.less';

.SubMenu {
  @media screen and (max-width: @screen-sm-max) {
    .IconLinks {
      display: none;
    }
  }
  @media screen and (min-width: @screen-sm) {
    .SubSideMenu {
      display: none;
    }
  }
}
</style>
