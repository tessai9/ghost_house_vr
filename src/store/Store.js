import Vue from "vue"
import Vuex from "vuex"
import { PAGE_NAME_LIST } from "../utils/page-name-list.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // player position information
    player_position: {x: 0, y: 0, z: 1},
    // page status (Start Page, Ghost Housem, End Page)
    current_page: PAGE_NAME_LIST.START,
  },

  getters: {
    getPlayerPosition(state) {
      return state.player_position
    },
  },

  mutations: {
    changePlayerPosition(state, payload) {
      const x = payload.position.x
      const y = payload.position.y
      const z = payload.position.z
      state.player_position = {x:x, y:y, z:z}
    },
    swithCurrentPage(state, page_number) {
      state.current_page = page_number
    }
  },

  actions: {
    updatePlayerPosition({commit}, position) {
      commit("changePlayerPosition", {position})
    },
    updateCurrentPage({commit}, page) {
      commit("swithCurrentPage", page)
    }
  }
})
