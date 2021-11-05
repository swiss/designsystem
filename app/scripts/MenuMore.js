const MenuMore = {

  init(navigationItem) {
    this.wrapper = document.querySelector(navigationItem);
    this.menu = this.wrapper.querySelector('ul');
    this.btnLeft = document.getElementById('more-button-left');
    this.btnRight = document.getElementById('more-button-right');
    this.threshold = 5;
    
    this.menuWrapperSize = this.getMenuWrapperSize();
    this.menuSize = this.getMenuSize();
    
    // start if menu larger than it's container
    if (this.menuSize > this.menuWrapperSize) this.evaluateButtonsDisplay();
    // recheck after a window resize 
    window.addEventListener('resize', this.evaluateButtonsDisplay);

    // TODO: 
    // - scroll if a hidden mainmenu is selected
    // - control tab navigation
  },

  evaluateButtonsDisplay () {
    // get how much of menu is invisible and how much have we scrolled
    let menuInvisibleSize = MenuMore.getMenuSize() - MenuMore.getMenuWrapperSize();
    let menuPosition = MenuMore.getMenuPosition(); 
    let menuEndOffset = menuInvisibleSize - MenuMore.threshold;

    if (menuInvisibleSize <= 0) {
      // hide both btns
      MenuMore.setButtonVisibility(MenuMore.btnLeft, false);
      MenuMore.setButtonVisibility(MenuMore.btnRight, false);
    }
    else if (menuPosition < MenuMore.threshold) {
      MenuMore.startMenuMore();
      // show btn right
      MenuMore.setButtonVisibility(MenuMore.btnLeft, false);
      MenuMore.setButtonVisibility(MenuMore.btnRight, true);
      // assign click event
      MenuMore.setButtonClickEvent(MenuMore.btnRight, 10000);
    } 
    else if (menuPosition < menuEndOffset) {
      MenuMore.startMenuMore();
      // show both
      MenuMore.setButtonVisibility(MenuMore.btnLeft, true);
      MenuMore.setButtonVisibility(MenuMore.btnRight, true);
      // assign click event
      MenuMore.setButtonClickEvent(MenuMore.btnLeft, 0);
      MenuMore.setButtonClickEvent(MenuMore.btnRight, 10000);
    } 
    else if (menuPosition >= menuEndOffset) {
      MenuMore.startMenuMore();
      // show btn left
      MenuMore.setButtonVisibility(MenuMore.btnLeft, true);
      MenuMore.setButtonVisibility(MenuMore.btnRight, false);
      // assign click event
      MenuMore.setButtonClickEvent(MenuMore.btnLeft, 0);
    }
  },

  startMenuMore () {
    this.menu.addEventListener('scroll', this.evaluateButtonsDisplay);
  },

  stopMenuMore () {
    this.setButtonVisibility(this.btnRight, false);
    this.setButtonVisibility(this.btnLeft, false);
  },

  setButtonVisibility(btn, isVisible) {
    btn && isVisible ? btn.classList.remove('hidden') : btn.classList.add('hidden');
  },

  setButtonClickEvent(target, leftValue) {
    target.addEventListener('click', function(e) {
      MenuMore.menu.scrollTo({
        top: 0,
        left: leftValue,
        behavior: 'smooth'
      });
    });
  },

  getMenuWrapperSize () {
    return this.wrapper.clientWidth;
  },

  getMenuSize () {
    return this.menu.scrollWidth;
  },
  
  getMenuPosition () {
    return this.menu.scrollLeft;
  },
}

export default MenuMore
