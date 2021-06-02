<script>
import {
  defineComponent,
  resolveComponent,
  mergeProps,
  h
} from 'vue'

export default defineComponent({
  name: 'Btn',

  props: {
    type: {
      type: String,
      required: false,
      default: 'default',
    },
    href: {
      type: String,
      required: false,
      default: '',
    },
    to: {
      type: [String, Object],
      default: null,
    },
    text: {
      type: String,
      required: false,
      default: '',
    },
    icon: {
      type: String,
      required: false,
      default: '',
    },
    iconLeft: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  render() {
    let currentTag
    let currentAttrs = {
      class: "🇨🇭-btn 🇨🇭-btn--default "
    }

    // variants
    if (this.iconLeft) {
      currentAttrs = mergeProps({ class: '🇨🇭-btn--icon-left' }, currentAttrs)
    }
    if (this.$attrs.disabled === true ) {
      currentAttrs = mergeProps({ class: 'disabled' }, currentAttrs)
    }

    // tag definition
    if (this.to) {
      currentTag = resolveComponent('router-link')
      currentAttrs.to = this.to
    }
    else if (this.href) {
      currentTag = 'a'
    } else {
      currentTag = 'button'
    }

    // render
    const renderIcon = (item) => {
      if (item.$props.icon) {
        let svgIcon = resolveComponent('svg-icon')
        return h(svgIcon, {
            'icon': item.$props.icon,
            'class': '🇨🇭-btn__icon'
        })
      }
    }

    const renderText = (item) => {
      return item.text
    }

    return h(
      currentTag,
      currentAttrs,
      [
        renderText(this),
        renderIcon(this)
      ]
    )
  }

})
</script>

<style lang="postcss">
  .🇨🇭-btn {
    @apply inline-flex items-center py-2 px-4;
    @apply text-red-600 font-bold;
    @apply bg-red-100;
    @apply border border-red-400 rounded-sm;
  }

  .🇨🇭-btn--icon-left {
    @apply flex-row-reverse;
  }


</style>
