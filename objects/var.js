// Avoid using var!
var firstName = 'Justin'
// Mutable
firstName = 'Sage'

// It is re-declareable. OOF.
var firstName = 'Teresa'

console.log(firstName)

// Function-based scoped, no blocked scoped
if (10 === 10) {
  var firstName = 'WHODAFUQ'
}

console.log(firstName)

const setName = function () {
  var firstName = 'Sage' // this is inside of scope of this function... only function creates new scope for var.
}

let age
console.log(age) // undefined

var aged
console.log(aged) // undefined

// console.log(ager) // error
// let ager

agey = 10
console.log(agey) // 10 (declaration of variable gets hoisted to the top of scope, value does not.)
var agey
