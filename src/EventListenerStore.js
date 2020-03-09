export default {
  appearance: {
    tick: function() {
      if (this.data.event_area.x_area[0] <= this.data.player_position.x &&
          this.data.event_area.x_area[1] >= this.data.player_position.x &&
          this.data.event_area.z_area[0] <= this.data.player_position.z &&
          this.data.event_area.z_area[1] >= this.data.player_position.z
      ) {
        this.is_display = true;
      } else {
        this.is_display = false;
      }
    }
  }
}
