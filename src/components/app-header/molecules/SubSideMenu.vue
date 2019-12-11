<template>
  <div class="SubSideMenu">
    <Icon type="md-menu" color="#fff" size="20" class="menuButton" @click="subMenu.openMenu" />
    <Drawer v-model="subMenu.showMenu.value" title="Menu">
      <List>
        <ListItem v-for="link in subMenu.links" :key="link.url">
          <a :href="link.url" target="_blank">{{ link.label }}</a>
        </ListItem>
      </List>
    </Drawer>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import { useSubMenu } from '@/components/app-header/use/useSubMenu'

export default createComponent({
  name: 'SubSideMenu',
  setup() {
    return {
      subMenu: useSubMenu()
    }
  }
})
</script>

<style lang="scss" scoped>
.SubSideMenu {
  .menuButton {
    cursor: pointer;
  }
}
</style>
