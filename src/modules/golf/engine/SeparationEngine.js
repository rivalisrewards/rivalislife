import { angle } from "./Geometry"

export function calculateSeparation(landmarks,phases){
  const impact=landmarks[phases.impact]
  const shoulder=angle(impact[11],impact[12],impact[24])
  const hips=angle(impact[23],impact[24],impact[25])
  return shoulder-hips
}
