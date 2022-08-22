let number = arr => {
  let total = 0
  arr.forEach (el => {
    total += el[0] - el[1]
  })
  return total
}
