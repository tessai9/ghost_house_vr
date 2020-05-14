import { positionCheck } from "../utils/component-utils.js"

// eslint-disable-next-line no-undef
AFRAME.registerComponent("below-to-up", {
  schema: {
    x_area: { type: "array" },
    z_area: { type: "array" }
  },
  init: function() {
    const initialPosition = {
      x: this.el.object3D.position.x,
      y: this.data.geometry.height * -1,
      z: this.el.object3D.position.z,
    }
    this.el.setAttribute("position", initialPosition)
  },
  tick: function() {
    if (
      positionCheck(this.data.x_area, this.data.z_area)
      && this.el.object3D.position.y < this.data.geometry.height
    ){
      this.el.object3D.position.y += 0.5
      this.el.components.sound.playSound()
    }
  }
})
