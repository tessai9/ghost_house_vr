<template lang="html">
    <a-entity id="player"
      movement-controls="speed: 0.2"
      jump-ability
      kinematic-body="mass: 100; radius: 0.05"
      :position="position"
      app-oculus-controls>
      <a-entity
        camera
        id="camera"
        :position="position"
        look-controls="pointerLockEnabled: true"
      >
      </a-entity>
    </a-entity>
</template>

<script>
import Aframe from "aframe"
import store from "../store/Store"

export default {
  name: "Player",
  data() {
    return {
      position: store.getters.getPlayerPosition
    }
  },
  computed: {
    playerPosition () {
      return store.getters.getPlayerPosition
    }
  },
  methods: {}
}

Aframe.registerComponent("app-oculus-controls", {
  init: function() {},
  tick: function() {
    store.dispatch("updatePlayerPositoin", this.el.object3D.position)
  }
})

</script>

<style lang="css" scoped>
</style>
