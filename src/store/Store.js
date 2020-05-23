import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // player position information
    player_position: {x: 0, y: 0, z: 1},
    // player collision state with wall
    collisionState: []
  },

  getters: {
    getPlayerPosition(state) {
      return state.player_position
    },
    getCollisionState(state) {
      return state.collisionState
    }
  },

  mutations: {
    changePlayerPosition(state, payload) {
      const x = payload.position.x
      const y = payload.position.y
      const z = payload.position.z
      state.player_position = {x:x, y:y, z:z}
    },
    
    pushCollisionState(state, payload) {
      state.collisionState.push(payload.collisionState)
    },
    spliceCollisionState(state, payload) {
      const index = state.collisionState.indexOf(payload.collisionState)
      state.collisionState.splice(index, 1)
    },
  },

  actions: {
    updatePlayerPosition({commit}, position){
      commit("changePlayerPosition", {position})
    },

    addCollisionState({commit}, collisionState){
      commit("pushCollisionState", {collisionState})
    },
    removeCollisionState({commit}, collisionState){
      commit("spliceCollisionState", {collisionState})
    }
  }
})
