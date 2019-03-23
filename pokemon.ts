import { question } from "readline-sync";

const myPokemon = "Pika"
const opponent = "Magikarp"
//const mySkill = "Lightning"
//const oppSkill = "Shadow Ball"
let myHp = 100
let oppHP = 100
//let myskillDmg = 45
//let oppskillDmg = 30
let isMyturn = true

// 1. You have encounter your opponent Mr Mine.
console.log("You have encounter your opponent " + opponent)
console.log(opponent + " has " + oppHP + " HP")
// 2. You send in Gengar.
console.log("You send in " + myPokemon)
console.log(myPokemon + " has " + myHp + " HP")

function displayOption(array) {
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


// 3. You can choose one of Gengar's skills
while (myHp > 0 && oppHP > 0) {
  let attackerName = isMyturn ? myPokemon : opponent
  let defenderName = isMyturn ? opponent : myPokemon
  //let attackerSkill = isMyturn ? mySkill : oppSkill

  //random number between 10-50
  //const attackerDmg = Math.floor(Math.random() * 40 + 10)



  console.log("==========================")
  console.log("It's " + attackerName + "'s turn!")
  displayOption(movesOptions)
  let ansMove = parseInt(question("What move " + attackerName + " want to use?\n"))
  ansMove = ansMove - 1
  console.log(attackerName + " use " + movesOptions[ansMove].name)
  console.log(movesOptions[ansMove].name + " hits for " + movesOptions[ansMove].damage)

  if (isMyturn) {
    oppHP = oppHP - movesOptions[ansMove].damage
    console.log(defenderName + "'s health is reduce to " + oppHP)
  } else {
    myHp = myHp - movesOptions[ansMove].damage
    console.log(defenderName + "'s health is reduce to " + myHp)
  }
  isMyturn = !isMyturn
}

if (oppHP <= 0) {
  console.log(opponent + " get Critical Hit.")
  console.log(opponent + " fainted because health reduced to " + oppHP)
  console.log("Game Over")
} else if (myHp <= 0) {
  console.log(myPokemon + " get Critical Hit.")
  console.log(myPokemon + " fainted because health reduced to " + oppHP)
  console.log("Game Over")
}