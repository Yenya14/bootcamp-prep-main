// YOUR CODE BELOW
function evenAndOdd(originalArray){
    let newArray=[[],[]];
    for(let i=0; i < originalArray.length; i++){
    let nums = originalArray[i];
        if(originalArray[i]%2 == 0){
        newArray[0].push(nums)}
        else{
            newArray[1].push(nums)
        }
    }
    return newArray;
}