import store from "../store/Store.js"

// eslint-disable-next-line no-undef
const utility = AFRAME.utils

const HAND_RAYCASTER_PARAMETER = {
  objects: "#start_button",
  showLine: true,
  far: 5
}

const HAND_MODEL_PATH = "/assets/obj/hands/leftHandLow.glb"

// eslint-disable-next-line no-undef
AFRAME.registerComponent("player", {
  init: function() {
    // VRヘッドセットであれば、両手Entityを追加
    if(utility.device.checkHeadsetConnected()){
      // Start Buttonに接触しているかどうか
      this.startButtonIntersected = false
      // 両手のEntityを作成する
      const leftHandEntity = document.createElement("a-entity")
      const rightHandEntity = document.createElement("a-entity")

      // 左手の挙動
      leftHandEntity.setAttribute("hand-controls", {"hand": "left"})
      leftHandEntity.setAttribute("raycaster", HAND_RAYCASTER_PARAMETER)
      leftHandEntity.setAttribute("gltf-model", HAND_MODEL_PATH)
      leftHandEntity.addEventListener("raycaster-intersection", () => {
        this.startButtonIntersected = true
      })
      leftHandEntity.addEventListener("raycaster-intersection-cleared", () => {
        this.startButtonIntersected = false
      })
      leftHandEntity.addEventListener("gripdown", () => {
        // Startボタンと交差している状態でコントローラのグリップを押すと動けるように
        if(this.startButtonIntersected) {
          store.dispatch("updatePlayerMovableStatus", true)
        }
      })
      // 右手の挙動
      rightHandEntity.setAttribute("hand-controls", {"hand": "right"})
      rightHandEntity.setAttribute("raycaster", HAND_RAYCASTER_PARAMETER)
      rightHandEntity.setAttribute("gltf-model", HAND_MODEL_PATH)
      rightHandEntity.addEventListener("raycaster-intersection", () => {
        this.startButtonIntersected = true
      })
      rightHandEntity.addEventListener("raycaster-intersection-cleared", () => {
        this.startButtonIntersected = false
      })
      rightHandEntity.addEventListener("gripdown", () => {
        if(this.startButtonIntersected) {
          store.dispatch("updatePlayerMovableStatus", true)
        }
      })
      this.el.appendChild(leftHandEntity)
      this.el.appendChild(rightHandEntity)
    // PCやスマホでの動作であれば、画面中心にカーソルを表示する
    }else {
      // 理想：cursor attributeの追加とクリックイベントの追加する

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
