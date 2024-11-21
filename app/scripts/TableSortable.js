export default class TableSortable {
  constructor(id) {
    this.tableNode = document.getElementById(id)
    this.columnHeaders = Array.from(this.tableNode.querySelectorAll('thead th'))

    this.columnHeaders.forEach((ch, i) => {
      const buttonNode = ch.querySelector('button')
      if (buttonNode) {
        buttonNode.setAttribute('data-column-index', i)
        buttonNode.addEventListener('click', this.handleClick.bind(this))
      }
    })
  }

  setColumnHeaderSort(columnIndex) {
    if (typeof columnIndex === 'string') {
      columnIndex = parseInt(columnIndex)
    }

    this.columnHeaders.forEach((ch, i) => {
      const buttonNode = ch.querySelector('button')
      if (i === columnIndex) {
        const value = ch.getAttribute('aria-sort')
        const sortDirection =
          value === 'descending' || !value ? 'ascending' : 'descending'
        ch.setAttribute('aria-sort', sortDirection)
        this.sortColumn(
          columnIndex,
          sortDirection,
          ch.classList.contains('num') ? 'number' : 'text',
        )
      } else {
        if (ch.hasAttribute('aria-sort') && buttonNode) {
          ch.removeAttribute('aria-sort')
        }
      }
    })
  }
  sortColumn(columnIndex, sortValue, type) {
    const tbodyNode = this.tableNode.querySelector('tbody')
    const rowNodes = Array.from(tbodyNode.children)

    rowNodes.sort((a, b) => {
      const aCell = a.querySelectorAll('th, td')[columnIndex]
      const bCell = b.querySelectorAll('th, td')[columnIndex]

      let aValue = ''
      let bValue = ''

      if (type === 'number') {
        aValue = parseFloat(aCell.textContent.toLowerCase().trim())
        bValue = parseFloat(bCell.textContent.toLowerCase().trim())
      } else if (type === 'date') {
        aValue = aCell.getAttribute('value').toLowerCase().trim()
        bValue = bCell.getAttribute('value').toLowerCase().trim()
      } else {
        aValue = aCell.textContent.toLowerCase().trim()
        bValue = bCell.textContent.toLowerCase().trim()
      }

      if (type === 'number') {
        if (sortValue === 'ascending') {
          return aValue - bValue
        } else {
          return bValue - aValue
        }
      } else {
        if (sortValue === 'ascending') {
          return aValue.localeCompare(bValue)
        } else {
          return bValue.localeCompare(aValue)
        }
      }
    })

    // Remove rows
    while (tbodyNode.firstChild) {
      tbodyNode.removeChild(tbodyNode.firstChild)
    }

    // Add sorted rows
    for (const rowNode of rowNodes) {
      tbodyNode.appendChild(rowNode)
    }
  }

  /* EVENT HANDLERS */

  handleClick(event) {
    const tgt = event.currentTarget
    this.setColumnHeaderSort(tgt.getAttribute('data-column-index'))
  }
}
