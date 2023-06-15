// YOUR CODE BELOW
function mySlice(originalArray, startIdx, endIdx){
    let sliceIdx = [];
    if (startIdx === undefined){
      startIdx = 0;
    } else if(startIdx < 0) {
      startIdx = originalArray.length + startIdx;
    }
    
    if (endIdx === undefined) {
      endIdx = originalArray.length;
    } else if (endIdx < 0) {
      endIdx = originalArray.length + endIdx;
    }
    
    for(let i = startIdx; i < endIdx; i++){
      let currentElement = originalArray[i];
      sliceIdx.push(currentElement);
    }
    return sliceIdx;
  }
  