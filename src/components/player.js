import store from "../store/Store.js"

const utility = AFRAME.utils

const HAND_RAYCASTER_PARAMETER = {
  showLine: true,
  far: 5
}

// eslint-disable-next-line no-undef
AFRAME.registerComponent("player", {
  init: function() {
    // VRヘッドセットであれば、両手Entityを追加
    if(utility.device.checkHeadsetConnected()){
      const leftHandEntity = document.createElement("a-entity")
      const rightHandEntity = document.createElement("a-entity")
      leftHandEntity.setAttribute("hand-controls", {"hand": "left"})
      leftHandEntity.setAttribute("raycaster", HAND_RAYCASTER_PARAMETER)
      rightHandEntity.setAttribute("hand-controls", {"hand": "right"})
      rightHandEntity.setAttribute("raycaster", HAND_RAYCASTER_PARAMETER)
      this.el.appendChild(leftHandEntity)
      this.el.appendChild(rightHandEntity)
    }
  },
  tick: function() {
    // Storeの更新
    store.dispatch("updatePlayerPosition", this.el.object3D.position)
  }
})
