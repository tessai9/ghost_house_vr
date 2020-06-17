import { positionCheck } from "../utils/component-utils.js"

// eslint-disable-next-line no-undef
AFRAME.registerComponent("appearance",{
  schema: {
    x_area: { type: "array" },
    z_area: { type: "array" }
  },
  init: function() {
    this.el.setAttribute("visible", false)
    this.soundPlayFlag = false
  },
  tick: function() {
    // プレイヤーが出現エリアに入ったらvisible = trueに
    if (positionCheck(this.data.x_area, this.data.z_area)) {
      this.el.setAttribute("visible", true)
      if(!this.soundPlayFlag){
        this.el.components.sound.playSound()
        this.soundPlayFlag = true
      }
    } else {
      this.el.setAttribute("visible", false)
      this.soundPlayFlag = false
    }
  },
})
