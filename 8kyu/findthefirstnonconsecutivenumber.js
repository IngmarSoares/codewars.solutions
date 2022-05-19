function firstNonConsecutive (arr) {
    for (i=0; i< arr.length; i++){
      if (i == 0) {continue; }
      else if ((arr[i-1] + 1) !== arr[i]){
        return arr[i]; 
      } else if (i == arr.length -1) {return null}
    }
  }
