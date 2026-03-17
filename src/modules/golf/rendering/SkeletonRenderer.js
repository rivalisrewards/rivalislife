export function drawSkeleton(ctx,landmarks){
  const connections=[
    [11,13],[13,15],
    [12,14],[14,16],
    [11,12],
    [11,23],[12,24],
    [23,24],
    [23,25],[25,27],
    [24,26],[26,28]
  ]
  ctx.strokeStyle="lime"
  ctx.lineWidth=2
  connections.forEach(pair=>{
    const a=landmarks[pair[0]]
    const b=landmarks[pair[1]]
    ctx.beginPath()
    ctx.moveTo(a.x*640,a.y*480)
    ctx.lineTo(b.x*640,b.y*480)
    ctx.stroke()
  })
}
