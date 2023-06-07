// YOUR CODE BELOW
debugger;
function mySlice (oString, sIndx, eIndx) {
    let newString=''
    
    if (sIndx===undefined && eIndx===undefined) {
      return oString;
    }
    
    if (sIndx !== undefined && eIndx===undefined) {
      for (let i=sIndx; i<oString.length; i++) {
        newString += oString[i]
      }
      return newString;
    }
    
    if (sIndx !== undefined && eIndx !==undefined) {
      for (let i=sIndx; i<eIndx; i++) {
        newString += oString[i]
      }
      return newString;
  }
  }
console.log(mySlice('slice and dice', 2,5))