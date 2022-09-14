function productFib(prod){
  let fibSec = [0,1]
  for (i=2;i<=50;i++){
    fibSec.push(fibSec[i-2]+fibSec[i-1])
  }
  let fibProdSec = []
  for (i=1;i<fibSec.length;i++){
    fibProdSec.push(fibSec[i]*fibSec[i-1])
  }
  let ind = fibProdSec.findIndex(el => el >= prod)
  if (fibProdSec.includes(prod)){
    return [fibSec[ind],fibSec[ind+1],true]
  } else {
    return [fibSec[ind],fibSec[ind+1],false]
  }
}