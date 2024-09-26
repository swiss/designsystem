import Input from '../../ch/components/Input.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Input },
  template:
    '<Input :type="type" :required="required" :variant="variant" :size="size" :label="label" :hideLabel="hideLabel" :placeholder="placeholder" :value="value" :id="id" :min="min" :max="max" :step="step" :message="message" :messageType="messageType" />',
})

export default {
  title: 'Components/Form/Input',
  component: Input,

  argTypes: {
    type: {
      control: {
        type: 'select',

        options: [
          'color',
          'date',
          'datetime-local',
          'email',
          'file',
          'month',
          'number',
          'password',
          'range',
          'search',
          'tel',
          'text',
          'time',
          'url',
          'week',
          'submit',
        ],
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

    variant: {
      control: {
        type: 'select',
        options: ['outline', 'negative'],
      },
    },

    label: {},

    hideLabel: {
      control: {
        type: 'boolean',
      },
    },

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
    type: 'outline',
    size: 'base',
    label: 'Label',
    hideLabel: false,
    placeholder: 'Placeholder',
    value: undefined,
    id: 'my-id',
    min: undefined,
    max: undefined,
    step: undefined,
    message: undefined,
    messageType: 'error',
  },
}
