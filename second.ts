import { question } from "readline-sync";

function displayOption(array) {
  let i = 0
  while (i < 3) {
    console.log(i + 1 + '. ' + array[i])
    i = i + 1
  }
}

console.log('Choose your resolution')
const resOptions = [
  '1920 X 1080 : RM 300',
  '2560 X 1440 : RM 600',
  '3280 X 1680 : RM 900'
]
displayOption(resOptions)
let ansRes = question("Choose your Resolution option:\n")

console.log('Choose your Video card')
const vcOptions = [
  'intel : RM 300',
  'AMD : RM 600',
  'nVdia : RM 900'
]
displayOption(vcOptions)
let ansVc = question("Choose your Video Card option:\n")

console.log('Choose your Processor')
const processorOptions = [
  'i3 : RM 300',
  'i5 : RM 600',
  'i7 : RM 900'
]
displayOption(processorOptions)
let ansProcessor = question("Choose your Processor option:\n")

console.log('Choose your Hard Disk')
const hdOptions = [
  '128GB : RM 300',
  '256GB : RM 600',
  '512GB : RM 900'
]
displayOption(hdOptions)
let ansHd = question("Choose your Hard Disk option:\n")

console.log('Your Resolution option: ' + resOptions[ansRes])
console.log('Your Video Card  option: ' + vcOptions[ansVc])
console.log('Your Processor option: ' + processorOptions[ansProcessor])
console.log('Your Hard Disk option: ' + hdOptions[ansHd])