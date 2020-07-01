import Vue from "vue"
import Vuex from "vuex"
import { isVrMode } from "../utils/device-utils.js"
import { PAGE_NAME_LIST } from "../utils/page-name-list.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // player position information
    player_position: {x: 0, y: 0, z: 1},
    // page status (Start Page, Ghost House, End Page)
    current_page: isVrMode() ? PAGE_NAME_LIST.APP : PAGE_NAME_LIST.START,
    // player movable flag
    player_movable: false,
  },

  getters: {
    getPlayerPosition(state) {
      return state.player_position
    },
    getPlayerMovableStatus(state) {
      return state.player_movable
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
    },
    switchPlayerMovableStatus(state, is_movable) {
      state.player_movable = is_movable
    }
  },

  actions: {
    updatePlayerPosition({commit}, position) {
      commit("changePlayerPosition", {position})
    },
    updateCurrentPage({commit}, page) {
      commit("swithCurrentPage", page)
    },
    updatePlayerMovableStatus({commit}, is_movable) {
      commit("switchPlayerMovableStatus", is_movable)
    }
  }
})
