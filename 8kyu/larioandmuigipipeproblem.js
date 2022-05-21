function pipeFix(numbers){
  let maxNum = Math.max(...numbers)
  let minNum = Math.min(...numbers)
  let result =[]
  for (i=minNum;i<=maxNum;i++){
    result.push(i)
  }
  return result
}
