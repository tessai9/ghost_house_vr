import store from "../store/Store.js"

// eslint-disable-next-line no-undef
AFRAME.registerComponent("save-store-player-position", {
  init: function() {},
  tick: function() {
    store.dispatch("updatePlayerPosition", this.el.object3D.position)
  }
})
