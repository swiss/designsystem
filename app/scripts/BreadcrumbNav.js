const BreadcrumbNav = {

  init(navigationItem) {
    BreadcrumbNav.currentMenuBtn = undefined;

    const nav = document.querySelector(navigationItem);
    const breadcrumbBtns = nav.querySelectorAll(':scope > ul > li > a');

    [].forEach.call(breadcrumbBtns, function (breadcrumbBtn) {

      // TODO add click outside

      // add click events
      breadcrumbBtn.addEventListener('click', function (event) {
        event.preventDefault();
        if (BreadcrumbNav.currentMenuBtn === undefined) {
          breadcrumbBtn.classList.add('clicked');
          BreadcrumbNav.currentMenuBtn = breadcrumbBtn;
        }
        else if (BreadcrumbNav.currentMenuBtn === breadcrumbBtn) {
          BreadcrumbNav.currentMenuBtn.classList.remove('clicked');
          BreadcrumbNav.currentMenuBtn = undefined;

        } else {
          BreadcrumbNav.currentMenuBtn.classList.remove('clicked');
          BreadcrumbNav.currentMenuBtn = undefined;
          breadcrumbBtn.classList.add('clicked');
          BreadcrumbNav.currentMenuBtn = breadcrumbBtn;
        }
      });
    });
  },
}

export default BreadcrumbNav
