const findMissingLetter = (array) => {
  // we can skip the 1st letter
  for (let i = 1; i < array.length; i++) {
    // get the char code of the previous letter
    const prev = array[i - 1].charCodeAt();
    // get the char code of the current letter
    const current = array[i].charCodeAt();
    
    if (current - prev !== 1) { // if the difference between current and previous is not 1
      // get the character after the previous 
      return String.fromCharCode(prev + 1);
    }
  }
  
  return null; // if nothing is found
}
