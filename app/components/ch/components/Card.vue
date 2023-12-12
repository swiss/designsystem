<template>
  <div :class="computedClasses">
    <div
      v-if="$slots.image && type !== 'highlight' && type !== 'universal'"
      class="card__image"
    >
      <slot name="image"></slot>
    </div>
    <div v-if="$slots.header" class="card__header">
      <slot name="header"></slot>
    </div>
    <div class="card__content">
      <div class="card__body">
        <slot name="metaInfos"></slot>
        <div v-if="$slots.title" class="card__title">
          <slot name="title"></slot>
        </div>
        <slot name="description"></slot>
        <slot name="information"></slot>
        <div v-if="$slots.image && type === 'universal'" class="card__image">
          <slot name="image"></slot>
        </div>
        <slot name="author"></slot>
        <slot name="eventInfos"></slot>
        <slot name="specifications"></slot>
        <slot name="contentIcons"></slot>
      </div>
      <div
        v-if="$slots.footerInfo || $slots.footerAction"
        :class="computedClassesFooter"
      >
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
      validator: (prop) =>
        [
          'default',
          'highlight',
          'twitter',
          'flat',
          'universal',
          'list',
        ].includes(prop),
    },
    layout: {
      type: String,
      validator: (prop) =>
        ['default', 'image-left', 'image-right'].includes(prop),
    },
  },

  computed: {
    computedClasses() {
      let base = 'card '
      if (this.type) base += `card--${this.type} `
      if (this.layout && this.layout !== 'default')
        base += `card--${this.layout} `
      if (this.$slots.footerAction) base += `card--clickable `
      return base
    },
    computedClassesFooter() {
      let base = 'card__footer '
      if (!this.$slots.footerInfo) base += `card__footer--icon-only `
      return base
    },
  },
}
</script>
