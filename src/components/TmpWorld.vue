  
<template lang="html">
  <a-scene>
    <a-assets>
      <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg">
      <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg">
    </a-assets>
    <a-cylinder id="ground" src="#groundTexture" radius="30" height="0.1"></a-cylinder>
    <a-sky id="background" src="#skyTexture" theta-length="90" radius="30"></a-sky>

    <Player :position="position"/>
  </a-scene>
</template>

<script>
import Player from './Player.vue'
export default {
  name: 'TmpWorld',
  data() {
    return {
      position: {x:0, y:0, z:1}
    }
  },
  components: {
    Player,
  }
}
</script>

<style lang="css" scoped>
</style>