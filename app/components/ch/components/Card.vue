<template>
  <div :class="computedClasses">
    <div
      v-if="slots.image && type !== 'highlight' && type !== 'universal'"
      class="card__image"
    >
      <slot name="image" />
    </div>
    <div v-if="slots.header" class="card__header">
      <slot name="header" />
    </div>
    <div class="card__content">
      <div class="card__body">
        <slot name="metaInfos" />
        <div v-if="slots.title" class="card__title">
          <slot name="title" />
        </div>
        <slot name="description" class="card__description" />
        <div v-if="slots.image && type === 'universal'" class="card__image">
          <slot name="image" />
        </div>
        <slot name="author" />
        <slot name="eventInfos" />
        <slot name="specifications" />
        <slot name="contentIcons" />
      </div>
      <div
        v-if="slots.footerInfo || slots.footerAction"
        :class="computedClassesFooter"
      >
        <div v-if="slots.footerInfo" class="card__footer__info">
          <slot name="footerInfo" />
        </div>
        <div v-if="slots.footerAction" class="card__footer__action">
          <slot name="footerAction" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots, type PropType } from 'vue'

const slots = useSlots()

const props = defineProps({
  type: {
    type: String as PropType<
      'default' | 'highlight' | 'twitter' | 'flat' | 'universal' | 'list'
    >,
    validator: (prop) =>
      ['default', 'highlight', 'twitter', 'flat', 'universal', 'list'].includes(
        prop as string,
      ),
    default: () => undefined,
  },
  layout: {
    type: String as PropType<'default' | 'image-left' | 'image-right'>,
    validator: (prop) =>
      ['default', 'image-left', 'image-right'].includes(prop as string),
    default: () => undefined,
  },
})

const computedClasses = computed(() => {
  let base = 'card '
  if (props.type)
    base +=
      props.type === 'list'
        ? slots.image
          ? 'card--list '
          : 'card--list-without-image '
        : `card--${props.type} `
  if (props.layout && props.layout !== 'default' && slots.image)
    base += `card--${props.layout} `
  if (slots.footerAction) base += `card--clickable `
  return base
})

const computedClassesFooter = computed(() => {
  let base = 'card__footer '
  if (!slots.footerInfo) base += `card__footer--icon-only `
  return base
})
</script>
