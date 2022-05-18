function spinningRings(innerMax, outerMax) {
  let inner = 0 
  let outer = 0 
  function decInner(){
    inner--
    if (inner < 0) {inner = innerMax} 
  }
  function incOuter(){
    outer++
    if (outer > outerMax) {outer = 0} 
  }
  
  for (i=1; ;i++){
  decInner()
  incOuter()
    if (outer == inner){
      return i
    }
  }
}