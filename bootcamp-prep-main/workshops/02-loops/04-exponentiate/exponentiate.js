// YOUR CODE BELOW
debugger;
function exponentiate(base,power) {
    if(power===0){
      return 1;
    }
    else{
    let result=base
    for (let i=1 ; i<power; i++) {
      result*=base; 
    }
    return result;
    }
  }
console.log(exponentiate(2,3))