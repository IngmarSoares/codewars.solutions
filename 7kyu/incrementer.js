function incrementer (nums){
    let result = []
    for (i=0; i <= nums.length-1 ; i++){
      if (nums[i] + i + 1 < 10) {result.push(nums[i] + i + 1)}
      if (nums[i] + i + 1 > 9 && nums[i] + i + 1 < 100) {
        let parteDecimal = 0
        parteDecimal = Number((nums[i] + i + 1).toString().split('')[(nums[i].toString()).length])
        result.push(parteDecimal)}
      
    }
    return result
}