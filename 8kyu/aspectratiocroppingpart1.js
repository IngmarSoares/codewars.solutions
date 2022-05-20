function aspectRatio(x,y){
  if (x/y > 1.77 && x/y < 1.78) {
    return `x = ${x}, y = ${y}`
  } else return [ Math.round(Math.ceil(y*16/9)), y ]
}
