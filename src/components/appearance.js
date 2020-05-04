import store from "../store/Store.js"

// eslint-disable-next-line no-undef
AFRAME.registerComponent("appearance",{
  schema: {
    x_area: { type: "array" },
    z_area: { type: "array" }
  },
  init: function() {
    this.el.setAttribute("visible", false)
  },
  tick: function() {
    // プレイヤーが出現エリアに入ったらvisible = trueに
    if (
      store.getters.getPlayerPosition.x >= this.data.x_area[0] &&
      store.getters.getPlayerPosition.x <= this.data.x_area[1] &&
      store.getters.getPlayerPosition.z >= this.data.z_area[0] &&
      store.getters.getPlayerPosition.z <= this.data.z_area[1]
    ) {
      this.el.setAttribute("visible", true)
      this.el.components.sound.playSound()
    } else {
      this.el.setAttribute("visible", false)
    }
  },
})
