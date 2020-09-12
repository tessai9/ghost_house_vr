// eslint-disable-next-line no-undef
AFRAME.registerComponent("endroll", {
  tick: function() {
    // console.log(this.el.object3D.position.y)
    if(this.el.object3D.position.y == 80 ) {
      this.el.destroy()
    }
  }
})
