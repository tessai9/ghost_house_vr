export default {
  ghost_list:[
    {
      no: 1,
      image_id: "#ghost_woman",
      size: { width: 2, height: 3 },
      position: { x: 0, y: 2, z: -10 },
      event_area: {
        x_area: [-2.5, 2.5],
        z_area: [-10, -8.5]
      },
      sound_id: "#ghost_voice_1",
      aframe_component: "appearance"
    },
    {
      no: 2,
      image_id: "#ghost_woman",
      size: { width: 2, height: 3 },
      position: { x: 0.5, y: 2, z: -15 },
      event_area: {
        x_area: [-2.5, 2.5],
        z_area: [-15, -13.5]
      },
      sound_id: "#ghost_voice_2",
      aframe_component: "appearance"
    },
    {
      no: 3,
      image_id: "#ghost_woman",
      size: { width: 2, height: 3 },
      position: { x: 0, y: 2, z: -20 },
      event_area: {
        x_area: [-2.5, 2.5],
        z_area: [-20, -18.5]
      },
      sound_id: "#ghost_scream_2",
      aframe_component: "below-to-up"
    }
  ]
}
