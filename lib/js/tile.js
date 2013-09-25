(function (root) {

  var Minesweeper = root.Minesweeper = (root.Minesweeper || {});

  var Tile = Minesweeper.Tile = function (pos, board) {
    this.pos = pos;
    this.board = board;
    this.neighborPositions = this.findNeighborPositions();
    this.flagged = false;
    this.bomb = false;
    this.hidden = true;
    this.bombNumber = 0;
  }

  Tile.Compass = [
    { 'x' : 1, 'y' : 0 },
    { 'x' : 1, 'y' : 1 },
    { 'x' : 1, 'y' : -1 },
    { 'x' : -1, 'y' : 0 },
    { 'x' : -1, 'y' : 1 },
    { 'x' : -1, 'y' : -1 },
    { 'x' : 0, 'y' : 1 },
    { 'x' : 0, 'y' : -1 }
  ];

  Tile.prototype.findNeighborPositions = function () {
    var neighborPositions = []

    for(var i = 0; i < 8; i++) {
      var dir = Tile.Compass[i],
          newX = this.pos.x + dir.x, 
          newY = this.pos.y + dir.y
          isOnBoard = ( 0 <= newX && newX < this.board.size &&
                          0 <= newY && newY < this.board.size )

      if (isOnBoard) {
        neighborPositions.push({ 
          'x' : this.pos.x + dir.x, 
          'y' : this.pos.y + dir.y 
        });
      }
    }

    return neighborPositions;
  }
  
})(this);