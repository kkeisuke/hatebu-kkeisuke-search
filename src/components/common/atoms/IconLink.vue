<template>
  <a :href="to" :target="target" class="IconLink">
    <Icon :type="type" :size="size" :color="color" />
    <slot name="label">
      <span class="label">{{ label }}</span>
    </slot>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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
  vertical-align: middle;
  .label {
    margin-left: 2px;
  }
}
</style>
