(function (root) {

  var Minesweeper = root.Minesweeper = (root.Minesweeper || {});
 

  var Board = Minesweeper.Board = function (size) {
    this.size = size;
    this.board = this.buildBoard();
    this.populateBoard();
    this.addBombs();
  };

  Board.prototype.addBombs = function () {
    var that = this;
    var bombPositions = this._bombPositions();

    Minesweeper.Utilities.each(bombPositions, function (pos) {
      that.getTile(pos).toggleBomb();
    });
  }

  Board.prototype.buildBoard = function () {
    var board = [];
    for(var i = 0, size = this.size; i < size; i++) {
      board.push(Array(size));
    }

    return board;
  }

  Board.prototype.getTile = function (pos) {
    return this.board[pos[0]][pos[1]];
  } 

  Board.prototype.populateBoard = function () {
    var size = this.size;
    for(var i = 0; i < size; i++) {
      for(var j = 0; j < size; j++) {
        this.board[i][j] = new Minesweeper.Tile([i,j], this);
      }
    }
  }

  Board.prototype._bombPositions = function (){
    var size = this.size,
        bombPositions = [];

    for(var i = 0, numBombs = this._numBombs(); i < numBombs; i++){
      var randomPos = this._randomPos();

      while (Minesweeper.Utilities.includesArray(bombPositions, randomPos)){
        randomPos = this._randomPos();
      }

      bombPositions.push(randomPos);
    }

    return bombPositions;
  }

  Board.prototype._numBombs = function () {
    return Math.floor((15/4 * this.size) - 20);
  }

  Board.prototype._randomPos = function () {
    var i = Math.floor(Math.random() * this.size),
        j = Math.floor(Math.random() * this.size);

    return [i,j];
  }


})(this);