var expect = require('chai').expect;

describe('GAME INSTANCE FUNCTIONS', function(){ // I could also mark this as pending by adding x - "xdescribe" or "xit"
  describe('checkGameStatus', function() {
    //it('should tell me when the game is over'); // by not adding a function, I've created a pending test
  var checkGameStatus = require('../game_logic/game_instance.js').checkGameStatus;
    it('should tell me when the game is over', function() {
      var players = [
        {
          ships: [
            {
              locations: [[0,0]],
              damage: [[0,0]]
            }
          ]
        }
      ];
      var actual = checkGameStatus(players);
      expect(actual).to.be.false;
    })
  });
});