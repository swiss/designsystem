<template>
  <InlineSvg v-if="svgSrc" :src="svgSrc" :class="iconClass" />
</template>

<script setup lang="ts">
import InlineSvg from 'vue-inline-svg'
import { computed, ref, watchEffect } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: false,
    default: () => 'base',
    validator: (prop) =>
      ['sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', 'full'].includes(
        prop as string,
      ),
  },
  spin: {
    type: Boolean,
    default: () => false,
  },
})

const svgSrc = ref('')

const iconClass = computed(() => {
  let base = `icon `
  if (props.size) base += `icon--${props.size} `
  if (props.icon) base += `icon--${props.icon} `
  if (props.spin) base += `icon--spin `
  return base
})

watchEffect(async () => {
  // TODO: check if this works in production. Not consistent in dev
  if (!props.icon) {
    svgSrc.value = ''
    return
  }
  svgSrc.value = (
    await import(`../../../assets/icons/${props.icon}.svg`)
  ).default
})
</script>
