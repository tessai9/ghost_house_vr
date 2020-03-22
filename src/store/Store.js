import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // player position information
    player_position: {x: 0, y: 2, z: 1}
  },

  getters: {
    getPlayerPosition(state) {
      return state.player_position
    }
  },

  mutations: {
     changePlayerPositoin(state, payload) {
       const x = payload.position.x
       const y = payload.position.y
       const z = payload.position.z
       state.player_position = {x:x, y:y, z:z}
     }
  },

  actions: {
    updatePlayerPositoin({commit}, position){
      commit("changePlayerPositoin", {position})
    }
  }
})
