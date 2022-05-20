function mergeArrays(arr1, arr2) {
  let newarray = arr1.concat(arr2)
  let uniqueChars = [...new Set(newarray)]
  return  uniqueChars.sort((a,b)=>a-b)
}
