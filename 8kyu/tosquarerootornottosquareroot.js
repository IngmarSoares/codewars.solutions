let squareOrSquareRoot = (array) => array.map(function (x) {
  if (Math.sqrt(x) - Math.round(Math.sqrt(x)) == 0) {
      return Math.sqrt(x) }
      else return x*x }) 
