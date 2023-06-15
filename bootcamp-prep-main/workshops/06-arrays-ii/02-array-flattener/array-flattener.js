// YOUR CODE BELOW
function arrayFlattener(twoDimArray){
    let flatArray = [];
    
    for (i = 0 ; i < twoDimArray.length; i++) {
      let element = twoDimArray[i];
      
      if (Array.isArray(element)) {
        flatArray = flatArray.concat(element);
      }
      else {
         flatArray.push(element);
      }
    }
    return flatArray;
}