import Select from '../../ch/components/Select.vue'

export default {
  title: 'Components/Form/Select',
  component: Select,

  argTypes: {
    required: {
      control: { type: 'boolean' },
    },
    bare: {},
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
        type: { summary: ['string: error, warning, success, info'] },
      },
      options: ['error', 'warning', 'success', 'info'],
      control: { type: 'select' },
    },
  },
}

export const Example = {
  render: (args) => ({
    components: { Select },
    setup: () => ({ args }),
    template: `
      <Select v-bind="args" >
        <option disabled selected>Choose your country</option>
        <option>Switzerland</option>
        <option>Swaziland</option>
        <option>Sweden</option>
      </Select>
    `,
  }),
  args: {
    bare: false,
    size: 'base',
    label: 'Label',
    hideLabel: false,
    name: 'select-name',
    id: 'select-id',
  },
}

export const DisabledSelect = {
  render: () => ({
    template: `
      <div class="select">
        <select id="select-id" name="select-name" class="input--base input--disabled">
          <option>Choose your country</option>
          <option>Switzerland</option>
          <option>Swaziland</option>
          <option>Sweden</option>
        </select>
        <div class="select__icon">
          <svg role="presentation" aria-hidden="true" viewBox="0 0 24 24">
            <path d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z" />
          </svg>
        </div>
      </div>
    `,
  }),
}

export const SmallSizesSelect = {
  render: () => ({
    template: `
      <div class="select">
        <select id="select-0" name="select-name" class="input--sm">
          <option>Small</option>
        </select>
        <div class="select__icon">
          <svg role="presentation" aria-hidden="true" viewBox="0 0 24 24">
            <path d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z" />
          </svg>
        </div>
      </div>
    `,
  }),
}

export const BaseSizesSelect = {
  render: () => ({
    template: `
      <div class="select">
        <select id="select-0" name="select-name" class="input--base">
          <option>Default</option>
        </select>
        <div class="select__icon">
          <svg role="presentation" aria-hidden="true" viewBox="0 0 24 24">
            <path d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z" />
          </svg>
        </div>
      </div>
    `,
  }),
}

export const LargeSizesSelect = {
  render: () => ({
    template: `
      <div class="select">
        <select id="select-0" name="select-name" class="input--lg">
          <option>Large</option>
        </select>
        <div class="select__icon">
          <svg role="presentation" aria-hidden="true" viewBox="0 0 24 24">
            <path d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z" />
          </svg>
        </div>
      </div>
    `,
  }),
}

export const RequiredSelect = {
  render: () => ({
    template: `
      <div class="form__group__select">
        <label for="select-id" class="text--base text--asterisk">
          Label
        </label>
        <div class="select">
          <select id="select-id" name="select-name" class="input--base">
            <option disabled="disabled" selected="selected">
              Choose your country
            </option>
            <option>Switzerland</option>
            <option>Swaziland</option>
            <option>Sweden</option>
          </select>
          <div class="select__icon">
            <svg role="presentation" aria-hidden="true" viewBox="0 0 24 24">
              <path d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z" />
            </svg>
          </div>
        </div>

      </div>
    `,
  }),
}

export const MessagesSelect = {
  render: () => ({
    template: `
     <div class="form__group__select">
        <label for="select-id" class="text--base text--asterisk">
          Label
        </label>
        <div class="select">
          <select id="select-id" name="select-name" class="input--base input--error">
            <option disabled="disabled" selected="selected">
              Choose your country
            </option>
            <option>Switzerland</option>
            <option>Swaziland</option>
            <option>Sweden</option>
          </select>
          <div class="select__icon">
            <svg role="presentation" aria-hidden="true" viewBox="0 0 24 24">
              <path d="m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z" />
            </svg>
          </div>
        </div>
        <div class="badge badge--sm badge--error">
          This field is required
        </div>
      </div>
    `,
  }),
}
