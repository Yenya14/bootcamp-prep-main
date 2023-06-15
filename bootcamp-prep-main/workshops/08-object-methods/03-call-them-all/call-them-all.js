// YOUR CODE BELOW
function callThemAll(object, value){
    let result = [];
    for(let key in object){
        if (typeof object[key] === "function"){
        result.push(object[key](value));
    }}
    
    return result;
}

