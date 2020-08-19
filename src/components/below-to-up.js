import { positionCheck } from "../utils/component-utils.js"

// eslint-disable-next-line no-undef
AFRAME.registerComponent("below-to-up", {
  schema: {
    x_area: { type: "array" },
    z_area: { type: "array" }
  },
  init: function() {
    this.el.setAttribute("visible", false)
    this.soundPlayFlag = false
  },
  tick: function() {
    if (
      positionCheck(this.data.x_area, this.data.z_area)
      && this.el.object3D.position.y < 0
    ){
      this.el.object3D.position.y += 0.5
      if(!this.soundPlayFlag){
        this.el.components.sound.playSound()
        this.soundPlayFlag = true
      }
      this.el.setAttribute("visible", true)
    }
  }
})
