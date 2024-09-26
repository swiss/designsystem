import Table from '../../ch/demo/Table.vue'
import TableSortable from '../../ch/demo/TableSortable.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Table },
  template:
    '<Table :variant="variant" :caption="caption" :displayCaption="displayCaption" :zebra="zebra" />',
})

const TemplateSortable = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TableSortable },
  template:
    '<TableSortable :variant="variant" :caption="caption" :displayCaption="displayCaption" :zebra="zebra"  :id="id" />',
})

export default {
  title: 'Components/Table',
  component: Table,

  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'compact'],
      },
    },
  },
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',

  args: {
    variant: 'default',
    caption: 'Short description of the table content for better accessibility',
    displayCaption: true,
    zebra: false,
  },
}

export const ExampleSortable = {
  render: TemplateSortable.bind({}),
  name: 'Example Sortable',

  args: {
    variant: 'default',
    caption: 'Short description of the table content for better accessibility',
    displayCaption: false,
    zebra: true,
    id: '1',
  },
}
