// YOUR CODE BELOW
function chainReaction (startVal, arrOfFuncs) {
    
    // for loop version
    for (let i = 0; i < arrOfFuncs.length; i++) {
      let curFunc = arrOfFuncs[i];
      let curVal = curFunc(startVal);
      startVal = curVal;
    }
      return startVal;
  }