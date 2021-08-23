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

  closeSubmenu(breadcrumbBtn) {
    BreadcrumbNav.drawer.classList.add('hidden');
    breadcrumbBtn.classList.remove('clicked');
    BreadcrumbNav.currentMenuBtn = undefined;
  },

  toggleSubmenu(breadcrumbBtn, relatedMenu, submenus) {
    if (BreadcrumbNav.currentMenuBtn === undefined) {
      BreadcrumbNav.drawer.classList.remove('hidden');
      breadcrumbBtn.classList.add('clicked');
      BreadcrumbNav.currentMenuBtn = breadcrumbBtn;
      console.log('open');
    }
    else if (breadcrumbBtn === BreadcrumbNav.currentMenuBtn) {
      BreadcrumbNav.drawer.classList.add('hidden');
      breadcrumbBtn.classList.remove('clicked');
      BreadcrumbNav.currentMenuBtn = undefined;
    }
    else {
      BreadcrumbNav.drawer.classList.remove('hidden');
      breadcrumbBtn.classList.add('clicked');
      BreadcrumbNav.currentMenuBtn = undefined;
    }

    BreadcrumbNav.displayRelatedSubmenu(relatedMenu, submenus);
    BreadcrumbNav.setDrawerXPosition(breadcrumbBtn);
  },

  init(navigationItem, target) {
    // build breadcrumb structure and inject it in the target:
    BreadcrumbNav.buildDrawer(target);
    BreadcrumbNav.drawer = document.querySelector(target);
    BreadcrumbNav.currentMenuBtn = undefined;

    const nav = document.querySelector(navigationItem);
    const breadcrumbBtns = nav.querySelectorAll(':scope > ul > li > a');
    const submenus = nav.querySelectorAll(':scope > ul > li > ul');
    const drawer = BreadcrumbNav.drawer.querySelector(':scope > .breadcrumb__drawer-navigation');
    [].forEach.call(breadcrumbBtns, function (breadcrumbBtn) {

      // check if item has submenu
      breadcrumbBtn.relatedMenu = breadcrumbBtn.nextElementSibling
      if (!breadcrumbBtn.relatedMenu) return

      // inject menu in slide 0:
      drawer.appendChild(breadcrumbBtn.relatedMenu);

      // add click events
      breadcrumbBtn.addEventListener('click', function (event) {
        event.preventDefault();
        BreadcrumbNav.toggleSubmenu(breadcrumbBtn, breadcrumbBtn.relatedMenu, submenus)
      });
    });
  },
}

export default BreadcrumbNav
