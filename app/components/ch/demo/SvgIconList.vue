<template>
  <div>
    <ul class="storybook-icon-list">
      <li
        v-for="item in svgIconList"
        :key="item"
        class="storybook-icon-list__item"
      >
        <SvgIconListItem :id="item" />
      </li>
    </ul>
    <h2>CC Icons</h2>
    <ul class="storybook-icon-cc-list">
      <li v-for="item in svgCCIconList" :key="item">
        <SvgIconListItem :id="item" autoWidth />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SvgIconListItem from './SvgIconListItem.vue'

const svgIconList = ref([] as string[])
const svgCCIconList = ref([] as string[])

const array = import.meta.glob([
  '../../../assets/icons/*.svg',
  '../../../assets/icons/logos/*.svg',
])

onMounted(() => {
  const parsedArray = Object.keys(array).map((key) =>
    key.replace(/.*\/(.+)\.svg/, '$1'),
  )

  // Extract CC Icons from the rest
  svgIconList.value = parsedArray.filter((icon) => !icon.startsWith('CC-'))
  svgCCIconList.value = parsedArray.filter((icon) => icon.startsWith('CC-'))
})
</script>
