function solution (roman) {
   let num = roman.split('').map(x => {
    switch (x) {
      case 'I': return 1
      break
      case 'V': return 5
      break
      case 'X': return 10
      break
      case 'L': return 50
      break
      case 'C': return 100
      break
      case 'D': return 500
      break
      case 'M': return 1000
      break
    } 
  }).reverse()
  let answer = 0
  for (i=0; i<num.length ; i++) {
    
    if (num[i] < num[i+1]) {
      answer += num[i]}
    else if (num[i] > num[i+1]) {
      answer += num[i] - num[i+1]
      i++}
    else if (num[i] == num[i+1] && num[i+1] == num[i+2] && num[i+2] < num[i+3] && num[i+3] < num[i+4]){
      answer += num[i] + num[i+1] + num[i+2] + num[i+3]
      i += 3
    }
    else if (num[i] == num[i+1] && num[i+1] < num[i+2] && num[i+2] < num[i+3]){
      answer += num[i] + num[i+1] + num[i+2]
      i += 2
    }
    else if (num[i] == num[i+1] && num[i+1] < num[i+2]){
      answer += num[i] + num[i+1] 
      i ++
    }
  
    else if (i == num.length -1) {answer += num[i]}

    else answer += num[i]
  }
  return answer ;
}
