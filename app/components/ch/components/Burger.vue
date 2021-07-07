<template>
  <button
    class="burger"
  >
    <span
      class="burger__icon"
      :class="isOpen ? 'burger--is-open' : ''"
    >
      <span class="burger__bar" />
      <span class="burger__bar" />
      <span class="burger__bar" />
    </span>
  </button>
</template>

<script>

export default {
	name: 'Burger',
	props: {
		isOpen: {
			type: Boolean,
			default: false,
		}
	}
}
</script>
