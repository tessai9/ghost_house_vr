import "aframe"

// eslint-disable-next-line no-undef
const AframeUtils = AFRAME.utils

// 実行環境の取得
export function isVrMode() {
  return AframeUtils.device.checkHeadsetConnected()
}
