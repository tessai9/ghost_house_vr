import store from "../store/Store.js"

export function positionCheck(xArea, zArea) {
  return store.getters.getPlayerPosition.x >= xArea[0] &&
         store.getters.getPlayerPosition.x <= xArea[1] &&
         store.getters.getPlayerPosition.z >= zArea[0] &&
         store.getters.getPlayerPosition.z <= zArea[1]
}
