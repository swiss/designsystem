<template>
  <form
    :action="action ? action : null"
    :target="target"
    :method="method"
    @submit="handleSubmit"
  >
    <slot />
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: {
    submitFunction: {
      type: Function,
    },
    action: {
      type: String,
    },
    method: {
      type: String,
      validator: (prop) => ['post', 'get'].includes(prop),
      default: 'post',
    },
    target: {
      type: String,
      validator: (prop) => ['_self', '_blank'].includes(prop),
      default: '_blank',
    },
  },
  data() {
    return {
      isCustomInvalid: false,
    }
  },
  methods: {
    handleSubmit(e) {
      this.isCustomInvalid = false
      for (const element of this.$children) {
        if (element?.classes?.includes('input--error')) {
          this.isCustomInvalid = true
        }
        for (const child of element?.$children) {
          if (child?.classes?.includes('input--error')) {
            this.isCustomInvalid = true
          }
        }
      }
      if (!this.isCustomInvalid) {
        if (this.submitFunction && !this.action) {
          e.preventDefault()
          this.submitFunction(e)
        } else if (this.submitFunction) {
          this.submitFunction(e)
        }
        this.$emit('emitSubmit', e)
      } else {
        // Prevent action from executing
        e.preventDefault()
      }
    },
  },
}
</script>
