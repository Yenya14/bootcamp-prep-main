// YOUR CODE BELOW
function rotateArray(originalArray, rotateNum) {
    let front = originalArray.slice(-rotateNum);
    let end = originalArray.slice(0, -rotateNum);
    let rotatedArray = front.concat(end);
       return rotatedArray;
  }