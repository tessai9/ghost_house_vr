<template lang="html">
  <a-entity
    id="player"
    :movement-controls="playerMovementControls"
    wall-collidable="id: player"
    player
  >
    <a-entity
      id="camera"
      camera
      position="0 1.0 0"
      look-controls="pointerLockEnabled: true"
    >
      <a-entity
        v-if="displayRingCursor"
        cursor="fuse: true; fuseTimeout: 1500"
        raycaster="far: 100; objects: .endmenu; showLine: true; direction: 0 0 -1"
        position="0 0 -1"
        geometry="primitive: ring; radiusInner: 0.04; radiusOuter: 0.06;"
        material="color: #D3D3D3; shader: flat; opacity: 0.8"
        animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1;"
        animation__fusing="property: scale; startEvents: fusing; easing: easeInCubic; dur: 1500; from: 1 1 1; to: 0.1 0.1 0.1;"
        animation__mouseleave="property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: 1 1 1;"
      ></a-entity>
    </a-entity>
  </a-entity>
</template>

<script>
import { isVrMode } from "../utils/device-utils.js"
import { PAGE_NAME_LIST } from "../utils/page-name-list.js"

export default {
  name: "Player",
  computed: {
    playerMovementControls() {
      return {
        enabled: this.$store.getters.getPlayerMovableStatus,
        speed: 0.2,
      }
    },
      displayRingCursor() {
          return this.$store.getters.getCurrentPage == PAGE_NAME_LIST.END && !isVrMode()
      }
  },
}
</script>

<style lang="css" scoped>
</style>
