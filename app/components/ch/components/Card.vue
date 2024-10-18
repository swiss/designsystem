<template>
  <div :class="computedClasses">
    <div
      v-if="$slots.image && type !== 'highlight' && type !== 'universal'"
      class="card__image"
    >
      <slot name="image"></slot>
    </div>
    <div v-if="$slots.header" class="card__header">
      <slot name="header"></slot>
    </div>
    <div class="card__content">
      <div class="card__body">
        <slot name="metaInfos"></slot>
        <div v-if="$slots.title" class="card__title">
          <slot name="title"></slot>
        </div>
        <slot name="description" class="card__description"></slot>
        <div v-if="$slots.image && type === 'universal'" class="card__image">
          <slot name="image"></slot>
        </div>
        <slot name="author"></slot>
        <slot name="eventInfos"></slot>
        <slot name="specifications"></slot>
        <slot name="contentIcons"></slot>
      </div>
      <div
        v-if="$slots.footerInfo || $slots.footerAction"
        :class="computedClassesFooter"
      >
        <div v-if="$slots.footerInfo" class="card__footer__info">
          <slot name="footerInfo"></slot>
        </div>
        <div v-if="$slots.footerAction" class="card__footer__action">
          <slot name="footerAction"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSlots, computed } from 'vue'

const slots = useSlots()

const props = defineProps({
  type: {
    type: String,
    validator: (prop) =>
      ['default', 'highlight', 'twitter', 'flat', 'universal', 'list'].includes(
        prop,
      ),
  },
  layout: {
    type: String,
    validator: (prop) =>
      ['default', 'image-left', 'image-right'].includes(prop),
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
  if (props.layout && props.layout !== 'default')
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
