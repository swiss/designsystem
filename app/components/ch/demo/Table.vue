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
