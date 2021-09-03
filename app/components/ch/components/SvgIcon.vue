<template>
  <inline-svg
    :src="require(`../../../assets/icons/${icon}.svg`)"
    :class="iconClass"
  />
</template>

<script>
import InlineSvg from 'vue-inline-svg';
export default {
	name: 'SvgIcon',
  components: {
    InlineSvg
  },
	props: {
		icon: {
			type: String,
			required: true,
		},
    size: {
			type: String,
			required: false,
      default: 'base',
      validator: (prop) => [
        'sm',
        'base',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        'full'
      ].includes(prop)
		},
		spin: {
			type: Boolean,
			default: false,
		},
	},
  computed: {
    iconClass () {
      let base = `icon `
      if (this.size)      base += `icon--${this.size} `
      if (this.spin)      base += `icon--spin `
      return base
    }
  }
}
</script>
