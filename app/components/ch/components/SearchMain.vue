<template>
  <div class="search search--main">
    <div class="search__group">
      <h2 class="sr-only">Suche</h2>
      <Input
        type="search"
        id="search-main"
        label="Suche in dieser Website"
        placeholder="Suche"
        autocomplete="off"
      />
      <div
        class="search__button"
        title="Toggle search"
      >
        <span class="search__button__title">Suche</span>
        <SvgIcon
          icon="Search" size="full"
          class="search__button__icon"
        />
    </div>
    </div>

  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';
import Input from './Input.vue';

export default {
  components: {
    SvgIcon,
    Input
  },
	name: 'SearchMain',
	props: {
		isOpen: {
			type: Boolean,
			default: false,
		}
	}
}
</script>
