import { positionCheck } from "../utils/component-utils.js"

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
      positionCheck(this.data.x_area, this.data.z_area)
      && this.el.object3D.position.y < 2
    ){
      this.el.object3D.position.y += 0.1
      this.el.components.sound.playSound()
    }
  }
})
