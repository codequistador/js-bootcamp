// === equality operator
// !== not equal operator
// < less than operator
// > greater than operator
// <= less than or equal operator
// >= greater than or equal operator

let temp = 301

if (temp <= 32) {
  console.log('So cold, bud.')
} else if (temp >= 110) {
  console.log('A real scorcher, bud.')
} else {
  console.log('Go outside, bud.')
}

// Challenge Zone

let age = 77
// if 7 or under - print message about child pricing
age <= 7 && console.log('$5 bucks is all')
// if 65 or older - print message about senior pricing
age >= 65 && console.log('You old. It is free for you')
