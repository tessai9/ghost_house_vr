<template lang="html">
  <a-entity>
    <a-entity
      id="camera"
      camera
      position="0 1.0 0"
      wasd-controls="acceleration: 50"
      look-controls="pointerLockEnabled: true"
      save-store-player-position
      wall-collidable="id: player"
    >
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
