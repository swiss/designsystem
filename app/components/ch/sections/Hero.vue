<template>
  <section
    v-if="this.type === 'wide'"
    :class="computedClasses"
  >
    <div class="container">
      <h1 v-if="$slots.title" class="hero__title">
        <slot name="title"></slot>
      </h1>
      <div v-if="$slots.description" class="hero__description">
        <slot name="description"></slot>
      </div>
      <div v-if="$slots.image" class="hero__image">
        <slot name="image"></slot>
      </div>
    </div>
  </section>

  <section
    v-else
    :class="computedClasses"
  >
    <div class="container container--grid gap--responsive">
      <div class="hero__content">
        <h1 v-if="$slots.title" class="hero__title">
          <slot name="title"></slot>
        </h1>
        <div v-if="$slots.description" class="hero__description">
          <slot name="description"></slot>
        </div>
      </div>
      <div v-if="$slots.image" class="hero__image">
        <slot name="image"></slot>
      </div>
    </div>
  </section>

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
    default: 'default'
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
