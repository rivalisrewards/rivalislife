export function calculateTempo(phases){
  const backswing=phases.top-phases.address
  const downswing=phases.impact-phases.top
  return{
    ratio:backswing/downswing
  }
}
