export function generateFeedback(metrics,tempo,separation){
  const tips=[]
  if(metrics.spineTilt>45){
    tips.push("Reduce spine tilt at the top of the backswing")
  }
  if(metrics.hipRotation<30){
    tips.push("Increase hip rotation during backswing")
  }
  if(tempo.ratio<2){
    tips.push("Slow down backswing to improve tempo")
  }
  if(separation<10){
    tips.push("Improve shoulder-hip separation")
  }
  return tips
}
