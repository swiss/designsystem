<template>
  <h1 v-if="slots.title && type == 'sr-only'" class="sr-only">
    <slot name="type" />
    <slot name="date" />
    <slot name="title" />
    <slot name="description" />
  </h1>
  <section v-else :class="computedClasses">
    <div class="container container--grid gap--responsive">
      <div class="hero__content">
        <MetaInfo v-if="metaInfos.length" :metainfos="metaInfos" />
        <h1 v-if="slots.title" class="hero__title">
          <slot name="title" />
        </h1>
        <h2 v-if="slots.subtitle" class="hero__subtitle">
          <slot name="subtitle" />
        </h2>
        <div v-if="slots.description" class="hero__description">
          <slot name="description" />
        </div>
        <div v-if="slots.cta" class="hero__cta">
          <slot name="cta" />
        </div>
        <Authors v-if="authors.length" :authors="authors" />
      </div>
      <div v-if="slots.image" class="hero__image">
        <slot name="image" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MetaInfo from '../components/MetaInfo.vue'
import Authors from '../components/Authors.vue'
import { computed, useSlots } from 'vue'
import type { Author } from '../../../types'

const slots = useSlots()

const props = defineProps({
  type: {
    type: String,
    validator: (prop) =>
      [
        'default',
        'main',
        'main-image',
        'hub',
        'title-only',
        'sr-only',
        'overview',
      ].includes(prop as string),
    default: () => undefined,
  },
  metaInfos: {
    type: Array<string>,
    default: () => [],
  },
  authors: {
    type: Array<Author>,
    default: () => [],
  },
})

const computedClasses = computed(() => {
  let base = 'hero '
  if (props.type) base += `hero--${props.type} `
  return base
})
</script>
