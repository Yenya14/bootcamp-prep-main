// YOUR CODE BELOW

function compareObjects(arg1, arg2) {
    let obj1 = Object.keys(arg1);
    let obj2 = Object.keys(arg2);
  
    if (obj1.length !== obj2.length) {
      return false;
    }
  
    for (let i = 0; i < obj1.length; i++) {
      let key = obj1[i];
      if (arg1[key] !== arg2[key]) {
        return false;
      }
    }
  
    return true;
  }





// not right
// function compareObjects(arg1,arg2){
//     let key1=Object.keys(arg1)
//     let key2=Object.keys(arg2)
//     if (key1 !== key2){
//     return false}
//     else;
//     return true; 
//   }


//right
// function compareObjects(arg1,arg2){
//     for (let key in arg1){
//       if(arg1[key] !== arg2[key]){
//         return false;
//       }  
//     }
//     for (let key in arg2){
//       if(arg1[key] !== arg2[key]){
//         return false;
//       }
//     }
//     return true;
//   }