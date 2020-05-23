import store from "../store/Store.js"

// eslint-disable-next-line no-undef
AFRAME.registerComponent("player-controls", {
  init: function() {},
  tick: function() {
    this.updatePosition()
  },

  updatePosition: function () {
    const player_ray = document.querySelector('#player-collider-ray');
    player_ray.setAttribute("position", this.el.object3D.position)
    
    const directionVector = new THREE.Vector3(0, 0, 0)
    const collisionState = store.getters.getCollisionState
    const currPosition = this.el.object3D.position
    const prevPosition = new THREE.Vector3(
      store.getters.getPlayerPosition.x,
      store.getters.getPlayerPosition.y,
      store.getters.getPlayerPosition.z 
    )
    const nextPosition = {
      x :currPosition.x, 
      y: currPosition.y, 
      z: currPosition.z
    }

    /*
    const currRotation = new THREE.Euler(
      0, 
      -1 * THREE.Math.degToRad(this.el.getAttribute("rotation").y), 
      0,
      "YXZ"
    )*/

    // direction vector
    directionVector.subVectors(currPosition, prevPosition)
    //localDirectionVector.applyEuler(currRotation)
    directionVector.normalize

    for(let conllision_direction of collisionState){
      if(conllision_direction.includes("front_collision") && directionVector.z < 0){
        nextPosition.z = prevPosition.z
      }
      if(conllision_direction.includes("back_collision") && directionVector.z >= 0){
        nextPosition.z = prevPosition.z
      }
      if(conllision_direction.includes("right_collision") && directionVector.x > 0){
        nextPosition.x = prevPosition.x
      }
      if(conllision_direction.includes("left_collision") && directionVector.x <= 0){
        nextPosition.x = prevPosition.x
      }
    }

    this.el.setAttribute("position",nextPosition)
    player_ray.setAttribute("position", nextPosition)
    store.dispatch("updatePlayerPosition", nextPosition)
  }
})

AFRAME.registerComponent('wall-collider-check', {
  dependencies: ['raycaster'],
  init: function () {
      this.el.addEventListener('raycaster-intersection', function (e) {
        store.dispatch("addCollisionState", this.getAttribute("id"))
      });
      this.el.addEventListener('raycaster-intersection-cleared', function () {
        store.dispatch("removeCollisionState", this.getAttribute("id"))
      });
  }
});

