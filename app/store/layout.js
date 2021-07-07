export const state = () => ({
  mobileMenuIsOpen: false
})

export const mutations = {
  toggleMobileMenu(state) {
    state.mobileMenuIsOpen = !state.mobileMenuIsOpen
  }
}

export const actions = {
  toggleMobileMenu({ commit }, cars) {
    commit('toggleMobileMenu')
  }
}

export const getters = {
  getMobileMenuIsOpen(state) {
    return state.mobileMenuIsOpen
  }
}