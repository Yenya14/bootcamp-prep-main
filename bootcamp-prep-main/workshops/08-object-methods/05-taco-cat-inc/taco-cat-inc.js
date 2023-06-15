let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0
};

// YOUR CODE BELOW
tacoCatInc.currentInventory = function(){
  let result = 0;
    for (let category in this){

    let items = this[category];

      for (let i in items){
        let itemObj= items[i];
        result = result + itemObj.cost * itemObj.quantity;
      }
      if (category === 'cash'){
        break;
      }
    }
    return result;
  }

tacoCatInc.sale= function(order){
  let newResult= 0;
  for (let category in order){
    let option= order[category];
      newResult = newResult + this[category][option].cost;
      this.cash = this.cash + this[category][option].cost;
      this[category][option].quantity--;
  }

return newResult;


}


// tacoCatInc.sale = function(order) {
//   let finalPrice = 0;

//   for (let category in order) {

//     let choice = order[category];

//     finalPrice += this[category][choice].cost;

//     this.cash += this[category][choice].cost;

//     this[category][choice].quantity--;
//   }

//   return finalPrice;
// }