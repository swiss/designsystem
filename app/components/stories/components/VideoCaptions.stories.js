const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <video controls src="/videos/demo.mp4">
      <track default kind="captions" srclang="en" src="/videos/demo.vtt" />
    </video>
  `,
})

export default {
  title: 'Components/Video/Captions',
}

export const Example = {
  render: Template.bind({}),
  name: 'Example',
}
