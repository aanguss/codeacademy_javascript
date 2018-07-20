let team = {
  _players: [
    {firstName: "Pablo",
    lastName: "Sanchez",
    age: 11},
    {firstName: "Rodney",
    lastName: "Cordova",
    age: 13},
    {firstName: "Tom",
    lastName: "Jones",
    age: 13},
  ],
  _games: [
    {opponent: "Broncos",
    teamPoints: 42,
    opponentPoints: 27},
    {opponent: "Raiders",
    teamPoints: 11,
    opponentPoints: 13},
    {opponent: "Chargers",
    teamPoints: 22,
    opponentPoints: 10},
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this._games.push(game);
  },
};

//console.log(team.players);
//console.log(team.games);

console.log(team.players);
team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);
console.log(team.players);

console.log(team.games);
team.addGame('Suns', 48, 42);
team.addGame('Jazz', 27, 33);
team.addGame('Lakers', 32, 17);
console.log(team.games);
