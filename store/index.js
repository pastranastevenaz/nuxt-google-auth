import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    user: []
  },
  getters: {
    user(state){
      return state.user
    }
  },
  mutations: {
    changeUser(state, newUser){
      state.user = newUser
    }
  }
})



export default store
