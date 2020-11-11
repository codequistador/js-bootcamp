// Undefined for variable
let name

name = 'Justin'

if (name === undefined) {
  console.log('Please provide a name')
} else {
  console.log('Hello ' + name)
}

// Undefined for function arguments
let square = function (num) {
  console.log(num)
}

// Undefined for return default value
let result = square()
console.log(result)

// Null as assigned value (set by developer)
let age = 27
age = null
console.log(age)
