import { positionCheck, setPlayerPosition } from "../utils/component-utils.js"
import { PAGE_NAME_LIST } from "../const/PageNameList.js"
import store from "../store/Store.js"

// eslint-disable-next-line no-undef
AFRAME.registerComponent("goal", {
  schema: {
    x_area: { type: "array" },
    z_area: { type: "array" },
    isGoal: { type: "boolean" },
  },
  init: function() {
    if(!this.data.isGoal) {
      this.el.removeAttribute("goal")
    }
  },
  tick: function() {
    if (positionCheck(this.data.x_area, this.data.z_area)) {
      store.dispatch("updatePlayerMovableStatus", false)
      store.dispatch("updateCurrentPage", PAGE_NAME_LIST.END)
      setPlayerPosition( {x: 0, y: 0, z: 0} )
    }
  }
})
