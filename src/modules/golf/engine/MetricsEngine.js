import { angle } from "./Geometry"

export function calculateMetrics(landmarks,phases){
  const top=landmarks[phases.top]
  const hipRotation=angle(top[11],top[23],top[25])
  const spineTilt=angle(top[11],top[23],top[24])
  return{
    hipRotation,
    spineTilt
  }
}
