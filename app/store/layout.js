export const state = () => ({
  mobileMenuIsOpen: false
})

export const mutations = {
  toggleMobileMenu (state) {
    state.mobileMenuIsOpen = !state.mobileMenuIsOpen
  },
  closeMobileMenu (state) {
    state.mobileMenuIsOpen = false
  },
  openMobileMenu (state) {
    state.mobileMenuIsOpen = true
  }
}

export const actions = {
  toggleMobileMenu ({ commit }) {
    commit('toggleMobileMenu')
  },
  closeMobileMenu ({ commit }) {
    commit('closeMobileMenu')
  },
  openMobileMenu ({ commit }) {
    commit('openMobileMenu')
  }
}

export const getters = {
  getMobileMenuIsOpen (state) {
    return state.mobileMenuIsOpen
  }
}

