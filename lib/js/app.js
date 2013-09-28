$(function () {
  var board = new Minesweeper.Board(8),
      UI = new Minesweeper.UI(board);

  UI.render();

  $('#board').on("click", function (event) {

    $('#board').empty();
    var pos = $(event.target).attr('id').split(",").map(function (int) { 
      return parseInt(int); 
    });

    board.clickTile(pos);
    UI.render();
    console.log(pos);
  });
});