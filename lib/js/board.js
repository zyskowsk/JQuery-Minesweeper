(function (root) {

  var Minesweeper = root.Minesweeper = (root.Minesweeper || {});

  var Board = Minesweeper.Board = function (size) {
    this.generate_bombs;
    this.size = size;
    this.board = [];
    this.buildBoard();
    this.populateBoard();
    this.addBombs();
  };

  Board.prototype.addBombs = function () {
    bombIndices = this._bombIndices();

    for(var i = 0, numBombs = bombIndices.length; i < numBombs; i++) {
      this.board[bombIndices[i]].toggleBomb();
    }
  }

  Board.prototype.buildBoard = function () {
    for(var i = 0, size = this.size; i < size; i++) {
      this.board.push(Array(size));
    }
  }

  Board.prototype.getPos = function (pos) {
    return this.board[pos.x][pos.y];
  } 

  Board.prototype.populateBoard = function () {
    var size = this.size;
    for(var i = 0; i < size; i++) {
      for(var j = 0; j < size; j++) {
        this.board[i][j] = new Minesweeper.Tile({'x' : i, 'y' : j}, this);
      }
    }
  }

  Board.prototype._bombIndices = function () {
    var bombIndices = [],
        numberOfTiles = Math.pow(this.size, 2), 
        numberOfBombs = Math.floor((15/4 * this.size) - 20);

    for(var i = 0; i < numberOfBombs; i++) {
      randomIndex = Math.floor(Math.random() * numberOfTiles );

      while (bombIndices.indexOf(randomIndex) != -1 ) {
        randomIndex = Math.floor(Math.random() * numberOfTiles );
      }

      bombIndices.push(randomIndex);
    }

    return bombIndices;
  }

})(this);