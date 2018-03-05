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

  describe('takeTurn', function() {
    var takeTurn = require('../game_logic/game_instance').takeTurn;
    var guess, player;

    beforeEach(function(){
      // guess is a mock function - we don't know how guess will be programmed yet, but we know it has to return a valid location.
      // we are not testing guess in this test, so we just need valid coordinates
      guess = function() { return [0,0] ;};
      player = {
        ships: [
          {
            locations: [[0,0]],
            damage: [[0,0]]
          }
        ]
      }
    });

    it('should return false if the game ends', function() {
      var actual = takeTurn(player, guess)
      expect(actual).to.be.false;
    });
  });

  function saveGame(callback) {
    setTimeout(function(){
      callback();
    }, 1000);
  }

  describe('saveGame', function(){
    it('should update save status', function(done) { // by passing a callback to the test function, we tell mocha that we want this test to run asynchronously.
      var status = 'game not saved...';
      saveGame(function(){
        status = 'game saved!';
        expect(status).to.equal('game saved!');
        done();
      });

    });
  });


});