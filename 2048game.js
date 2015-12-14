var table = document.getElementById('2048table');
var score = 0;
onload = function() {
    document.onkeydown = function(event) {
        if ((event.which || event.keycode) === 38) {
            up();// up key
            generateRandomNumber();
        } else if ((event.which || event.keycode) === 40) {
                    down();//down key
                    generateRandomNumber();
          } else if ((event.which || event.keycode) === 37) {
                    left();//left key
                    generateRandomNumber();
            } else if ((event.which || event.keycode) === 39) {
                        right();//right key
                        generateRandomNumber();
              }
    };
    generateFirstNumbers();
};
//up key
var up = function() {
    var rows = table.rows.length;
    var cells = table.rows[0].cells.length;
    for (var i = rows; i > 0; i--) {
        var k = i - 1;
        for(var j = 0; j < cells; j++) {
            if ((table.rows[k].cells[j].style.backgroundColor === "") && (k !== 0)) {
                //table.rows[i].cells[j].style.backgroundColor = "";
                if (table.rows[k-1].cells[j].innerHTML === "") {
                    if (table.rows[k].cells[j].innerHTML !== "") {
                        table.rows[k-1].cells[j].innerHTML = table.rows[k].cells[j].innerHTML;
                        table.rows[k].cells[j].innerHTML = "";
                    } else if ((k !== 0) && (k < 3)) {
                        table.rows[k].cells[j].innerHTML = table.rows[k+1].cells[j].innerHTML;
                        table.rows[k+1].cells[j].innerHTML = "";
                      }
                    //table.rows[i-1].cells[j].style.backgroundColor = 'white';
                } else if (table.rows[k-1].cells[j].innerHTML === table.rows[k].cells[j].innerHTML) {
                            table.rows[k-1].cells[j].innerHTML = parseInt(table.rows[k-1].cells[j].innerHTML) + parseInt(table.rows[k].cells[j].innerHTML);
                            table.rows[k].cells[j].innerHTML = "";
                            score += parseInt(table.rows[k-1].cells[j].innerHTML);
                            document.getElementById('scorelbl').innerHTML = "SCORE  <br>" + score;
                            //table.rows[i-1].cells[j].style.backgroundColor = 'white';
                  } /* else {
                        if ((table.rows[k-2].cells[j].innerHTML === "") && ((k === 3) ||(k === 2))) {
                            table.rows[k-2].cells[j].innerHTML = table.rows[k-1].cells[j].innerHTML;
                            table.rows[k-1].cells[j].innerHTML = table.rows[k].cells[j].innerHTML;
                            table.rows[k].cells[j].innerHTML = "";
                            table.rows[k-2].cells[j].style.fontSize = '50px';
                        }
                  }*/
                  table.rows[k-1].cells[j].style.fontSize = '50px';
            }
        }
    }
};
// down key
var down = function() {
  var rows = table.rows.length;
  var cells = table.rows[0].cells.length;
  for (var i = 0; i < rows; i++) {
      var k = i;
      for(var j = 0; j < cells; j++) {
          if ((table.rows[k].cells[j].style.backgroundColor === "") && (k < 3)) {
              //table.rows[i].cells[j].style.backgroundColor = "";
              if (table.rows[k+1].cells[j].innerHTML === "") {
                  if (table.rows[k].cells[j].innerHTML !== "") {
                      table.rows[k+1].cells[j].innerHTML = table.rows[k].cells[j].innerHTML;
                      table.rows[k].cells[j].innerHTML = "";
                  } else if ((k !== 0) && (k < 3)) {
                      table.rows[k].cells[j].innerHTML = table.rows[k-1].cells[j].innerHTML;
                      table.rows[k-1].cells[j].innerHTML = "";
                    }
                //  table.rows[i+1].cells[j].style.backgroundColor = 'white';
              } else if (table.rows[k+1].cells[j].innerHTML === table.rows[k].cells[j].innerHTML) {
                          table.rows[k+1].cells[j].innerHTML = parseInt(table.rows[k+1].cells[j].innerHTML) + parseInt(table.rows[k].cells[j].innerHTML);
                          table.rows[k].cells[j].innerHTML = "";
                          score += parseInt(table.rows[k+1].cells[j].innerHTML);
                          document.getElementById('scorelbl').innerHTML = "SCORE <br>" + score;
                          //table.rows[i+1].cells[j].style.backgroundColor = 'white';
                } /* else {
                      if ((table.rows[k+2].cells[j].innerHTML === "") && (k < 3)) {
                          table.rows[k+2].cells[j].innerHTML = table.rows[k+1].cells[j].innerHTML;
                          table.rows[k+1].cells[j].innerHTML = table.rows[k].cells[j].innerHTML;
                          table.rows[k].cells[j].innerHTML = "";
                          table.rows[k+2].cells[j].style.fontSize = '50px';
                      }
                }*/
                table.rows[k+1].cells[j].style.fontSize = '50px';
          }
      }
  }
};
// left key
var left = function() {
  var rows = table.rows.length;
  var cells = table.rows[0].cells.length;
  for (var i = 0; i < rows; i++) {
      var k = i;
      for(var j = (cells - 1); j > 0; j--) {
          if (table.rows[k].cells[j-1].style.backgroundColor === "") {
              //table.rows[i].cells[j].style.backgroundColor = "";
              if ((table.rows[k].cells[j-1].innerHTML === "")) {
                  if (table.rows[k].cells[j].innerHTML !== "") {
                      table.rows[k].cells[j-1].innerHTML = table.rows[k].cells[j].innerHTML;
                      table.rows[k].cells[j].innerHTML = "";
                  } else if ((j !== 0) && (j < 3)) {
                      table.rows[k].cells[j].innerHTML = table.rows[k].cells[j+1].innerHTML;
                      table.rows[k].cells[j+1].innerHTML = "";
                    }

                  //table.rows[i].cells[j-1].style.backgroundColor = 'white';
              } else if (table.rows[k].cells[j-1].innerHTML === table.rows[k].cells[j].innerHTML) {
                          table.rows[k].cells[j-1].innerHTML = parseInt(table.rows[k].cells[j-1].innerHTML) + parseInt(table.rows[k].cells[j].innerHTML);
                          table.rows[k].cells[j].innerHTML = "";
                          score += parseInt(table.rows[k].cells[j-1].innerHTML);
                          document.getElementById('scorelbl').innerHTML = "SCORE <br> " + score;
                          //table.rows[i].cells[j-1].style.backgroundColor = 'white';
                }
                table.rows[k].cells[j-1].style.fontSize = "50px";
          }
      }
  }
};
//right key
var right = function() {
  var rows = table.rows.length;
  var cells = table.rows[0].cells.length;
  for (var i = 0; i < rows; i++) {
      var k = i;
      for(var j = 0; j < (cells-1); j++) {
          if (table.rows[k].cells[j+1].style.backgroundColor === "") {
              //table.rows[i].cells[j].style.backgroundColor = "";
              if ((table.rows[k].cells[j+1].innerHTML === "")) {
                  if (table.rows[k].cells[j].innerHTML !== "") {
                      table.rows[k].cells[j+1].innerHTML = table.rows[k].cells[j].innerHTML;
                      table.rows[k].cells[j].innerHTML = "";
                  } else if ((j !== 0) && (j < 3)) {
                      table.rows[k].cells[j].innerHTML = table.rows[k].cells[j-1].innerHTML;
                      table.rows[k].cells[j-1].innerHTML = "";
                    }
                  //table.rows[i].cells[j+1].style.backgroundColor = 'white';
              } else if (table.rows[k].cells[j+1].innerHTML === table.rows[k].cells[j].innerHTML) {
                          table.rows[k].cells[j+1].innerHTML = parseInt(table.rows[k].cells[j+1].innerHTML) + parseInt(table.rows[k].cells[j].innerHTML);
                          table.rows[k].cells[j].innerHTML = "";
                          score += parseInt(table.rows[k].cells[j+1].innerHTML);
                          document.getElementById('scorelbl').innerHTML = 'SCORE <br>' + score;
                          //table.rows[i].cells[j-1].style.backgroundColor = 'white';
                }
              table.rows[k].cells[j+1].style.fontSize = '50px';
          }
      }
  }
};
// generating random numbers 2 and 4
var generateRandomNumber = function() {
    var randomNum = [2, 4];
    var minValue = 0;
    var maxValue = 1;
    var range = maxValue - minValue + 1;
    var randomNumber = randomNum[Math.floor((Math.random() * range) + minValue)];
    var rows = table.rows.length;
    var cellMinValue = 1;
    var cellMaxValue = 16;
    score = 0;
    document.getElementById('scorelbl').innerHTML = 'SCORE <br>' + score;
    /*for (var j = 0; j < rows; j++) {
        cellMaxValue += table.rows[j].cells.length;
    }*/
    var cellRange = cellMaxValue - cellMinValue + 1;
    var cell = Math.floor((Math.random() * cellRange) + cellMinValue);
    var row = Math.ceil(cell % rows);
    if (table.rows[row].cells[row].innerHTML === "") {
        table.rows[row].cells[row].innerHTML = randomNumber;
        table.rows[row].cells[row].style.fontSize = '50px';
        /*if (randomNumber === 2) {
            table.rows[row].cells[row].style.backgroundColor = 'white';

        }
        else {
            table.rows[row].cells[row].style.backgroundColor = '#FAF0E6';

        }*/
    } else {
        generateRandomNumber();
    }
};
// generating first 2 numbers in puzzle
 var generateFirstNumbers = function() {
    var randomNum = [2, 4];
    var minValue = 0;
    var maxValue = 1;
    var range = maxValue - minValue + 1;
    var rows = table.rows.length;
    var cellMinValue = 1;
    var cellMaxValue = 16;
    /*for (var j = 0; j < rows; j++) {
        cellMaxValue += table.rows[j].cells.length;
    }*/
    var cellRange = cellMaxValue - cellMinValue + 1;
    for (var i = 0; i < 2; i++) {
        var cell = Math.floor((Math.random() * cellRange) + cellMinValue);
        var row = Math.ceil(cell % rows);
        var randomNumber = randomNum[Math.floor((Math.random() * range) + minValue)];
        if (table.rows[row].cells[row].innerHTML === "") {
            table.rows[row].cells[row].innerHTML = randomNumber;
            table.rows[row].cells[row].style.fontSize = '50px';
            /*if (randomNumber === 2) {
                table.rows[row].cells[row].style.backgroundColor = 'white';

            }
            else {
                table.rows[row].cells[row].style.backgroundColor = '#FAF0E6';

            }*/
        } else {
            generateRandomNumber();
        }
    }
};
//clearing table
//var clear =
document.getElementById('clear').onclick = function() {
    var rows = table.rows.length;
    for (var i = 0; i < rows; i++) {
      var cells = table.rows[i].cells.length;
      for (var j = 0; j < cells; j++) {
          table.rows[i].cells[j].innerHTML = "";
      }
    }
    generateFirstNumbers();

};
//generating random colors
var generateRandomColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
