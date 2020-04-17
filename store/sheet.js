export const state = () => ({
  data: null
})

export const mutations = {
  commit (state, data) {
    state.data = data
  }
}
