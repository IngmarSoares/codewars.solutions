function consecutive(arr, a, b) {
  let respo = false
  for (i=1 ; i <= arr.length ; i++){
    if ((arr[i] == a && arr[i-1] == b) || (arr[i] == b && arr[i-1] == a)) {
      respo = true}
    }
  return respo
  }
