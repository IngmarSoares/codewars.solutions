function dup(s) {
  return s.map(x => {
    let prev
    return x.split('').filter(y => {
      if(y !== prev) {
        prev = y
        return y}
    }).join('')
  })
};
