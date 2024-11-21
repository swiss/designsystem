const BreadcrumbNav = {
  init(navigationItem) {
    BreadcrumbNav.currentMenuBtn = undefined

    const nav = document.querySelector(navigationItem)
    const breadcrumbBtns = nav.querySelectorAll(':scope > ul > li > a')

    function closeBreadcrumbNav() {
      if (BreadcrumbNav.currentMenuBtn) {
        BreadcrumbNav.currentMenuBtn.classList.remove('clicked')
        BreadcrumbNav.currentMenuBtn = undefined
      }
    }

    function openBreadcrumbNav(btn) {
      btn.classList.add('clicked')
      BreadcrumbNav.currentMenuBtn = btn
    }

    ;[].forEach.call(breadcrumbBtns, function (breadcrumbBtn) {
      // add click events
      breadcrumbBtn.addEventListener('click', function (event) {
        event.preventDefault()
        if (BreadcrumbNav.currentMenuBtn === undefined) {
          openBreadcrumbNav(breadcrumbBtn)
        } else if (BreadcrumbNav.currentMenuBtn === breadcrumbBtn) {
          closeBreadcrumbNav()
        } else {
          closeBreadcrumbNav()
          openBreadcrumbNav(breadcrumbBtn)
        }
      })
    })

    document.addEventListener('click', (event) => {
      if (!event.target.closest(navigationItem)) {
        closeBreadcrumbNav()
      }
    })
  },
}

export default BreadcrumbNav
