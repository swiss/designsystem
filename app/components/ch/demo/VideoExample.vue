<template>
  <figure>
    <div class="ratio ratio--16/9">
      <video
        controls
        :src="videoFile"
      >
        <track
          default
          kind="captions"
          srclang="en"
          :src="vttFile"
        />
      </video>
    </div>
    <figcaption>Video label — © Author Name</figcaption>
  </figure>
</template>

<script>

export default {
  name: 'VideoExample',
  data: function () {
    return {
      videoFile: '../../../static/videos/demo.mp4',
      vttFile: '../../../static/videos/demo.vtt',

    }
  },
}


</script>
