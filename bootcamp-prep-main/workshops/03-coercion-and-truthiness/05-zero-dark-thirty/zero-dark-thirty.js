// YOUR CODE BELOW
debugger;
function zeroDarkThirty(num){
    let stringNum = num.toString();
    let zerolessString = '';

    for(let i=0; i<stringNum.length; i++){
        let theDigit = stringNum[i];
        if (theDigit !=='0'){
            zerolessString = zerolessString + theDigit;
        }
    }
    return parseFloat(zerolessString);
}
console.log(zeroDarkThirty(506094));