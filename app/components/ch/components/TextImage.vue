<template>
  <div
    :class="computedClasses"
  >
    <div :class="computedGridClasses">
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
  </div>
</template>

<script>

export default {
  name: 'TextImage',
  props: {
    imagePos: {
      type: String,
      default: 'right',
      validator: (prop) => [
        'left',
        'right'
      ].includes(prop)
    },
    imageWidth: {
      type: String,
      validator: (prop) => [
        'half',
        'fourth'
      ].includes(prop)
    }
  },

  computed: {
    computedClasses () {
      let base = 'text-image '
      if (this.type) base += `text-image--${this.type} `
      return base
    },

    computedGridClasses () {
      let base = 'grid gap--responsive '
      if (this.imagePos ==='left') {
        base += `grid--responsive-cols-3/4-1/4 grid--reverse`
      } else {
        base += `grid--responsive-cols-3/4-1/4 `
      }
      return base
    }

  }
}
</script>
