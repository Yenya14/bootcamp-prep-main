// YOUR CODE BELOW
function oddCouple(num){

    let aNum=[];
    for(let i=0;i<num.length;i++){
        if(num[i]%2===1){
            aNum.push(num[i])
        
        if(aNum.length===2){
            break;
        }
    }
}

return aNum;
}

// function oddCouple(num){
//     let aNum=[];
        
//     for(let i=0; i<num.length; i++)
//     {
//         if(num[i]%2===1)
//         {
//             aNum.push(num[i])
//                 if(aNum.length===2)
//                 {
//                     break;
//                 }
            
//         }
//     }
//     return aNum;
    
//     }

