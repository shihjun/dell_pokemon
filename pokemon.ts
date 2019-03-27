import { question } from "readline-sync";

let isMyturn = true
let myPoisonEffect = 0
let oppPoisonEffect = 0

//Pokemon types
function displaypokemonOption(array) {
  let i = 0
  while (i < 3) {
    console.log(i + 1 + '.' + array[i].name + "\n  HP: " + array[i].hp + "\n  Atk: " + array[i].atk + "\n  Def: " + array[i].def + "\n  Type: " + array[i].type)
    i = i + 1
  }
}

const pokemonOptions = [
  {
    name: 'Magikarp',
    hp: 200,
    atk: 20,
    def: 20,
    type: 'Water'
  },
  {
    name: 'Pikachu',
    hp: 250,
    atk: 25,
    def: 25,
    type: 'Grass'
  },
  {
    name: 'Charmander',
    hp: 300,
    atk: 25,
    def: 25,
    type: 'Fire'
  }
]

// 1. You have encounter your opponent.
console.log("You have encounter your opponent.")
console.log("Pokemon options:")
displaypokemonOption(pokemonOptions)
let oppPokemon = parseInt(question("What Pokemon your opponent want to summon?\n"))
oppPokemon = oppPokemon - 1
console.log("Your opponent summon " + pokemonOptions[oppPokemon].name)
// console.log(pokemonOptions[oppPokemon].name + " stats:")
// console.log("HP: " + pokemonOptions[oppPokemon].hp + "\nATK: " + pokemonOptions[oppPokemon].atk + "\nDEF: " + pokemonOptions[oppPokemon].def)

// 2. You send in your pokemon.
console.log("==========================")
console.log("Pokemon options:")
displaypokemonOption(pokemonOptions)
let myPokemon = parseInt(question("What Pokemon you want to summon?\n"))
myPokemon = myPokemon - 1
console.log("You summon " + pokemonOptions[myPokemon].name)
// console.log(pokemonOptions[myPokemon].name + " stats:")
// console.log("HP: " + pokemonOptions[myPokemon].hp + "\nATK: " + pokemonOptions[myPokemon].atk + "\nDEF: " + pokemonOptions[myPokemon].def)


//move types
function displaymoveOption(array) {
  let i = 0
  while (i < 6) {
    console.log(i + 1 + '.' + array[i].name + "\n  Damage: " + array[i].damage + "\n  Type: " + array[i].type)
    i = i + 1
  }
}

const movesOptions = [
  {
    name: 'Tail Whip',
    damage: 10,
    type: 'Deduct atk/def',
  },
  {
    name: 'Tackle',
    damage: 40,
    type: 'Fire',
  },
  {
    name: 'Hyper Beam',
    damage: 10,
    type: 'Grass',
  },
  {
    name: 'Thunder Shock',
    damage: 0,
    type: 'Poison',
  },
  {
    name: 'Reflect',
    damage: 0,
    type: 'Sleep',
  },
  {
    name: 'Body Slam',
    damage: 0,
    type: 'Paralysis',
  },
]


//3. You can choose one of pokemon's skills
while (pokemonOptions[myPokemon].hp > 0 && pokemonOptions[oppPokemon].hp > 0) {
  let attackerName = isMyturn ? pokemonOptions[myPokemon].name : pokemonOptions[oppPokemon].name
  let defenderName = isMyturn ? pokemonOptions[oppPokemon].name : pokemonOptions[myPokemon].name
  let getDmg
  
  //random number between 10-50
  //const attackerDmg = Math.floor(Math.random() * 40 + 10)

  console.log("==========================")
  console.log("It's " + attackerName + "'s turn!")
  console.log("Available move:")
  displaymoveOption(movesOptions)
  let ansMove = parseInt(question("What move " + attackerName + " want to use?\n"))
  ansMove = ansMove - 1
  console.log(attackerName + " use " + movesOptions[ansMove].name + " with " + movesOptions[ansMove].type + " effect.")


  //status effect
  if (movesOptions[ansMove].type === 'Deduct atk/def') {
    if (isMyturn) {
      pokemonOptions[oppPokemon].atk -= movesOptions[ansMove].damage
      pokemonOptions[oppPokemon].def -= movesOptions[ansMove].damage
      console.log(defenderName + "'s attack and defence are reduce to " + pokemonOptions[oppPokemon].atk + (" Atk, ") + pokemonOptions[oppPokemon].def + (" Def."))
    } else {
      pokemonOptions[myPokemon].atk = pokemonOptions[myPokemon].atk - movesOptions[ansMove].damage
      pokemonOptions[myPokemon].def = pokemonOptions[myPokemon].def - movesOptions[ansMove].damage
      console.log(pokemonOptions[myPokemon].name + "'s attack and defence are reduce to " + pokemonOptions[myPokemon].atk + (" Atk, ") + pokemonOptions[myPokemon].def + (" Def."))
    }

  }
  //Poison will damage the target for 10% per turn at the start of every turn for 5 turns
  else if (movesOptions[ansMove].type === 'Poison') {
    if (isMyturn) {
      oppPoisonEffect = 5
    } else {
      myPoisonEffect = 5
    }
    console.log(defenderName + " get poisoned")
  }
  //Sleep will disable the target from attacking, at the start of every turn
  else if (movesOptions[ansMove].type === 'Sleep') {
    isMyturn = !isMyturn
    console.log(defenderName + " is sleep, will skip 1 attacking turn.")

  }
  //Paralysis effect
  else if (movesOptions[ansMove].type === 'Paralysis') {
    const paralysisEffect = Math.floor(Math.random() * 2)
    if (paralysisEffect == 0) {
      console.log(defenderName + " did not get Paralysis")
    } else {
      isMyturn = !isMyturn
      console.log(defenderName + "get Paralysis, will skip 1 attacking turn.")
    }

  }
  //fire move is effective against grass pokemon
  else if ((movesOptions[ansMove].type === 'Fire') && ((isMyturn == false && pokemonOptions[myPokemon].type === 'Grass') || (isMyturn == true && pokemonOptions[oppPokemon].type === 'Grass'))) {
    getDmg = movesOptions[ansMove].damage * 2
    console.log(defenderName + " get double damage.")
    countDmg(getDmg)
  }
  //Water pokemon is resistant to grass move
  else if ((movesOptions[ansMove].type === 'Grass') && ((isMyturn == false && pokemonOptions[myPokemon].type === 'Water') || (isMyturn == true && pokemonOptions[oppPokemon].type === 'Water'))) {
    getDmg = movesOptions[ansMove].damage / 2
    console.log(defenderName + " get halve damage.")
    countDmg(getDmg)
  }
  //normal move
  else {
    getDmg = movesOptions[ansMove].damage
    countDmg(getDmg)
  }

  //Poison effect:
  if (myPoisonEffect > 0 && myPoisonEffect <= 5) {
    pokemonOptions[myPokemon].hp = pokemonOptions[myPokemon].hp - (pokemonOptions[myPokemon].hp * 0.1)
    console.log(pokemonOptions[myPokemon].name + " poisoned: " + myPoisonEffect + (" turns"))
    console.log(pokemonOptions[myPokemon].name + "'s health is reduce to " + pokemonOptions[myPokemon].hp)
    myPoisonEffect = myPoisonEffect - 1
  }
  else {
    myPoisonEffect = myPoisonEffect - 1
  }

  if (oppPoisonEffect > 0 && oppPoisonEffect <= 5) {
    pokemonOptions[oppPokemon].hp = pokemonOptions[oppPokemon].hp - (pokemonOptions[oppPokemon].hp * 0.1)
    console.log(pokemonOptions[oppPokemon].name + " poisoned: " + oppPoisonEffect + (" turns"))
    console.log(pokemonOptions[oppPokemon].name + "'s health is reduce to " + pokemonOptions[oppPokemon].hp)
    oppPoisonEffect = oppPoisonEffect - 1
  } else {
    oppPoisonEffect = oppPoisonEffect - 1
  }

  isMyturn = !isMyturn
}

//count and display defender get how much damage
function countDmg(damage) {
  if (isMyturn) {
    if (pokemonOptions[myPokemon].atk > pokemonOptions[oppPokemon].def) {
      pokemonOptions[oppPokemon].hp -= damage + pokemonOptions[myPokemon].atk - pokemonOptions[oppPokemon].def
      console.log(pokemonOptions[oppPokemon].name + " get damage, HP is reduce to " + pokemonOptions[oppPokemon].hp)
    }
    else {
      pokemonOptions[oppPokemon].hp -= damage
      console.log(pokemonOptions[oppPokemon].name + " get damage, HP is reduce to " + pokemonOptions[oppPokemon].hp)
    }
  }
  else {
    if (pokemonOptions[oppPokemon].atk > pokemonOptions[myPokemon].def) {
      pokemonOptions[myPokemon].hp -= damage + pokemonOptions[oppPokemon].atk - pokemonOptions[myPokemon].def
      console.log(pokemonOptions[myPokemon].name + " get damage, HP is reduce to " + pokemonOptions[myPokemon].hp)
    }
    else {
      pokemonOptions[myPokemon].hp -= damage
      console.log(pokemonOptions[myPokemon].name + " get damage, HP is reduce to " + pokemonOptions[myPokemon].hp)
    }
  }
}

//game over message
if (pokemonOptions[oppPokemon].hp <= 0) {
  console.log(pokemonOptions[oppPokemon].name + " get Critical Hit.")
  console.log(pokemonOptions[oppPokemon].name + " fainted because health reduced to " + pokemonOptions[oppPokemon].hp)
  console.log("Game Over")
} else if (pokemonOptions[myPokemon].hp <= 0) {
  console.log(pokemonOptions[myPokemon].name + " get Critical Hit.")
  console.log(pokemonOptions[myPokemon].name + " fainted because health reduced to " + pokemonOptions[myPokemon].hp)
  console.log("Game Over")
}