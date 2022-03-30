const DownloadItem = {
  init(target) {
    // trigger download intead of routinf on click
    let buttons = document.querySelectorAll(target)
    buttons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault()
        let url = button.getAttribute('href')
        let name = button.getAttribute('download')
        let a = document.createElement('a')
        a.href = url
        a.download = name
        a.click()
      })
    })
  },
}
export default DownloadItem
