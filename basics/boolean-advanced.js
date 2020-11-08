let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked) {
  console.log('The account is locked')
} else if (userRole === 'admin') {
  console.log('Hello Admin.')
} else {
  console.log('Welcome, bud.')
}

// Challenge

let temp = 45

// It's freezing
// It's hot outside
// It's pretty nice outside
if (temp <= 32) {
  console.log('It is friggin freezing')
} else if (temp >= 110) {
  console.log('It is a real scorcher, bud')
} else {
  console.log('it is pretty damn nice out')
}
