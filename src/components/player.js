import store from "../store/Store.js"

// eslint-disable-next-line no-undef
AFRAME.registerComponent("app-oculus-controls", {
  init: function() {},
  tick: function() {
    store.dispatch("updatePlayerPositoin", this.el.object3D.position)
  }
})
