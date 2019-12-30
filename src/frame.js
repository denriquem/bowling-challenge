'use strict';

function Frame(){
  this._frame = []
}

Frame.prototype.inputScores = function (roll1, roll2) {
  this._frame.push(roll1, roll2);
  return this._frame;
}

Frame.prototype.score = function () {
  var arr = this._frame;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
