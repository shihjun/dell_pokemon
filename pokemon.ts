import { question } from "readline-sync";

let isMyturn = true

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
    name: 'Pikachu',
    hp: 150,
    atk: 20,
    def: 20,
  },
  {
    name: 'Magikarp',
    hp: 100,
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
  while (i < 4) {
    console.log(i + 1 + '. ' + array[i].name + " with " + array[i].type + " type.")
    i = i + 1
  }
}

const movesOptions = [
  {
    name: 'Thunder Shock',
    damage: 50,
    type: 'Lightning',
  },
  {
    name: 'Tackle',
    damage: 30,
    type: 'Fighting',
  },
  {
    name: 'Reflect',
    damage: 20,
    type: 'Phychic',
  },
  {
    name: 'Body Slam',
    damage: 10,
    type: 'Normal',
  },
]


//3. You can choose one of pokemon's skills
while (pokemonOptions[myPokemon].hp > 0 && pokemonOptions[oppPokemon].hp > 0) {
  let attackerName = isMyturn ? pokemonOptions[myPokemon].name : pokemonOptions[oppPokemon].name
  let defenderName = isMyturn ? pokemonOptions[oppPokemon].name : pokemonOptions[myPokemon].name
  //let attackerSkill = isMyturn ? mySkill : oppSkill

  //   //random number between 10-50
  //   //const attackerDmg = Math.floor(Math.random() * 40 + 10)

  console.log("==========================")
  console.log("It's " + attackerName + "'s turn!")
  console.log("Available move:")
  displaymoveOption(movesOptions)
  let ansMove = parseInt(question("What move " + attackerName + " want to use?\n"))
  ansMove = ansMove - 1
  console.log(attackerName + " use " + movesOptions[ansMove].name)
  console.log(movesOptions[ansMove].name + " hits for " + movesOptions[ansMove].damage)

  if (isMyturn) {
    pokemonOptions[oppPokemon].hp = pokemonOptions[oppPokemon].hp - (movesOptions[ansMove].damage + pokemonOptions[myPokemon].atk - pokemonOptions[oppPokemon].def)
    console.log(defenderName + "'s health is reduce to " + pokemonOptions[oppPokemon].hp)
  } else {
    pokemonOptions[myPokemon].hp = pokemonOptions[myPokemon].hp - (movesOptions[ansMove].damage + pokemonOptions[oppPokemon].atk - pokemonOptions[myPokemon].def)
    console.log(defenderName + "'s health is reduce to " + pokemonOptions[myPokemon].hp)
  }
  isMyturn = !isMyturn
}

if (pokemonOptions[oppPokemon].hp <= 0) {
  console.log(pokemonOptions[oppPokemon].name + " get Critical Hit.")
  console.log(pokemonOptions[oppPokemon].name + " fainted because health reduced to " + pokemonOptions[oppPokemon].hp)
  console.log("Game Over")
} else if (pokemonOptions[myPokemon].hp <= 0) {
  console.log(pokemonOptions[myPokemon].name + " get Critical Hit.")
  console.log(pokemonOptions[myPokemon].name + " fainted because health reduced to " + pokemonOptions[myPokemon].hp)
  console.log("Game Over")
}