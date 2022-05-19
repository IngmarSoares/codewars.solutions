function powersOfTwo(n = 0){
  const powersOf2 = [];
  if (n < 0) { return};
  for (i = 0; i <= n ; i++){
   powersOf2.push(2 ** i);
  }
  return (powersOf2);
};