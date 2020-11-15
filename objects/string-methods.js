let name = '   Justin Daining '

// Length property
console.log(name.length)

// Convert to uppercase
console.log(name.toUpperCase())

// Convert to lowercase
console.log(name.toLowerCase())

// Includes
let password = 'abc123booger420'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

// Challenge Area

// isValidPassword (string to validate)
// length is more than 8 - and doesn't contain the word password
let isValidPassword = function (password) {
  // if (password.length > 8 && !password.includes('password')) {
  //   return true
  // } else {
  //   return false
  // }
  return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('1234'))
console.log(isValidPassword('abc123!@#$%^&*'))
console.log(isValidPassword('abcpassword123'))
