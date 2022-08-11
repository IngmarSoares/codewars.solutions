function magNumber(info){
  if (info[0]=="PT92"){
    return Math.ceil(info[1]*3/17)
  }else if (info[0]=="M4A1" || info[0]=="M16A2"){
    return Math.ceil(info[1]*3/30)
  }else if (info[0]=="PSG1"){
    return Math.ceil(info[1]*3/5)
  }
}
