function checkForShip(player, coordinates) {
  var shipPresent, ship;

  for(var i = 0; i < player.ships.length; i++){
    ship = player.ships[i]; // current ship

    shipPresent = ship.locations.filter(function (actualCoordinate) {
      return(actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]); // filtering the current ship's location array for the given coordinates
    })[0];
    // if during the loop a coordinate passes as true, then return it immediately
    if(shipPresent) {
      return ship;
    }
  }
  // if no ship is found at any of the coordinates, then true will not have been returned - return false.
  return false;
}

function damageShip(ship, coordinates) {
  ship.damage.push(coordinates);
}

function fire(player, coordinates){
  var ship = checkForShip(player,coordinates);

  if(ship) {
    damageShip(ship, coordinates);
  }
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fire = fire;