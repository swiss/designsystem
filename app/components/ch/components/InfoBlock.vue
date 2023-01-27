<template>

  <div :class="classes">
    <div class="flex">
      <SvgIcon v-if="icon" :icon="icon" size="xl" class="-ml-1.5 mr-1 -mt-1" />
      <component
        :is="tag"
        class="font--bold"
      >
        {{ title }}
      </component>
    </div>
    <div>
      <slot />
    </div>
  </div>

</template>

<script>
import SvgIcon from '../components/SvgIcon.vue'
export default {
  name: 'InfoBlock',
  components: {
    SvgIcon,
  },
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
