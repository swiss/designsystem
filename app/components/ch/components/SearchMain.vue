<template>
  <div class="search search--main" id="search-main-wrapper">
    <div class="search__group">
      <h2 class="sr-only">Suche</h2>
      <Input
        :class="isMenuV2 ? 'search--desktop' : ''"
        type="search"
        id="search-main"
        label="Suche in dieser Website"
        placeholder="Suche"
        autocomplete="off"
      />
      <div class="search__button" title="Toggle search" @click="toggleSearch">
        <span class="search__button__title">Suche</span>
        <SvgIcon icon="Search" size="lg" class="search__button__icon" />
      </div>
    </div>
  </div>
</template>

<script>
import Input from './Input.vue';
import SvgIcon from './SvgIcon.vue';

export default {
  components: {
    SvgIcon,
    Input,
  },
  name: 'SearchMain',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    isMenuV2: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleSearch() {
      this.$emit('toggleSearch')
    },
  },
}
</script>
