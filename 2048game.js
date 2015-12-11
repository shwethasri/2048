var table = document.getElementById('2048table');
onload = function() {
    document.onkeydown = function(event) {
        if ((event.which || event.keycode) === 38) {
            up();// up key
        } else if ((event.which || event.keycode) === 40) {
                    down();//down key
          } else if ((event.which || event.keycode) === 37) {
                    left();//left key
            } else if ((event.which || event.keycode) === 39) {
                        right();//right key
              }
    };
};
//up key
var up = function() {
    var rows = table.rows.length;
    var cells = table.rows[0].cells.length;
    for (var i = (rows-1); i >= 0; i--) {
        for(var j = 0; j < cells; j++) {
            if (table.rows[i].cells[j].classList.contains("color")) {
                table.rows[i].cells[j].classList.remove("color");
                if ( table.rows[i-1].cells[j].innerHTML === "") {
                    table.rows[i-1].cells[j].innerHTML = table.rows[i].cells[j].innerHTML;
                    table.rows[i].cells[j].innerHTML = "";
                    table.rows[i-1].cells[j].classList.add('color');
                }
            }
            //table.rows[i].cells[j].classList.add("color");
        }
    }
};
// down key
var down = function() {
  var rows = table.rows.length;
  var cells = table.rows[0].cells.length;
  for (var i = 0; i < rows; i++) {
      for(var j = 0; j < cells; j++) {
          if (table.rows[i].cells[j].classList.contains("color")) {
              table.rows[i].cells[j].classList.remove("color");
              if ( table.rows[i+1].cells[j].innerHTML === "") {
                  table.rows[i+1].cells[j].innerHTML = table.rows[i].cells[j].innerHTML;
                  table.rows[i].cells[j].innerHTML = "";
                  table.rows[i+1].cells[j].classList.add('color');
              }
          }
          //table.rows[i].cells[j].classList.add("color");
      }
  }
};
// left key
var left = function() {
  var rows = table.rows.length;
  var cells = table.rows[0].cells.length;
  for (var i = 0; i < rows; i++) {
      for(var j = (cells-1); j >= 0; j--) {
          if (table.rows[i].cells[j].classList.contains("color")) {
              table.rows[i].cells[j].classList.remove("color");
              if ( table.rows[i].cells[j-1].innerHTML === "") {
                  table.rows[i].cells[j-1].innerHTML = table.rows[i].cells[j].innerHTML;
                  table.rows[i].cells[j].innerHTML = "";
                  table.rows[i].cells[j-1].classList.add('color');
              }
          }
          //table.rows[i].cells[j-1].classList.remove("color");
          //table.rows[i].cells[j].classList.add("color");
      }
  }
};
//right key
var right = function() {
  var rows = table.rows.length;
  var cells = table.rows[0].cells.length;
  for (var i = 0; i < rows; i++) {
      for(var j = 0; j < cells; j++) {
          if (table.rows[i].cells[j].classList.contains("color")) {
              table.rows[i].cells[j].classList.remove("color");
              if ( table.rows[i].cells[j+1].innerHTML === "") {
                  table.rows[i].cells[j+1].innerHTML = table.rows[i].cells[j].innerHTML;
                  table.rows[i].cells[j].innerHTML = "";
                  table.rows[i].cells[j+1].classList.add('color');
              }
          }
          //table.rows[i].cells[j-1].classList.remove("color");
          //table.rows[i].cells[j].classList.add("color");
      }
  }
};
