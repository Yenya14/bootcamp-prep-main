// YOUR CODE BELOW
function frequencyAnalysis(str){
    let charCount = {};
    for(let i = 0; i < str.length; i++){
      let currentChar = str[i];
      if(!charCount[currentChar]){
        charCount[currentChar] = 1;
      } else {
        charCount[currentChar]++;
      }
    }
    return charCount;
  }