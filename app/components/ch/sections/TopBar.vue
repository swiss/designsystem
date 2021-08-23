<template>
  <div
    class="top-bar"
    :class="isOpen ? 'top-bar--is-open' : '' "
  >
    <div class="top-bar__bar">
      <div class="container container--flex">
        <button
          class="top-bar__btn"
          @click="isOpen = !isOpen"
        >
          Alle Schweizer Bundesbehörden
        </button>
        <div class="top-bar__right">
          <TopBarNavigation context="desktop" />
        </div>
      </div>
    </div>
    <div v-if="isOpen" class="top-bar__drawer">
      <div class="container">

        <div class="top-bar__drawer__localization">
          <h3>Wo befinde ich mich?</h3>
          <div class="top-bar__drawer__localization__nav">
            <ul>
              <li>
                <a href="javascript:void(0)">UVEK</a>
                <SvgIcon
                  icon="ArrowRight"
                  class="top-bar__drawer__localization__nav__icon"
                />
              </li>
              <li>
                <a href="javascript:void(0)">Swisstopo</a>
                <SvgIcon
                  icon="ArrowRight"
                  class="top-bar__drawer__localization__nav__icon"
                />
              </li>
              <li>
                <a href="javascript:void(0)" class="active">Das Geoportal des Bundes</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import TopBarNavigation from '../navigations/TopBarNavigation.vue'
import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'TopBar',
  components: {
    TopBarNavigation,
    SvgIcon
  },
  props: {
    isOpen: {
      type: Boolean,
      default: true,
    }
  },
}
</script>
