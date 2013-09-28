(function (root) {

  Minesweeper = root.Minsweeper = (root.Minsweeper || {});

  var UI = Minsweeper.UI = function (board) {
    this.board = board;
    this.size = this.board.size;
  }

  UI.prototype.render = function () {
    var size = this.size;

    this.board._eachTile(function (tile) {

      if (tile.hidden) {
        $('#board').append("<div class='square hidden' id=" + tile.pos + "><div>");
      } else if (!tile.hidden && tile.bomb) {
        $('#board').append("<div class='square bomb' id=" + tile.pos + ">*<div>");
      } else if (!tile.hidden && tile.bombCount == 0) {
        $('#board').append("<div class='square empty' id=" + tile.pos + "><div>");
      } else if (!tile.hidden && tile.bombCount > 0) {
        $('#board').append("<div class='square number " + tile.bombCount + "' id=" + tile.pos + ">" + tile.bombCount +"<div>");
      }
    });
  }

})(this);