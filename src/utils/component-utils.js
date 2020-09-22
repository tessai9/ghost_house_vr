import "aframe"
import store from "../store/Store.js"

export function positionCheck(xArea, zArea) {
  return store.getters.getPlayerPosition.x >= xArea[0] &&
         store.getters.getPlayerPosition.x <= xArea[1] &&
         store.getters.getPlayerPosition.z >= zArea[0] &&
         store.getters.getPlayerPosition.z <= zArea[1]
}

export function setPlayerPosition(newPosition) {
  document.getElementById("player").setAttribute("position", {
    x: newPosition.x,
    y: newPosition.y,
    z: newPosition.z
  })
}
