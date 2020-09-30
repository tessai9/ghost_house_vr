import { ObjectType } from "./ObjectType.js"

export const StageList = [
  {
    StageNo: 1,
    MapInfo: [
      [0, 1, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0, 1, 0],
      [0, 1, 1, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 1, 1, 1, 0],
      [0, 0, 0, 9, 0, 0, 0],
    ],
    ObjectList: [
      {
        type: ObjectType.GHOST_2D,
        size: { width: 2, height: 3 },
        position: { x: 0, y: 2, z: -10 },
        rotation: { x: 0, y: 0, z: 0 },
        event_area: {
          x_area: [-2.5, 2.5],
          z_area: [-10, -8.5]
        },
        image_id: "#ghost_woman",
        sound_id: ["#ghost_voice_1"],
        aframe_component: ["appearance"],
      },
      {
        type: ObjectType.GHOST_2D,
        size: { width: 2, height: 3 },
        position: { x: 0.5, y: 2, z: -15 },
        rotation: { x: 0, y: 0, z: 0 },
        event_area: {
          x_area: [-2.5, 2.5],
          z_area: [-15, -13.5]
        },
        image_id: "#ghost_woman",
        sound_id: ["#ghost_voice_2"],
        aframe_component: ["appearance"],
      },
      {
        type: ObjectType.GHOST_2D,
        size: { width: 4, height: 6 },
        position: { x: 23, y: -8, z: -25 },
        rotation: { x: 0, y: -90, z: 0 },
        event_area: {
          x_area: [16, 25],
          z_area: [-30, -20]
        },
        image_id: "#ghost_woman",
        sound_id: "#ghost_scream_2",
        aframe_component: "below-to-up"
      }
    ]
  },
  {
    StageNo: 2,
    MapInfo: [],
    ObjectList: []
  },
  {
    StageNo: 3,
    MapInfo: [],
    ObjectList: []
  },
];
