function stringy(size) {
  let str = ""
  for (i=0;i<size;i++){
    if (i % 2 == 0){
      str += "1"
    }
    else {
      str += "0"
    }
  }
  return str
}
