function persistence(num) {
     if (num.toString().length == 1) {return 0 } 
    let newNum = num
    let total = 1
    for (i=1; ; i++){
        newNum.toString().split('').map(function(x){
            total *= x
        })
        if (total.toString().length == 1) {return i }
        else {
            newNum = total
            total = 1}
    }
    }