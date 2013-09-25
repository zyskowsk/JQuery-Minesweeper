(function (root) {
  var Minesweeper = root.Minesweeper = (root.Minesweeper || {});

  var Utilities = Minesweeper.Utilities = {};

  Utilities.each = function (array, callback) {
    var len = array.length;

    for(var i = 0; i < len; i++){
      callback(array[i]);
    }

    return array;
  }

  
})(this);