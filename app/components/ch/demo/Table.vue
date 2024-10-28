<template>
  <div class="table-wrapper">
    <table :class="computedClasses">
      <caption v-if="caption">
        {{
          caption
        }}
      </caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Job</th>
          <th scope="col">E-mail</th>
          <th scope="col">Trend</th>
          <th scope="col" class="text-right">Points</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Jane Cooper</th>
          <td>Regional Paradigm Technician</td>
          <td>jane.cooper@example.com</td>
          <td>
            <svg viewBox="0 0 24 24" class="icon icon--lg">
              <path
                d="m20.2 14.3-2.1-7.9-7.9-2.1-.1.7 7 1.9-10.7 10.7.5.5 10.7-10.7 1.9 7z"
              />
            </svg>
          </td>
          <td class="text-right">70</td>
        </tr>
        <tr>
          <th scope="row">Cody Fisher</th>
          <td>Product Directives Officer</td>
          <td>cody.fisher@example.com</td>
          <td>
            <svg viewBox="0 0 24 24" class="icon icon--lg">
              <path
                d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z"
              />
            </svg>
          </td>
          <td class="text-right">60</td>
        </tr>
        <tr>
          <th scope="row">Esther Howard</th>
          <td>Forward Response Developer</td>
          <td>esther.howard@example.com</td>
          <td>
            <svg viewBox="0 0 24 24" class="icon icon--lg">
              <path
                d="m10.3 20 7.9-2.1 2.1-7.9-.7-.2-1.9 7-10.8-10.7-.5.6 10.7 10.7-7 1.9z"
              />
            </svg>
          </td>
          <td class="text-right">50</td>
        </tr>
        <tr>
          <th scope="row">Jenny Wilson</th>
          <td>Central Security Manager</td>
          <td>jenny.wilson@example.com</td>
          <td>
            <svg viewBox="0 0 24 24" class="icon icon--lg">
              <path
                d="m20.2 14.3-2.1-7.9-7.9-2.1-.1.7 7 1.9-10.7 10.7.5.5 10.7-10.7 1.9 7z"
              />
            </svg>
          </td>
          <td class="text-right">40</td>
        </tr>
        <tr>
          <th scope="row">Kristin Watson</th>
          <td>Lead Implementation Liaison</td>
          <td>kristin.watson@example.com</td>
          <td>
            <svg viewBox="0 0 24 24" class="icon icon--lg">
              <path
                d="m20.2 14.3-2.1-7.9-7.9-2.1-.1.7 7 1.9-10.7 10.7.5.5 10.7-10.7 1.9 7z"
              />
            </svg>
          </td>
          <td class="text-right">30</td>
        </tr>
        <tr>
          <th scope="row">Cameron Williamson</th>
          <td>Internal Applications Engineer</td>
          <td>cameron.williamson@example.com</td>
          <td>
            <svg viewBox="0 0 24 24" class="icon icon--lg">
              <path
                d="m20.2 14.3-2.1-7.9-7.9-2.1-.1.7 7 1.9-10.7 10.7.5.5 10.7-10.7 1.9 7z"
              />
            </svg>
          </td>
          <td class="text-right">20</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row">Total</th>
          <td colspan="4" class="text-right">270</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    validator: (prop) => ['compact', 'default'].includes(prop as string),
    default: () => undefined,
  },
  caption: {
    type: String,
    default: () => '',
  },
  displayCaption: {
    type: Boolean,
    default: () => true,
  },
  zebra: {
    type: Boolean,
    default: () => false,
  },
})

const computedClasses = computed(() => {
  let base = 'table '
  if (props.variant) base += `table--${props.variant} `
  if (props.displayCaption) base += `table--caption `
  if (props.zebra) base += `table--zebra `
  return base
})
</script>
