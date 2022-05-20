function eachCons(array, n) {
  let resultado = []
  for (i=0; i <= array.length - n ; i++) {
    resultado.push(array.slice(i,n+i))
  }
  return resultado;
}
