<template lang="html">
  <a-entity
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
  computed: {
    playerMovementControls() {
      return {
        enabled: this.$store.getters.getPlayerMovableStatus,
        speed: 0.4,
      }
    }
  },
  mounted() {},
  methods: {
    getPosition : function() {
      return this.$store.getters.getPlayerPosition
    }
  }
}
</script>

<style lang="css" scoped>
</style>
