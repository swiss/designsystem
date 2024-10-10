<template>
  <div>
    <ul class="storybook-icon-list">
      <li v-for="item in svgIconList" :key="item" class="storybook-icon-list__item">
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

<script setup>
import { ref, onMounted } from 'vue'
import SvgIconListItem from './SvgIconListItem.vue'

let svgIconList = ref([])
let svgCCIconList = ref([])

let array = import.meta.glob([
  '../../../assets/icons/*.svg',
  '../../../assets/icons/logos/*.svg',
])

onMounted(() => {
  array = Object.keys(array).map((key, i) => (
    key.replace(/.*\/(.+)\.svg/, '$1')
  ))

  // Extract CC Icons from the rest
  svgIconList.value = array.filter(icon => !icon.startsWith('CC-'))
  svgCCIconList.value = array.filter(icon => icon.startsWith('CC-'))
})

</script>
