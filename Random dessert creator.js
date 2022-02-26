//Random dessert creator

//number creator
function generateRandomNumber(num) {
    // Generates number from 0 - 1
    return Math.floor(Math.random() * num)
  }

//arrays of combinations
const dessertArrays = {
base:       ['scone', 'biscuit', 'meringue', 'oats', 'cookies', 'cream-cheese', 'sorbet', 'wafer', 'sponge', 'custard'],
filling:	['toffee', 'mallow', 'mouse', 'yogurt', 'pancakes', 'ganache', 'cream', 'pastry', 'ice-cream', 'curd', 'frosting'],
toppings:	['cinnamon', 'strawberry', 'lemon', 'raspberry', 'chocolate', 'honey', 'rum', 'raison', 'sultana', 'peach']
}

//random Combination
const randomCombination = []

//iterating arrays for object
for (finish in dessertArrays) {
    let j = generateRandomNumber(dessertArrays[finish].length)
    switch(finish) {
        case 'base':
            randomCombination.push(`${dessertArrays[finish][j]}`)
            break;
        case 'filling':
            randomCombination.push(` and ${dessertArrays[finish][j]}`)
            break;
        case 'toppings':
            randomCombination.push(` with ${dessertArrays[finish][j]}`)
            break;
        default:
            randomCombination.push('There is a problem with the dessert creator')
    }
}
//function to create output
function dessertCreator(create){
let entire = randomCombination.join()
console.log(entire)
}
//call
dessertCreator()