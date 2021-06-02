<template>
  <svg class="icon icon--base" :class="{ 'icon-spin': spin }">
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
		spin: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<style>
.icon {
	fill: currentColor;
  flex-shrink: 0;
}

.icon--base {
  @apply h-6 w-6;
  stroke: currentColor;
  stroke-width: 0.3px;
}

.icon--lg {
  @apply h-8 w-8;
  stroke: currentColor;
  stroke-width: 0.3px;
}

svg.icon-spin {
	animation: icon-spin 2s infinite linear;
}

@keyframes icon-spin {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(359deg);
	}
}
</style>