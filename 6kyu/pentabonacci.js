function countOddPentaFib(n) {
let sucession = [0,1,1,0,0]
for (i=0;sucession.length <= n; i++){ 
  if((sucession[sucession.length -1] + sucession[sucession.length -2] + sucession[sucession.length -3] + sucession[sucession.length -4] + sucession[sucession.length -5])%2 !== 0){
  sucession.push (1)}
  else sucession.push(0)}
    let oddsArray = sucession.filter(x => x%2 !== 0)
  return oddsArray.length - 1
}
