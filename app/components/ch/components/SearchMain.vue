<template>
  <div class="search search--main">
    <div class="search__group">
      <Input type="text" id="text-id-0" label="Amt suchen" placeholder="Amt suchen" />
      <!--Btn label="Amt Suchen" icon="Search" icon-pos="only" /-->
      <button
        class="search-opener"
        title="Toggle search"
      >
        <span class="search-opener__title">Search</span>
        <SvgIcon
          icon="Search" size="full"
          class="search-opener__icon"
        />
      </button>
    </div>

  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';
import Input from './Input.vue';
import Btn from './Btn.vue';

export default {
  components: {
    SvgIcon,
    Input,
    Btn
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
