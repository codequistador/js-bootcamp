// Function - argument, code to run, return value

let greetUser = function () {
  console.log('Welcome User')
}

greetUser()

let square = function (number) {
  let result = number * number
  return result
}

let value = square(420)

console.log(value)

// Challenge Area

let convertFahrenheitToCelcius = function (fahrenheit) {
  let celcius = ((fahrenheit - 32) * 5) / 9
  return celcius
}

let one = convertFahrenheitToCelcius(32)
let two = convertFahrenheitToCelcius(100)
let three = convertFahrenheitToCelcius(-40)
let four = convertFahrenheitToCelcius(40)

console.log(one)
console.log(two)
console.log(three)
console.log(four)
