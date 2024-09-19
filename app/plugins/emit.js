import mitt from 'mitt'
const emitter = mitt()

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('emit', (...args) => {
    // console.log('plugin emit called', args)
    emitter.emit(...args)
  })
  nuxtApp.provide('on', (...args) => {
    // console.log('plugin emit on called', args)
    emitter.on(...args)
  })
})
