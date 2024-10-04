import mitt from 'mitt'
const emitter = mitt()

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('emit', (...args) => {
    emitter.emit(...args)
  })
  nuxtApp.provide('on', (...args) => {
    emitter.on(...args)
  })
})
