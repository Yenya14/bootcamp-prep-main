// YOUR CODE BELOW
// function lastFridayNight(trans){
//     let totalAmount = 0;
//   for (i=0; i< trans.length; i++){
//     const {amount} = trans[i];
//     totalAmount += amount;
//   }
//   return totalAmount;
//   }

  function lastFridayNight(trans) {
    let sum = 0;
    for (let i = 0; i < trans.length; i++) {
      let element = trans[i];
      sum += element.amount;
    }
    return sum;
  }