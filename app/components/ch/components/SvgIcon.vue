<template>
  <svg
    :class="iconClass">
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>

<script>
export default {
	name: 'SvgIcon',
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
        '4xl'
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
