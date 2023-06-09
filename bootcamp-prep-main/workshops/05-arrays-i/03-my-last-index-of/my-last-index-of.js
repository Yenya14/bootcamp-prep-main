// YOUR CODE BELOW
function myLastIndexOf(array, searchValue, startIdx){
    if(startIdx===undefined){
        startIdx=array.length-1;
    }
    for(let i=startIdx;i>=0;i--){
        let ele=array[i];
        if(ele===searchValue){
            return i;
        }

    }
    return -1;


}
// function myLastIndexOf(array,searchValue,startIdx)
// {
//     if(startIdx===undefined){
//         startIdx=array.length-1;
//     }
//     for(let i=startIdx; i>=0 ;i--){
//         let ele=array[i];
//         if(ele===searchValue)
//         {
//             return i;
//         }
//     }
// return -1;
// }