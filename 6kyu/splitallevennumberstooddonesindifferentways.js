function splitAllEvenNumbers(numbers, way){
    function pushXTimes (num,times){
        for (i=0;i<times;i++){
            sol.push(num)
        }
    }
    function maxDiv (num){
        let div = 1
        for (i=1;i<=num;i+=2){
            if (num%i == 0) {div = i}
        }
        let times = num/div
        pushXTimes(div,times)
    }
    let sol = []
    if (way == 0){
        numbers.forEach(element => {
            (element % 2 == 0 )? (element/2 %2 == 0? (sol.push(element/2 -1), sol.push(element/2 +1)) : pushXTimes(element/2,2)) : sol.push(element)
        });
    } else if(way == 1) {
        numbers.forEach(element => {
            (element % 2 == 0 )? (sol.push(1), sol.push(element-1)) : sol.push(element)
    });
    } else if(way == 2) {
        numbers.forEach(element => {
            (element % 2 == 0 )? (element/2 %2 == 0? (maxDiv(element)) : pushXTimes(element/2,2)) : sol.push(element)
    });
    } else if(way == 3) {
        numbers.forEach(element => {
            (element % 2 == 0 )? pushXTimes(1,element) : sol.push(element)
    });
    
}
  return sol}
