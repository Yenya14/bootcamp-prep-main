// YOUR CODE BELOW

function veryOdd(arr){
    let oddArr = [];
    let allNums = arr.slice();
    
    for (let i = 0; i < allNums.length; i++){
      if (allNums[i] %2 === 1){
        oddArr.push(allNums[i])
        
      }
    }
    return oddArr
  }