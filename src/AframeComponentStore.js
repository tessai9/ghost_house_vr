export default {
  appearance: {
    schema: {
      x_area: { type: "array" },
      z_area: { type: "array" },
      player_position: { type: "vec3" },
    },
    init: function() {
      this.visible = false
    },
    update: function() {
      if (this.data.x_area[0] <= this.data.player_position.x &&
          this.data.x_area[1] >= this.data.player_position.x &&
          this.data.z_area[0] <= this.data.player_position.z &&
          this.data.z_area[1] >= this.data.player_position.z
      ) {
        this.visible = true
      } else {
        this.visible = false
      }
    }
  }
}
