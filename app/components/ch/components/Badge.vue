<template>
  <component
    :is="clickable ? 'button' : 'div'"
    :class="classes"
    @click="
      () => {
        if (clickable && !disabled) badgeClicked()
      }
    "
  >
    <SvgIcon v-if="iconLeft" :icon="iconLeft" class="badge__icon-left" />
    <span class="badge__text">{{ label }}</span>
    <SvgIcon
      v-if="icon"
      :icon="icon"
      :class="`icon--${icon}`"
      class="badge__icon"
    />
  </component>
</template>

<script setup>
import SvgIcon from '../components/SvgIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: () => 'gray',
    validator: (prop) =>
      [
        'info',
        'error',
        'warning',
        'success',
        'gray',
        'red',
        'yellow',
        'orange',
        'green',
        'blue',
        'indigo',
        'purple',
        'pink',
        'indigo',
        'negative',
      ].includes(prop),
  },
  size: {
    type: String,
    default: () => 'base',
    validator: (prop) => ['base', 'sm'].includes(prop),
  },
  icon: {
    type: String,
    default: () => undefined,
  },
  highlightCancel: {
    type: Boolean,
    default: () => false,
  },
  iconLeft: {
    type: String,
    default: () => undefined,
  },
  badgeClicked: {
    type: Function,
  },
  clickable: {
    type: Boolean,
    default: () => false,
  },
  disabled: {
    type: Boolean,
    default: () => false,
  },
})

const classes = computed(() => {
  let base = 'badge '
  if (props.color) base += `badge--${props.color} `
  if (props.size) base += `badge--${props.size} `
  if (props.icon) base += `badge--icon `
  if (props.clickable && !props.disabled) base += `badge--clickable`
  if (props.disabled) base += ` badge--disabled`
  return base
})
</script>
