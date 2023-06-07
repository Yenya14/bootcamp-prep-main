// YOUR CODE BELOW
function isTruthy(value){
    if(value){
        return true;
    }
    if(value==='true'){
        return true;
    }
     if(value===false){
        return 'The boolean value false is falsey';
    }
     if(value===null){
        return 'The null value is falsey';
    }
     if(value===undefined){
        return 'undefined is falsey';
    }
     if(value===0){
        return 'The number 0 is falsey (the only falsey number)';
    }
     (value==="")
        return 'The empty string is falsey (the only falsey string)';
    
    

}
// function isTruthy(value) {

//     if (value) {
//       return true;
//     }
  
//     switch(value){
//     case false:
//         return 'The boolean value false is falsey';

//     case null:
//         return 'The null value is falsey';
  
//     case undefined:
//         return 'undefined is falsey';
  
//     case 0:
//         return'The number 0 is falsey (the only falsey number)';

//     case '': 
//       return 'The empty string is falsey (the only falsey string)';
  
//     default:
//     return 'NaN is falsy';
//   }
// 'The boolean value false is falsey'
// 'The null value is falsey'
// 'undefined is falsey'
// 'The number 0 is falsey (the only falsey number)'
// 'The empty string is falsey (the only falsey string)'