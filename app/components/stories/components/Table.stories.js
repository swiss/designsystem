import Table from '../../ch/demo/Table.vue'
import TableSortable from '../../ch/demo/TableSortable.vue'

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    variant: {
      table: {
        type: { summary: ['string: default, compact'] },
      },
      options: ['default', 'compact'],
      control: { type: 'select' },
    },
  },
}

export const Example = {
  args: {
    variant: 'default',
    caption: 'Short description of the table content for better accessibility',
    displayCaption: true,
    zebra: false,
  },
}

export const ExampleSortable = {
  render: (args) => ({
    components: { TableSortable },
    setup: () => ({ args }),
    template: `<TableSortable v-bind="args" />`,
  }),
  args: {
    variant: 'default',
    caption: 'Short description of the table content for better accessibility',
    displayCaption: false,
    zebra: true,
    id: '1',
  },
}
