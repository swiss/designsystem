<template>
  <div v-if="this.type !== '2-cols'">
    <div :class="computedClasses" class="container">
      <h1 v-if="$slots.title" class="hero__title">
        <slot name="title"></slot>
      </h1>
      <div class="hero__description">
        <slot></slot>
      </div>
      <picture v-if="$slots.image" class="hero__image">
        <slot name="image"></slot>
      </picture>
    </div>
  </div>
  <div v-else>
    <div :class="computedClasses" class="container">
      <h1 v-if="$slots.title" class="hero__title">
        <slot name="title"></slot>
      </h1>
      <div class="hero--2-cols__container">
        <div class="hero__description">
          <slot></slot>
        </div>
        <picture v-if="$slots.image" class="hero__image">
          <slot name="image"></slot>
        </picture>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Hero',
  props: {
    type: {
      type: String,
      validator: (prop) => [
        'default',
        'wide',
        'hub',
        '2-cols'
      ].includes(prop)
    },
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
