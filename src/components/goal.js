import { positionCheck } from "../utils/component-utils.js"
import { PAGE_NAME_LIST } from "../utils/page-name-list.js"
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
    if (positionCheck(this.data.x_area, this.data.z_area) && this.el.object3D.position.y < 0) {
      console.log("ゴール!!")
      store.dispatch("updateCurrentPage", PAGE_NAME_LIST.END)
    }
  }
})
