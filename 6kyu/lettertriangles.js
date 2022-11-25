function triangle(row) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  rowArrNums = row.split('').map((x)=> alphabet.indexOf(x)+1 )
  let newRowArrNums = []
  function sum(a,b){
    let c = a + b
    if (c > 26) { c = c-26}
    return c
  }
  while (rowArrNums.length > 0) {
    if (rowArrNums.length == 1) {return alphabet[rowArrNums[0]-1]}
    for (i=0;i<rowArrNums.length-1;i++){
      newRowArrNums.push(sum(rowArrNums[i],rowArrNums[i+1])) 
    }
    rowArrNums = newRowArrNums
    if (rowArrNums.length == 1) {return alphabet[rowArrNums[0]-1]}
    newRowArrNums = []
  }
}
