// YOUR CODE BELOW
function onlyOne(a,b,c){
    if (a && !b && !c || !a && !b && c || !a && b && !c){
        return true;
    }
    else {
        return false;
    }
}

// if (a && !b && !c) {
//     return true;
//   }

//   if (!a && b && !c) {
//     return true;
//   }

//   if (!a && !b && sc) {
//     return true;
//   }

//   return false;