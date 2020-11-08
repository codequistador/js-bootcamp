let temp = 0

if (temp >= 60 && temp <= 90) {
  console.log('damn it is nice out')
} else if (temp <= 0 || temp >= 120) {
  console.log('It is dangerous to go outside rn')
} else {
  console.log('I do not care what you do actually')
}

// Challenge Area

let isGuestOneVegan = false
let isGuestTwoVegan = true

// Are both vegan? Only vegan food.
// Is one vegan? Offer some vegan food.
// None are vegan? Offer full menu.
if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('we have a lovely vegan menu.')
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('here is our menu with a mix of vegan and non-vegan food.')
} else {
  console.log('here is our full menu. enjoy.')
}
