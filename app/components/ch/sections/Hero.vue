<template>
  <section
    v-if="this.type === 'wide'"
    :class="computedClasses"
  >
    <div class="container">
      <div class="grid grid--area gap--responsive">
        <h1 v-if="$slots.title" class="hero__title">
          <slot name="title"></slot>
        </h1>
        <div v-if="$slots.description" class="hero__description">
          <slot name="description"></slot>
        </div>
        <picture v-if="$slots.image" class="hero__image">
          <slot name="image"></slot>
        </picture>
      </div>
    </div>
  </section>

  <section
    v-else-if="this.type === '2-cols'"
    :class="computedClasses"
  >
    <div class="container">
      <div class="grid grid--area gap--responsive">
        <h1 v-if="$slots.title" class="hero__title area--content-xs">
          <slot name="title"></slot>
        </h1>
        <div class="hero--2-cols__container">
          <div v-if="$slots.description" class="hero__description">
            <slot name="description"></slot>
          </div>
          <picture v-if="$slots.image" class="hero__image area--content-sm">
            <slot name="image"></slot>
          </picture>
        </div>
      </div>
    </div>
  </section>

  <section
    v-else-if="this.type === 'default'"
    :class="computedClasses"
  >
    <div class="container">
      <div class="grid grid--area gap--responsive">
        <div class="area--content-xs">
          <h1 v-if="$slots.title" class="hero__title">
            <slot name="title"></slot>
          </h1>
          <div v-if="$slots.description" class="hero__description">
            <slot name="description"></slot>
          </div>
        </div>
        <div v-if="$slots.image" class="area--content-sm">
          <slot name="image"></slot>
        </div>
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
