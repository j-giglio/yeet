const readlineSync = require("readline-sync");

/*ITEMS*/

let oldHelmet = {
  name: "old helmet",
  type: "helmet",

};

let rustySword = {
  name: "rusty sword",
  type: "weapon",

};

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
  up: null,
  down: null,
}

/*THE PLAYER*/

let user = {
  name: "Ryan",
  location: start,
  inventory: {},
  level: 1,
  health: 50,
  maxHealth: 50,
  armor: 0,
  evasion: 0
}

/*FUNCTIONS*/

function startGame() {
  do {
  user.name = readlineSync.question("What is your name?");
  } while(!user.name);

  input();
}

function input() {
  let input = readlineSync.question("");

  if (input.startsWith("go") || input.startsWith("move") || input.startsWith("walk") || input.startsWith("run") || input.startsWith("climb")) {

    if (input.endsWith("north")) {
      user.location = (user.location.north) ? user.location.north;
      if (!user.location.north) {
        console.log("There is nothing to the north.");
      };
    } else if (input.endsWith("south")) {
      user.location = (user.location.south) ? user.location.south;
      if (!user.location.south) {
        console.log("There is nothing to the south.");
      };
    } else if (input.endsWith("east")) {
      user.location = (user.location.east) ? user.location.east;
      if (!user.location.east) {
        console.log("There is nothing to the east.");
      };
    } else if (input.endsWith("west")) {
      user.location = (user.location.west) ? user.location.west;
      if (!user.location.west) {
        console.log("There is nothing to the west.");
      };
    } else if (input.endsWith("up")) {
      user.location = (user.location.up) ? user.location.up;
      if (!user.location.up) {
        console.log("There is nothing upwards.");
      };
    } else if (input.endsWith("down")) {
      user.location = (user.location.down) ? user.location.down;
      if (!user.location.down) {
        console.log("There is nothing downwards.");
      };
    } else {
      console.log("Where are you going?");
    };
  } else if () {

  };
};





startGame();
