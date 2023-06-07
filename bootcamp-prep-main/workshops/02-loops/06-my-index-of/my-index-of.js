// YOUR CODE BELOW
debugger;
function myIndexOf(source, searchValue, startIdx){
    if(startIdx === undefined){
       startIdx = 0;
    }
    for(let i = startIdx; i <= source.length; i++){
      currentTerm = source.slice(i, i+searchValue.length) 
         if(searchValue === currentTerm){
            return i;
         }}
    
         return -1;
  }

console.log(myIndexOf('hello', 'o'))
console.log(myIndexOf('hello', 'i'))
