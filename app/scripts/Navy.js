const Navy = {

  showNextLevel (currentLevel) {
    Navy.container.classList.remove('show-level-0','show-level-1','show-level-2','show-level-3','show-level-4','show-level-5','show-level-6')
    Navy.container.classList.add(`show-level-${currentLevel+1}`)
  },

  showPrevLevel (currentLevel) {
    Navy.container.classList.remove('show-level-0','show-level-1','show-level-2','show-level-3','show-level-4','show-level-5','show-level-6')
     Navy.container.classList.add(`show-level-${currentLevel-1}`)

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

  initEvents (nextButtons, backButtons, navy, container, submenus, level) {
    // TODO make it recursive
    // TODO separate buttin events from the rest

    [].forEach.call(nextButtons, function (btn) {
      btn.relatedMenu = btn.nextElementSibling

      container.appendChild(btn.relatedMenu)

      btn.addEventListener('click', function () {
        Navy.showNextLevel(0)
        Navy.displaySubmenu(btn.relatedMenu, submenus)
        Navy.currentMenuLink = btn
      })
    });

    [].forEach.call(backButtons, function (btn) {
      btn.addEventListener('click', function () {
        Navy.showPrevLevel(1)
      })
    })
  },

  init (navigations, target) {

    // build navy structure and inject it in the target:
    const targetElement = document.querySelector(target)
    Navy.container = document.createElement('div')
    Navy.level0 = document.createElement('div')
    Navy.level1 = document.createElement('div')
    Navy.level2 = document.createElement('div')
    Navy.level3 = document.createElement('div')
    Navy.level4 = document.createElement('div')
    Navy.level5 = document.createElement('div')
    Navy.level6 = document.createElement('div')

    Navy.container.classList.add('navy', 'show-level-0')
    Navy.level0.classList.add('navy__level-0')
    Navy.level1.classList.add('navy__level-1')
    Navy.level2.classList.add('navy__level-2')
    Navy.level3.classList.add('navy__level-3')
    Navy.level4.classList.add('navy__level-4')
    Navy.level5.classList.add('navy__level-5')
    Navy.level6.classList.add('navy__level-6')

    targetElement.appendChild(Navy.container)
    Navy.container.appendChild(Navy.level0)
    Navy.container.appendChild(Navy.level1)
    Navy.container.appendChild(Navy.level2)
    Navy.container.appendChild(Navy.level3)
    Navy.container.appendChild(Navy.level4)
    Navy.container.appendChild(Navy.level5)
    Navy.container.appendChild(Navy.level6)


    // parse all navigations and init events:
    let navs = document.querySelectorAll(navigations)
    Navy.currentMenuLink = undefined

    navs.forEach(function (navy) {

      // inject navigation in navy__level0
      Navy.level0.appendChild(navy)

      let nextButtons1 = navy.querySelectorAll('.navy__has-children')
      let backButtons1 = navy.querySelectorAll('.navy__back')

      let submenus1 = navy.querySelectorAll("ul > li > ul")


      //Navy.initEvents(nextButtons1, backButtons1, navy, Navy.level1, submenus1, 1)
    })
  }


}

export default Navy