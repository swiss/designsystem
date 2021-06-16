<template>
  <div class="icon-demo border border-gray-100 flex flex-col items-center shadow hover:shadow-lg transition-shadow ">
    <div v-html="icon" class="p-4" />
    <div class="text-xs bg-gray-50 p-2 w-full text-center ellipsis">
      {{ id }}
    </div>
  </div>
</template>

<script>
export default {
	name: 'SvgIconListItem',
	props: {
		icon: {
			type: String,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},
	},
}
</script>

<style lang="postcss">
  .icon-demo svg {
    @apply h-16
  }

  .ellipsis {
    text-overflow: ellipsis;
    overflow: auto;
  }
</style>