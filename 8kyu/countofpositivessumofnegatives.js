function countPositivesSumNegatives(input) {
  let result = [0,0]
  if (input === null || input.length < 1) {return []}
  for (i=0 ; i < input.length ; i++) {
    if (0 - input[i] > 0) {
      result[1] += input[i]
    } else if (0 - input[i] < 0) {
      result[0] += 1
    }
  }
  return result
}
