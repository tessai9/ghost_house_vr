<template lang="html" functional>
  <a-assets>
    <img id="ghost_woman" src="/assets/ghost_woman.png" />
    <img id="ground_img" src="/assets/floor.png" />
    <img id="wall_img" src="/assets/wall.jpg" />
    <img id="ceiling_img" src="/assets/ceiling.jpg" />
    <audio id="world_sound" src="/assets/sound/world_sound.mp3" preload="auto" />
    <audio id="walk_sound" src="/assets/sound/walk_sound.mp3" preload="auto" />
    <audio id="ghost_voice_1" src="/assets/sound/ghost_voice_1.mp3" preload="auto" />
    <audio id="ghost_voice_2" src="/assets/sound/ghost_voice_2.mp3" preload="auto" />
    <audio id="ghost_scream_1" src="/assets/sound/ghost_scream_1.mp3" preload="auto" />
    <audio id="ghost_scream_2" src="/assets/sound/ghost_scream_2.mp3" preload="auto" />
    <a-asset-item id="bleed_ghost" src="/assets/obj/bleed/scene.gltf"></a-asset-item>
  </a-assets>
</template>

<script>
export default {
  name:  'Assets'
}
</script>

<style lang="css" scoped>
</style>
