import store from "@/store/Store.js"

export default {
  // 突然現れる
  appearance: {
    schema: {
      x_area: { type: "array" },
      z_area: { type: "array" }
    },
    init: function() {
      console.log("initialization for appearance")
      this.el.setAttribute("visible", false)
    },
    tick: function() {
      // プレイヤーが出現エリアに入ったらvisible = trueに
      if (
        store.getters.getPlayerPosition.x >= this.data.x_area[0] &&
        store.getters.getPlayerPosition.x <= this.data.x_area[1] &&
        store.getters.getPlayerPosition.z >= this.data.z_area[0] &&
        store.getters.getPlayerPosition.z <= this.data.z_area[1]
      ) {
        this.el.setAttribute("visible", true)
        this.el.components.sound.playSound()
      } else {
        this.el.setAttribute("visible", false)
      }
    },
  },
  // 下から上に飛び出る
  down_to_up: {
    schema: {
      x_area: { type: "array" },
      z_area: { type: "array" }
    },
    init: function() {
      console.log("initialization for down_to_up")
      this.el.object3D.position.y = -5;
    },
    tick: function() {
      if (
        store.getters.getPlayerPosition.x >= this.data.x_area[0] &&
        store.getters.getPlayerPosition.x <= this.data.x_area[1] &&
        store.getters.getPlayerPosition.z >= this.data.z_area[0] &&
        store.getters.getPlayerPosition.z <= this.data.z_area[1]
      ) {
        // 一度出たらそのまま
        if(this.el.object3D.position.y < 2) this.el.object3D.position.y += 0.1
      }
    }
  }
}
