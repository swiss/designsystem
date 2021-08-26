<template>
  <div :class="computedClasses">
    <div v-if="$slots.image" class="card__image">
      <slot name="image"></slot>
    </div>
    <div v-if="$slots.header" class="card__header">
      <slot name="header"></slot>
    </div>
    <div class="card__body">
      <slot></slot>
    </div>
    <div class="card__footer">
      <div v-if="$slots.footerInfo" class="card__footer__info">
        <slot name="footerInfo"></slot>
      </div>
      <div v-if="$slots.footerAction" class="card__footer__action">
        <slot name="footerAction"></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: {
    type: {
      type: String,
      validator: (prop) => [
        'default',
        'highlight',
        'image-left'
      ].includes(prop)
    },
  },

  computed: {
    computedClasses () {
      let base = 'card '
      if (this.type) base += `card--${this.type} `
      return base
    },
  }
}
</script>
