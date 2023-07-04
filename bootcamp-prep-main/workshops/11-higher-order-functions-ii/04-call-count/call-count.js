// YOUR CODE BELOW
function callCount(count=0){
    // let count=0;
     return function(){
        count++;
        return count;
    };    
}
