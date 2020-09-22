<template lang="html">
  <a-entity
    :hand-controls="hand"
    :raycaster__start="raycasterForStart"
    :raycaster__end="raycasterForRestart"
    @raycaster-intersection="setIntersectedStatus(true)"
    @raycaster-intersection-cleared="setIntersectedStatus(false)"
    @gripdown="updateGameStatus"
    gltf-model="/assets/obj/hands/leftHandLow.glb"
  >
  </a-entity>
</template>

<script>
import { PAGE_NAME_LIST } from "../utils/page-name-list.js"

export default {
  name: "PlayerHand",
  props : {
    hand_side: { type: String, required: true }
  },
  data() {
    return {
      buttonIntersected: false,
      raycasterForStart: {
        objects: "#start_button",
        showLine: true,
        far: 5,
      },
      raycasterForRestart: {
        objects: "#restart_button",
        showLine: true,
        far: 100,
      },
      hand: {
        hand: this.hand_side
      },
    }
  },
  methods: {
    setIntersectedStatus(status) {
      this.buttonIntersected = status
    },
    updateGameStatus() {
      if(!this.buttonIntersected) return false

      if(this.$store.getters.getCurrentPage == PAGE_NAME_LIST.START) {
        this.$store.dispatch("updatePlayerMovableStatus", true)
        this.$store.dispatch("updateCurrentPage", PAGE_NAME_LIST.APP)
      }else if(this.$store.getters.getCurrentPage == PAGE_NAME_LIST.END) {
        // this.$store.dispatch("updatePlayerMovableStatus", false)
        // this.$store.dispatch("updateCurrentPage", PAGE_NAME_LIST.START)
        location.reload()
      }
    }
  }
}
</script>
