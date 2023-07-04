// YOUR CODE BELOW
function deeperCopy(array){
    let copyArray = [];
    
    for (let i = 0; i < array.length; i++){
      let element = array[i];
      if (Array.isArray(element)){
        let nestedArray = [];
        for (let j = 0; j < element.length; j++){
          let nestedElement = element[j];
          nestedArray.push(nestedElement);
        } copyArray.push(nestedArray);
      } else {
        copyArray.push(element);
      }
    }
    return copyArray;
  }