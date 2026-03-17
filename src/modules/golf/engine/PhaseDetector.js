export function detectPhases(landmarks){
  const length=landmarks.length
  return{
    address:0,
    backswing:Math.floor(length*0.25),
    top:Math.floor(length*0.45),
    downswing:Math.floor(length*0.6),
    impact:Math.floor(length*0.75),
    followthrough:length-1
  }
}
