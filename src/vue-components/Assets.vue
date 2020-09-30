<template lang="html" functional>
  <a-assets timeout="10000">
    <img id="ghost_woman" src="/assets/ghost_woman.png" />
    <img id="ground_img" src="/assets/floor.png" />
    <img id="wall_img" src="/assets/wall.jpg" />
    <img id="ceiling_img" src="/assets/ceiling.jpg" />
    <img id="title_back_img" src="/assets/title_back.png">
    <audio id="world_sound" src="/assets/sound/world_sound.ogg" autoplay loop />
    <audio id="walk_sound" src="/assets/sound/walk_sound.mp3" />
    <audio id="ghost_voice_1" src="/assets/sound/ghost_voice_1.mp3" />
    <audio id="ghost_voice_2" src="/assets/sound/ghost_voice_2.mp3" />
    <audio id="ghost_scream_1" src="/assets/sound/ghost_scream_1.mp3" />
    <audio id="ghost_scream_2" src="/assets/sound/ghost_scream_2.mp3" />
    <a-asset-item id="bleed_ghost" src="/assets/obj/bleed/scene.gltf" preload="auto"></a-asset-item>
    <a-asset-item id="metal_table" src="/assets/obj/old_metal_table/scene.gltf" preload="auto"></a-asset-item>
    <a-asset-item id="eyeball_obj" src="/assets/obj/eyeball/eyeball.obj"></a-asset-item>
    <a-asset-item id="eyeball_mtl" src="/assets/obj/eyeball/eyeball.mtl"></a-asset-item>
  </a-assets>
</template>

<script>
export default {
  name:  'Assets'
}
</script>

<style lang="css" scoped>
</style>
