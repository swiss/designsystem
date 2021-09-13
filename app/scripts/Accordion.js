const Accordion = {

  init(target) {
    let buttons = document.querySelectorAll(target)
    buttons.forEach(button => {
      let content = button.nextElementSibling
      button.addEventListener("click", (event) => {
        if (button.classList.contains("active")) {
          button.classList.remove("active")
          button.setAttribute("aria-expanded", false)
          content.style.maxHeight = null
          content.setAttribute("aria-hidden", true)
        }
        else {
          button.classList.add("active")
          content.style.maxHeight = content.scrollHeight + "px";
          content.setAttribute("aria-hidden", false)
          button.setAttribute("aria-expanded", true)
        }
      })


    })
  },
}

export default Accordion