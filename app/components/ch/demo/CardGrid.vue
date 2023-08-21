<template>
  <div
    :class="computedClasses"
  >
    <slot />
  </div>
</template>

<script>

export default {
  name: 'TopNewsSection',
  components: {
  },
  props:  {
    nItems: {
      type: Number,
      validator: (prop) => {
        return prop > 0 && prop < 6
      },
    },
  },

  computed: {
    computedClasses () {
      let base = 'grid gap--responsive '
      if (this.nItems ===  1) base += `grid--items-1 `
      else if (this.nItems ===  2) base += `grid--items-2 `
      else if (this.nItems ===  3) base += `grid--items-3 `
      else if (this.nItems ===  4) base += `grid--items-4 `
      else if (this.nItems ===  5) base += `grid--items-5 `
      return base
    },
  }
};
</script>
