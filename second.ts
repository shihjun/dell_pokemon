import { question } from "readline-sync";

function displayOption(array) {
  let i = 0
  while (i < 3) {
    console.log(i + 1 + '. ' + array[i].label + array[i].price)
    i = i + 1
  }
}


console.log('Choose your resolution')
const resOptions = [
  {
    label: '1920 X 1080',
    price: 300,
  },
  {
    label: '2560 X 1440',
    price: 600,
  },
  {
    label: '3280 X 1680',
    price: 900,
  }
]
displayOption(resOptions)
let ansRes = question("Choose your Resolution option:\n")

console.log('Choose your Video card')
const vcOptions = [
  {
    label: 'intel',
    price: 300,
  },
  {
    label: 'AMD',
    price: 600,
  },
  {
    label: 'nVdia',
    price: 900,
  }
]
displayOption(vcOptions)
let ansVc = question("Choose your Video Card option:\n")

console.log('Choose your Processor')
const processorOptions = [
  {
    label: 'i3',
    price: 300
  },
  {
    label: 'i5',
    price: 600
  },
  {
    label: 'i7',
    price: 900
  }
]
displayOption(processorOptions)
let ansProcessor = question("Choose your Processor option:\n")

console.log('Choose your Hard Disk')
const hdOptions = [
  {
    label: '128GB',
    price: 300
  },
  {
    label: '256GB',
    price: 600
  },
  {
    label: '512GB',
    price: 900
  }
]
displayOption(hdOptions)
let ansHd = question("Choose your Hard Disk option:\n")

console.log('Your Resolution option: ' + resOptions[ansRes])
console.log('Your Video Card  option: ' + vcOptions[ansVc])
console.log('Your Processor option: ' + processorOptions[ansProcessor])
console.log('Your Hard Disk option: ' + hdOptions[ansHd])



