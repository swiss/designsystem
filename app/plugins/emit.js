import Vue from 'vue'
import mitt from 'mitt';
const emitter = mitt();

const emitterInstall = {
  install (Vue) {
    Vue.prototype.emitter = emitter;
  }
}

Vue.use(emitterInstall)
