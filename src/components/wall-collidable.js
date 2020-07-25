import store from "../store/Store.js"

AFRAME.registerComponent("wall-collidable", {
  schema: {id: { type: "string", default: "object01" }},

  init: function () {
    this.collisionState = []
    this.prevPosition = store.getters.getPlayerPosition

    const collisionState = this.collisionState

    const el = this.el.parentElement
    const colliderRayEntity = document.createElement("a-entity")
    colliderRayEntity.setAttribute("id", this.data.id)

    const ray_direction = {
      "north": "0 0 -1",
      "south": "0 0 1",
      "east" : "1 0 0",
      "west" : "-1 0 0",
    }
    for(let id in ray_direction){            
      let rayEntity = document.createElement("a-entity")
      rayEntity.setAttribute("id", id)
      rayEntity.setAttribute("raycaster", {
        "showLine": "false",
        "objects":".wall",
        "far": "0.8",
        "direction": ray_direction[id]
      })

      rayEntity.addEventListener("raycaster-intersection", function (e) {
        collisionState.push(rayEntity.getAttribute("id"))
      })
      rayEntity.addEventListener("raycaster-intersection-cleared", function () {
        const index = collisionState.indexOf(rayEntity.getAttribute("id"))
        collisionState.splice(index, 1)
      });
      colliderRayEntity.appendChild(rayEntity)
    }
    el.appendChild(colliderRayEntity)
  },

  tick: function () {
    const player_ray = document.querySelector("#" + this.data.id)

    const directionVector = new THREE.Vector3(0, 0, 0)
    const currPosition = this.el.object3D.position
    const prevPosition = new THREE.Vector3(
      this.prevPosition.x,
      this.prevPosition.y,
      this.prevPosition.z 
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
        
    for(let conllision_direction of this.collisionState){
      if(conllision_direction.includes("north") && directionVector.z < 0){
        nextPosition.z = prevPosition.z
      }
      if(conllision_direction.includes("south") && directionVector.z >= 0){
        nextPosition.z = prevPosition.z
      }
      if(conllision_direction.includes("east") && directionVector.x > 0){
        nextPosition.x = prevPosition.x
      }
      if(conllision_direction.includes("west") && directionVector.x <= 0){
        nextPosition.x = prevPosition.x
      }
    }

    player_ray.setAttribute("position", nextPosition)
    this.el.setAttribute("position", nextPosition)
    this.prevPosition = nextPosition
  }
});