export function calculateScore(metrics,tempo,separation){
  let score=100
  if(metrics.spineTilt>45) score-=15
  if(metrics.hipRotation<30) score-=15
  if(tempo.ratio<2) score-=10
  if(separation<10) score-=10
  return Math.max(score,0)
}
