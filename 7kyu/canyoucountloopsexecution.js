function countLoopIterations(arr) {
  
// Create a new array of initial iterations
  let nums = arr.map(x => x[1]? BigInt(x[0]) + 2n : BigInt(x[0]) + 1n )
  
// Create a new array of post iterations
  let nums2nd = nums.map(x => x - 1n)
  
//Create the answer array
  let looped =[]
  
//Loop iterating the nums array
  for (i=0; i<nums.length ; i++) {
    
    // initial num is always the initial iteration
    if (i == 0) { looped.push(BigInt(nums[i]))}
    
    // on the second number, we need to mix both num and num2nd arrays, but still canoot use reduce method (empty array).
    else if (i == 1) {looped.push(BigInt(nums[i]) * BigInt(nums2nd[i-1]))}
    
    // starting on third iteration of loop we can use reduce on nums2nd 
    //(remember that only in the first iteration we use nums, then we use nums2nd) 
    else { looped.push( BigInt(nums2nd.slice(0,i).reduce((curr,acc)=> curr * acc)) * BigInt(nums[i])

    )
    }
  }
return looped
}
