const readlineSync = require("readline-sync");

/*ITEMS*/

let oldHelmet = {
  name: "old helmet",
  type: "helmet",

},

let rustySword = {
  name: "rusty sword",
  type: "weapon",

},

/*MONSTERS*/

let demon = {

}

/*ROOMS*/

let start = {
  description: "You are in a room with a table in it. On the table is an old, beat up helmet and a rusty sword. A door leads to the north.",
  monsters: null,
  availableItems: [
    oldHelmet,
    rustySword,
  ],
  north: second,
  south: null,
  east: null,
  west: null,
  }

let second = {
  description: "You are in the second room.",
  monsters: null,
  availableItems: [null],
  north: null,
  south: start,
  east: null,
  west: null,
}

/*THE PLAYER*/

let user = {
  name: "Ryan",
  location: rooms.start,
  inventory: {},
  level: 1,
  health: 50,
  maxHealth: 50,
  armor: 0,
  evasion: 0
}

/*FUNCTIONS*/

function startgame() {
  user.name = readlineSync.question("What is your name?")
  parse()
}

function parse() {
  let input = (readlineSync.question("")

  if (input.startsWith("go") || input.startsWith("move") || input.startsWith("walk") || input.startsWith("run)) {
    if
  }
}
