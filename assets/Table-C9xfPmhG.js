import{j as e,M as d,C as o,a}from"./index-t992ZlYY.js";import{useMDXComponents as i}from"./index-ItJIzRJj.js";import{T as c,E as r,a as s}from"./Table.stories-CmdSvs-V.js";import"./TableSortable-D8NkOTpA.js";import"./iframe-CWspoYnI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Cu4lwwaE.js";import"./index-Bx-go_-4.js";import"./index-ogSvIofg.js";import"./vue.esm-bundler-B8GkW3lv.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c}),`
`,e.jsx(t.h1,{id:"table",children:"Table"}),`
`,e.jsx("a",{href:"?path=/story/components-table--example",children:"Go to the Canvas Tab"}),`
`,e.jsx(t.hr,{}),`
`,e.jsx("a",{href:"?id=components-table--example",target:"_blank",children:"Open page in full width in a new tab"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(t.p,{children:["Add ",e.jsx(t.code,{children:"table--compact"}),` to the table element to use the compact variant. This variant is used for tables with a lot of data.
Add `,e.jsx(t.code,{children:"table--zebra"})," to the table element to use the zebra variant. This variant is rencommended for large and wide tables, to distinguish visually rows."]}),`
`,e.jsx(t.h2,{id:"alignment",children:"Alignment"}),`
`,e.jsxs(t.p,{children:["Text alignment in a table is done cell by cell. Add a ",e.jsx(t.code,{children:".text-right"})," or ",e.jsx(t.code,{children:".text-center"})," class to the ",e.jsx(t.code,{children:"<td>"})," or the ",e.jsx(t.code,{children:"<th>"})," element to align the text correctly. By default, text is aligned to the left. The ",e.jsx(t.code,{children:"align"})," attribute is another valid way to align content in a table context."]}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["Add a recommended ",e.jsx(t.code,{children:"<caption>"})," element right after the ",e.jsx(t.code,{children:"<table>"})," opening tag for better accessibility. This is used by screen readers to provide a label for the table. It is also used by assistive technologies to help users navigate the table and understand what data is being displayed and how it is organized."]}),`
`,e.jsxs(t.p,{children:["Per default, the ",e.jsx(t.code,{children:"<caption>"})," element is visually hidden. If you want to display the caption, you can use the ",e.jsx(t.code,{children:"table--caption"})," modifier class. This will display the caption above the table."]}),`
`,e.jsxs(t.p,{children:["Use ",e.jsx(t.code,{children:"<th>"})," elements to define headers. They should have a ",e.jsx(t.code,{children:"scope"})," attribute with a value of ",e.jsx(t.code,{children:"row"})," or ",e.jsx(t.code,{children:"col"}),". This is used by screen readers to help users understand the structure of the table data and navigate the table more efficiently."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<table class="table table--default table--caption">
  <caption>
    Short description of the table content for better accessibility
  </caption>
  <thead>
    <tr>
      <th scope="col">Header col one</th>
      <th scope="col">Header col two</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Header for row one</th>
      <td>Row one col two</td>
    </tr>
    <tr>
      <th scope="row">Header for row two</th>
      <td>Row two col two</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Footer</th>
      <td>Footer col two</td>
    </tr>
  </tfoot>
</table>
`})}),`
`,e.jsx(t.h1,{id:"sortable-table",children:"Sortable Table"}),`
`,e.jsx("a",{href:"?path=/story/components-table--example-sortable",children:"Go to the Canvas Tab"}),`
`,e.jsx(t.hr,{}),`
`,e.jsx("a",{href:"?id=components-table--example-sortable",target:"_blank",children:"Open page in full width in a new tab"}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(a,{of:s}),`
`,e.jsx(t.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<table id="table-sortable-1" class="table table--default table--sortable">
  <caption>
    Description of the table content here
    <span class="sr-only">, column headers with buttons are sortable.</span>
  </caption>
  <thead>
    <tr>
      <th scope="col" aria-sort="ascending">
        <button class="table__sorter">
          Header col one
          <span aria-hidden="true"></span>
        </button>
      </th>
      <th scope="col">
        <button class="table__sorter">
          Header col two
          <span aria-hidden="true"></span>
        </button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Col 1 row 1</td>
      <td>Col 2 row 1</td>
    </tr>
    <tr>
      <td>Col 1 row 2</td>
      <td>Col 2 row 2</td>
    </tr>
  </tbody>
</table>
`})}),`
`,e.jsx(t.h2,{id:"accessibility-1",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["To help screen reader users understand the purpose of the buttons in the column headers, an off-screen description of the sort functionality of the buttons is appended to the ",e.jsx(t.code,{children:"<caption>"})," element. This description is hidden from sighted users with the ",e.jsx(t.code,{children:".sr-only"})," class."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"aria-sort"})," attribute is added to the column header that is currently sorted. The value of the attribute is set to ",e.jsx(t.code,{children:"ascending"})," or ",e.jsx(t.code,{children:"descending"})," depending on the current sort order. If the column is not sorted, the attribute is removed."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"aria-hidden"})," attribute is added to the sort icon in the column header. This is done to prevent screen readers from announcing the icon."]}),`
`,e.jsx(t.h2,{id:"javascript",children:"JavaScript"}),`
`,e.jsx(t.p,{children:"Below an example of a basic script to make the table sortable. Complexities like sorting multiple page results, dates, etc. are not included in this example, but the script can be used as a starting point for your own implementation."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`module.exports = class TableSortable {
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
`})})]})}function w(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{w as default};
