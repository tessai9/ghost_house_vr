<template lang="html">
  <a-entity
    id="rig"
    :position="cameraPosition"
  >
    <a-camera
      id="camera"
      look-controls
      wasd-controls="acceleration: 500"
      rotation-reader
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
export default {
  name: "Player",
  props: {
    position: {
      type: Object,
      required: false,
      default: () => ( {x:0, y: 0, z:1} )
    }
  },
  data() {
    return {
      localPosition: {
        x : this.position.x,
        y : this.position.y,
        z : this.position.z
      }
    }
  },
  computed: {
    cameraPosition () {
      const pos = this.localPosition
      return pos
    }
  },
  methods: {
    /*onClick() {
                this.localPosition.y += 0.1
            }*/
  }
}
</script>

<style lang="css" scoped>
</style>
