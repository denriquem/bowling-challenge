'use strict';
describe ('Frame', function() {

  var frame;

  beforeEach(function(){
    frame = new Frame
  });

  it('records the two scores for the frame', function() {
    expect(frame.inputScores(3,1)).toEqual([3,1])
  });

  it('sums scores to give total for the frame', function() {
    frame.inputScores(3,1);
    expect(frame.score()).toEqual(4)
  });

});
