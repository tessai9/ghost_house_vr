<template lang="html">
  <a-entity>
    <a-entity id="player-collider-ray">
      <a-entity
        id="front_collision"
        raycaster="showLine: false; objects: .wall; far: 0.5; direction: 0 0 -1"
        wall-collider-check
      ></a-entity>
      <a-entity
        id="back_collision"
        raycaster="showLine: false; objects: .wall; far: 0.5; direction: 0 0 1"
        wall-collider-check
      ></a-entity>
      <a-entity
        id="left_collision"
        raycaster="showLine: false; objects: .wall; far: 0.5; direction: -1 0 0"
        wall-collider-check
      ></a-entity>
      <a-entity
        id="right_collision"
        raycaster="showLine: false; objects: .wall; far: 0.5; direction: 1 0 0"
        wall-collider-check
      ></a-entity>
    </a-entity>
    <a-entity
      id="camera"
      camera
      position="0 1.0 0"
      wasd-controls="acceleration: 500"
      look-controls="pointerLockEnabled: true"
      player-controls
    >
    <a-entity
      cursor="fuse: true; fuseTimeout: 50"
      position="0 0 -1"
      geometry="primitive: ring; radiusInner: 0.01; radiusOuter: 0.011"
      material="color: white; shader: flat"
    ></a-entity>
    </a-entity>
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
  methods: {
    getPosition : function() {
      return this.$store.getters.getPlayerPosition
    }
  }
}
</script>

<style lang="css" scoped>
</style>
