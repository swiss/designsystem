export default {
  title: 'Components/Video/Captions',
}

export const Example = {
  render: () => ({
    components: {},
    template: `
      <video controls src="/videos/demo.mp4">
        <track default kind="captions" srclang="en" src="/videos/demo.vtt" />
      </video>
  `,
  }),
}
