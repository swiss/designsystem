import Input from '../../ch/components/Input.vue'

export default {
  title: 'Components/Form/Input',
  component: Input,

  argTypes: {
    type: {
      table: {
        type: {
          summary: [
            'string: color, date, datetime-local, email, file, month, number, password, range, search, tel, text, time, url, week, submit',
          ],
        },
      },
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
      control: { type: 'select' },
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
    hideLabel: {
      control: { type: 'boolean' },
    },
    message: {},
    messageType: {
      table: {
        type: {
          summary: ['string: error, warning, success, info'],
        },
      },
      options: ['error', 'warning', 'success', 'info'],
      control: { type: 'select' },
    },
  },
}

export const Example = {
  render: (args) => ({
    components: { Input },
    setup: () => ({ args }),
    template: '<Input v-bind="args" />',
  }),
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

export const DisabledInput = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: row; gap: 10pt; width: 90%" >
        <input class="input--base" disabled value="Input text" />
        <input class="input--base" data-default-theme="dark" disabled value="Input text" />
      </div>
    `,
  }),
}

export const SizesInput = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: row; gap: 10pt; width: 90%" >
        <input class="input--sm" value="input--sm" />
        <input class="input--base" value="input--base" />
        <input class="input--lg" value="input--lg" />
      </div>
    `,
  }),
}

export const RequiredInput = {
  render: () => ({
    template: `
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Name <span class="sr-only">required</span>
        </label>
        <input type="text" id="my-id" name="my-id" placeholder="Placeholder" class="input--base" required />
      </div>
    `,
  }),
}

export const MessagesInput = {
  render: () => ({
    template: `
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Name <span class="sr-only">required</span>
        </label>
        <input type="text" id="my-id" name="my-id" placeholder="Placeholder" class="input--base input--error" required />
        <div class="badge badge--sm badge--error">This field is required</div>
      </div>
    `,
  }),
}
