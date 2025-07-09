import Badge from '../../ch/components/Badge.vue'

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    color: {
      table: {
        type: {
          summary: [
            'string: info, error, warning, success, gray, red, yellow, orange, green, blue, indigo, purple, pink',
          ],
        },
      },
      options: [
        'info',
        'error',
        'warning',
        'success',
        'gray',
        'red',
        'yellow',
        'orange',
        'green',
        'blue',
        'indigo',
        'purple',
        'pink',
        'active',
      ],
      control: { type: 'select' },
    },
    size: {
      table: { type: { summary: ['string: base, sm'] } },
      options: ['base', 'sm'],
      control: { type: 'select' },
    },
    icon: {
      table: { type: { summary: ['string: Cancel, Checkmark, undefined'] } },
      options: ['Cancel', 'Checkmark', null],
      control: { type: 'select' },
    },
  },
}

export const Example = {
  args: {
    color: 'blue',
    size: 'base',
    icon: undefined,
    label: 'Badge',
  },
}

export const ColorsStates = {
  render: () => ({
    template: `
      <button class="badge badge--info">info</button>
      <button class="badge badge--warning">warning</button>
      <button class="badge badge--error">error</button>
      <button class="badge badge--success">success</button>
      <button class="badge badge--active">active</button>
    `,
  }),
}

export const ColorsOther = {
  render: () => ({
    template: `
      <button class="badge badge--gray">gray</button>
      <button class="badge badge--red">red</button>
      <button class="badge badge--yellow">yellow</button>
      <button class="badge badge--orange">orange</button>
      <button class="badge badge--green">green</button>
      <button class="badge badge--blue">blue</button>
      <button class="badge badge--indigo">indigo</button>
      <button class="badge badge--purple">purple</button>
      <button class="badge badge--pink">pink</button>
    `,
  }),
}

export const Sizes = {
  render: () => ({
    template: `
      <button class="badge badge--base badge--gray">badge--base</button>
      <button class="badge badge--sm badge--gray">badge--sm</button>
    `,
  }),
}

export const Icons = {
  render: () => ({
    template: `
      <div class="badge badge--gray badge--icon">
        <span class="badge__text">badge--icon</span>

        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="badge__icon icon icon--base">
          <path xmlns="http://www.w3.org/2000/svg" d="m17.153 7.066-4.8 4.801-4.779-4.779-.53.531 4.779 4.778-4.757 4.756.531.531 4.756-4.757 4.778 4.779.531-.53-4.779-4.779 4.801-4.8z" />
        </svg>

      </div>
    `,
  }),
}
