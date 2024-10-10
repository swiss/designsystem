import { defineStore } from 'pinia'
export const useLayoutStore = defineStore('layout', {
  state: () => ({
    mobileMenuIsOpen: false,
  }),
  actions: {
    toggleMobileMenu() {
      this.mobileMenuIsOpen = !this.mobileMenuIsOpen
    },
    closeMobileMenu() {
      this.mobileMenuIsOpen = false
    },
    openMobileMenu() {
      this.mobileMenuIsOpen = true
    },
  },
})
