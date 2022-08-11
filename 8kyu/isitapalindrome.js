function isPalindrome(x) {
  let lowX = x.toLowerCase()
  let arrLowX = lowX.split("")
  let revArrLowX = arrLowX.reverse()
  let revLowX = revArrLowX.join("")
  for(i=0; i<lowX.length;i++){
    if (lowX[i] !== revLowX[i]){ return false}
  }
  return true
}
