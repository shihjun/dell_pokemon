import { question } from "readline-sync";

let isMyturn = true
let myPoisonEffect = 0
let oppPoisonEffect = 0

//Pokemon types
function displaypokemonOption(array) {
  let i = 0
  while (i < 2) {
    console.log(i + 1 + '. ' + array[i].name + " with " + array[i].hp + " HP. Atk: " + array[i].atk + ", Def: " + array[i].def)
    i = i + 1
  }
}

const pokemonOptions = [
  {
    name: 'Magikarp',
    hp: 200,
    atk: 20,
    def: 20,
  },
  {
    name: 'Pikachu',
    hp: 200,
    atk: 25,
    def: 25,
  }
]

// 1. You have encounter your opponent.
console.log("You have encounter your opponent.")
console.log("Pokemon options:")
displaypokemonOption(pokemonOptions)
let oppPokemon = parseInt(question("What Pokemon your opponent want to use?\n"))
oppPokemon = oppPokemon - 1
console.log("Your opponent send in " + pokemonOptions[oppPokemon].name)
console.log(pokemonOptions[oppPokemon].name + " stats:")
console.log("HP: " + pokemonOptions[oppPokemon].hp + "\nATK: " + pokemonOptions[oppPokemon].atk + "\nDEF: " + pokemonOptions[oppPokemon].def)

// 2. You send in your pokemon.
console.log("==========================")
console.log("Pokemon options:")
displaypokemonOption(pokemonOptions)
let myPokemon = parseInt(question("What Pokemon you want to use?\n"))
myPokemon = myPokemon - 1
console.log("You send in " + pokemonOptions[myPokemon].name)
console.log(pokemonOptions[myPokemon].name + " stats:")
console.log("HP: " + pokemonOptions[myPokemon].hp + "\nATK: " + pokemonOptions[myPokemon].atk + "\nDEF: " + pokemonOptions[myPokemon].def)


//move types
function displaymoveOption(array) {
  let i = 0
  while (i < 5) {
    console.log(i + 1 + '. ' + array[i].name + " with " + array[i].type + " type does " + array[i].damage + " damages.")
    i = i + 1
  }
}

const movesOptions = [
  {
    name: 'Tackle',
    damage: 40,
    type: 'Normal',
  },
  {
    name: 'Tail Whip',
    damage: 10,
    type: 'Normal',
  },
  {
    name: 'Thunder Shock',
    damage: 30,
    type: 'Poison',
  },
  {
    name: 'Reflect',
    damage: 20,
    type: 'Sleep',
  },
  {
    name: 'Body Slam',
    damage: 10,
    type: 'Paralysis',
  },
]


//3. You can choose one of pokemon's skills
while (pokemonOptions[myPokemon].hp > 0 && pokemonOptions[oppPokemon].hp > 0) {
  let attackerName = isMyturn ? pokemonOptions[myPokemon].name : pokemonOptions[oppPokemon].name
  let defenderName = isMyturn ? pokemonOptions[oppPokemon].name : pokemonOptions[myPokemon].name

  //random number between 10-50
  //const attackerDmg = Math.floor(Math.random() * 40 + 10)

  console.log("==========================")
  console.log("It's " + attackerName + "'s turn!")
  console.log("Available move:")
  displaymoveOption(movesOptions)
  let ansMove = parseInt(question("What move " + attackerName + " want to use?\n"))
  ansMove = ansMove - 1
  console.log(attackerName + " use " + movesOptions[ansMove].name + " with " + movesOptions[ansMove].type + " effect.")
  //console.log(movesOptions[ansMove].name + " hits for " + movesOptions[ansMove].damage)


  //status effect
  if (movesOptions[ansMove].name === 'Tail Whip') {
    if (isMyturn) {
      pokemonOptions[oppPokemon].atk = pokemonOptions[oppPokemon].atk - movesOptions[ansMove].damage
      pokemonOptions[oppPokemon].def = pokemonOptions[oppPokemon].def - movesOptions[ansMove].damage
      console.log(pokemonOptions[oppPokemon].name + "'s attack and defence are reduce to " + pokemonOptions[oppPokemon].atk + (" Atk, ") + pokemonOptions[oppPokemon].def + (" Def."))
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
  else {
    //display pokemon's health
    if (isMyturn) {
      pokemonOptions[oppPokemon].hp = pokemonOptions[oppPokemon].hp - (movesOptions[ansMove].damage + pokemonOptions[myPokemon].atk - pokemonOptions[oppPokemon].def)
      console.log(pokemonOptions[oppPokemon].name + "'s health is reduce to " + pokemonOptions[oppPokemon].hp)
    } else {
      pokemonOptions[myPokemon].hp = pokemonOptions[myPokemon].hp - (movesOptions[ansMove].damage + pokemonOptions[oppPokemon].atk - pokemonOptions[myPokemon].def)
      console.log(pokemonOptions[myPokemon].name + "'s health is reduce to " + pokemonOptions[myPokemon].hp)
    }
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