var countSheep = function (num){
  let result = ""
  if (num == 0) {return result}
  else {
  for (i=1; i <= Math.abs(num); i++){
    result += `${i} sheep...` 
  }
  return result
  }
}