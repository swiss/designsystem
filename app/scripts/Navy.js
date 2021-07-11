const Navy = {

  showNextLevel (navigation, currentLevel) {
    navigation.classList.remove('show-level-0')
    navigation.classList.remove('show-level-1')
    navigation.classList.remove('show-level-2')
    navigation.classList.add(`show-level-${currentLevel+1}`)
  },

  showPrevLevel (navigation, currentLevel) {
    navigation.classList.remove('show-level-0')
    navigation.classList.remove('show-level-1')
    navigation.classList.remove('show-level-2')
    navigation.classList.add(`show-level-${currentLevel-1}`)

    // set focus on the `parent` link after the transition
    // 600ms is the duration of the sliding animation (find it in _navy.scss)
    setTimeout(function () {Navy.currentMenuLink.focus() }, 610)
  },

  displaySubmenu (target, submenus) {
    [].forEach.call(submenus, function (submenu) {
      submenu.classList.add('hidden')
    })
    target.classList.remove('hidden')

    // set focus on the `.back` button after the transition
    // 600ms is the duration of the sliding animation (find it in _navy.scss)
    setTimeout(function () { target.querySelector('.navy__back').focus() }, 610)
  },

  initEvents (nextButtons, backButtons, navy, level, submenus) {
    // TODO make it recursive
    // TODO separate buttin events from the rest

    [].forEach.call(nextButtons, function (btn) {
      btn.relatedMenu = btn.nextElementSibling

      level.appendChild(btn.relatedMenu)

      btn.addEventListener('click', function () {
        Navy.showNextLevel(navy, 0)
        Navy.displaySubmenu(btn.relatedMenu, submenus)
        Navy.currentMenuLink = btn
      })
    });

    [].forEach.call(backButtons, function (btn) {
      btn.addEventListener('click', function () {
        Navy.showPrevLevel(navy, 1)
      })
    })
  },

  init (target) {
    let navys = document.querySelectorAll(target)
    Navy.currentMenuLink = undefined

    navys.forEach(function (navy) {
      let nextButtons = navy.querySelectorAll('.navy__has-children')
      let backButtons = navy.querySelectorAll('.navy__back')

      let level1 = navy.querySelector('.navy__level-1')
      let submenus1 = navy.querySelectorAll("ul > li > ul")

      let level2 = navy.querySelector('.navy__level-2')
      let submenus2 = navy.querySelectorAll("ul > li > ul > li > ul")

      Navy.initEvents(nextButtons, backButtons, navy, level1, submenus1)
    })
  }


}

export default Navy