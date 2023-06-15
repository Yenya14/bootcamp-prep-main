// YOUR CODE BELOW
function makeGrid(x,y){
    let grid = [];
    for(let i = 0; i < y; i++){
      let row = [];
      for(let j = 1; j<= x; j++){
        row.push(j);
      }
      grid.push(row);
    }
    return grid;
  }