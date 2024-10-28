function getFocusableElements(element = document) {
  return [
    ...element.querySelectorAll(
      'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])',
    ),
  ].filter(
    (el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'),
  )
}

const Popover = {
  init(target) {
    const wrapper = document.querySelector(target)
    const button = wrapper.querySelector('.popover-button')
    const backdrop = wrapper.querySelector('.popover-backdrop')
    const popover = wrapper.querySelector('.popover')
    const popoverClose = wrapper.querySelector('.popover__close')
    const focusableElements = getFocusableElements(popover)

    focusableElements.forEach((item) => {
      item.tabIndex = -1
    })

    function handleClickOutside(event) {
      const target = event.target
      if (target !== button && !wrapper.contains(target)) {
        closePopover()
      }
    }

    function closePopover() {
      button.setAttribute('aria-expanded', false)
      popover.classList.remove('popover--active')
      popover.setAttribute('aria-hidden', true)
      backdrop.classList.remove('popover-backdrop--active')
      // make focusable popover unfocusable
      focusableElements.forEach((item) => {
        item.tabIndex = -1
      })
      document.removeEventListener('click', handleClickOutside)
    }

    function openPopover() {
      button.setAttribute('aria-expanded', true)
      popover.classList.add('popover--active')
      popover.setAttribute('aria-hidden', false)
      backdrop.classList.add('popover-backdrop--active')
      // make focusable popover focusable again
      focusableElements.forEach((item) => {
        item.tabIndex = undefined
      })
      document.addEventListener('click', handleClickOutside)
    }

    button.addEventListener('click', () => {
      if (popover.classList.contains('popover--active')) closePopover()
      else openPopover()
    })

    backdrop.addEventListener('click', () => {
      if (popover.classList.contains('popover--active')) closePopover()
      else openPopover()
    })

    if (popoverClose) {
      popoverClose.addEventListener('click', () => {
        closePopover()
      })
    }
  },
}
export default Popover
