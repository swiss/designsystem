<template>
  <div :class="computedClasses">
    <div v-if="isInlineImage" :class="computedGridClasses">
      <div class="text-image__text">
        <h2 v-if="$slots.title" class="h2">
          <slot name="title"></slot>
        </h2>
        <div v-if="$slots.description">
          <slot name="description"></slot>
        </div>
      </div>
      <div v-if="$slots.image" class="text-image__image">
        <slot name="image"></slot>
      </div>
    </div>
    <div v-else class="grid gap--responsive">
      <div v-if="$slots.image" class="text-image__image">
        <slot name="image"></slot>
      </div>
      <div class="text-image__text">
        <h2 v-if="$slots.title" class="h2">
          <slot name="title"></slot>
        </h2>
        <div v-if="$slots.description">
          <slot name="description"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  imagePos: {
    type: String,
    default: () => 'right',
    validator: (prop) => ['left', 'right'].includes(prop as string),
  },
  imageWidth: {
    type: String,
    default: () => undefined,
    validator: (prop) => ['half', 'fourth'].includes(prop as string),
  },
  isInlineImage: {
    type: Boolean,
    default: () => true,
  },
  textProportion: {
    type: String,
    default: () => '3/4-1/4 ',
  },
})

const computedClasses = computed(() => {
  const base = 'text-image '
  return base
})

const computedGridClasses = computed(() => {
  let base = 'grid gap--responsive '
  if (props.imagePos === 'left') {
    base += `grid--responsive-cols-${props.textProportion} grid--reverse`
  } else {
    base += `grid--responsive-cols-${props.textProportion} `
  }
  return base
})
</script>
