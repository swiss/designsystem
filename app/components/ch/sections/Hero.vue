<template>
  <h1 v-if="slots.title && type == 'sr-only'" class="sr-only">
    <slot name="type"></slot>
    <slot name="date"></slot>
    <slot name="title"></slot>
    <slot name="description"></slot>
  </h1>
  <section v-else :class="computedClasses">
    <div class="container container--grid gap--responsive">
      <div class="hero__content">
        <MetaInfo v-if="metaInfos.length" :metainfos="metaInfos" />
        <h1 v-if="slots.title" class="hero__title">
          <slot name="title"></slot>
        </h1>
        <h2 v-if="slots.subtitle" class="hero__subtitle">
          <slot name="subtitle"></slot>
        </h2>
        <div v-if="slots.description" class="hero__description">
          <slot name="description"></slot>
        </div>
        <div v-if="slots.cta" class="hero__cta">
          <slot name="cta"></slot>
        </div>
        <Authors v-if="authors.length" :authors="authors" />
      </div>
      <div v-if="slots.image" class="hero__image">
        <slot name="image"></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
import MetaInfo from '../components/MetaInfo.vue'
import Authors from '../components/Authors.vue'
import { computed } from 'vue'

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
      ].includes(prop),
  },
  metaInfos: {
    type: Array,
    default: () => [],
  },
  authors: {
    type: Array,
    default: () => [],
  },
})

const computedClasses = computed(() => {
  let base = 'hero '
  if (props.type) base += `hero--${props.type} `
  return base
})
</script>
