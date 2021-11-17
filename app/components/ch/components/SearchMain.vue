<template>
  <div class="search search--main">
    <div class="search__group">
      <Input type="text" id="search-main" label="Suche" placeholder="Suche" />
      <button
        class="search__button"
        title="Toggle search"
      >
        <span class="search__button__title">Suche</span>
        <SvgIcon
          icon="Search" size="full"
          class="search__button__icon"
        />
      </button>
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
