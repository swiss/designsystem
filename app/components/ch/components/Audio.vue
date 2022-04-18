<template>
  <div>
    test audio
    <audio 
      id="audio_with_controls" 
      controls
      :src="url"
      :type="type" 
    >
      Ihr Browser kann dieses Tondokument nicht wiedergeben.<br>
      Es enthält eine Aufführung der Europahymne. 
      Sie können es unter
      <a href="/local/Europahymne.mp3">diesem Link</a>
      abrufen.
</audio>
  </div>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue'
import MetaInfo from './MetaInfo.vue'
export default {
  name: 'DownloadItem',
  components: {
    SvgIcon,
    MetaInfo,
  },
  props: {
    url: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "audio/mp3"
    }
  },
}
</script>
