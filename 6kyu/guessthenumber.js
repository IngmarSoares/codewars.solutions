Guesser.prototype.getNumber = function() {
   let min =1
  let max =1001

  for ((i=(min+max)/2);min < max;i=Math.floor((min+max)/2)){

  const sol = this.guess(i)
  if (sol == 'Correct!') {return i}
  if (sol == 'Too high!') { max = i }
  else { min = i}
  }
};
