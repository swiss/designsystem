<template>
  <div :class="computedClasses">
    <picture v-if="$slots.image" class="hero__image">
      <slot name="image"></slot>
    </picture>
    <pi class="hero__content">
      <h1 v-if="$slots.title" class="hero__title">
        <slot name="title"></slot>
      </h1>
      <slot></slot>
    </pi>
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
