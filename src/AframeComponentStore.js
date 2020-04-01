export default {
  appearance: {
    schema: {
      x_area: { type: "array" },
      z_area: { type: "array" },
      player_position: { type: "vec3" },
    },
    init: function() {
      console.log("initialization");
    }
  }
}
