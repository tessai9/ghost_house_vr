<template lang="html">
    <a-entity 
        id="rig" 
        :position="cameraPosition"
        @mouseup="onClick"
    >
        <a-camera
            id="camera"
            look-controls
            wasd-controls="acceleration: 1000" 
            rotation-reader>
            <a-entity cursor="fuse: true; fuseTimeout: 50"
                position="0 0 -1"
                geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
                material="color: red; shader: flat"
                cursor-listener>
            </a-entity>
        </a-camera>
    </a-entity>
</template>

<script>
    import aframe from "aframe"
    // cameraの位置情報を逐次取得
    aframe.registerComponent('rotation-reader', {
        tick: function () {
            // `this.el` is the element.
            // `object3D` is the three.js object.
            // `rotation` is a three.js Euler using radians. `quaternion` also available.
            //console.log(this.el.object3D.rotation);
            // `position` is a three.js Vector3.
            //console.log(this.el.object3D.position);
        }
    });
    // クリックでカーソルの色を変更(aframeのentityにイベント付与)
    aframe.registerComponent('cursor-listener', {
        init: function () {
                var lastIndex = -1;
                var COLORS = ['red', 'green', 'blue'];
                this.el.addEventListener('mouseup', function (evt) {
                    lastIndex = (lastIndex + 1) % COLORS.length;
                    this.setAttribute('material', 'color', COLORS[lastIndex]);
                    console.log('I was clicked at: ', evt.detail.intersection.point);
            });
        }
    });
    export default {
        name: 'Player',
        props: {
            position: {
                type: Object,
                required: false,
                default: () => ( {x:0, y: 0, z:1} )
            }
        },
        data() {
            return {
                localPosition: {
                    x : this.position.x,
                    y : this.position.y,
                    z : this.position.z
                }
            }
        },
        computed: {
            cameraPosition () {
                const pos = this.localPosition
                return `${pos.x} ${pos.y} ${pos.z}`
            }
        },
        methods: {
            onClick() {
                this.localPosition.y += 0.1
            }
        }
    }
</script>

<style lang="css" scoped>
</style>