/*OBJECTS*/

let items = {
  oldHelmet: {
    type: "helmet"
    
  },
  rustySword: {
    type: "weapon"
  },
}

let rooms = {
  start: {
    monsters: null,
    availableItems: {
      items.oldHelmet,
      items.rustySword
    },
    north: rooms.second,
    south: null,
    east: null,
    west: null,
  },
  second: {
    //figure out later
  },
}

let player = {
  name: "Ryan",
  location: rooms.start,
  inventory: {},
  stats: {
    level: 1,
    health: 50,
    maxHealth: 50,
    armor: 0,
    evasion: 0
  }
}
