function stringClean(s){
  /*let sA = s.split("")
  let sAF = []
  for (i=0;i<sA.length;i++) {
    if (isNaN(sA[i]) || (sA[i] == ' ')) {
      sAF.push(sA[i])
    }
  }
  return sAF.join("")*/
  
  return s.split("").filter(str => isNaN(str) || (str == ' ')).join("")

  
}
