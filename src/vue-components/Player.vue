<template lang="html">
    <a-entity id="player">
      <a-camera
        id="camera"
        look-controls="pointerLockEnabled: true"
        wasd-controls="acceleration: 500"
        :position="position"
        app-oculus-controls
      >
      <a-entity
        cursor="fuse: true; fuseTimeout: 50"
        position="0 0 -1"
        geometry="primitive: ring; radiusInner: 0.01; radiusOuter: 0.011"
        material="color: white; shader: flat"
      ></a-entity>
    </a-camera>
  </a-entity>
</template>

<script>
export default {
  name: "Player",
  data() {
    return {
      position: this.$store.getters.getPlayerPosition
    }
  },
  methods: {}
}
</script>

<style lang="css" scoped>
</style>
