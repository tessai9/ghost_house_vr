import store from "../store/Store.js"
import { PAGE_NAME_LIST } from "../const/PageNameList.js"

// eslint-disable-next-line no-undef
const utility = AFRAME.utils

// eslint-disable-next-line no-undef
AFRAME.registerComponent("player", {
  init: function() {
    // VRヘッドセットであれば、両手Entityを追加
    if(!utility.device.checkHeadsetConnected()){
      // とりあえず画面クリックでスタート
      window.addEventListener("click", function() {
        store.dispatch("updatePlayerMovableStatus", true)
      })
    }
  },
  tick: function() {
    // Storeで保持しているPlayerの位置情報を更新
    store.dispatch("updatePlayerPosition", this.el.object3D.position)
  }
})
