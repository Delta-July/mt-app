import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  position: '重庆'
}

const mutation = {
  setPosition (state, value) {
    state.position = value
  }
}
const actions = {
  setPosition ({ commit }, val) {
    // 后端异步请求数据
    commit('setPosition', val)
  }
}

export default new Vuex.Store({
  state,
  mutation,
  actions
})
