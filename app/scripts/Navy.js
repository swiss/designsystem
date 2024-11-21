const Navy = {
  showLevel(level) {
    document.body.classList.remove(
      'show-level-0',
      'show-level-1',
      'show-level-2',
      'show-level-3',
      'show-level-4',
      'show-level-5',
      'show-level-6',
      'show-level-7',
    )
    document.body.classList.add(`show-level-${level}`)
    Navy.currentLevel = level
  },

  resizeDrawerHeight(target) {
    if (!target) return
    const paddingTop = parseInt(
      window
        .getComputedStyle(Navy.drawer, null)
        .getPropertyValue('padding-top'),
    )
    const paddingBottom = parseInt(
      window
        .getComputedStyle(Navy.drawer, null)
        .getPropertyValue('padding-bottom'),
    )
    const newHeight = paddingTop + paddingBottom + target.offsetHeight + 'px'
    Navy.drawer.style.height = newHeight
  },

  displayRelatedSubmenu(btn, relatedMenu, submenus, isBackBtn) {
    if (relatedMenu === undefined) return
    ;[].forEach.call(submenus, function (submenu) {
      submenu.classList.add('hidden')
    })
    relatedMenu.classList.remove('hidden')

    Navy.currentRelatedMenu = relatedMenu

    Navy.resizeDrawerHeight(relatedMenu)

    // focus handling
    function passFocus() {
      // get first link of the current slide, set focus on it:
      const firstLink = Navy.drawer.querySelector(
        `.navy__level-${Navy.currentLevel} ul > li a`,
      )
      if (firstLink == document.activeElement) firstLink.blur()
      else firstLink.focus()
    }

    // set focus on submenu items if mainmenu btn is unfocused
    if (!Navy.drawer.classList.contains('hidden')) {
      btn.addEventListener('blur', passFocus, true)
    }

    if (isBackBtn) {
      btn.addEventListener('blur', passFocus, true)
    }
  },

  parseTree(ul, level) {
    const nextButtons = ul.querySelectorAll(':scope > li > .navy__has-children')
    if (nextButtons.length === 0) return

    const backButtons = ul.querySelectorAll(
      ':scope > li > ul > li > .navy__back',
    )
    const submenus = ul.querySelectorAll(':scope > li > ul')

    ;[].forEach.call(nextButtons, function (btn) {
      btn.relatedMenu = btn.nextElementSibling

      // inject menu in it's respective slide:
      Navy.level[level + 1].appendChild(btn.relatedMenu)

      btn.addEventListener('click', function () {
        Navy.showLevel(level + 1)

        Navy.displayRelatedSubmenu(btn, btn.relatedMenu, submenus)
        Navy.currentMenuLink = btn
      })

      // recursion for next navigation levels
      Navy.parseTree(btn.relatedMenu, level + 1)
    })
    ;[].forEach.call(backButtons, function (backBtn) {
      backBtn.relatedMenu =
        backBtn.parentElement.parentElement.parentElement.previousSibling.querySelector(
          'ul',
        )
      backBtn.addEventListener('click', function () {
        Navy.showLevel(level)
        Navy.displayRelatedSubmenu(backBtn, backBtn.relatedMenu, submenus, true)
      })
    })
  },

  buildSlides(target) {
    const targetElement = document.querySelector(target)

    Navy.currentMenuLink = undefined
    Navy.container = document.createElement('div')
    Navy.container.classList.add('navy')

    // create slides and inject them into .navy:
    Navy.level = []
    for (let i = 0; i < 8; i++) {
      Navy.level[i] = document.createElement('div')
      Navy.level[i].classList.add(`navy__level-${i}`)
      Navy.container.appendChild(Navy.level[i])
    }
    targetElement.prepend(Navy.container)
  },

  initMobile(navigationItems, target) {
    // build navy structure and inject it in the target:
    Navy.buildSlides(target)

    // inject navigations in the first slide:
    const navs = document.querySelectorAll(navigationItems)
    navs.forEach(function (nav) {
      Navy.level[0].appendChild(nav)

      // parse uls and start recursion:
      const ul = nav.querySelector('ul')
      Navy.parseTree(ul, 0)
    })
  },

  setDrawerXPosition(btn) {
    if (btn === undefined) return

    const btnCoord = btn.getBoundingClientRect()
    let leftPos = 0

    if (btn.offsetLeft + Navy.drawer.clientWidth > Navy.nav.clientWidth) {
      leftPos = btnCoord.right - Navy.drawer.clientWidth
      Navy.drawer.classList.remove('with-offset')
    } else {
      leftPos = btnCoord.left
      Navy.drawer.classList.add('with-offset')
    }
    Navy.drawer.style.transform = `translateX(${leftPos}px)`

    Navy.currentBtn = btn
  },

  closeSubmenu(mainmenuBtn) {
    Navy.drawer.classList.add('hidden')
    Navy.overlay.classList.add('hidden')
    mainmenuBtn.classList.remove('clicked')
    Navy.currentMenuBtn = undefined
    Navy.currentRelatedMenu = undefined
  },

  toggleSubmenu(mainmenuBtn, relatedMenu, submenus) {
    if (Navy.currentMenuBtn === undefined) {
      Navy.drawer.classList.remove('hidden')
      Navy.overlay.classList.remove('hidden')
      mainmenuBtn.classList.add('clicked')
      Navy.currentMenuBtn = mainmenuBtn
      Navy.displayRelatedSubmenu(mainmenuBtn, relatedMenu, submenus)
    } else if (mainmenuBtn === Navy.currentMenuBtn) {
      this.closeSubmenu(mainmenuBtn)
    } else {
      Navy.drawer.classList.remove('hidden')
      Navy.overlay.classList.remove('hidden')
      Navy.currentMenuBtn.classList.remove('clicked')
      mainmenuBtn.classList.add('clicked')
      Navy.currentMenuBtn = mainmenuBtn
      Navy.displayRelatedSubmenu(mainmenuBtn, relatedMenu, submenus)
    }

    Navy.setDrawerXPosition(mainmenuBtn)
  },

  initDesktop(options) {
    // build navy structure and inject it in the drawer:
    Navy.buildSlides(options.drawer)
    Navy.drawer = document.querySelector(options.drawer)
    if (options.overlay) Navy.overlay = document.querySelector(options.overlay)
    Navy.nav = document.querySelector(options.navigationNav)
    Navy.currentMenuBtn = undefined
    Navy.currentRelatedMenu = undefined
    Navy.currentLevel = 0

    const closeBtn = document.querySelector(options.closeButton)
    const mainmenuBtns = Navy.nav.querySelectorAll(':scope > ul > li > a')
    const submenus = Navy.nav.querySelectorAll(':scope > ul > li > ul')
    const slide0 = Navy.drawer.querySelector(':scope > .navy > .navy__level-0')

    window.addEventListener('resize', function () {
      Navy.setDrawerXPosition(Navy.currentMenuBtn)
      Navy.resizeDrawerHeight(Navy.currentRelatedMenu)
    })
    ;[].forEach.call(mainmenuBtns, function (mainmenuBtn) {
      // check if item has submenu
      mainmenuBtn.relatedMenu = mainmenuBtn.nextElementSibling
      if (!mainmenuBtn.relatedMenu) return

      // inject menu in slide 0:
      slide0.appendChild(mainmenuBtn.relatedMenu)

      // hide first .navy__back button:
      const firstBackBtn = mainmenuBtn.relatedMenu.querySelector(
        ':scope > li > .navy__back',
      )
      if (firstBackBtn) firstBackBtn.classList.add('hidden')

      // make first recursion:
      Navy.parseTree(mainmenuBtn.relatedMenu, 0)

      // add click events
      mainmenuBtn.addEventListener('click', function (event) {
        event.preventDefault()
        Navy.toggleSubmenu(mainmenuBtn, mainmenuBtn.relatedMenu, submenus)
      })

      closeBtn.addEventListener('click', function (event) {
        event.preventDefault()
        Navy.closeSubmenu(mainmenuBtn)
      })

      Navy.overlay.addEventListener('click', function (event) {
        event.preventDefault()
        Navy.closeSubmenu(mainmenuBtn)
      })
    })
  },
}

export default Navy
