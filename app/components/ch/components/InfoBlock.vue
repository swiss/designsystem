<template>

  <div :class="classes">
    <component
      :is="tag"
      class="info-block__title"
      v-html="title"
    />
    <div>
      <slot />
    </div>
  </div>

</template>

<script>
export default {
  name: 'InfoBlock',
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
    },
    borderTop: {
      type: Boolean,
      default: true
    },
    borderBottom: {
      type: Boolean,
      default: false
    },
    headingLevel: {
      type: String,
      default: 'h3',
      validator: (prop) => [
        'h2',
        'h3',
        'h4',
        'h5',
        'div'
      ].includes(prop)
    }
  },
  computed: {
    tag () {
      return this.headingLevel
    },
    classes () {
      let base = 'info-block '
      if (this.borderTop) base += `border-t `
      if (this.borderBottom) base += `border-b `
      return base
    },
  }
}
</script>
