// YOUR CODE BELOW
function myForEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
      currentElement = array[i];
      callback(currentElement, i);
    }
  }