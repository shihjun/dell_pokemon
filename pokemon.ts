const myPokemon = "Pika"
const opponent = "Magikarp"
const mySkill = "Lightning"
const oppSkill = "Shadow Ball"
let myHp = 100
let oppHP = 100
let myskillDmg = 45
let oppskillDmg = 30
let isMyturn = true

// 1. You have encounter your opponent Mr Mine.
console.log("You have encounter your opponent " + opponent)
console.log(opponent + " has " + oppHP + " HP")
// 2. You send in Gengar.
console.log("You send in " + myPokemon)
console.log(myPokemon + " has " + myHp + " HP")

// 3. You can choose one of Gengar's skills
while (myHp > 0 && oppHP > 0) {
  let attackerName = isMyturn ? myPokemon : opponent
  let defenderName = isMyturn ? opponent : myPokemon
  let attackerSkill = isMyturn ? mySkill : oppSkill

  //random number between 10-50
  const attackerDmg = Math.floor(Math.random() * 40 + 10)

  console.log("==========================")
  console.log(attackerName + " use " + attackerSkill)
  console.log(attackerSkill + " hits for " + attackerDmg)

  if (isMyturn) {
    oppHP = oppHP - attackerDmg
    console.log(defenderName + "'s health is reduce to " + oppHP)
  } else {
    myHp = myHp - attackerDmg
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