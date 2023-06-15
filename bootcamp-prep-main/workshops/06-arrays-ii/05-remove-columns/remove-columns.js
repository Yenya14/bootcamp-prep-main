// YOUR CODE BELOW
// function removeColumns(grid, numColumns) {
//     for (let row of grid) {
//       row.splice(-numColumns);
//     }
//     return grid;
//   }

function removeColumns(grid, numColumns) {
    let newGrid = [];
    for (let i = 0; i < grid.length; i++) {
      let newRow = [];
      for (let j = 0; j < grid[i].length - numColumns; j++) {
        newRow.push(grid[i][j]);
      }
      newGrid.push(newRow);
    }
    return newGrid;
  }
  
  