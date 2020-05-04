import store from "../store/Store.js"

// eslint-disable-next-line no-undef
AFRAME.registerComponent("below-to-up", {
  schema: {
    x_area: { type: "array" },
    z_area: { type: "array" }
  },
  init: function() {
    this.el.object3D.position.y = -5;
  },
  tick: function() {
    if (
      store.getters.getPlayerPosition.x >= this.data.x_area[0] &&
      store.getters.getPlayerPosition.x <= this.data.x_area[1] &&
      store.getters.getPlayerPosition.z >= this.data.z_area[0] &&
      store.getters.getPlayerPosition.z <= this.data.z_area[1]
    ) {
      // 一度出たらそのまま
      if(this.el.object3D.position.y < 2){
        this.el.object3D.position.y += 0.1
        this.el.components.sound.playSound()
      }
    }
  }
})
