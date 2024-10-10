import Logo from '../../ch/components/Logo.vue'

export default {
  title: 'Components/Logo',
  component: Logo,
  decorators: [
    () => ({ template: '<div style="margin: 2rem;"><story/></div>' }),
  ],
}

export const Logotype = {
  components: { Logo },
  template: '<Logo :title="title" :accronym="accronym" />',
  args: {
    title: 'Design System for <br/>the Swiss Confederation',
    accronym: 'DSS',
  },
}
