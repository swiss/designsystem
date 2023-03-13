<template>
  <table :class="computedClasses">
    <caption v-if="caption">
      {{ caption }}
    </caption>
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Job</th>
        <th scope="col">E-mail</th>
        <th scope="col" class="text-right">Points</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Jane Cooper</th>
        <td>Regional Paradigm Technician</td>
        <td>jane.cooper@example.com</td>
        <td class="text-right">20</td>
      </tr>
      <tr>
        <th scope="row">Cody Fisher</th>
        <td>Product Directives Officer</td>
        <td>cody.fisher@example.com</td>
        <td class="text-right">30</td>
      </tr>
      <tr>
        <th scope="row">Esther Howard</th>
        <td>Forward Response Developer</td>
        <td>esther.howard@example.com</td>
        <td class="text-right">40</td>
      </tr>
      <tr>
        <th scope="row">Jenny Wilson</th>
        <td>Central Security Manager</td>
        <td>jenny.wilson@example.com</td>
        <td class="text-right">50</td>
      </tr>
      <tr>
        <th scope="row">Kristin Watson</th>
        <td>Lead Implementation Liaison</td>
        <td>kristin.watson@example.com</td>
        <td class="text-right">60</td>
      </tr>
      <tr>
        <th scope="row">Cameron Williamson</th>
        <td>Internal Applications Engineer</td>
        <td>cameron.williamson@example.com</td>
        <td class="text-right">70</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th scope="row">Total</th>
        <td colspan="3" class="text-right">
          270
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>

export default {
  name: 'Table',
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
  },

  computed: {
    computedClasses () {
      let base = 'table '
      if (this.variant) base += `table--${this.variant} `
      if (this.displayCaption) base += `table--caption `
      if (this.zebra) base += `table--zebra `
      return base
    }
  }
}
</script>
