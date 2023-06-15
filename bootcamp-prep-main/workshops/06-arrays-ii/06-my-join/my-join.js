// YOUR CODE BELOW
function myJoin(array, separator) {
    if (separator === undefined) {
      separator = ",";
    }
  
    let joinedString = '';
  
    for (let i = 0; i < array.length; i++) {
      let element = array[i];
  
      if (i !== 0) {
        joinedString = joinedString + separator;
      }
  
      if (element !== undefined && element !== null) {
        joinedString = joinedString + element;
      }
    }
  
    return joinedString;
  }
  