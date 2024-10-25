<template>
  <a class="download-item" :href="url" :download="filename || true">
    <SvgIcon icon="Download" size="xl" class="download-item__icon" />
    <div>
      <component :is="tag" class="download-item__title">
        {{ title }}
      </component>
      <p v-if="description" class="download-item__description">
        {{ description }}
      </p>
      <MetaInfo
        v-if="type || date || size"
        :metainfos="metaInfos"
        class="download-item__meta-info"
      />
    </div>
  </a>
</template>

<script setup lang="ts">
import SvgIcon from '../components/SvgIcon.vue'
import MetaInfo from './MetaInfo.vue'
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: false,
    default: () => undefined,
  },
  description: {
    type: String,
    description: () => undefined,
    default: () => undefined,
  },
  url: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: false,
    default: () => undefined,
  },
  date: {
    type: String,
    required: true,
  },
  headingLevel: {
    type: String,
    default: () => 'h4',
    validator: (prop) =>
      ['h2', 'h3', 'h4', 'h5', 'div'].includes(prop as string),
  },
})

const tag = computed(() => {
  return props.headingLevel
})

const metaInfos = computed(() => {
  const infos = []
  if (props.type) {
    infos.push(props.type)
  }
  if (props.date) {
    infos.push(props.date)
  }
  if (props.size) {
    infos.push(props.size)
  }
  return infos
})
</script>
