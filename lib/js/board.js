(function (root) {

  var Minesweeper = root.Minesweeper = (root.Minesweeper || {});

  var Board = Minesweeper.Board = function (size) {
    this.generate_bombs;
    this.size = size;
  }

  Board.prototype.generate_bombs = fucntion () { 
    var size = this.size;
    var bombs = [];
    for(var i = 0; i < size; i++) {
      for(var i = 0; i < size; i++) {
        //TODO: implement after tile class
      }
    }
  }

})(this)