import MultiSelect from '../../ch/components/MultiSelect.vue'

export default {
  title: 'Components/Form/MultiSelect',
  component: MultiSelect,

  argTypes: {
    bare: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    size: {
      table: {
        type: { summary: ['string: sm, base, lg'] },
      },
      options: ['sm', 'base', 'lg'],
      control: { type: 'select' },
    },
    label: {},
    disabled: {
      control: { type: 'boolean' },
    },
    hideLabel: {
      control: { type: 'boolean' },
    },
    multiple: {
      control: { type: 'boolean' },
    },
    placeholder: {},
    name: {},
    message: {},
    messageType: {
      table: {
        type: { summary: ['string: error, warning, success, info'] },
      },
      options: ['error', 'warning', 'success', 'info'],
      control: { type: 'select' },
    },
  },
}

export const Example = {
  render: (args) => ({
    components: { MultiSelect },
    setup: () => ({ args }),
    template: `
    <div style="padding: 20px 0 100px 0;">
      <MultiSelect v-bind="args" />
    </div>
  `,
  }),
  args: {
    options: [
      'Relatively long option',
      'Really long option that is so long that it will wrap to the next line',
      'foo',
      'bar',
      'baz',
    ],
    size: 'base',
    label: 'Label',
    disabled: false,
    hideLabel: false,
    name: 'select-name',
    multiple: true,
    bare: false,
    placeholder: 'Placeholder',
    excluded: ['foo'],
    selectLimit: 3,
    selected: ['bar', 'Relatively long option'],
    required: true,
  },
}
