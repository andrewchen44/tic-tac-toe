var prompt = require('readline-sync');

var Game = function() {
  this.board = [[1, 1, 1], [1, 1, 1], [1, 1, 1]],
  this.player = 'x',
  this.moves = 0;
}

Game.prototype.placeTile = function(row, col) {
  if(this.checkMove) {
    this.board[row][col] = this.player;
    this.moves++;
  } else {
    console.log('Invlaid move, please place tile at a different location.');
  }
}

Game.prototype.switchPlayer = function() {
  if(this.player === 'x') {
    this.player = 'o';
  } else {
    this.player = 'x';
  }
}

Game.prototype.checkMove = function(row, col) {
  if(this.bowarad[row][col] === 1) {
    return false;
  } else {
    return true;
  }
}

Game.prototype.start = function(){
  let board = 
}

//check if valid move method

//

