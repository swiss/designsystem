const BreadcrumbNav = {

  displayRelatedSubmenu (target, submenus) {
    [].forEach.call(submenus, function (submenu) {
      submenu.classList.add('hidden');
    });
    target.classList.remove('hidden');
  },

  buildDrawer (target){
    const targetElement = document.querySelector(target);

    BreadcrumbNav.currentMenuLink = undefined
    BreadcrumbNav.container = document.createElement('div');
    BreadcrumbNav.container.classList.add('breadcrumb__drawer-navigation');
    targetElement.appendChild(BreadcrumbNav.container);
  },

  setDrawerXPosition (btn) {
    let rect = btn.getBoundingClientRect();
    BreadcrumbNav.drawer.style.transform = `translateX(${rect.left}px)`;
  },

  closeSubmenu(mainmenuBtn) {
    BreadcrumbNav.drawer.classList.add('hidden');
    mainmenuBtn.classList.remove('clicked');
    BreadcrumbNav.currentMenuBtn = undefined;
  },

  toggleSubmenu(mainmenuBtn, relatedMenu, submenus) {
    if (BreadcrumbNav.currentMenuBtn === undefined) {
      BreadcrumbNav.drawer.classList.remove('hidden');
      mainmenuBtn.classList.add('clicked');
      BreadcrumbNav.currentMenuBtn = mainmenuBtn;
      console.log('open');
    }
    else if (mainmenuBtn === BreadcrumbNav.currentMenuBtn) {
      BreadcrumbNav.drawer.classList.add('hidden');
      mainmenuBtn.classList.remove('clicked');
      BreadcrumbNav.currentMenuBtn = undefined;
    }
    else {
      BreadcrumbNav.drawer.classList.remove('hidden');
      mainmenuBtn.classList.add('clicked');
      BreadcrumbNav.currentMenuBtn = undefined;
    }

    BreadcrumbNav.displayRelatedSubmenu(relatedMenu, submenus);
    BreadcrumbNav.setDrawerXPosition(mainmenuBtn);
  },

  init(navigationItem, target) {
    // build breadcrumb structure and inject it in the target:
    BreadcrumbNav.buildDrawer(target);
    BreadcrumbNav.drawer = document.querySelector(target);
    BreadcrumbNav.currentMenuBtn = undefined;

    const nav = document.querySelector(navigationItem);
    const mainmenuBtns = nav.querySelectorAll(':scope > ul > li > a');
    const submenus = nav.querySelectorAll(':scope > ul > li > ul');
    const drawer = BreadcrumbNav.drawer.querySelector(':scope > .breadcrumb__drawer-navigation');
    [].forEach.call(mainmenuBtns, function (mainmenuBtn) {

      // check if item has submenu
      mainmenuBtn.relatedMenu = mainmenuBtn.nextElementSibling
      if (!mainmenuBtn.relatedMenu) return

      // inject menu in slide 0:
      drawer.appendChild(mainmenuBtn.relatedMenu);

      // add click events
      mainmenuBtn.addEventListener('click', function (event) {
        event.preventDefault();
        BreadcrumbNav.toggleSubmenu(mainmenuBtn, mainmenuBtn.relatedMenu, submenus)
      });
    });
  },
}

export default BreadcrumbNav
