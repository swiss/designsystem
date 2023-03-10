<template>
  <table :class="computedClasses" :id="`table-sortable-${id}`">
    <caption >
      Short description of the table content for better accessibility
      <span class="sr-only">, column headers with buttons are sortable.</span>
    </caption>
    <thead>
      <tr>
        <th scope="col">
          <button>
            Name
            <span aria-hidden="true"></span>
          </button>
        </th>
        <th aria-sort="ascending">
          <button>
            Job
            <span aria-hidden="true"></span>
          </button>
        </th>
        <th scope="col">E-mail</th>
        <th scope="col">Role</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Jane Cooper</th>
        <td>Regional Paradigm Technician</td>
        <td>jane.cooper@example.com</td>
        <td>Admin</td>
      </tr>
      <tr>
        <th scope="row">Cody Fisher</th>
        <td>Product Directives Officer</td>
        <td>cody.fisher@example.com</td>
        <td>Owner</td>
      </tr>
      <tr>
        <th scope="row">Esther Howard</th>
        <td>Forward Response Developer</td>
        <td>esther.howard@example.com</td>
        <td>Member</td>
      </tr>
      <tr>
        <th scope="row">Jenny Wilson</th>
        <td>Central Security Manager</td>
        <td>jenny.wilson@example.com</td>
        <td>Member</td>
      </tr>
      <tr>
        <th scope="row">Kristin Watson</th>
        <td>Lead Implementation Liaison</td>
        <td>kristin.watson@example.com</td>
        <td>Admin</td>
      </tr>
      <tr>
        <th scope="row">Cameron Williamson</th>
        <td>Internal Applications Engineer</td>
        <td>cameron.williamson@example.com</td>
        <td>Member</td>
      </tr>
    </tbody>
  </table>
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
      if (this.zebra) base += `table--zebra `
      return base
    }
  },

  mounted () {
    new TableSortable(`table-sortable-${this.id}`);
  },
}
</script>
