export const state = () => ({
  initialSlide: true,
})

export const getters = {
  initialSlide(state) {
    return state.initialSlide
  },
}

export const mutations = {
  updateInitialSlide(state, value) {
    state.initialSlide = value
  },
}
