function growingPlant(upSpeed, downSpeed, desiredHeight) {
let actualHeight = 0
for ( i=1; ; i++){
  actualHeight += upSpeed
  if (actualHeight >= desiredHeight) {return i} 
  actualHeight -= downSpeed
}
}