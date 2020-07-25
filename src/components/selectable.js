// eslint-disable-next-line no-undef
AFRAME.registerComponent("selectable", {
  schema: {
    action: { type: "string" }
  },
  init: function () {
    this.el.setAttribute("animation__mouseenter", "property: scale; to: 1.5 1.5 1.5; startEvents: mouseenter; dur: 200")
    this.el.setAttribute("animation__mouseleave", "property: scale; to: 1 1 1; startEvents: mouseleave; dur: 200")
    this.el.addEventListener("raycaster-intersected", evt => {
      this.raycaster = evt.detail.el
            
    });
    this.el.addEventListener("raycaster-intersected-cleared", evt => {
      this.raycaster = null
    });
    this.el.addEventListener("click", evt => {
      if(this.data.action == "restart"){ location.reload()}
      else if(this.data.action == "close"){ window.open("about:blank", "_self").close()}
    });
  },
  tick: function() {
    if (!this.raycaster) { return }
    let intersection = this.raycaster.components.raycaster.getIntersection(this.el)
    if (!intersection) { return }
  }
}
)