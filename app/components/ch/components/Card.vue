<template>
  <div :class="computedClasses">
    <div v-if="$slots.image && type !== 'highlight'" class="card__image">
      <slot name="image"></slot>
    </div>
    <div v-if="$slots.header" class="card__header">
      <slot name="header"></slot>
    </div>
    <div class="card__content">
      <div v-if="$slots.body" class="card__body">
        <slot name="body"></slot>
      </div>
      <div :class="computedClassesFooter">
        <div v-if="$slots.footerInfo" class="card__footer__info">
          <slot name="footerInfo"></slot>
        </div>
        <div v-if="$slots.footerAction" class="card__footer__action">
          <slot name="footerAction"></slot>
        </div>
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
      if (this.$slots.footerAction) base += `card--clickable `
      return base
    },
    computedClassesFooter () {
      let base = 'card__footer '
      if (!this.$slots.footerInfo) base += `card__footer--icon-only `
      return base
    }
  }
}
</script>
