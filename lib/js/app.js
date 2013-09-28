$(function () {
 
  function startGame() {
    board = new Minesweeper.Board(8),
    ui = new Minesweeper.UI(board);

    ui.clearBoard();
    ui.render();
  }

  startGame();

  $('#board').on("click", function (event) {
    ui.clearBoard();

    if (event.shiftKey) {
      ui.addFlag(event);
    } else {
      ui.clickTile(event);
    }
  });

  $('#board').on("click", function (event) {
    if (event.shiftKey) {
      console.log("hello");
    }
  });

  $('#restart').on("click", function () {
    startGame();
  });

  $('#peek').on("click", function () {
    ui.clearBoard();

    board.eachTile(function (tile) {
      tile.togglePeek();
      console.log(tile.peek);
    });

    ui.render();
  });

});