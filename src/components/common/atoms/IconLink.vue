<template>
  <a :href="to" :target="target" class="IconLink">
    <Icon :type="type" :size="size" :color="color" />
    <slot name="label">
      <span class="label">{{ label }}</span>
    </slot>
  </a>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'IconLink',
  props: {
    to: {
      type: String,
      required: true,
      default: ''
    },
    type: {
      type: String,
      required: true,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 20
    },
    color: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: '_blank'
    }
  }
})
</script>

<style lang="scss" scoped>
.IconLink {
  .label {
    margin-left: 2px;
  }
}
</style>
