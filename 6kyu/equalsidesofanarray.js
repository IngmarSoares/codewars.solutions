function findEvenIndex(arr){
  if (arr.length == 0) return -1
  if (arr.slice(1).reduce((a,b) => a + b,0) === 0) {return 0} 
  if (arr.slice(0,-1).reduce((a,b) => a + b,0) === 0) {return arr.length-1} 
  let n = 1
  while (n < arr.length-1) {
    if ((arr.slice(0,n).reduce((a,b) => a+b,0)) === (arr.slice(n+1).reduce((a,b) => a+b,0))) {return n}
    n++
  }
  return -1
}
