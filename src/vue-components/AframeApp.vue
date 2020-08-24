<template lang="html">
  <a-scene vr-mode-ui="enabled: true" background="color: black" stats>
    <!-- Asset Files -->
    <Assets />

    <!-- Ghost House -->
    <GhostHouse v-if="!isGameEnd" />
    <!-- EndPage -->
    <EndPage v-else />

    <!-- Player Component -->
    <Player />
    <PlayerPosDisplay />
</a-scene>
</template>

<script>
import Assets from "./Assets.vue"
import GhostHouse from "./GhostHouse.vue"
import EndPage from "./EndPage.vue"
import Player from "./Player.vue"
import PlayerPosDisplay from "./PlayerPosDisplay.vue"
import { PAGE_NAME_LIST } from "../utils/page-name-list.js"

export default {
  name: "AframeApp",
  computed: {
    isGameEnd() {
      return this.$store.getters.getCurrentPage == PAGE_NAME_LIST.END
    }
  },
  components: {
    Assets,
    GhostHouse,
    EndPage,
    Player,
    PlayerPosDisplay,
  }
}
</script>

<style lang="css" scoped>
</style>
