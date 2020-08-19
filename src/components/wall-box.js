// box size of wall
export const WALL_BOX_SIZE = {
  width: 10,
  height: 10,
  depth: 10
}

// eslint-disable-next-line no-undef
AFRAME.registerComponent("wall-box", {
  init: function() {
    this.el.setAttribute("geometry", WALL_BOX_SIZE)
  },
})
