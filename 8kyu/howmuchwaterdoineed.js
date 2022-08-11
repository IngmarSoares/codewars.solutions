function howMuchWater(water, load, clothes){
  if (2 * load < clothes) {return 'Too much clothes'}
  if (clothes < load) {return 'Not enough clothes'}
  return (Math.round(water * (1.1**(clothes-load))*100)/100)
  
}
