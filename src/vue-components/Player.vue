<template lang="html">
    <a-entity id="player">
      <a-camera
        id="camera"
        look-controls
        wasd-controls="acceleration: 50"
        :position="position"
        app-oculus-controls
      >
      <a-entity cursor="fuse: true; fuseTimeout: 50"
        position="0 0 -1"
        geometry="primitive: ring; radiusInner: 0.01; radiusOuter: 0.011"
        material="color: white; shader: flat"
      ></a-entity>
    </a-camera>
  </a-entity>
</template>

<script>
import store from "../store/Store.js"

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
</script>

<style lang="css" scoped>
</style>
