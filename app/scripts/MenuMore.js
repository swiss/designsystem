const MenuMore = {
  init(options) {
    this.wrapper = document.querySelector(options.navigationItem)
    this.menu = this.wrapper.querySelector('ul')
    this.menuItems = this.menu.querySelectorAll('li')
    this.moreBtn = document.querySelector(options.moreButton)
    this.moreContainer = document.querySelector(options.moreContainer)
    this.threshold = 5
    this.menuWrapperSize = this.getMenuWrapperSize()
    this.menuSize = this.getMenuSize()

    // start once
    this.startTriage()
    // then recheck after a window resize
    window.addEventListener('resize', this.startTriage)
  },

  startTriage() {
    let cumulatedSize = 0

    // be sure everything is visible while resizing
    MenuMore.menuItems.forEach((item) => {
      // move item back to the menu
      if (item.parentElement.id === MenuMore.moreContainer.id) {
        MenuMore.MoveContent(item, {
          target: MenuMore.menu,
          insertBefore: MenuMore.moreBtn,
        })
      }
      item.style.display = 'block'
    })
    if (MenuMore.menuSize <= MenuMore.getMenuWrapperSize()) return

    MenuMore.menuItems.forEach(function (item, index, array) {
      // exclude the «more» button, displayed at the end of mainmenu
      if (index < array.length - 1) {
        cumulatedSize += item.clientWidth

        if (cumulatedSize > MenuMore.getRemainingSpace()) {
          // item.style.display='none';
          MenuMore.setButtonVisibility(MenuMore.moreBtn, true)
          MenuMore.MoveContent(item, { target: MenuMore.moreContainer })
          // MenuMore.createClone(item, {target: MenuMore.moreContainer})
        } else {
          MenuMore.setButtonVisibility(MenuMore.moreBtn, false)
          // MenuMore.MoveContent(item, {target: MenuMore.menu})
        }
      }
    })
  },

  setButtonVisibility(btn, isVisible) {
    if (btn && isVisible) btn.classList.remove('hidden')
    else btn.classList.add('hidden')
  },

  setButtonClickEvent(target, leftValue) {
    target.addEventListener('click', function () {
      MenuMore.menu.scrollTo({
        top: 0,
        left: leftValue,
        behavior: 'smooth',
      })
    })
  },

  MoveContent(item, option) {
    if (option.insertBefore) {
      option.target.insertBefore(item, option.insertBefore)
    } else {
      option.target.appendChild(item)
    }
  },

  getMenuWrapperSize() {
    return this.wrapper.clientWidth
  },

  getRemainingSpace() {
    return this.wrapper.clientWidth - this.moreBtn.clientWidth - this.threshold
  },

  getMenuSize() {
    return this.menu.scrollWidth
  },
}

export default MenuMore
