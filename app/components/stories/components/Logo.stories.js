import Logo from '../../ch/components/Logo.vue'

export default {
  title: 'Components/Logo',
  component: Logo,
}

export const Logotype = {
  components: { Logo },
  template: '<Logo :title="title" :acronym="acronym" />',
  args: {
    title: 'Design System for <br/>the Swiss Confederation',
    acronym: 'DSS',
  },
}
