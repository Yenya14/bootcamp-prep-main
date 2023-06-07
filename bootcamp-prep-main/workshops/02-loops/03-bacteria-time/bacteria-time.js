// YOUR CODE BELOW
debugger;
function bacteriaTime(currentNum, targetNum) {
    let minutes = 0;
  
    if (targetNum < currentNum) {
      return 'targetNum must be larger than currentNum';
    } else {
      for (let i = currentNum; i < targetNum; i *= 2) {
        minutes += 20
    
      }
      return minutes;
    }
  }
bacteriaTime(1,8);