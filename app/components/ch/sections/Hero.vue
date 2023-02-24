<template>
  <h1 v-if="$slots.title && this.type == 'sr-only'" class="sr-only">
    <slot name="type"></slot>
    <slot name="date"></slot>
    <slot name="title"></slot>
    <slot name="description"></slot>
  </h1>
  <section
    v-else
    :class="computedClasses"
  >
    <div class="container container--grid gap--responsive">
      <div class="hero__content">
        <MetaInfo
          v-if="metaInfos.length"
          :metainfos="metaInfos"
        />
        <h1 v-if="$slots.title" class="hero__title">
          <slot name="title"></slot>
        </h1>
        <div v-if="$slots.description" class="hero__description">
          <slot name="description"></slot>
        </div>
        <div v-if="$slots.cta" class="hero__cta">
          <slot name="cta"></slot>
        </div>
        <Authors
          v-if="authors.length"
          :authors="authors"
        />
      </div>
      <div v-if="$slots.image" class="hero__image">
        <slot name="image"></slot>
      </div>
    </div>
  </section>
</template>

<script>

import MetaInfo from '../components/MetaInfo.vue'
import Authors from '../components/Authors.vue'

export default {
  name: 'Hero',
  components: {
    MetaInfo,
    Authors
  },
  props: {
    type: {
      type: String,
      validator: (prop) => [
        'default',
        'main',
        'main-image',
        'hub',
        'title-only',
        'sr-only',
      ].includes(prop)
    },
    metaInfos: {
      type: Array,
      default: () => []
    },
    authors: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    computedClasses () {
      let base = 'hero '
      if (this.type) base += `hero--${this.type} `
      return base
    }
  }
}
</script>
