function symmetricPoint(p, q) {
  let p1 = []
  if (p[0] > q[0]){
  p1[0] = q[0] - Math.abs(p[0] - q[0])
  } else {p1[0] = q[0] + Math.abs(p[0] - q[0])}
  if (p[1] > q[1]){
  p1[1] = q[1] - Math.abs(p[1] - q[1])
  } else {p1[1] = q[1] + Math.abs(p[1] - q[1])}
  return p1
}
