<template lang="html">
    <a-entity>
      <a-text
        :value="playerPositionStr"
        :position="textPosition"
      ></a-text>
    </a-entity>
</template>

<script>
export default {
  name: "PlayerPosDisplay",
  computed: {
    textPosition () {
      const fixedPos = {x:1.5, y:-2, z:5}
      const x = this.$store.getters.getPlayerPosition.x
      const y = this.$store.getters.getPlayerPosition.y
      const z = this.$store.getters.getPlayerPosition.z
      const relPos = {x:-fixedPos.x+x, y:-fixedPos.y+y, z:-fixedPos.z+z}
      // eslint-disable-next-line no-console
      console.log(relPos)
      return relPos
    },
    playerPositionStr () {
      const posStr = "X: " + String(this.$store.getters.getPlayerPosition.x).substr(0, 4) +
                     ", Y: " + String(this.$store.getters.getPlayerPosition.y).substr(0, 4) +
                     ", Z: " + String(this.$store.getters.getPlayerPosition.z).substr(0, 4)
      // eslint-disable-next-line no-console
      console.log(posStr)
      return posStr
    }
  }
}
</script>

<style lang="css" scoped>
</style>
