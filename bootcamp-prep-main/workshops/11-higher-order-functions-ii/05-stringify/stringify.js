// YOUR CODE BELOW
function stringify(callback){
    return function newFunc(){
        let value = callback();
        return value.toString();
    }
}
