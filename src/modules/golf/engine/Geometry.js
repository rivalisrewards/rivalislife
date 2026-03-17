export function angle(a,b,c){
  const ab=[a.x-b.x,a.y-b.y]
  const cb=[c.x-b.x,c.y-b.y]
  const dot=ab[0]*cb[0]+ab[1]*cb[1]
  const mag1=Math.hypot(...ab)
  const mag2=Math.hypot(...cb)
  return Math.acos(dot/(mag1*mag2))*180/Math.PI
}
