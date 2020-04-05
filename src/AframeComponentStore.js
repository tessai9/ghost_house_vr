import store from "@/store/Store.js"

export default {
  // 出現Component
  appearance: {
    schema: {
      x_area: { type: "array" },
      z_area: { type: "array" }
    },
    init: function() {
      console.log("initialization");
      this.el.object3D.visible = false;
    },
    tick: function() {
      // プレイヤーが出現エリアに入ったらvisible = trueに
      if (
        store.getters.getPlayerPosition.x >= this.data.x_area[0] &&
        store.getters.getPlayerPosition.x <= this.data.x_area[1] &&
        store.getters.getPlayerPosition.z >= this.data.z_area[0] &&
        store.getters.getPlayerPosition.z <= this.data.z_area[1]
      ) {
        this.el.object3D.visible = true;
      } else {
        this.el.object3D.visible = false;
      }
    }
  }
}
