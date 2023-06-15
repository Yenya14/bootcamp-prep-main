// YOUR CODE BELOW
let ticTacToe = {
    board:[
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ],


    move: function(character, rowNums, rowColumns){
        if(this.board[rowNums][rowColumns]===null){
            this.board[rowNums][rowColumns]= character;
        }
        return this.board;
    },

    clear: function(){
        this.board=[
            [null,null,null],
            [null,null,null],
            [null,null,null]
    
        ]
        return this.board;
    }
    

  }























  
//   move : function(char, x, y){
//     if (this.board[x][y]===null){
//       this.board[x][y] = char;
//     }
//     return this.board;
//   },
  
//   clear : function(){
//     this.board = [
//     [null, null, null], 
//     [null, null, null], 
//     [null, null, null]
//   ]
//     return this.board;
//   }
  
  