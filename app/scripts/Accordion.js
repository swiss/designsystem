function getFocusableElements (element = document) {
  return [
    ...element.querySelectorAll(
      'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
    )
  ].filter(
    el => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden')
  )
}

const Accordion = {
  init (target) {
    let buttons = document.querySelectorAll(target)
    buttons.forEach(button => {
      let content = button.nextElementSibling
      let focusableElements = getFocusableElements(content)
      // make focusable content unfocusable
      focusableElements.forEach(item => {
        item.tabIndex = -1
      })

      button.addEventListener("click", (event) => {
        if (button.classList.contains("active")) {
          // close drawer
          button.classList.remove("active")
          button.setAttribute("aria-expanded", false)
          content.style.maxHeight = null
          content.setAttribute("aria-hidden", true)
          // make focusable content unfocusable
          focusableElements.forEach(item => {
            item.tabIndex = -1
          })
        }
        else {
          // open drawer
          button.classList.add("active")
          content.style.maxHeight = content.scrollHeight + "px";
          content.setAttribute("aria-hidden", false)
          button.setAttribute("aria-expanded", true)
          // make focusable content focusable again
          focusableElements.forEach(item => {
            item.tabIndex = undefined
          })
        }
      })
    })
  },
}
export default Accordion
