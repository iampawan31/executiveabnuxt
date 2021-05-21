export const state = () => ({
  initialSlide: true,
  breakpoint: null,
})

export const getters = {
  initialSlide(state) {
    return state.initialSlide
  },
  breakpoint(state) {
    return state.breakpoint
  },
}

export const mutations = {
  updateInitialSlide(state, value) {
    state.initialSlide = value
  },
  updateBreakpoint(state, value) {
    state.breakpoint = value
  },
}
