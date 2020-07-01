import store from "../store/store.js"

// eslint-disable-next-line no-undef
AFRAME.registerComponent("hand", {
  dependencies: ["raycaster"],
  init() {
    this.startButtonIntersected = false

    // raycasterで交差したオブジェクトがStartButtonであれば startButtonIntersected = true
    // この状態でgripdownイベントが発生したら、playermovable = true にしてゲームを開始する
    // 現状はStartButtonに対してのみraycasterを定義しているので特に条件は不要
    this.el.addEventListener("raycaster-intersection", () => {
      this.startButtonIntersected = true
    })
    this.el.addEventListener("raycaster-intersection-cleared", () => {
      this.startButtonIntersected = false
    })
    // StartButtonに向いていた状態でグリップを握った場合は行動可能にする
    this.el.addEventListener("gripdown", () => {
      if(this.startButtonIntersected){
        store.dispatch("updatePlayerMovable", true)
      }
    })
  },
})
