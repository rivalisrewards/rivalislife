export function calculateVelocity(landmarks){
  let speed=0
  for(let i=1;i<landmarks.length;i++){
    const dx=landmarks[i][15].x-landmarks[i-1][15].x
    const dy=landmarks[i][15].y-landmarks[i-1][15].y
    speed+=Math.sqrt(dx*dx+dy*dy)
  }
  return speed
}
