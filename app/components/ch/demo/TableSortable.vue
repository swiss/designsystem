<template>
  <div class="table-wrapper">
    <table :class="computedClasses" :id="`table-sortable-${id}`">
      <caption>
        {{ caption }}
        <span class="sr-only">, column headers with buttons are sortable.</span>
      </caption>
      <thead>
        <tr>
          <th scope="col">
            <button class="table__sorter">
              Name
              <span aria-hidden="true"></span>
            </button>
          </th>
          <th scope="col" aria-sort="ascending">
            <button class="table__sorter">
              Job
              <span aria-hidden="true"></span>
            </button>
          </th>
          <th scope="col">
            E-mail
          </th>
          <th scope="col" class="text-right">
            <button class="table__sorter">
              ID
              <span aria-hidden="true"></span>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Jane Cooper</th>
          <td>Regional Paradigm Technician</td>
          <td>jane.cooper@example.com</td>
          <td class="text-right">200</td>
        </tr>
        <tr>
          <th scope="row">Cody Fisher</th>
          <td>Product Directives Officer</td>
          <td>cody.fisher@example.com</td>
          <td class="text-right">100</td>
        </tr>
        <tr>
          <th scope="row">Esther Howard</th>
          <td>Forward Response Developer</td>
          <td>esther.howard@example.com</td>
          <td class="text-right">400</td>
        </tr>
        <tr>
          <th scope="row">Jenny Wilson</th>
          <td>Central Security Manager</td>
          <td>jenny.wilson@example.com</td>
          <td class="text-right">600</td>
        </tr>
        <tr>
          <th scope="row">Kristin Watson</th>
          <td>Lead Implementation Liaison</td>
          <td>kristin.watson@example.com</td>
          <td class="text-right">300</td>
        </tr>
        <tr>
          <th scope="row">Cameron Williamson</th>
          <td>Internal Applications Engineer</td>
          <td>cameron.williamson@example.com</td>
          <td class="text-right">500</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TableSortable from '../../../scripts/TableSortable.js'

export default {
  name: 'TableSortable',
  props: {
    variant: {
      type: String,
      validator: (prop) => [
        'compact',
        'default',
      ].includes(prop)
    },
    caption: {
      type: String,
      default: ''
    },
    displayCaption: {
      type: Boolean,
      default: true
    },
    zebra: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: 'default'
    }
  },

  computed: {
    computedClasses () {
      let base = 'table table--sortable '
      if (this.variant) base += `table--${this.variant} `
      if (this.displayCaption) base += `table--caption `
      if (this.zebra) base += `table--zebra `
      return base
    }
  },

  mounted () {
    new TableSortable(`table-sortable-${this.id}`);
  },
}
</script>


