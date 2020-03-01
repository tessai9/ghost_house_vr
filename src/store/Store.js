import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // player position information
    player_x_position: 0,
    player_y_position: 0,
    player_z_position: 0
  },
  mutations: {
     changePlayerPositoin(state, position) {
       state.player_x_position = position.x
       state.player_y_position = position.y
       state.player_z_position = position.z
     }
  }
})
