<template>
  <div
    id="mobilemenu"
    class="mobilemenu"
    :class="isOpen ? 'mobilemenu--is-open' : '' ">
    <div class="navy show-level-0">
      <div class="navy__level-0">
        <MainNavigation context="mobile" />
        <MetaNavigation context="mobile" />
        <TopBarNavigation context="mobile" />
      </div>
      <div class="navy__level-1"></div>
      <div class="navy__level-2"></div>
    </div>
  </div>
</template>

<script>
import MainNavigation from '../navigations/MainNavigation.vue'
import MetaNavigation from '../navigations/MetaNavigation.vue'
import TopBarNavigation from '../navigations/TopBarNavigation.vue'
import SvgIcon from '../components/SvgIcon.vue'

export default {
  name: 'MobileMenu',
  components: {
    MainNavigation,
    MetaNavigation,
    TopBarNavigation,
    SvgIcon
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    }
  },
  mounted () {
    var navys = document.querySelectorAll('.navy')
    var currentMenuLink = undefined

    function showNextLevel(navigation, currentLevel) {
      navigation.classList.remove('show-level-0')
      navigation.classList.remove('show-level-1')
      navigation.classList.remove('show-level-2')

      navigation.classList.add(`show-level-${currentLevel+1}`)
    }

    function showPrevLevel(navigation, currentLevel) {
      navigation.classList.remove('show-level-0')
      navigation.classList.remove('show-level-1')
      navigation.classList.remove('show-level-2')

      navigation.classList.add(`show-level-${currentLevel-1}`)

      // set focus on the `parent` link after the transition
      // 600ms is the duration of the sliding animation (find it in _navy.scss)
      setTimeout(function () {currentMenuLink.focus() }, 610);
    }

    function displaySubmenu(target, submenus) {

      [].forEach.call(submenus, function (submenu) {
        submenu.classList.add('hidden')
      })
      target.classList.remove('hidden')

      // set focus on the `.back` button after the transition
      // 600ms is the duration of the sliding animation (find it in _navy.scss)
      setTimeout(function () { target.querySelector('.navy__back').focus() }, 610);
    }

    function initializeEvents(nextButtons, backButtons, navy, level, submenus) {

      // TODO make it recursive
      // TODO separate buttin events from the rest

      [].forEach.call(nextButtons, function (btn) {
        btn.relatedMenu = btn.nextElementSibling

        level.appendChild(btn.relatedMenu)

        btn.addEventListener('click', function () {
          showNextLevel(navy, 0)
          displaySubmenu(btn.relatedMenu, submenus)
          currentMenuLink = btn
        })
      });

      [].forEach.call(backButtons, function (btn) {
        btn.addEventListener('click', function () {
          showPrevLevel(navy, 1)
        })
      })
    }




    navys.forEach(function (navy) {

      var nextButtons = navy.querySelectorAll('.navy__has-children')
      var backButtons = navy.querySelectorAll('.navy__back')

      var level1 = navy.querySelector('.navy__level-1')
      var submenus1 = navy.querySelectorAll("ul > li > ul")

      var level2 = navy.querySelector('.navy__level-2')
      var submenus2 = navy.querySelectorAll("ul > li > ul > li > ul")

      initializeEvents(nextButtons, backButtons, navy, level1, submenus1)

    })
  }
}
</script>