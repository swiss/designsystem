import MultiSelect from '../../ch/components/MultiSelect.vue'
import Notification from '../../ch/components/Notification.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MultiSelect },
  template: `
    <div style="padding: 20px 0 100px 0;">
      <MultiSelect
        :options="options"
        :variant="variant"
        :size="size"
        :label="label"
        :disabled="disabled"
        :hideLabel="hideLabel"
        :multiple="multiple"
        :name="name"
        :message="message"
        :messageType="messageType"
        :required="required"
        :selected="selected"
        :placeholder="placeholder"
        :excluded="excluded"
        :selectLimit="selectLimit"
        :bare="bare"
      />
    </div>
  `,
})

export default {
  title: 'Components/Form/MultiSelect',
  component: MultiSelect,

  argTypes: {
    bare: {
      control: {
        type: 'boolean',
      },
    },

    variant: {
      control: {
        type: 'select',
        options: ['outline', 'negative'],
      },
    },

    required: {
      control: {
        type: 'boolean',
      },
    },

    size: {
      control: {
        type: 'select',
        options: ['sm', 'base', 'lg'],
      },
    },

    label: {},

    disabled: {
      control: {
        type: 'boolean',
      },
    },

    hideLabel: {
      control: {
        type: 'boolean',
      },
    },

    multiple: {
      control: {
        type: 'boolean',
      },
    },

    placeholder: {},
    name: {},
    message: {},

    messageType: {
      control: {
        type: 'select',
        options: ['error', 'warning', 'success', 'info'],
      },
    },
  },
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',

  args: {
    options: [
      'Relatively long option',
      'Really long option that is so long that it will wrap to the next line',
      'foo',
      'bar',
      'baz',
    ],

    variant: 'outline',
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
