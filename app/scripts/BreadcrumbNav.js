const BreadcrumbNav = {

  showLevel(level) {
    document.body.classList.remove('show-level-0', 'show-level-1', 'show-level-2', 'show-level-3', 'show-level-4', 'show-level-5', 'show-level-6', 'show-level-7');
    document.body.classList.add(`show-level-${level}`);
  },

  displayRelatedSubmenu (target, submenus) {
    [].forEach.call(submenus, function (submenu) {
      submenu.classList.add('hidden');
    });
    target.classList.remove('hidden');

    // set focus on the `.back` button after the transition
    // 600ms is the duration of the sliding animation (find it in _breadcrumb.scss);
    // setTimeout(function () { target.querySelector('.breadcrumb__back').focus() }, 610);
  },

  parseTree(ul, level) {
    let nextButtons = ul.querySelectorAll(':scope > li > .breadcrumb__has-children');
    if ( nextButtons.length === 0 ) return

    let backButtons = ul.querySelectorAll(':scope > li > ul > li > .breadcrumb__back');
    let submenus = ul.querySelectorAll(":scope > li > ul");

    [].forEach.call(nextButtons, function (btn) {
      btn.relatedMenu = btn.nextElementSibling

      // inject menu in it's respective slide:
      BreadcrumbNav.level[level+1].appendChild(btn.relatedMenu);

      btn.addEventListener('click', function () {
        BreadcrumbNav.showLevel(level+1);

        BreadcrumbNav.displayRelatedSubmenu(btn.relatedMenu, submenus);
        BreadcrumbNav.currentMenuLink = btn
      });

      // recursion for next navigation levels
      BreadcrumbNav.parseTree(btn.relatedMenu, level+1);
    });

    [].forEach.call(backButtons, function (btn) {
      btn.addEventListener('click', function () {
        BreadcrumbNav.showLevel(level);
      });
    });
  },

  buildSlides (target){
    document.body.classList.add('show-level-0');
    const targetElement = document.querySelector(target);

    BreadcrumbNav.currentMenuLink = undefined
    BreadcrumbNav.container = document.createElement('div');
    BreadcrumbNav.container.classList.add('breadcrumb');

    // create slides and inject them into .breadcrumb:
    BreadcrumbNav.level = []
    for (let i = 0; i < 8; i++) {
      BreadcrumbNav.level[i] = document.createElement('div');
      BreadcrumbNav.level[i].classList.add(`breadcrumb__level-${i}`);
      BreadcrumbNav.container.appendChild(BreadcrumbNav.level[i]);
    }
    targetElement.appendChild(BreadcrumbNav.container);
  },

  setDrawerXPosition (btn) {
    let rect = btn.getBoundingClientRect();
    BreadcrumbNav.drawer.style.transform = `translateX(${rect.left}px)`;
  },

  closeSubmenu(mainmenuBtn) {
    BreadcrumbNav.drawer.classList.add('hidden');
    BreadcrumbNav.overlay.classList.add('hidden');
    mainmenuBtn.classList.remove('clicked');
    BreadcrumbNav.currentMenuBtn = undefined;
  },

  toggleSubmenu(mainmenuBtn, relatedMenu, submenus) {
    if (BreadcrumbNav.currentMenuBtn === undefined) {
      BreadcrumbNav.drawer.classList.remove('hidden');
      mainmenuBtn.classList.add('clicked');
      BreadcrumbNav.currentMenuBtn = mainmenuBtn;

    }
    else if (mainmenuBtn === BreadcrumbNav.currentMenuBtn) {
      BreadcrumbNav.drawer.classList.add('hidden');
      mainmenuBtn.classList.remove('clicked');
      BreadcrumbNav.currentMenuBtn = undefined;
    }
    else {
      BreadcrumbNav.drawer.classList.remove('hidden');
      // BreadcrumbNav.overlay.classList.remove('hidden');
      mainmenuBtn.classList.add('clicked');
      BreadcrumbNav.currentMenuBtn = undefined;
    }

    BreadcrumbNav.displayRelatedSubmenu(relatedMenu, submenus);
    BreadcrumbNav.showLevel(0);
    BreadcrumbNav.setDrawerXPosition(mainmenuBtn);
  },

  init(navigationItem, target, overlay) {
    // build breadcrumb structure and inject it in the target:
    BreadcrumbNav.buildSlides(target);
    BreadcrumbNav.drawer = document.querySelector(target);
    if (overlay) BreadcrumbNav.overlay = document.querySelector(overlay);
    BreadcrumbNav.currentMenuBtn = undefined;

    const nav = document.querySelector(navigationItem);
    const mainmenuBtns = nav.querySelectorAll(':scope > ul > li > a');
    const submenus = nav.querySelectorAll(':scope > ul > li > ul');
    const slide0 = BreadcrumbNav.drawer.querySelector(':scope > .breadcrumb > .breadcrumb__level-0');
    [].forEach.call(mainmenuBtns, function (mainmenuBtn) {

      // check if item has submenu
      mainmenuBtn.relatedMenu = mainmenuBtn.nextElementSibling
      if (!mainmenuBtn.relatedMenu) return

      // inject menu in slide 0:
      slide0.appendChild(mainmenuBtn.relatedMenu);

      // make first recursion:
      BreadcrumbNav.parseTree(mainmenuBtn.relatedMenu, 0);

      // add click events
      mainmenuBtn.addEventListener('click', function (event) {
        event.preventDefault();
        BreadcrumbNav.toggleSubmenu(mainmenuBtn, mainmenuBtn.relatedMenu, submenus)
      });
    });
  },

}

export default BreadcrumbNav
