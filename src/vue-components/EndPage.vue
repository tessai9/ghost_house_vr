<template lang="html">
  <a-entity id="end-page">
    <!-- Player -->
    <a-entity
      id="camera"
      camera
      position="0 0 0"
      wasd-controls="false"
      look-controls="pointerLockEnabled: true"
    >
      <a-entity
        cursor="fuse: true; fuseTimeout: 1500"
        raycaster="far: 100; objects: .endmenu; showLine: true; direction: 0 0 -1"
        position="0 0 -2"
        geometry="primitive: ring; radiusInner: 0.04; radiusOuter: 0.06;"
        material="color: #acacac; shader: flat; opacity: 0.8"
        animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1"
        animation__fusing="property: scale; startEvents: fusing; easing: easeInCubic; dur: 1500; from: 1 1 1; to: 0.1 0.1 0.1"
        animation__mouseleave="property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: 1 1 1"
      ></a-entity>
    </a-entity>

    <!-- Endroll Contents -->
    <a-entity
      id="endroll-text"
      endroll
      animation="property: object3D.position.y; to: 80; dur: 20000;"
    >
      <a-text
        v-for="(content, content_index) in end_roll_text"
        :key="`title-${content_index}`"
        :value="content.title"
        :position="titlePosition(content_index)"
        font="mozillavr"
        color="yellow"
        scale="10 10 10"
      >
        <a-text
          v-for="(name, name_index) in content.name"
          :key="`name-${name_index}`"
          :value="name"
          :position="namePosition(name_index)"
          scale="0.5 0.5 0.5"
        ></a-text>
      </a-text>
    </a-entity>

    <a-text 
      id="ty" value="Thank you for playing." align="center" position="0 -58 -4" color="white"
      font="mozillavr"
      scale="4 4 4"
      animation="property: object3D.position.y; to: 2; dur: 20000;"
    ></a-text>

    <a-entity
      id="close" 
      text="value: CLOSE; align: center; color: white; width: 4"
      geometry="primitive:plane; width: 2"
      position="-1.5 -60 -4"
      class="endmenu"
      animation="property: object3D.position.y; to: 0; dur: 20000;"
      material="color: blue"
      selectable="action: close"
    ></a-entity>
    <a-entity 
      id="restart" 
      text="value: RESTART; align: center; color: white; width: 4"
      position="1.5 -60 -4" 
      geometry="primitive:plane; width: 2"
      class="endmenu"
      animation="property: object3D.position.y; to: 0; dur: 20000;"
      material="color: red"
      selectable="action: restart"
    ></a-entity>
  </a-entity>
</template>

<script>
import { PAGE_NAME_LIST } from "../utils/page-name-list.js"
import { END_ROLL_TEXT } from "../EndRollText.js"
const TITLE_INTERVAL = 3
const NAME_INTERVAL = 0.25;

export default {
  name: "EndPage",
  data() {
    return {
      end_roll_text: END_ROLL_TEXT,
    }
  },
  methods: {
    startApp() {
      this.$store.dispatch("updateCurrentPage", PAGE_NAME_LIST.START)
    },
    textEndPosition(index) {
      return -1 * TITLE_INTERVAL * index + 2 + 80
    },
    titlePosition(index) {
      return {
        x: -4,
        y: -1 * TITLE_INTERVAL * index + 2,
        z: -10
      }
    },
    namePosition(index) {
      return {
        x: 0.15,
        y: index > 0 ? -1 * (NAME_INTERVAL * index + NAME_INTERVAL) : -1 * NAME_INTERVAL,
        z: 0
      }
    },
  }
}
</script>

<style lang="css" scoped>
</style>
