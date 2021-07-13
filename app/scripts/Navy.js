const Navy = {

  showLevel(level) {
    document.body.classList.remove('show-level-0', 'show-level-1', 'show-level-2', 'show-level-3', 'show-level-4', 'show-level-5', 'show-level-6', 'show-level-7')
    document.body.classList.add(`show-level-${level}`)
  },

  displayRelatedSubmenu (target, submenus) {
    [].forEach.call(submenus, function (submenu) {
      submenu.classList.add('hidden')
    })
    target.classList.remove('hidden')

    // set focus on the `.back` button after the transition
    // 600ms is the duration of the sliding animation (find it in _navy.scss)
    setTimeout(function () { target.querySelector('.navy__back').focus() }, 610)
  },

  parseTree(ul, level) {
    let nextButtons = ul.querySelectorAll(':scope > li > .navy__has-children')
    if ( nextButtons.length === 0 ) return

    let backButtons = ul.querySelectorAll(':scope > li > ul > li > .navy__back')
    let submenus = ul.querySelectorAll(":scope > li > ul");

    [].forEach.call(nextButtons, function (btn) {
      btn.relatedMenu = btn.nextElementSibling

      // inject menu in it's respective slide:
      Navy.level[level+1].appendChild(btn.relatedMenu)

      btn.addEventListener('click', function () {
        Navy.showLevel(level+1)
        Navy.displayRelatedSubmenu(btn.relatedMenu, submenus)
        Navy.currentMenuLink = btn
      })

      // recursion for next navigation levels
      Navy.parseTree(btn.relatedMenu, level+1)
    });

    [].forEach.call(backButtons, function (btn) {
      btn.addEventListener('click', function () {
        Navy.showLevel(level)
      })
    })
  },

  init (ulMenus, target, options) {

    // build navy structure and inject it in the target:
    document.body.classList.add('show-level-0')
    const targetElement = document.querySelector(target)

    Navy.currentMenuLink = undefined
    Navy.container = document.createElement('div')
    Navy.container.classList.add('navy')
    targetElement.appendChild(Navy.container)

    // create slides and inject them into .navy:
    Navy.level = []
    for (let i = 0; i < 8; i++) {
      Navy.level[i] = document.createElement('div')
      Navy.level[i].classList.add(`navy__level-${i}`)
      Navy.container.appendChild(Navy.level[i])
    }

    // parse all uls and init events:
    let uls = document.querySelectorAll(ulMenus)

    uls.forEach(function (ul) {

      // inject navigation in navy__level0
      Navy.level[0].appendChild(ul)

      // parse tree and inject uls in their respective slides
      Navy.parseTree(ul, 0)
    })
  },
}

export default Navy