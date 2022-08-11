function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
if (pontoonDistance/youSpeed < sharkDistance/sharkSpeed){
  return "Alive!"
}else if (dolphin == true && pontoonDistance/youSpeed < sharkDistance/(sharkSpeed/2)){
  return "Alive!"
} else return "Shark Bait!"
}
